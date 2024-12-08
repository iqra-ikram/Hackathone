import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-[30px] px-4 md:px-16 items-center max-w-screen-xl mx-auto">
      {/* Logo */}
      <h2 className="font-bold mr-16 font-inter text-[#000000] text-center md:text-left text-3xl md:text-[24px] md:w-auto bg-[#ffffff]">
        Hekto
      </h2>

      {/* Navigation links */}
      <ul className="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-4 md:gap-[48px] text-[#000000]">
        <li>
          <Link
            href="/"
            className="text-black font-normal text-[16px] hover:text-[#FB2E86] text-center md:text-left"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/pages"
            className="font-poppins text-[16px] hover:text-[#FB2E86] text-center md:text-left"
          >
            Pages
          </Link>
        </li>
        <li>
          <Link
            href="/product"
            className="font-poppins text-[16px] hover:text-[#FB2E86] text-center md:text-left"
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="font-poppins text-[16px] hover:text-[#FB2E86] text-center md:text-left"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/shop"
            className="font-poppins text-[16px] hover:text-[#FB2E86] text-center md:text-left"
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="font-poppins text-[16px] hover:text-[#FB2E86] text-center md:text-left"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Search bar */}
      <div className="flex gap-3 mt-4 md:mt-0 md:ml-8 w-full md:w-[180px] justify-center">
        <button className="flex items-center w-full h-[40px] rounded-[4px] pl-[20px] pt-[7px] pb-[7px] pr-[12px] gap-[7px] bg-white">
          <input
            type="text"
            className="font-poppins text-[13px] font-normal w-[130px] h-[18px] opacity-[50%] border-2 border-slate-500 text-[#000000]"
            placeholder="Search..."
          />
          <IoSearch className="w-[20px] h-[16px] bg-pink-600 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Header;
