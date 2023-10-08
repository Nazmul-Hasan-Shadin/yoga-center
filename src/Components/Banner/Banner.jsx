import React from 'react';

import banner from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (



<Swiper className='h-[75vh]'

modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => {} }
onSlideChange={() => {}}
>
<SwiperSlide> 

   <div className='relative'>
   <img className='w-full ' src={banner} alt="" /> 
       <div className='absolute top-64 pl-40 space-y-3'>
       <h2 className='text-3xl font-semibold'> Keep Your Mind In Best Condition </h2>
       <p  className='text-lg '>Experience the powerful of healing Yoga . <br /> Balance Your Body And Mind</p>
       </div>
   </div>
   
   </SwiperSlide>
<SwiperSlide>  <img className='w-full' src={banner2} alt="" /></SwiperSlide>
<SwiperSlide> <img className='w-full' src={banner3} alt="" /> </SwiperSlide>
<SwiperSlide> <img className='w-full' src={banner} alt="" /></SwiperSlide>
...
</Swiper>



    );
};

export default Banner;