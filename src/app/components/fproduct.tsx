import React from 'react';
import { CiMobile1 } from "react-icons/ci";
import { IoGameControllerOutline, IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuHeadphones } from 'react-icons/lu';
import Image from 'next/image';

const FProduct = () => {
  return (
    <div className='w-full flex justify-center items-center mt-10 mb-1'>
      <div className='sm:w-full md:w-[80%] border-neutral-100 pb-10'>
        <div className='flex flex-col sm:pl[6%] md:pl-0'>
       
          <div className='flex justify-center'>
            <h1 className='text-[#151875] font-bold sm:text-md md:text-3xl lg:text-3xl pt-4 text-center'>
           Featured Products
            </h1>
          </div>
        </div>

     
        <div className='flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8'>

          <div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[361px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/whitesofa.png" alt="Cantilever Chair" width={178} height={178} className="object-contain"/>
            <p className='font-bold text-[#FB2E86]'>Cantilever Chair</p>
           
            <p className='text-[#151875] text-sm '>Code - Y523201</p>
            <p className='text-[#151875] text-sm '>$42.00</p>
          </div>

         <div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[361px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
  <Image src="/2sofa.png" alt="Computer" width={130} height={150} className="object-contain" />
  

  <p className='bg-green-500 w-[98px] h-[29px] text-white text-sm flex items-center justify-center'>
    view Details
  </p>


  <div className='flex flex-col justify-center items-center text-white w-full h-full bg-[#2F1AC4] py-2'>
    <p className='font-medium text-center'>
      Cantilever Chair
    </p>
    <p className='text-sm'>
      Code - C123456
    </p>
    <p className='text-sm'>
      $42.00
    </p>
  </div>
</div>


          <div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[361px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/3sofa.png" alt="Smart Watch" width={175} height={180} className="object-contain"/>
            <p className='font-bold text-[#FB2E86]'>Cantilever Chair</p>
            <p className='text-[#151875] text-sm '>Code - Y523201</p>
            <p className='text-[#151875] text-sm '>$42.00</p>
          </div>

     
          <div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[361px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/4sofa.png" alt="Camera" width={216} height={151} className="object-contain"/>
            <p className='font-bold text-[#FB2E86]'>Cantilever Chair</p>
            <p className='text-[#151875] text-sm '>Code - Y523201</p>
            <p className='text-[#151875] text-sm '>$42.00</p>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default FProduct;
