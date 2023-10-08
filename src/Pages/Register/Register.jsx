import { useContext, useState } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";

import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate= useNavigate()
    const {createUser,handleUpdateProfile}= useContext(AuthContext)
   const [error,setError]= useState()
  const handleFormSubmit =(e)=>{
    e.preventDefault();
    
   const formData= new FormData(e.currentTarget);
   const email= formData.get('email');
   const password= formData.get('password');
   const name= formData.get('name');
   const profile = formData.get('profile')

   if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)  ) {
    console.log('hi');
    toast.error("Password Should contain at least one uppercase special character and minimum length 6")

    return
    
   } 


  // create user

  createUser(email,password)
  .then(result=>{
    console.log(result);
    navigate(location?.state? location.state: '/')
    // update photoUrl
    handleUpdateProfile(name,profile)
    .then(res=>{
      console.log(res,'succesfull');
    })
    .catch(err=>{
      console.log(err.message);
    })
  })
  .catch(err=>{
    console.log(err.message);
    setError(err.message);

  })
    






  }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Profile url</span>
                </label>
                <input type="text" name="profile" placeholder="Your profile image" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
            
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {
              error ? <p  className="text-red-600 pb-3"> {error} </p>: ''
            }
          </div>
        </div>
        <Toaster />
      </div>
         
    );
};

export default Register;