import React from "react";
import ProductCard from "../../../../components/ProductCard";
import FilterButton from "../../../../../assets/FilterButtonIcon.png";

// import moduleName from ''
function CategoryCausalView({ state }) {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/2 flex justify-start">
          <h1 className="text-3xl pl-10 font-bold">{state.category}</h1>
        </div>
        <div className=" md:hidden  w-1/2 flex justify-end pr-5">
          <button className="">
            <img className="w-full" src={FilterButton} alt="img" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-wrap ">
        {state.filteredDataContainer.map((data) => {
          return (
            <>
              <div className="w-1/3">
                <ProductCard
                  key={data.Id}
                  Id={data.Id}
                  Image={`http://localhost:3001/${data.Image[0]}`}
                  Name={data.Name}
                  Rating={data.Rating}
                  Price={data.Price}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CategoryCausalView;
