import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const location= useLocation();
  const {user,loading}= useContext(AuthContext);
  if (loading) {
   return  <p className='flex justify-center items-center h-[70vh]'><span className="loading loading-dots loading-lg "></span></p>
  }
  if (user && !loading) {
   return   children
  }

 return <Navigate state={location.pathname} to={'/login'}></Navigate>
   


 
};

export default PrivateRoute;