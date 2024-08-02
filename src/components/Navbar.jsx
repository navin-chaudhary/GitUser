import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="h-[10vh] mt-4 lg:mb-4 bg-[rgb(238, 237, 237);]">
      <div className="w-full">
        <div className="container w-[90%] mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800 flex items-center">
            <img src="logo.svg" alt="Logo" className="h-14 mr-2" />
            
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-800 focus:outline-none inline absolute right-0"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  
                  d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } w-full mr-3 self-end md:flex md:items-center w-auto space-y-2 md:space-y-0 md:space-x-8 font-mono sm:relative lg:relative absolute  right-0 lg:top-0 md:top-0  top-16`}
          >
            <Link
              to="/"
              activeClassName="text-blue-900"
              className="block md:inline-block hover:text-blue-500 text-1xl md:text-2xl"
            >
              Home
            </Link>
            <Link
              to="/"
              activeClassName="text-blue-500"
              className="block md:inline-block hover:text-blue-500 text-1xl md:text-2xl"
            >
              About
            </Link>
            <Link
              to="/"
              activeClassName="text-blue-500"
              className="block md:inline-block hover:text-blue-500 text-1xl md:text-2xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
