"use client";
import Image from "next/image";
import Link from "next/link";

const heroContent = {
  title: "New Furniture Collection Trends in 2020",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  buttonText: "Shop Now",
  chairImage: "/sofa.png", 
  lampImage: "/lamp.png",  
};

function HeroSection() {
  return (
    <section className="relative bg-[#F2F0FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-350px] left-[-40px] z-10">
          <Image
            src={heroContent.lampImage}
            alt="Lamp"
            width={387} 
            height={387} 
            className="object-contain"
          />
        </div>
      </div>

      <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className="text-sm text-[#FB2E86] font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2">
          {heroContent.title}
        </h1>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {heroContent.description}
        </p>
        <div className="mt-6"> 
          <Link
            href="#"
            className="inline-block bg-[#FB2E86] text-white text-sm font-medium py-3 px-6 rounded-md mt-6 hover:bg-pink-600 transition-all duration-300 mx-auto"
          >
            {heroContent.buttonText}
          </Link>
        </div>
      </div>


      <div className="md:w-1/3 flex justify-center items-center relative">
        <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
          <Image
            src={heroContent.chairImage}
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
