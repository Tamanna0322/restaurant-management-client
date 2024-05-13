import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import login from '../../assets/images/login2.jpg'
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const { signInUser, googleLogin, setUser } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);

    
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                setUser(result.user)
                if (result.user) {
                  
                    toast.success("Login successful");
                    navigate(location?.state || '/')
                }

            })
            .catch(error => {
                console.log(error)
                toast.error("Wrong information");
            })
    }


    const handleGoogleLogin = provider => {
        provider()
            .then(result => {
                if (result.user) {
                    setUser(result.user)
                   
                    toast.success("Login successful");
                    navigate(location?.state || '/')
                }
            })
    }


    return (
        <div className="">
             <Helmet>
                <title>FlavorFleet | Login</title>
            </Helmet>
            <div className="flex justify-between items-center flex-col md:flex-row ">
                <div className="lg:w-[40%] md:w-[50%] w-[70%]">
                    <div className="w-full ">
                        <img className="w-[80%] mx-auto" src={login} alt="" />

                    </div>
                </div>

                <div className="hero min-h-screen lg:w-[50%] md:w-[50%] w-full flex justify-center">
                    <div className="hero-content flex flex-col md:flex-row-reverse ">
                        <div className="text-center lg:text-left md:w-[50%] w-[80%] lg:w-full">

                        </div>
                        <div className="card shrink-0 lg:w-[600px] border border-dashed border-orange-700 bg-orange-50 max-w-sm shadow-2xl">
                        <div className="w-[80%] mx-auto">
                        <div className='flex justify-between mt-6'>
                                <div className='w-[30%] '>
                                    <h3 className='border-t border-orange-400 mt-3'></h3>
                                </div>
                                <div className='text-center'>
                                    <p className='font-bold text-orange-600'>Sign In with</p>
                                </div>
                                <div className='w-[30%]'>
                                    <h3 className='border-t border-orange-400 mt-3'></h3>
                                </div>
                            </div>
                            <div className="flex justify-center mt-3">
                                <button onClick={() => handleGoogleLogin(googleLogin)} className="btn w-full bg-orange-100 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg> <span className="text-orange-700 font-bold">Google</span></button>
                            </div>
                        </div>
                            <form onSubmit={handleLogin} className="card-body">

                                <div>
                                    <p className="font-bold text-2xl text-orange-800">Or</p>

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-orange-600 font-semibold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter Email" className="input input-bordered"

                                    />

                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-orange-600 font-semibold">Password</span>
                                    </label>

                                    <input type={showPass ? 'text' : "password"} name="password" placeholder="Enter Password" className="input input-bordered"
                                    />
                                    <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaEyeSlash className="text-orange-700"></FaEyeSlash> : <FaEye className="text-orange-700"></FaEye>
                                        }
                                    </span>

                                </div>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-orange-900">Forgot password?</a>
                                </label>
                                <div className="form-control mt-3">
                                    <button className="btn border-none bg-gradient-to-r from-[#FFD133] to-[#C04619]">Login</button>
                                </div>

                                <div className='mt-4'>
                                    <p className="text-orange-900">Do Not Have any Account? <NavLink className='link link-hover text-orange-600' to='/register'>Sign UP</NavLink> </p>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;