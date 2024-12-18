import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [IsMobile, setIsMobile] = useState(false);
  return (
    <nav className="bg-cutomMidBlue shadow ">
      <div className="px-8 mx-auto">
        <div className="flex items-center justify-between h-12">
          <div className="w-full justify-between flex items-center">
            <Link className="flex-shrink-0" href="/">
              {/* <img className="w-8 h-8" src="/images/logo.gif" alt="Workflow" /> */}
              <h1 className="text-white text-xl font-bold ">Resume</h1>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <Link
                  className="text-gray-300   hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-300   hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#projects_section"
                >
                  Projects
                </Link>
                <Link
                  className="text-gray-300   hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#faq_section"
                >
                  FAQ
                </Link>
                <Link
                  className="text-gray-300   hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="/#contact_section"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="flex items-center ml-4 md:ml-6"></div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={(event) => {
                event.preventDefault();
                setIsMobile(!IsMobile);
              }}
              className=" text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {IsMobile && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </Link>
            <Link
              className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#projects_section"
              >
              Projects
            </Link>
            <Link
              className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#faq_section"
              >
              FAQ
            </Link>
            <Link
              className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#contact_section"
              >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
