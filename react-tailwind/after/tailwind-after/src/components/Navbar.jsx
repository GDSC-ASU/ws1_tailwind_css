import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg mx-auto px-[20px] py-[10px] flex justify-between items-center">
      <img src="/assets/gdsc-asu-logo.png" className="w-[300px] md:inline-block hidden" />
      <ul className="flex">
        <li className="px-[15px] py-[10px] rounded-md hover:text-gray-600 font-medium cursor-pointer">
          Home
        </li>
        <li className="px-[15px] py-[10px] rounded-md hover:text-gray-600 font-medium cursor-pointer">
          About
        </li>
        <li className="px-[15px] py-[10px] rounded-md hover:text-gray-600 font-medium cursor-pointer">
          Contact
        </li>
      </ul>
      <p className="rounded-md bg-blue-500 text-white py-[10px] px-[20px] hover:bg-blue-600 cursor-pointer">
        Sign In
      </p>
    </nav>
  );
}

export default Navbar;
