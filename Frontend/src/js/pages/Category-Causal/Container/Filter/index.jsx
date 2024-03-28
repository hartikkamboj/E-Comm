import React, { useEffect, useRef, useState } from "react";
import FilterView from "../../View/Filter";
import axios from "axios";

function FilterContainer() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [selectedDressTypeList, setSelectedDressTypeList] = useState([]);
  const [selectedSizeList, setSelectedSizeList] = useState([]);
  const [selectedDressStyle, setSelectedDressStyle] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    dressType: [],
    minPrice: "",
    maxPrice: "",
    size: [],
    dressStyle: "",
  });

  useEffect(() => {
    filterHandler(selectedFilters);
  }, [selectedFilters]);

  const filterHandler = async (DataRequiredForFilteration) => {
    const res = await axios.get("http://localhost:3001/filters", {
      headers: {
        DataRequiredForFilteration,
      },
    });
  };

  const dataCollecter = (
    selectedDressTypeList,
    minValue,
    maxValue,
    selectedSizeList,
    selectedDressStyle
  ) => {
    setSelectedFilters({
      dressType: selectedDressTypeList,
      minPrice: minValue,
      maxPrice: maxValue,
      size: selectedSizeList,
      dressStyle: selectedDressStyle,
    });
  };

  const changeDressTypeFilters = (e) => {
    if (!e.target.checked) {
      const list = selectedDressTypeList.filter((item) => item !== e.target.id);
      setSelectedDressTypeList(list);
    } else {
      const list = [...selectedDressTypeList, e.target.id];
      setSelectedDressTypeList(list);
    }
  };

  const changeSizeFilters = (e) => {
    if (selectedSizeList.includes(e.target.name)) {
      setSelectedSizeList(
        selectedSizeList.filter((item) => item !== e.target.name)
      );
    } else {
      setSelectedSizeList([...selectedSizeList, e.target.name]);
    }
  };

  const changeDressStyleFilters = (e) => {
    setSelectedDressStyle(e.target.innerText);
  };

  const state = {
    minValue,
    maxValue,
    selectedFilters,
    selectedDressTypeList,
    selectedSizeList,
    selectedDressStyle,
  };
  const handlers = {
    setMinValue,
    setMaxValue,
    changeDressTypeFilters,
    setSelectedDressTypeList,
    setSelectedSizeList,
    changeSizeFilters,
    setSelectedDressStyle,
    changeDressStyleFilters,
    setSelectedFilters,
    filterHandler,
    dataCollecter,
  };

  return (
    <div>
      <FilterView state={state} handlers={handlers} />
    </div>
  );
}

export default FilterContainer;
