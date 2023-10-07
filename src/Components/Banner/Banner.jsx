import React from 'react';
import banner1 from '../../assets/banner1.jpg'
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
//         <div>
//             <div className="carousel h-[80vh]">
//   <div id="item1" className="carousel-item w-full">
//     <img src=  {banner} className="w-full  " />
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src={banner2} className="w-full " />
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//   <img src={banner3} className="w-full" />
//   </div> 
//   <div id="item4" className="carousel-item w-full">
//     <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//   </div>
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">


//  <a href="#item1" className="btn btn-xs">1</a>  
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
//   <a href="#item4" className="btn btn-xs">4</a>


// </div>
//         </div>


<Swiper className='h-[75vh]'
// install Swiper modules
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
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