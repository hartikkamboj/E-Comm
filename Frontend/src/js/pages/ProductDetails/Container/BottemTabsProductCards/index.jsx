import React, { useEffect, useState } from "react";
import axios from "axios";
import TopSellingView from "../../../Home/View/TopSelling";

function BottomTabsProductCardContainer() {
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
  return <TopSellingView heading="You might also like" data={data} />;
}

export default BottomTabsProductCardContainer;
