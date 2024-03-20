import React, { useEffect, useState } from "react";
import CustomersReviewsView from "../../View/CustomerReviews";
import axios from "axios";

function CustomersReviews() {
  useEffect(() => {
    customerReviewHandler();
  }, []);
  const [customerReviewData, setCustomerReviewData] = useState([]);
  const customerReviewHandler = async () => {
    const res = await axios.get("http://localhost:3001/home");
    if (res.status === 200) {
      setCustomerReviewData(res.data);
    }
  };

  const state = {
    customerReviewData,
  };

  return (
    <div className="">
      <CustomersReviewsView state={state} />
    </div>
  );
}

export default CustomersReviews;
