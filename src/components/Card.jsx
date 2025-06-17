import React from 'react';

const Card = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Cards</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      
        <div className="bg-white border rounded shadow p-4 w-72">
          <h2 className="text-xl font-semibold mb-2">Card One</h2>
          <p className="text-gray-600">This is a simple card for beginners.</p>
        </div>

    
        <div className="bg-white border rounded shadow p-4 w-72">
          <h2 className="text-xl font-semibold mb-2">Card Two</h2>
          <p className="text-gray-600">This is another basic card.</p>
        </div>

   
        <div className="bg-white border rounded shadow p-4 w-72">
          <h2 className="text-xl font-semibold mb-2">Card Three</h2>
          <p className="text-gray-600">Easy to use and modify.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
