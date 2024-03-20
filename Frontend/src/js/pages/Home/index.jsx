import React from "react";
import Header from "../../components/Header";
import HomeView from "./View/HeroSection";
import NewArrivals from "./Container/NewArrivals";
import TopSelling from "./Container/TopSelling";
import DressFilters from "./Container/DressFilters";
import CustomersReviews from "./Container/CustomerReviews";
import NewsLetterSubscriptionContainer from "../../components/NewsLetterSubscription/Container";
import FooterContainer from "../../components/Footer/Container";
// import HomeContainer from "./Container/index";

function Home() {
  return (
    <div>
      <Header />
      <HomeView />
      <NewArrivals />
      <hr />
      <TopSelling />
      <DressFilters />
      <CustomersReviews />
      <NewsLetterSubscriptionContainer />
      <FooterContainer />
    </div>
  );
}

export default Home;
