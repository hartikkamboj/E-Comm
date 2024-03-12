import axios from "axios";
import { Api } from "../Api/Api";

const loginDataHandler = async (email, password) => {
  const result = await axios.post(Api.LoginUserDetailsSender, {
    email,
    password,
  });
  return result;
};

const LoginPageTokenVerifier = async (email, password) => {
  const result = await axios.get(Api.TokenVerifyApi, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("uid")}`,
    },
  });
  return result;
};

export { LoginDataHandler, LoginPageTokenVerifier };
