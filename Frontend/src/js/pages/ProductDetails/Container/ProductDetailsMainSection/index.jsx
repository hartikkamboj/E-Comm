import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductDetailsMainSectionView from "../../View/ProductDetailsMainSection";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailsContext from "../../../../core/Context/ProductReviewsContext";
import { useDispatch, useSelector } from "react-redux";
import { setCartData } from "../../../../core/Redux/features/productData";

function ProductDetaisContaier() {
  const productData = useContext(ProductDetailsContext);
  const userEmail = useSelector((state) => state.userEmail);
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState([]);
  const [sizeSelector, setSizeSelector] = useState(" ");
  const [count, setCount] = useState(0);
  const sizeArray = ["Small", "Medium ", "Large", "Xlarge"];
  const [sizeContainer, setSizeContainer] = useState("");

  useEffect(() => {
    productsDataHandler();
  }, []);
  setCartData;

  // useMemo(() => {
  //   dispatch(addProductData(data));
  // }, [data]);

  // const cartDataHandler = async () => {
  //   const res = await axios.post("http://localhost:3001/home/products/cart", {
  //     email: userEmail,
  //     productId: params.id,
  //   });
  //   console.log(res);
  // };

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
      productData.setProductDetailGlobalData(res.data[0]?.Reviews);
    }
  };

  let state = {
    data,
    sizeContainer,
    count,
    sizeArray,
    sizeContainer,
    sizeSelector,
  };
  let handlers = {
    setSizeContainer,
    cartProductsNumberIncrementer,
    cartProductsNumberDecrementer,
    setSizeSelector,
    dispatch,
    setCartData,
  };

  return (
    <ProductDetailsMainSectionView
      id={params.id}
      state={state}
      handlers={handlers}
    />
  );
}

export default ProductDetaisContaier;
