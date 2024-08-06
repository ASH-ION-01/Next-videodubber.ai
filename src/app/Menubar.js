import React from 'react';

const Menubar = () => {
  const ob = {
    home: 'Home  >',
    product: 'Product  >',
  };

  return (
    <div>
      <div className='flex flex-row gap-x-4'>
        <a className='text-gray-500 cursor-pointer hover:text-blue-700' href='https://www.producthunt.com/'>{ob.home}</a>
        <a href='https://www.producthunt.com/products/videodubber-fast-video-translator' className='text-gray-500 cursor-pointer hover:text-blue-700'>{ob.product}</a>
        <p>VideoDubber - Fast Video Translator</p>
      </div>
    </div>
  );
};

export default Menubar;
