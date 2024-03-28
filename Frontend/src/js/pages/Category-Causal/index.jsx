import React from "react";
import ProductCard from "../../components/ProductCard/index";
import CategoryCausalContainer from "./Container/ProductListing";
import FilterContainer from "./Container/Filter";
import Header from "../../components/Header/index";
import NewsLetterSubscription from "../../components/NewsLetterSubscription/index";
import Footer from "../../components/Footer/index";
// import moduleName from ''
function CategoryCausal() {
  return (
    <>
      <Header />
      <div className="flex pt-10">
        <div className="w-1/5">
          <FilterContainer />
        </div>
        <div className="w-4/5">
          <CategoryCausalContainer />
        </div>
      </div>
      <NewsLetterSubscription />
      <Footer />
    </>
  );
}

export default CategoryCausal;
