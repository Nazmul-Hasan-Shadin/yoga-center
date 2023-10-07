import React from 'react';

import Banner from '../../Components/Banner/Banner';

import Services from '../../Components/Services/Services';
import ServicePriceing from '../../Components/ServicePricing/ServicePriceing';
import Trainers from '../../Components/Trainers/Trainers';


const Home = () => {
    return (  
        <div className=''>

         <Banner></Banner>
         <Services></Services>
          <div className='lg:my-8'>
          <ServicePriceing></ServicePriceing>
         <Trainers></Trainers>
          </div>
        </div>
    );
};

export default Home;