import React from "react";

const AddSeller = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2 sm:p-4">
      <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-sm sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Seller</h1>

        <form>
          <label className="block mb-2 text-sm font-medium">Seller Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. abc traders"
          />
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. abc@gmail.com"
          />

          <label className="block mb-2 text-sm font-medium">Shop Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. rahul kirana store"
          />

          <label className="block mb-2 text-sm font-medium">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="91+ 2356897412"
          />

          <label className="block mb-2 text-sm font-medium">Shope Address</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="City, Street, Pincode"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert("Seller added successfully!");
              } 
            }
          >
            Add Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;