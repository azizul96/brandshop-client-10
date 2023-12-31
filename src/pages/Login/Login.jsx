import { useContext, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const {emailLogin, googleLogin} = useContext(AuthContext)
    
    const navigate = useNavigate(null)
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false)


    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        emailLogin( email, password )
        .then(() =>{
            toast.success('Login successfully');
            navigate(location?.state ? location.state : '/')
             
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(() =>{
            toast.success('Login successfully');
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    return (
        <div className="bg-gradient-to-b from-purple-400">
            <Navbar></Navbar>
            <div className="hero h-full  pt-10 pb-28">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-black">Login now!</h1>
                        <p className="py-6 text-black">Make sure your email and password is correct.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} placeholder="Your password" className="input input-bordered" name='password' />
                                <span className="absolute bottom-3 right-3 text-xl cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                       showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-secondary font-semibold  text-white ">Login</button>
                            </div>
                            <label className="label text-purple-500">
                                New here? <Link to="/signUp" className="label-text-alt link link-hover text-purple-500">Create an account</Link>
                            </label>
                            
                            {/* <SocialLogin /> */}
                        </form>
                        <div className="mb-5">
                                <label className="label justify-center items-center gap-5 text-violet-500">
                                    Login With <FcGoogle onClick={handleGoogleLogin} className="text-3xl cursor-pointer"></FcGoogle>
                                </label>
                                
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;