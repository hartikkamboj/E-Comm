import React, { useEffect, useState } from "react";
import ShopingSectionView from "../../View/ShopingSection/view/index";
import axios from "axios";

function ShopingSectionContainer({ state, handler }) {
  useEffect(() => {
    ProductsDataHandler();
  }, []);

  const [data, setData] = useState([]);

  const ProductsDataHandler = async () => {
    const res = await axios("http://localhost:3001/data");
    if (res.status == 200) {
      setData(res.data);
    }
  };
  console.log("data is", data);
  return (
    <>
      <div className="w-full text-center text-4xl font-black p-8 ">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="flex w-full flex-wrap justify-center">
        {data.map((data) => {
          return (
            <ShopingSectionView
              Image={`http://localhost:3001/${data.Image}`}
              Name={data.Name}
              Rating={data.Rating}
              Price={data.Price}
            />
          );
        })}
      </div>
    </>
  );
}

export default ShopingSectionContainer;
