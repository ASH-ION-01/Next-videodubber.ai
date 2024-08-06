"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa'; // Example icon from react-icons library
import DropdownMenu from './DropdownMenu'; // Import the DropdownMenu component

const Upvote = () => {
  const [counter, setCounter] = useState(0);
  const [isUpvoted, setIsUpvoted] = useState(false); // New state to track upvote status

  const increaseCounter = () => {
    setCounter(counter + 1);
    setIsUpvoted(!isUpvoted); // Toggle upvote status
  };

  return (
    <div className="p-4 flex flex-row justify-between items-center">
      <div className="mb-4">
        Translate videos in your own voice, globalize in a click!
      </div>
      <div className="flex space-x-4">
        <DropdownMenu /> {/* Use the DropdownMenu component here */}
        <button 
          className={`px-4 py-2 rounded flex items-center space-x-2 ${isUpvoted ? 'bg-white text-black border border-black' : 'bg-orange-500 text-white'}`} 
          onClick={increaseCounter}
        >
          <FaThumbsUp className="h-5 w-5" />
          <p>UPVOTE</p>
          <p>{counter}</p>
        </button>
      </div>
    </div>
  );
};

export default Upvote;
