import React, { useEffect, useState } from 'react';
import Trainer from '../Trainer/Trainer';

const Trainers = () => {
    const [trainerInfo,setTrainerInfo]= useState([]);
    const [displayAllTrainer,setDisplayAllTrainer]= useState([]);
    const [showAll, setShoAll]=useState(false);
    useEffect(()=>{
     fetch('trainersData.json')
     .then(res=>res.json())
     .then(data=> {
        
        setTrainerInfo(data)
        setDisplayAllTrainer(data)
    
    }
        
        
        )

    },[])
    return (
         <div className='lg:my-10   '>
         <div className='  text-justify mb-8'>
         <h3 className='text-3xl text-center font-bold py-4'> Our TRAINERS</h3>
          <p className='text-center text-sm'>  At our yoga site, we take great pride in introducing you to our team of dedicated and experienced yoga  <br /> trainers. These individuals are not just instructors; they are your guides on your yoga journey.</p>
         </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
          

      { 
          showAll? trainerInfo.map((trainer,indx)=> <Trainer key={indx} trainer={trainer}> </Trainer> ): displayAllTrainer.slice(0,6).map((trainer,indx)=> <Trainer key={indx} trainer={trainer}> </Trainer> )
       }

        </div>
      <div className='flex justify-center mt-6'>
       {
      
      !showAll && <button  onClick={()=>setShoAll(!showAll)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         Show All Trainer
      </span>
    </button>
      
    


       }
      </div>
 </div>
    );
};

export default Trainers;