import React, { useEffect, useRef } from "react";
import LoginFormView from "../../Views/LoginForm";
import { useNavigate } from "react-router-dom";

function loginFormContainer() {
  useEffect(() => {
    //   handleTokenVerifier();
    console.log(localStorage.getItem("uid"));
    if (localStorage.getItem("uid") !== null) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");

  const handleLoginData = async (email, password) => {
    const response = await LoginDataHandler(email, password);
    localStorage.setItem("uid", response.data);
  };

  const handleFormData = (email, password) => {
    console.log(email.password);
    email = email.toLowerCase();

    if (
      email[0] >= "a" &&
      email[0] <= "z" &&
      email[0] != ["1" - "9"] &&
      email.includes("@") &&
      email[email.indexOf("@") + 1] >= "a" &&
      email[email.indexOf("@") + 1] <= "z" &&
      email.includes(".") &&
      email[email.indexOf(".") + 1] >= "a" &&
      email[email.indexOf(".") + 1] <= "z"
    ) {
      console.log(password.length);
      if (
        password.length > 8 &&
        password.includes(["A" - "Z"]) &&
        password.includes(["a" - "z"]) &&
        password.includes([1 - 9]) &&
        password.includes(
          "[" ||
            "!" ||
            "@" ||
            "£" ||
            "$" ||
            "%" ||
            "^" ||
            "&" ||
            "*" ||
            "(" ||
            ")" ||
            "_" ||
            "-" ||
            "=" ||
            "+" ||
            "[" ||
            "]" ||
            "{" ||
            "}" ||
            "||" ||
            "." ||
            "/" ||
            '"' ||
            '"' ||
            "*" ||
            "`" ||
            "~"
        )
      ) {
        handleLoginData(email, password);
      } else {
        console.log(
          password.includes([1 - 9]),
          password.includes(
            "[" ||
              "!" ||
              "@" ||
              "£" ||
              "$" ||
              "%" ||
              "^" ||
              "&" ||
              "*" ||
              "(" ||
              ")" ||
              "_" ||
              "-" ||
              "=" ||
              "+" ||
              "[" ||
              "]" ||
              "{" ||
              "}" ||
              "||" ||
              "." ||
              "/" ||
              '"' ||
              '"' ||
              "*" ||
              "`" ||
              "~"
          )
        );
        console.log(password);
        alert("password must be atleast 8 letters");
      }
    } else {
      alert("Enter valid email");
    }
  };

  let state = {
    email,
    password,
  };

  let handlers = {
    handleFormData,
  };
  return (
    <div>
      <LoginFormView state={state} handlers={handlers} />
    </div>
  );
}

export default loginFormContainer;
