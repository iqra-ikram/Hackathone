import React from 'react';
import { CiMobile1 } from "react-icons/ci";
import { IoGameControllerOutline, IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LuHeadphones } from 'react-icons/lu';
import Image from 'next/image';

const What = () => {
  return (
    <div className='w-full flex justify-center items-center mt-10 mb-1'>
      <div className='sm:w-full md:w-[80%] border-neutral-100 pb-10'>
        <div className='flex flex-col sm:pl[6%] md:pl-0'>
   
          <div className='flex justify-center'>
            <h1 className='text-[#151875] font-bold sm:text-md md:text-3xl lg:text-3xl pt-4 text-center'>
            What Shopex Offer!
            </h1>
          </div>
        </div>


        <div className='flex sm:flex-col md:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8'>
          
   
          <div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[311px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/truck.png" alt="Cantilever Chair" width={65} height={65} className="object-contain"/>
            <p className='font-bold text-[#151875]'>24/7 Support</p>
           
            <p className='text-[#1A0B5B4D] text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

       

<div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[311px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/cashback 1.png" alt="Cantilever Chair" width={65} height={65} className="object-contain"/>
            <p className='font-bold text-[#151875]'>24/7 Support</p>
           
            <p className='text-[#1A0B5B4D] text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

       


          
<div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[311px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/3pic.png" alt="Cantilever Chair" width={65} height={65} className="object-contain"/>
            <p className='font-bold text-[#151875]'>24/7 Support</p>
           
            <p className='text-[#1A0B5B4D] text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

<div className='group shadow-2xl items-center border-solid border-2 rounded-md sm:w-[270px] md:w-[270px] h-[311px] flex flex-col gap-y-5 justify-center item-center cursor-pointer relative bg-[#F6F7FB]'>
            <Image src="/support.png" alt="Cantilever Chair" width={65} height={65} className="object-contain"/>
            <p className='font-bold text-[#151875]'>24/7 Support</p>
           
            <p className='text-[#1A0B5B4D] text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default What;
