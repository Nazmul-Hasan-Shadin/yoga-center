import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter

} from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';

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
            element: <ServiceDetails></ServiceDetails>,
            loader: ()=>fetch('/service.json')
        }
    ]

 
}])

export default router;