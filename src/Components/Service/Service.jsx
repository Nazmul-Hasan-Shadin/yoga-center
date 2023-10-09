import { Link } from "react-router-dom";

import {BsCurrencyDollar} from 'react-icons/bs'



const Service = ({service}) => {
   const {name,description,price,id,image}= service;
   const animation= ['fade-right','fade-down','fade-up-right','fade-up-left','zoom-in','zoom-up']
   

  return (
    <div>
 
  

  <div data-aos="zoom-in"  data-aos-duration="1000"  className="max-w-sm h-[600px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
     <img className="h-[234px]" src={image} alt="" />
    <div className="p-6 flex flex-col flex-grow">
   
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {name}</h5>
 
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description.substring(0,150)}</p>
    <h2 className=""> <span className="font-medium">price</span> : {price}</h2>
    
    <Link className="mt-auto" to={`/serviceDetails/${id}`}>
    <p className="inline-flex btn items-center text-blue-600 hover:underline">
      See Details
        <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </p>
  </Link>

    </div>
</div>




    </div>
  );
};

export default Service;
