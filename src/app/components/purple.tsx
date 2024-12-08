import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-[579px] bg-[#F1F0FF] flex items-center justify-center px-6 md:px-12 space-x-6">

      <div className="w-full md:w-[558px] h-[550px] flex justify-center">
        <Image src={"/bluesofa.png"} alt={"blue"} width={558} height={550} className="object-cover" />
      </div>


      <div className="flex flex-col justify-center w-full md:w-auto">

        <h1 className="text-[#151875] font-bold text-xl md:text-3xl mb-4">
          Unique Features Of Latest
        </h1>
        <h1 className="text-[#151875] font-bold text-xl md:text-3xl mb-6">
          & Trending Products
        </h1>


        <p className="text-[#ACABC3] mb-2">
          All frames constructed with hardwood solids and laminates
        </p>
        <p className="text-[#ACABC3] mb-2">
          Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails
        </p>
        <p className="text-[#ACABC3] mb-4">
          Arms, backs, and seats are structurally reinforced
        </p>
        <button className="bg-[#FB2E86] text-white font-bold py-2 px-4 w-[157px] h-[45px] rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
