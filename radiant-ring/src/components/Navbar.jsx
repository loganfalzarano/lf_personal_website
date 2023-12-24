import React, { useState } from "react";
import "./navbar.css";

//Navbar that hides after md breakpoint
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed w-full z-10'>
      {/* button for showing side menu - hidden for medium screens and above*/}
      <div className={`flex md:hidden top-0 left-0 bg-blue-100 text-white w-full fixed h-10 z-40 ease-in-out duration-300 bg-opacity-60 bg-clip-padding blur-backdrop-filter ${isOpen ? "-translate-y-full " : "-translate-y-0"}`}>
        <button data-collapse-toggle="navbar-default" type="button" className="md:hidden inline-flex z-10 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
          <span className="sr-only">Open main menu</span>
        </button>
        {/* Navbar Title center with a name */}
        <div className="flex h-10 absolute w-full z-0 items-center justify-center">
          <h1 className="text-2xl font-bold">Logan Falzarano</h1>
        </div>
      </div>

      {/* side bar for mobile view - hidden for medium screen and above */}
      <div className={`md:hidden top-0 left-0 bg-blue-100 text-white fixed w-1/2 h-full z-40 ease-in-out duration-300 bg-opacity-60 bg-clip-padding blur-backdrop-filter ${isOpen ? "translate-x-0 " : "-translate-x-full"}`}>
        {/* button for closing menu on mobile view */}
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setIsOpen(!isOpen)}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18 18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close main menu</span>
        </button>
        {/* div of list items for navigating on mobile */}
        <div className="flex">
          <ul className="w-full space-y-5 p-5">
            <li className="bg-black text-white rounded-md items-center justify-center text-center">
              Home
            </li>
            <li className="bg-red-500 text-white rounded-md items-center justify-center text-center">
              Projects
            </li>
            <li className="bg-blue-500 text-white rounded-md items-center justify-center text-center">
              Personal
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- desktop menu --> */}

      <div className="hidden md:flex w-full h-16 p-1 bg-blue-100 bg-opacity-60 bg-clip-padding blur-backdrop-filter">
        <div className="flex grow items-center justify-start p-5">
          <h1 className="text-2xl font-bold text-white">Logan Falzarano</h1>
        </div>
        <div className="flex justify-end space-x-2 pr-5">
          <a className="flex w-40 bg-black text-white rounded-md items-center justify-center ">
            Home
          </a>
          <a className="flex w-40 bg-red-500 text-white rounded-md items-center justify-center ">
            Projects
          </a>
          <a className="flex w-40 bg-blue-500 text-white rounded-md items-center justify-center ">
            Personal
          </a>
        </div>
      </div>

    </nav>
  );
};


export default Navbar;