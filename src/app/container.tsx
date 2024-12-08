import React from 'react';

const ImageSection = () => {
  return (
    <div 
      className="w-full h-[462px] bg-cover bg-center flex items-center justify-center px-6 md:px-12 space-x-6"
      style={{ backgroundImage: 'url(/bg-image.png)' }}
    >
      <div className="text-center p-4 rounded-lg shadow-lg">
        <h1 className='text-[#151875] font-semibold text-2xl md:text-4xl'>
          Get Latest Updates By Subscribe 
        </h1>
        <h2 className='text-[#151875] font-semibold text-xl md:text-2xl mt-2'>
         Our Newsletter
        </h2>

      
        <button 
          className="bg-[#FB2E86] text-white font-bold py-2 px-8 mt-6 rounded"
          style={{ width: '161.92px', height: '49px' }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
