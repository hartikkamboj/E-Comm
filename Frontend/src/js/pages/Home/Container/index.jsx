import React, { useEffect, useState } from "react";
import HomeView from "../View/HeroSection";
import ShopingSection from "./ShopingContainer/index";
import axios from "axios";

function HomeContainer() {
  return (
    <div>
      <HomeView />
      <ShopingSection />
    </div>
  );
}

export default HomeContainer;
