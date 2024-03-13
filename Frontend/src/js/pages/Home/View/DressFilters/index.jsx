import React from "react";

function DressFiltersView() {
  return (
    <div className="pt-10 pb-10 pl-20 pr-20">
      <div className="bg-[#F0F0F0] rounded-3xl p-16 text-center">
        <h1 className="text-4xl font-black pb-14">BROWSE BY DRESS STYLE</h1>
        <div>
          <div className="lg:flex w-full justify-center">
            <img
              className="m-2 lg:w-1/3 w-full "
              src={`http://localhost:3001/Casual.png`}
              alt="image1"
            />
            <img
              className="m-2 lg:w-2/3 w-full"
              src={`http://localhost:3001/Formal.png`}
              alt="image2"
            />
          </div>
          <div className="lg:flex w-full justify-center">
            <img
              className="m-2 lg:w-2/3 w-full"
              src={`http://localhost:3001/Party.png`}
              alt="image4"
            />
            <img
              className="m-2 lg:w-1/3 w-full"
              src={`http://localhost:3001/Gym.png`}
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressFiltersView;
