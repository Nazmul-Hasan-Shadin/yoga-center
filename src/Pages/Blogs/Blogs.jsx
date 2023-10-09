import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar';
import Footer from '../../Components/Footer/Footer';

const Blogs = () => {
   const blogs= useLoaderData();
   console.log(blogs);
    return (
        <>
        <h2 className='text-center font-bold text-2xl'>All Blogs</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 max-w-7xl mx-auto my-16 p-5'>

         <div>
         {
              blogs.map((blog,idx)=> <Blog key={idx} blog={blog} ></Blog>)
            }
         </div>

            <div>
          
              <RightSideNavbar></RightSideNavbar>
            </div>
          
        </div>
        
        <Footer></Footer>
        </>
    );
};

export default Blogs;