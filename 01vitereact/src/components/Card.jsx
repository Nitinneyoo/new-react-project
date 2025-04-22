import React from "react";

const Card = () => {
  return (
    <div className="relative h-[400px] w-[300px] bg-white shadow-lg rounded-lg overflow-hidden ml-1 cursor-pointer transition-transform transform hover:scale-105">
      <img
        src="https://images.pexels.com/photos/30472389/pexels-photo-30472389/free-photo-of-elegant-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Card Sign"
        className="w-full h-full object-cover rounded-md z-0"
      />
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="p-4 absolute bottom-4 left-4 text-left text-white z-10">
        <h2 className="text-xl font-bold">Adam Hope</h2>
        <p className="text-gray-400 mt-2 text-sm">
          This is a description of the card content.
        </p>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="mt-2 p-2 bg-blue-400 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:scale-110 inline-flex items-center text-lg transition-all duration-300 ease-in-out">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Card;
