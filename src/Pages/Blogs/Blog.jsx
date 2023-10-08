import React from 'react';
import RightSideNavbar from '../../Components/RightSideNavbar/RightSideNavbar';
import DetailsHeader from '../../Components/serviceDetailsHeader/DetailsHeader';

const Blog = ({blog}) => {
    const {image,description,title}=blog;
    return (
        <div className='my-12 max-w-7xl mx-auto'>

          <div className='flex justify-center'>
                
        
          </div>


             <div className=' '>

                {/* left side details */}
             <div className='space-y-5'>
              <div>
                <img src={image} alt="" />
              </div>
             <h1 className='text-2xl'>{title}</h1>

             <p className='text-sm leading-loose'>
                {description}
             </p>




            </div>
         {/* Navbar of right side */}
      
             </div>
        </div>
    );
};

export default Blog;