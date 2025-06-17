import React from "react";

const Product = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded p-4 shadow">
          <p className="text-4xl">🛒</p>
          <h2 className="text-lg font-semibold mb-2">Product 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            praesentium aliquid suscipit velit laborum minus aliquam veritatis
            pariatur rem. Deleniti corporis aspernatur quas explicabo assumenda
            quis incidunt dolores sed dolorum?
          </p>
        </div>

        <div className="bg-white border rounded p-4 shadow">
          <p className="text-4xl">🛒</p>
          <h2 className="text-lg font-semibold mb-2">Product 2</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quidem dolores harum aliquid possimus accusamus commodi animi minima
            voluptatum dolore. Atque earum omnis qui dignissimos, voluptates
            temporibus quae illo vero.
          </p>
        </div>

        <div className="bg-white border rounded p-4 shadow">
          <p className="text-4xl">🛒</p>
          <h2 className="text-lg font-semibold mb-2">Product 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
            repudiandae hic incidunt non voluptas consectetur sequi maxime
            aperiam sunt, perferendis nulla nesciunt ducimus obcaecati vero
            nisi. Expedita tempora numquam sapiente.
          </p>
        </div>
        <div className="bg-white border rounded p-4 shadow">
          <p className="text-4xl">🛒</p>
          <h2 className="text-lg font-semibold mb-2">Product 3</h2>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            recusandae eos nisi hic illo incidunt, beatae dolorem, obcaecati
            cumque nihil ducimus neque voluptatibus. Sapiente nesciunt
            temporibus dolorum ducimus architecto neque.
          </p>
        </div>
        <div className="bg-white border rounded p-4 shadow">
          <p className="text-4xl">🛒</p>
          <h2 className="text-lg font-semibold mb-2">Product 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            voluptatum aliquam id non consequatur? Inventore incidunt, mollitia
            quia veritatis commodi dignissimos impedit architecto blanditiis
            delectus accusantium unde esse ullam laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
