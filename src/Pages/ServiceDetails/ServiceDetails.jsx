import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router-dom';
import ServiceDetail from '../../Components/ServiceDetail/ServiceDetail';

const ServiceDetails = () => {
    const [serviceDetail,setServiceDetail]= useState()
    const allService= useLoaderData();
    const {id}= useParams();

     
    useEffect(()=>{
     const serviceFind= allService.find(service=> service.id === parseFloat(id));
       if (serviceFind) {
         setServiceDetail(serviceFind)
       }
     
    },[allService,id])

  
    return (
        <div className='max-w-7xl mx-auto lg:pl-36'>
           <ServiceDetail serviceDetail={serviceDetail}></ServiceDetail>
        </div>
    );
};

export default ServiceDetails;