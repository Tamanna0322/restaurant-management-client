import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUsersProfile = (name, photo) =>{
       
        return updateProfile(auth.currentUser, {
             displayName: name, 
             photoURL: photo
           })
 
     }


    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        updateUsersProfile

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.object
}

export default AuthProvider;