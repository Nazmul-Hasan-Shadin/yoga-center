import React from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';




const Gallery = () => {
    return (
        <div>
             <>

              <h3 className='text-center text-2xl my-4 font-light'>Our Team Gallery </h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     


     <SwiperSlide>  <img src="https://i.ibb.co/840G7QG/team2.png" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/K2fhQg8/team.png" alt="" /> </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/6tvjdgL/team5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qFYKWGP/team3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/yR17hNb/team4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/6tvjdgL/team5.png" alt="" /></SwiperSlide>

      </Swiper>
    </>
        </div>
    );
};

export default Gallery;