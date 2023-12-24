import React, { useState } from "react";


//Navbar that hides after md breakpoint
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
        <span className="sr-only">Open main menu</span>

      </button>
      {/* <!-- show mobile menu on button click --> */}
      {isOpen ? (
        // <div className="absolute transition-transform top-0 left-0 w-1/2 h-full rounded-md opacity-55 bg-black">
        <div className="transition top-0 left-0 fixed h-full ease-in-out duration-300 translate-x-full">
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
            <span className="sr-only">Open main menu</span>

          </button>
          <ul>
            <li className="flex w-40 bg-black text-white rounded-md items-center justify-center">
              Home
            </li>
            <li className="flex w-40 bg-red-500 text-white rounded-md items-center justify-center">
              Projects
            </li>
            <li className="flex w-40 bg-blue-500 text-white rounded-md items-center justify-center">
              Personal
            </li>
          </ul>
        </div>
      ) : null}
      {/* <!-- desktop menu --> */}
      <div>
        asdfasdf
        asdf

        asdf
        asdf
        asdf
      </div>

      <div className="hidden md:flex justify-around h-10 p-1">
        <a className="flex w-40 bg-black text-white rounded-md items-center justify-center">
          Home
        </a>
        <a className="flex w-40 bg-red-500 text-white rounded-md items-center justify-center">
          Projects
        </a>
        <a className="flex w-40 bg-blue-500 text-white rounded-md items-center justify-center">
          Personal
        </a>
      </div>

    </nav>
  );
};


export default Navbar;