import React from "react";
import ShopingSectionView from "../../../../components/ProductCard";

function BottomTabsProductCardView({ heading, data }) {
  return (
    <div className="p-16">
      <div className="w-full text-center text-4xl font-black p-8 ">
        <h1>{heading}</h1>
      </div>
      <div className="flex w-full flex-wrap justify-center">
        {data &&
          data.length &&
          data.map((data) => {
            return (
              <ShopingSectionView
                key={data.Id}
                Id={data.Id}
                Image={`http://localhost:3001/${data.Image[0]}`}
                Name={data.Name}
                Rating={data.Rating}
                Price={data.Price}
              />
            );
          })}
      </div>
      <div className="w-full flex justify-center">
        <button className="lg:w-[14%] w-full h-12 border border-gray-300 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
}

export default BottomTabsProductCardView;
