import React, { useEffect, useRef } from "react";
import axios from "axios";
import LoginFormView from "../../Views/LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../../../core/Redux/features/productData";

function loginFormContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    //   handleTokenVerifier();
    if (localStorage.getItem("uid") !== null) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);
  let lowerCaseaAlphabetCounter = 0;
  let upperCaseAlphbetCounter = 0;
  let specialCharactersCounter = 0;
  const lowerCaseAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const upperCaseAlphbet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const specialCharacters = [
    "[",
    "!",
    "@",
    "£",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    ",",
    ".",
    "/",
    '"',
    '"',
    "*",
    "`",
    "~",
  ];
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");

  const handleLoginData = async (email, password) => {
    const response = await axios.post("http://localhost:3001/", {
      email,
      password,
    });
    if (response.data == "not allowed") {
      alert("create account");
    } else {
      localStorage.setItem("uid", response.data);
      dispatch(setUserEmail(email));
      navigate("/home");
    }
  };

  const handleFormData = (email, password) => {
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
      if (password.length > 8) {
        for (let i = 0; i < lowerCaseAlphabet.length; i++) {
          if (password.includes(lowerCaseAlphabet[i])) {
            lowerCaseaAlphabetCounter = 1;
          }
        }
        if (lowerCaseaAlphabetCounter == 0) {
          alert("must contain lowercase letters");
        } else {
          for (let i = 0; i < upperCaseAlphbet.length; i++) {
            if (password.includes(upperCaseAlphbet[i])) {
              upperCaseAlphbetCounter = 1;
            }
          }
          if (upperCaseAlphbetCounter == 0) {
            alert("must contain uppercase letters");
          } else {
            for (let i = 0; i < specialCharacters.length; i++) {
              if (password.includes(specialCharacters[i])) {
                specialCharactersCounter = 1;
              }
            }
            if (specialCharactersCounter == 0) {
              alert("must contain specialCharacters");
            } else {
              handleLoginData(email, password);
            }
          }
        }
      } else {
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
