import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/index";
import CategoryCausalContainer from "./Container/ProductListing";
import FilterContainer from "./Container/Filter";
import Header from "../../components/Header/index";
import NewsLetterSubscription from "../../components/NewsLetterSubscription/index";
import Footer from "../../components/Footer/index";
import FilteredData from "../../core/Context/Category/index";
import { useParams } from "react-router-dom";
function CategoryCausal() {
  const params = useParams();
  const [filteredDataContainer, setFilteredDataContainer] = useState([]);
  const [category, setCategory] = useState("");
  return (
    <>
      <FilteredData.Provider
        value={{
          filteredDataContainer,
          setFilteredDataContainer,
          category,
          setCategory,
        }}
      >
        <Header />
        <div className="flex md:flex-row flex-col-reverse pt-10">
          <div className="md:w-1/5  bg-white">
            <FilterContainer category={params.category} />
          </div>
          <div className="w-4/5 md:block ">
            <CategoryCausalContainer />
          </div>
        </div>
        <NewsLetterSubscription />
        <Footer />
      </FilteredData.Provider>
    </>
  );
}

export default CategoryCausal;
