import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className=" h-[5vh] mt-4 lg:mb-4">
      <div className='w-full '>
      <div className="container w-[90%] mx-auto px-4  flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
          <img src="logo.svg" alt="Logo" className="h-14 mr-10" />
        </Link>
        <div className=" md:flex space-x-1 lg:space-x-8 md:space-x-6 sm:space-x-4 font-mono ">
          <Link exact to="/" activeClassName="text-blue-900" className="hover:text-blue-500 text-1xl md:text-2xl sm:text-2xl ld:text-2xl">
            Home
          </Link>
          <Link to="/" activeClassName="text-blue-500" className="hover:text-blue-500 text-1xl md:text-2xl sm:text-2xl ld:text-2xl">
            About
          </Link>
          <Link to="/" activeClassName="text-blue-500" className="hover:text-blue-500 text-1xl md:text-2xl sm:text-2xl ld:text-2xl">
            Contact
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
