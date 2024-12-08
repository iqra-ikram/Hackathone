import React from "react";
import { IoCheckmark } from "react-icons/io5";

const DiscountItem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Left Section: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[#151875] text-3xl font-bold mb-4">
            Discount Item
          </h2>
          <div className="flex justify-center space-x-3 text-sm text-[#151875] mb-6">
            <span className="underline cursor-pointer hover:text-[#FB2E86]">Wood Chair</span>
            <span className="underline cursor-pointer hover:text-[#FB2E86]">Plastic Chair</span>
            <span className="underline cursor-pointer hover:text-[#FB2E86]">Sofa Collection</span>
          </div>
          <h3 className="text-2xl font-bold text-[#151875] mb-4">
            20% Discount Of All Products
          </h3>
          <p className="text-[#FB2E86]">Eams Sofa Compact</p>
          <p className="text-gray-500 mb-6 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 text-gray-500 mb-6">
            <li className="flex items-center">
              <span className="text-slate-800 mr-2"><IoCheckmark /></span> Material expose like metals
            </li>
            <li className="flex items-center">
              <span className="text-slate-800 mr-2"><IoCheckmark /></span> Simple neutral colours
            </li>
            <li className="flex items-center">
              <span className="text-slate-800 mr-2"><IoCheckmark /></span> Clear lines and geometric figures
            </li>
            <li className="flex items-center">
              <span className="text-slate-800 mr-2"><IoCheckmark /></span> Material expose like metals
            </li>
          </ul>
          <button className="mt-8 bg-[#FB2E86] text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

      
        <div className="flex-1 text-center">
          <img
            src="/brown.png"
            alt="Chair"
            className="rounded-full shadow-md w-full max-w-sm mx-auto bg-red-100"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountItem;
