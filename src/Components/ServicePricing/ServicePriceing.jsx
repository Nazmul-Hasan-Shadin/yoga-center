import { PiFlowerLotusBold } from "react-icons/pi";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
const ServicePriceing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="col-span-2 bg-[#faf6f2] space-y-6 p-10 ">
        <p>OUR YOGA STUDIO</p>
        <h2 className="text-2xl">Services & Pricing</h2>
        <p>Standard Pricing Plan $35Per week</p>
        <p>Professional Pricing Plan $120Per week</p>
        <p>Private Pricing Plan $250Per week</p>

        <button className="btn btn-active">See More Service</button>
      </div>

      {/* video card */}
      <div className="col-span-2">
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

   <div className=" col-span-2 lg:col-span-1 p-2">
       
   <div className="card h-80  bg-[#F56C6D] shadow-xl ">
          <figure>
          
            <PiFlowerLotusBold className="text-6xl text-white"></PiFlowerLotusBold>{" "}
          </figure>

          <div className="card-body text-white">
            <h2 className="card-title">Yoga Professional COurses</h2>
            <p className="text-justify text-sm">
              {" "}
              Enhance your yoga journey with our comprehensive Yoga Professional
              Courses. Whether you aspire to become a certified yoga instructor.
            </p>
          </div>
        </div>
   </div>
     

          {/* card 3 */}
      <div className="">
        <img className="w-[100%] h-[100%] " src={banner2} alt="" />
      </div>

      {/* card 3 */}
      <div className="">
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
        <div className="">
          <img className=" h-80 " src={banner3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServicePriceing;
