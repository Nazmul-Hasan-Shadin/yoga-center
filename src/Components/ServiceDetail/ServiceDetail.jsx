import React from 'react';
import DetailsHeader from '../serviceDetailsHeader/DetailsHeader';
import RightSideNavbar from '../RightSideNavbar/RightSideNavbar';

const ServiceDetail = ({serviceDetail}) => {
  const {name,image,id,description}= serviceDetail || {};
    return (
        <div className='my-12 max-w-7xl mx-auto'>

          <div className='flex justify-center'>
                
          <DetailsHeader serviceDetail={serviceDetail} ></DetailsHeader>
          </div>


             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 max-w-7xl mx-auto my-16 p-5 '>

                {/* left side details */}
             <div className='space-y-5'>
              <div>
                <img src={image} alt="" />
              </div>
             <h1 className='text-2xl'>{name}</h1>

             <p className='text-sm leading-loose'>
                {description}
             </p>




            </div>
         {/* Navbar of right side */}
            <div>
              <RightSideNavbar></RightSideNavbar>
            </div>
             </div>
        </div>
    );
};

export default ServiceDetail;