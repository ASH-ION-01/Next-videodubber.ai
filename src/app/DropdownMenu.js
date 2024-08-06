"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Dropdown arrow icon

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown} 
        className="flex items-center px-4 py-2  rounded focus:outline-none"
      >
        <p>Visit</p>
        <FaCaretDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Website VideoDubber.ai</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Learn More VideoDubber.ai</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Learn More VideoDubber.ai</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Learn More VideoDubber.ai</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
