import React from "react";
import hotel from "./hotel.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-blue-50 p-4 sm:p-6 border-4 sm:border-8 border-sky-500">
      <img
        className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md mb-6 md:mb-0 md:mr-10"
        src={hotel}
        alt="Loading..."
      />

      <div className="w-full max-w-lg text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-rose-900 mb-4 italic">
          Welcome
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-thin text-teal-800 mb-4">
          To Ultimate
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-4">
          Food Delivery App - <span className="text-amber-950">Zomato</span>
        </h1>
        <p className="text-base sm:text-lg font-semibold text-teal-900 max-w-md mx-auto md:mx-0">
          "Good Food With Good Mindset" 🍽️
        </p>

        <button className="bg-cyan-500 border-2 border-purple-950 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-9 transition-colors">
          Explore Now 👀
        </button>
      </div>
    </div>
  );
};

export default Home;