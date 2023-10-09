import React, { useContext } from 'react';
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import AuthProvider, { AuthContext } from '../../ContextProvider/AuthProvider';
import auth from '../../firebase/firebase.config';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const location= useLocation()
  const navigate= useNavigate()
const {signedIn,handleFbLogin,handleGoogleLogin}= useContext(AuthContext)
    const handleLogin= (e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=  form.get("email");
        const password= form.get('password')

        // loggedIn user
        signedIn(email,password)
        .then(res=>{
            console.log(res);

            navigate(location?.state? location.state: '/')
            toast.success('Successfully Logged In')
            alert('hf')
        })
        .catch(err=>{
            console.log(err.message);
            toast.error(err.message)
        })



        
    }

    const handleFb=()=>{
        handleFbLogin()
        .then(res=>{
            console.log(res);
        
            navigate(location?.state?location.state: '/' )
            toast.success('Successfully Logged In')
        })
        
    }

   

    return (

  <div className="hero container  min-h-screen">
  <div className="hero-content p-0 flex-col lg:flex-col">

    <div className="card  w-[310px] md:w-full  shadow-2xl">
    <div className="text-center ">
      <h1 className="text-2xl pt-8 font-bold">Login to account</h1>
    
    </div>
      <form onSubmit={handleLogin}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
   
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-[#57d38c]">Login</button> 
          <span className='pt-4'>Forget Password?</span>
        </div>
        <div className=' '>
            Or Login with
            <p className='flex gap-2 mt-3'> 

               <span onClick={()=>handleFb()} className='  btn  '>  <BsFacebook className='lg:text-2xl text-blue-700'></BsFacebook>Facebook</span>
               <span onClick={()=>handleGoogleLogin().then(res=> navigate(location?.state?location.state: '/' ))} className=' btn '>   <FcGoogle className='lg:text-2xl'></FcGoogle>  Google
</span>

            </p>
            <Link className='text-blue-700' to={'/register'}> Register Now</Link>
        </div>
      </form>
    </div>
  </div>
  <Toaster></Toaster>
</div> 


    );
};

export default Login;