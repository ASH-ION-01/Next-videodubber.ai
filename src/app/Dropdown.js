"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Dropdown arrow icon
import { FaFlag } from 'react-icons/fa'; // Example flag icon

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center px-1 mt-1 rounded text-gray-800 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        
        <FaCaretDown className='text-gray-400' />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 h-[3rem] w-48 bg-white shadow-lg rounded flex justify-center items-center border border-black ">
          <a href="#" className="px-4 h-[2rem] py-2 border border-black hover:bg-gray-100 flex items-center space-x-2">
            <FaFlag className="text-gray-500" /> {/* Replace with your flag icon */}
            <p>Flag</p>
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
