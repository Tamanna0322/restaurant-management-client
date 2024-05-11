import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const updateUsersProfile = (name, photo) =>{
       
        return updateProfile(auth.currentUser, {
             displayName: name, 
             photoURL: photo
           })
 
     }


     const logout = () =>{
        setUser(null)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
           
                 setUser(user)
                 setLoading(false)
             
         });
         return () => unsubscribe();
     },[])


    const userInfo = {
        user,
        setUser,
        loading,
        createUser,
        updateUsersProfile,
        signInUser,
        googleLogin,
        logout


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