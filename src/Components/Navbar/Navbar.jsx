import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/logoo.jpg'
import userPhoto  from '../../assets/user.png'
import { AuthContext } from "../../ContextProvider/AuthProvider";
const Navbar = () => {
 
  const {user,handleSignOut}=useContext(AuthContext)
  const {photoURL,displayName}= user || {} ;
  const links = (
    <>
      <li>
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active " : ""
  }
>
  Home
</NavLink>
      </li>

      <li>
      <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Features
</NavLink>
      </li>
      <li>
      <NavLink
  to="/blog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Blogs
</NavLink>
      </li>
      <li>
      <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 justify-between md:justify-">
      <div className="navbar-start z-20">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 mr-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img className=" w-10 h-10 lg:w-36 lg:h-36" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu  menu-horizontal px-1">{links}</ul>
      </div>
      <div className="">
      {
        user ? <>
           <span className="pr-3   font-semibold"> {displayName} </span>
           <button  onClick={()=>handleSignOut()} className="btn-md btn mr-4">Logout</button>
           <img className=" w-8 h-8 lg:w-16 lg:h-16 rounded-full" src={photoURL} alt="" /> 

        
        </>:   <img className=" w-8 h-8 lg:w-12 lg:h-12 rounded-full" src={userPhoto} alt="" />
      }
      </div>
    </div>
  );
};

export default Navbar;
