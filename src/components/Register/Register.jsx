import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import register from '../../assets/images/register2.jpg';
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

  const {createUser, user, setUser, updateUsersProfile } = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    if(password.length < 6){
        setError('password must be atleast six characters')
        return
      }

      setError('')


    createUser(email, password)
    .then(result => {
         setUser(result.user)
         updateUsersProfile(name, photo)
         .then(() => {
            setUser({...user,displayName:name,photoURL:photo,email:email})
            navigate('/')
           toast.success("Registration complete")
       
         })
    })
    .catch(error =>{
      console.log(error)
    })
  }


  const [showPass, setShowPass] = useState(false);


    return (
        <div className="">
        <div className="hero min-h-screen p-3">
        <div className="flex items-center flex-col-reverse md:flex-row lg:justify-around md:justify-between w-full h-full ">
          
          <div className="card shrink-0 mb-6 lg:w-[60%] w-full max-w-sm shadow-2xl border border-orange-700 border-dashed bg-orange-50 ">
            <form onSubmit={handleRegister} className="card-body w-full">
              <div className='text-center'>
                <p className='text-3xl font-bold text-orange-700 mb-2'>Register Now</p>
              </div>
              <div className='border-t border-orange-700 border-dotted'>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-700 font-semibold">Full Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter Your Full Name" className="input input-bordered" required
                   
                 />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-700 font-semibold">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required
              
                 />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-orange-700 font-semibold">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered"
                  
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-orange-700 font-semibold">Password</span>
                </label>
                <input type={showPass ? 'text' : "password"} name="password" placeholder="Enter Your Password" className="input input-bordered" required
                 />
                 <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <FaEyeSlash className="text-orange-700"></FaEyeSlash> : <FaEye className="text-orange-700"></FaEye>
                  }
                 </span>
                
              </div>
              {error &&  <small className='text-red-500'>{error}</small>}
              <div className="form-control mt-6">
                <button className="btn border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]">Register</button>
              </div>
              <div>
                <p className="text-orange-900">Already Have an Account? please <NavLink className='text-orange-700 font-bold link link-hover' to='/login'>Login</NavLink></p>
              </div>
            </form>
          </div>

          <div className=" lg:text-left lg:w-[50%] md:w-[50%] w-[90%]">
            <div className=' w-full mb-10'>
           <img className="w-full" src={register} alt="" />
            </div>
          </div>

        </div>
        </div>
      </div>
    );
};

export default Register;