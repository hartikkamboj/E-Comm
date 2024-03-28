import React from "react";
import ProductCard from "../../../../components/ProductCard";

// import moduleName from ''
function CategoryCausalView({ state }) {
  return (
    <>
      <h1 className="text-3xl pl-10 font-bold">Casual</h1>
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
