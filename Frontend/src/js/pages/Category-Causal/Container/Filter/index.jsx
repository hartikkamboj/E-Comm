import React, { useContext, useEffect, useRef, useState } from "react";
import FilterView from "../../View/Filter";
import axios from "axios";
import FilteredDataContext from "../../../../core/Context/Category/index";

function FilterContainer({ category }) {
  const { setFilteredDataContainer } = useContext(FilteredDataContext);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const [selectedDressTypeList, setSelectedDressTypeList] = useState([]);
  const [selectedSizeList, setSelectedSizeList] = useState([]);
  const [selectedDressStyle, setSelectedDressStyle] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    dressType: ["All"],
    minPrice: "0",
    maxPrice: "1000",
    size: ["All"],
    dressStyle: { category },
  });

  useEffect(() => {
    filterHandler(selectedFilters);
  }, [selectedFilters]);

  const filterHandler = async (DataRequiredForFilteration) => {
    const res = await axios.post("http://localhost:3001/filters", {
      DataRequiredForFilteration,
    });
    setFilteredDataContainer(res.data);
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
