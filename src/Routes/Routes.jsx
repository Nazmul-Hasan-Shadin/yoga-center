import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter

} from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';

const router= createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/serviceDetails/:id',
            element:<PrivateRoute>   <ServiceDetails></ServiceDetails>   </PrivateRoute>,
            loader: ()=>fetch('/service.json')
        }, 
        {
            path: '/login',
            element: <Login></Login>
        },

        {
            path: '/register',
            element:  <Register></Register>
        }
    ]

 
}])

export default router;