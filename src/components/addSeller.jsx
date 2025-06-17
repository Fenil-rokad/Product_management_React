import React from "react";

const AddSeller = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Seller</h1>

        <form>
          <label className="block mb-2 text-sm font-medium">Seller Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter seller name"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Add Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
