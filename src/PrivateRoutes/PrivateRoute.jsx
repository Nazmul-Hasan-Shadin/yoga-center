import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const location= useLocation();
  const {user}= useContext(AuthContext);
  if (user) {
   return   children
  }

 return <Navigate state={location.pathname} to={'/login'}></Navigate>
   


 
};

export default PrivateRoute;