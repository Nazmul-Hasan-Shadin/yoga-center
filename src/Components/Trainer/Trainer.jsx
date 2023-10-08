import React from 'react';
 import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
const Trainer = ({trainer}) => {
    const {role,name,profilePic}=trainer;
    return (
        <div >
            
<div className="  h-[380px] max-w-sm mb-6 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-12">

    

    </div>
    <div className="flex flex-col items-center  ">
        <img className=" h-24 w-24 mb-3 rounded-full shadow-lg" src={profilePic} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {name}  </h5>
        <span className="text-sm pt-3 text-gray-500 dark:text-gray-400"> {role}</span>
      
    </div>
    <div className="flex mt-32  w-full   bg-[#EDF1F2]">
          
          <span className='flex gap-7 p-3  mx-auto   text-3xl  '>
            <FaFacebookF className='flex-1'></FaFacebookF>
            <FaTwitter className='ml-5'></FaTwitter>
            <FaInstagram  className='ml-5'></FaInstagram>
          </span>



        </div>
</div>

        </div>
    );
};

export default Trainer;