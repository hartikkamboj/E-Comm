import React, { useEffect, useState } from "react";
import ShopingSectionView from "../../../../components/ProductCard/index";
import axios from "axios";
import NewArrivalsView from "../../View/NewArrivals";

function NewArrivals({ state, handler }) {
  useEffect(() => {
    productsDataHandler();
  }, []);

  const [data, setData] = useState([]);

  const productsDataHandler = async () => {
    const res = await axios("http://localhost:3001/data");
    if (res.status == 200) {
      setData(res.data);
    }
  };
  return <NewArrivalsView heading="New Arivals" data={data} />;
}

export default NewArrivals;
