import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-[80%] mx-auto py-4">
      <div className=" flex items-center justify-between">
        <p className=" text-3xl font-semibold">TRAVEL</p>
        <div>
          <ul className=" flex gap-5">
            <NavLink to='/' className={({isActive}) => isActive ? "text-yellow-400" : ""}>
              <li>All Users</li>
            </NavLink>
            <NavLink to='/myplaces' className={({isActive}) => isActive ? "text-yellow-400" : ""}>
              <li>My Places</li>
            </NavLink>
            <NavLink to='/addplace' className={({isActive}) => isActive ? "text-yellow-400" : ""}>
              <li>Add Place</li>
            </NavLink>
            <NavLink to='/auth' className={({isActive}) => isActive ? "text-yellow-400" : ""}>
              <li>Login</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
