import moment from "moment";
import {VscDebugBreakpointConditionalUnverified}from"react-icons/vsc"

const RightSideNavbar = () => {
  return (
    <div>
      <h2 className="font-medium mb-3 text-lg">Search</h2>

      <div className="space-y-7">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full max-w-xs"
        />

        <h2 className="text-2xl"> Recent Posts</h2>

        <div className="space-y-12" >
        <div className="flex gap-4">
        <img className="rounded-full h-12 w-12" src="https://media.licdn.com/dms/image/D5603AQHkY6IMTZcqkQ/profile-displayphoto-shrink_800_800/0/1694171302803?e=2147483647&v=beta&t=R5BCFiU3JGW_Gll5N8wnGXZTnJFA0LXizVw4GGZTx7I" alt="" />
          <div>
          <p>3 Balancing Poses for Winter</p>
          <p> <small> by  <small className="text-red-600">  Shadin</small>
          
           <span className="pl-3">{moment().add(3, 'days').calendar()}</span>
          
           </small> </p>
          </div>

        </div>
        <div className="flex gap-4">
        <img className="rounded-full h-12 w-12" src="https://i.ibb.co/PWGtw6B/teainernew3.jpg" alt="" />
          <div>
          <p>The Benefits Of Yoga</p>
          <p> <small> by 
             <small className="text-red-600"> Nusrat Shanta   </small> 
               <span className="pl-3">
            
            {moment().startOf('day').fromNow() }
            
            </span> 
            
            
            </small> </p>
          </div>

        </div>
        </div>


      </div>

             {/* categories */}
    <ul className="my-10 ">
        <h2 className="text-2xl mb-4">Categories</h2>
         <div className="space-y-3">
        <span className="flex items-center gap-3"> <VscDebugBreakpointConditionalUnverified/>    <li>  fitness</li></span>
        <span  className="flex items-center gap-3"> <VscDebugBreakpointConditionalUnverified/> <li>Meditation</li></span>
      <span  className="flex items-center gap-3">  <VscDebugBreakpointConditionalUnverified/> <li>Fitness</li></span>
       <span  className="flex items-center gap-3"> <VscDebugBreakpointConditionalUnverified/> <li>Benefits of yoga</li></span>
         </div>
    </ul>


    </div>
  );
};

export default RightSideNavbar;
