import React from "react";
import Image from "next/image";

const LatestProducts: React.FC = () => {
  const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

  const products = [
    {
      price: 42.0,
      originalPrice: 65.0,
      image: "/bigsofa.png", 
    },
    {
      price: 42.0,
      originalPrice: 65.0,
      image: "/yellow.png", 
    },
    {
      price: 42.0,
      originalPrice: 65.0,
      image: "/whitesofa.png", 
    },
    {
      price: 42.0,
      originalPrice: 65.0,
      image: "/whitechair.png", 
    },
    {
      price: 42.0,
      originalPrice: 65.0,
      image: "/t4.png", 
    },
    {
      price: 42.0,
      originalPrice: 65.0,
      image: "/4sofa.png", 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#151875] text-center mb-6">
          Latest Products
        </h2>

        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium ${index === 0 ? "text-pink-500 border-b-2 border-pink-500" : "text-[#151875]"} hover:text-pink-500`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
            >
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt="Comfort Handy Craft"
                  width={360}
                  height={306}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-gray-800 font-semibold mb-2">Comfort Handy Craft</h3>
              <div className="text-gray-500 mb-2">
                <span className="text-red-500 line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-[#151875] font-bold">${product.price.toFixed(2)}</span>
              </div>

              <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100"></button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100"></button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-pink-100"></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
