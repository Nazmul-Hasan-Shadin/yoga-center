import { PiFlowerLotusBold } from "react-icons/pi";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
const ServicePriceing = () => {
  return (
<>

<h2 className="text-center font-medium text-3xl my-5">Service Price</h2>

<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
      <div data-aos="zoom-in" className="col-span-2 bg-[#faf6f2] space-y-6 p-10 ">
        <p>OUR YOGA STUDIO</p>
        <h2 className="text-2xl">Services & Pricing</h2>
        <p>Standard Pricing Plan $350 </p>
        <p>Professional Pricing Plan $120Per week</p>
        <p>Private Pricing Plan $250Per week</p>

        <button className="btn btn-active">See More Service</button>
      </div>

      {/* video card */}
      <div data-aos="zoom-in"  data-aos-duration="1000" className="col-span-2">
        <iframe 
        className= " w-full lg:w-[560px]"
         
          height="367"
          src="https://www.youtube.com/embed/3qGEF85PT9s?si=WhnvMa8q14Oyn-zi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* profesionla course card */}

   <div  data-aos="zoom-in"  data-aos-duration="1000" className=" col-span-2 lg:col-span-1 p-2">
       
   <div className="card h-80  bg-[#F56C6D] shadow-xl ">
          <figure>
          
            <PiFlowerLotusBold className="text-6xl text-white"></PiFlowerLotusBold>{" "}
          </figure>

          <div className="card-body text-white">
            <h2 className="card-title">Yoga Event Hub</h2>
            <p className="text-justify text-sm">
              {" "}
              Discover a world of yoga events and workshops that will enrich your practice. Explore a variety of yoga gatherings, workshops, and retreats to deepen your connection with mind, body, and spirit. Join our community and find the perfect event to enhance your yoga journey
            </p>
          </div>
        </div>
   </div>
     

          {/* card 3 */}
      <div  data-aos="zoom-in"  data-aos-duration="1000"  className="">
        <img className="w-[100%] h-[100%] " src={banner2} alt="" />
      </div>

      {/* card 3 */}
      <div  data-aos="zoom-in"  data-aos-duration="1000" className="">
        <div className="card h-80 bg-[#815C9E] shadow-xl  ">
          <figure>
            {" "}
            <PiFlowerLotusBold className="text-6xl text-white"></PiFlowerLotusBold>{" "}
          </figure>

          <div className="card-body text-white">
            <h2 className="card-title">Meditation Center</h2>
            <p className="text-justify text-sm">
              {" "}
              Find inner peace and tranquility at our Meditation Center. Our
              serene and welcoming space is dedicated to helping you cultivate
              mindfulness, reduce stress, and achieve a deeper connection with
              yourself.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div>
        {/* card 4 */}
        <div  data-aos="zoom-in"  data-aos-duration="1000" className="">
          <img className=" h-80 " src={banner3} alt="" />
        </div>
      </div>
    </div>


</>
  );
};

export default ServicePriceing;
