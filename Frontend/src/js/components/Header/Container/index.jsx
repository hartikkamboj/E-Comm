import React from "react";
import HeaderView from "../View/index";
import { useNavigate } from "react-router-dom";

function HeaderContainer() {
  const navigate = useNavigate();
  const state = {
    navigate,
  };
  return (
    <div>
      <HeaderView state={state} />
    </div>
  );
}

export default HeaderContainer;
