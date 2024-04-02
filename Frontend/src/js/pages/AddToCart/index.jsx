import React from "react";
import Header from "../../components/Header";
import NewsLetterSubscription from "../../components/NewsLetterSubscription";
import Footer from "../../components/Footer";
import CartSectionContainer from "./Container/CartSection";

function AddToCart() {
  return (
    <div>
      <Header />
      <CartSectionContainer />
      <NewsLetterSubscription />
      <Footer />
    </div>
  );
}

export default AddToCart;
