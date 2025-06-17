import React from "react";
import hotel from "./hotel.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6 border-8 border-sky-500 flex-row">
      <img className="rounded-md" src={hotel} alt="Loading..." />

      <div className="ml-10">
        <h1 className="text-7xl font-bold text-rose-900	 mb-4 italic">
          Welcome
        </h1>
        <h1 className="text-6xl font-thin text-teal-800	 mb-4">To Ultimate</h1>
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Food Delivery App - <span className="text-amber-950	">Zomato</span>
        </h1>
        <p className="text-lg font-semibold	text-teal-900 max-w-md">
          "Good Food With Good Mindset" 🍽️
        </p>

        <button className="bg-cyan-500 border-2	 border-purple-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-9">
          Explore Now 👀
        </button>
      </div>
    </div>
  );
};

export default Home;
