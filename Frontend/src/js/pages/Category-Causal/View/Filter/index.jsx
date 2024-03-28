import React, { useEffect } from "react";
import FilterIcon from "../../../../../assets/ReviewButtonIcon.png";
import MultiRangeSlider from "multi-range-slider-react";
function FilterView({ state, handlers }) {
  return (
    <div className="p-4 border rounded-3xl m-4">
      <div className="flex p-2">
        <div className="flex w-1/2 ">
          <h1 className=" font-medium text-xl">Filters</h1>
        </div>
        <div className="flex justify-end w-1/2">
          <img className="w-1/6 h-2/3" src={FilterIcon} alt="filterLogo" />
        </div>
      </div>
      <hr />
      <div>
        <ul className="text-gray-400 text-sm p-2">
          <li className="p-1">
            <input
              onChange={handlers.changeDressTypeFilters}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="T-shirts"
            />
            <label className="ml-2" htmlFor="T-shirts">
              T-shirts
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={handlers.changeDressTypeFilters}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Shorts"
            />
            <label className="ml-2" htmlFor="Shorts">
              Shorts
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={handlers.changeDressTypeFilters}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Shirts"
            />
            <label className="ml-2" htmlFor="Shirts">
              Shirts
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={handlers.changeDressTypeFilters}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Hoodie"
            />
            <label className="ml-2" htmlFor="Hoodie">
              Hoodie
            </label>
          </li>
          <li className="p-1">
            <input
              onChange={handlers.changeDressTypeFilters}
              type="checkbox"
              className=" focus:outline-none"
              name="dressType"
              id="Jeans"
            />
            <label className="ml-2" htmlFor="Jeans">
              Jeans
            </label>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <div className="p-2">
          <h1 className=" font-medium text-xl">Price</h1>
        </div>
        <div>
          <MultiRangeSlider
            min={0}
            max={1000}
            minValue={state.minValue}
            maxValue={state.maxValue}
            onChange={(e) => {
              handlers.setMinValue(e.minValue);
              handlers.setMaxValue(e.maxValue);
            }}
            step={5}
            className=" shadow-none border-none "
            barInnerColor="black"
            ruler="false"
            thumbLeftColor="black"
            thumbRightColor="black"
          />
        </div>
      </div>
      <hr />
      <div className="p-2">
        <h1 className=" font-medium text-xl">Size</h1>
        <div>
          <div className="flex flex-wrap">
            <button
              onClick={handlers.changeSizeFilters}
              name="XX-Small"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              XX-Small
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="X-Small"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              X-Small
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="Small"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              Small
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="Medium"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              Medium
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name=" Large"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              Large
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="X-Large"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              X-Large
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="XX-Large"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              XX-Large
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="3X-Large"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              3X-Large
            </button>
            <button
              onClick={handlers.changeSizeFilters}
              name="  4X-Large"
              className=" rounded-full bg-Background-color text-gray-500 text-xs p-2 m-2"
            >
              4X-Large
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-2">
        <h1 className=" font-medium text-xl">Dress Style</h1>
        <div>
          <ul className="text-gray-400 text-sm p-2">
            <li
              className="p-1 hover:cursor-pointer"
              onClick={handlers.changeDressStyleFilters}
            >
              Casual
            </li>
            <li
              className="p-1 hover:cursor-pointer"
              onClick={handlers.changeDressStyleFilters}
            >
              Formal
            </li>
            <li
              className="p-1 hover:cursor-pointer"
              onClick={handlers.changeDressStyleFilters}
            >
              Party
            </li>
            <li
              className="p-1 hover:cursor-pointer"
              onClick={handlers.changeDressStyleFilters}
            >
              Gym
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full justify-center pt-2 ">
        <button
          onClick={() => {
            handlers.dataCollecter(
              state.selectedDressTypeList,
              state.minValue,
              state.maxValue,
              state.selectedSizeList,
              state.selectedDressStyle
            );
          }}
          className="rounded-full bg-black text-white text-xs p-3 w-full"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default FilterView;
