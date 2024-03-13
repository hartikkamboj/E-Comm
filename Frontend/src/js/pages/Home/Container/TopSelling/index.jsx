import React, { useEffect, useState } from "react";
import TopSellingView from "../../View/TopSelling";
import axios from "axios";

function TopSelling() {
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
  return <TopSellingView heading="Top Selling" data={data} />;
}

export default TopSelling;
