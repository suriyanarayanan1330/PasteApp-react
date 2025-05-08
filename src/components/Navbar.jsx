import React from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="flex gap-[100px] font-medium text-xl p-2 justify-center bg-blue-950 font-poppins">
      <NavLink to="/" className="text-white transition delay-75 duration-200 ease-in-out hover:text-blue-600 hover:scale-120">Home</NavLink>
      <NavLink to="/pastes" className="text-white transition delay-75 duration-200 ease-in-out hover:text-blue-600 hover:scale-120 ">Pastes</NavLink>
    </div>
  );
};

export default Navbar;
