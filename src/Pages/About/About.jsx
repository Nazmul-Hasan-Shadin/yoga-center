import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Trainers from '../../Components/Trainers/Trainers';
import Gallery from '../../Components/GalleryOfTem/Gallery';

const About = () => {
    return (
        <div>
               
              <div className=' flex p-4 flex-col lg:flex-row gap-5 '>
               <figure className='flex-1'>
               <img src="https://i.ibb.co/4pS9Pwf/about.jpg" alt="" />
               </figure>

                <div className='flex-1 space-y-3'>
                    <h1 className='text-3xl text-center'>Our Story</h1>
                    <p className='leading-8'>
                    Our studio presents yoga as techniques of controlling the body and the mind. We’ll be happy to share our knowledge with you.

Yoga is a physical, mental, and spiritual practice or discipline which originated in India. There is a broad variety of schools, practices and goals in Hinduism, Buddhism. The best-known are Hatha yoga and Raja yoga.
                    </p>

                </div>
              </div>

              <div className='mb-16'>
                <Trainers></Trainers>
                     
                     <Gallery></Gallery>

              </div>

            <Footer></Footer>
        </div>
    );
};

export default About;