import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ Id, Image, Name, Rating, Price }) {
  return (
    <div className=" px-4 py-2">
      <Link to={`/home/product/${Id}`}>
        <div className="flex justify-around w-full ">
          <div className="w-full">
            <img className="w-full" src={Image} alt="image" />
            <div className="p-4">
              <div className="text-xl">
                <h2 className="text-sm font-bold">{Name}</h2>
              </div>
              <div>
                <h3>
                  rating
                  <span className="text-xs text-gray-500">{Rating}/5</span>
                </h3>
              </div>
              <div>
                <p className="font-bold">Rs.{Price}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
