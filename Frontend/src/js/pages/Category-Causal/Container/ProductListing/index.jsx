import React, { useContext } from "react";
import CategoryCausalView from "../../View/ProductListing";
import FilteredDataContext from "../../../../core/Context/Category";

function CategoryCausalContainer() {
  const { filteredDataContainer } = useContext(FilteredDataContext);
  console.log(filteredDataContainer);
  let state = {
    filteredDataContainer,
  };
  return (
    <div>
      <CategoryCausalView state={state} />
    </div>
  );
}

export default CategoryCausalContainer;
