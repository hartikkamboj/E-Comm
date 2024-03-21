import React, { useState } from "react";
import Header from "../../components/Header";
import NewsLetterSubscription from "../../components/NewsLetterSubscription/index";
import Footer from "../../components/Footer/index";
import ProductDetaisContaier from "./Container/ProductDetailsMainSection";
import BottemTabsContainer from "./Container/BottemTabs";
import BottomTabsProductCardContainer from "./Container/BottemTabsProductCards";
import ProductDetailsContext from "../../core/Context/ProductReviewsContext";

function ProductDetails() {
  const [productDetailGlobalData, setProductDetailGlobalData] = useState({});
  return (
    <div>
      <ProductDetailsContext.Provider
        value={{ productDetailGlobalData, setProductDetailGlobalData }}
      >
        <Header />
        <ProductDetaisContaier />
        <BottemTabsContainer />
        <BottomTabsProductCardContainer />
        <NewsLetterSubscription />
      </ProductDetailsContext.Provider>
      <Footer />
    </div>
  );
}

export default ProductDetails;
