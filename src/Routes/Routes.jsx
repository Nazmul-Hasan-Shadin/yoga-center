import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter

} from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../Pages/Home';

const router= createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]

 
}])

export default router;