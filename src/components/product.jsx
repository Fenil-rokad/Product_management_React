import React from "react";
import Card from "./Card";

const Product = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Product</h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Card
          imageUrl="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A"
          dishName="burger"
          hotelName="Burger King"
          buttonText="Order Now"
        />
        <Card
          imageUrl="https://thumbs.dreamstime.com/b/indian-sweet-jalebi-traditional-dessert-india-77486391.jpg"
          dishName="Jalebi"
          hotelName="Sweet Shop"
          buttonText="View Details"
        />
        <Card
          imageUrl="https://t4.ftcdn.net/jpg/10/41/99/53/240_F_1041995329_Y948A29Hru2TXn8JgkWMwJmIVauyQ9jq.jpg"
          dishName="Khaman"
          hotelName="Star hotel"
          buttonText="See More"
        />
        <Card
          imageUrl="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/samosa.webp?updatedAt=1727156367955"
          dishName="Samosa"
          hotelName="Smosa Corner"
          buttonText="check out"
        />
    </div>
    </div>
  );
};

export default Product;
