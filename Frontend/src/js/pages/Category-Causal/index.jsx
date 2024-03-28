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
  return (
    <>
      <FilteredData.Provider
        value={{ filteredDataContainer, setFilteredDataContainer }}
      >
        <Header />
        <div className="flex pt-10">
          <div className="w-1/5">
            <FilterContainer category={params.category}/>
          </div>
          <div className="w-4/5">
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
