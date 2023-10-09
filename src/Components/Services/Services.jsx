
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
    
    const [serviceCard,setServiceCard]= useState([])

    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data=> setServiceCard(data))
    },[])
    return (
        <div className='' >
            <h2 className='text-2xl text-center py-8'>Our Main Service</h2>
                 
           <div className='grid gird-cols-1  md:grid-cols-2 lg:grid-cols-3 p-4 gap-3'>
           {
            serviceCard.map((singleService,indx)=> <Service key={indx} service={singleService}> </Service>)
    }

           </div>



        </div>
    );
};

export default Services;