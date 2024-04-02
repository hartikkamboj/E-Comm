import React, { useContext } from "react";
import CategoryCausalView from "../../View/ProductListing";
import FilteredDataContext from "../../../../core/Context/Category";

function CategoryCausalContainer() {
  const { filteredDataContainer, category } = useContext(FilteredDataContext);
  let state = {
    filteredDataContainer,
    category
  };
  return (
    <div>
      <CategoryCausalView state={state} />
    </div>
  );
}

export default CategoryCausalContainer;
