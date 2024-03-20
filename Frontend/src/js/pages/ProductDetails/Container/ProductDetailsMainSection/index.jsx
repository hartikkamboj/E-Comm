import React, { useEffect, useMemo, useState } from "react";
import ProductDetailsMainSectionView from "../../View/ProductDetailsMainSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductData } from "../../../../core/Redux/features/productData";

function ProductDetaisContaier() {
  const params = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const sizeArray = ["Small", "Medium ", "Large", "Xlarge"];
  const [SizeContainer, setSizeContainer] = useState("");

  useEffect(() => {
    productsDataHandler();
  }, []);

  useMemo(() => {
    dispatch(addProductData(data));
  }, [data]);

  const cartProductsNumberIncrementer = () => {
    setCount(count + 1);
  };

  const cartProductsNumberDecrementer = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const productsDataHandler = async () => {
    const res = await axios.get("http://localhost:3001/home/products", {
      headers: {
        id: params.id,
      },
    });
    if (res.status == 200) {
      setData(res.data);
    }
  };

  let state = {
    data,
    SizeContainer,
    count,
    sizeArray,
  };
  let handlers = {
    setSizeContainer,
    cartProductsNumberIncrementer,
    cartProductsNumberDecrementer,
  };

  return (
    <div>
      <ProductDetailsMainSectionView
        id={params.id}
        state={state}
        handlers={handlers}
      />
    </div>
  );
}

export default ProductDetaisContaier;
