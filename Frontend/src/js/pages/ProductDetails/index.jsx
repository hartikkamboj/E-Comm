import React from "react";
import Header from "../../components/Header";
import NewsLetterSubscription from "../../components/NewsLetterSubscription/index";
import Footer from "../../components/Footer/index";
import ProductDetaisContaier from "./Container/ProductDetailsMainSection";
import BottemTabsContainer from "./Container/BottemTabs";
import BottomTabsProductCardContainer from "./Container/BottemTabsProductCards";

function ProductDetails() {
  return (
    <div>
      <Header />
      <ProductDetaisContaier />
      <BottemTabsContainer />
      <BottomTabsProductCardContainer />
      <NewsLetterSubscription />
      <Footer />
    </div>
  );
}

export default ProductDetails;
