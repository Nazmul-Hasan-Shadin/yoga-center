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
import Blogs from '../Pages/Blogs/Blogs';
import About from '../Pages/About/About';
import Error from '../Components/Error/Error';

const router= createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>  ,   
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
        },
        {
            path:'/blog',
            element:  <PrivateRoute><Blogs></Blogs></PrivateRoute>,
            loader:()=> fetch('/blogs.json')
        },
        {
            path: '/about',
            element: <PrivateRoute><About></About></PrivateRoute>
        }
    ]

 
}])


export default router;