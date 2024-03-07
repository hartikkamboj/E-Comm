import React from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/google-2.png";
import MainIcon from "../../assets/global.png";
import PasswordIcon from "../../assets/eye.png";
import AppleIcon from "../../assets/apple.png";
import FacebookIcon from "../../assets/facebook.png";

function Login() {
  return (
    <>
      <div className="w-screen flex justify-center h-screen align-center">
        <main className="w-1/3 p-4  rounded-lg shadow-md h-fit">
          <section className="">
            <div className="flex justify-center mb-5 mt-5">
              <div className="border shadow-sm shadow-gray-300 flex justify-center w-12 p-2 rounded-lg">
                <img src={MainIcon} alt="img" className="w-6" />
              </div>
            </div>
            <div className=" flex justify-center mb-6 mt-6">
              <div className="text-center">
                <h2>Welcome back</h2>
                <p>Please enter yours details to sign in</p>
              </div>
            </div>
            <div className="flex justify-center mb-6 mt-6">
              <div className="flex w-screen">
                <div className="border w-1/3 flex justify-center mr-2 rounded-md p-2 shadow-sm shadow-gray-200 ">
                  <img src={GoogleIcon} alt="google" className=" w-4 h-4" />
                </div>
                <div className="border  w-1/3 flex justify-center mr-2 border-r-2 rounded-md p-2 shadow-sm shadow-gray-200">
                  <img src={AppleIcon} alt="apple" className=" w-4 h-4" />
                </div>
                <div className="border  w-1/3 flex justify-center mr-2 border-r-2 rounded-md p-2 shadow-sm shadow-gray-200">
                  <img src={FacebookIcon} alt="ggit" className=" w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="border-t w-1/2 mt-3 mb-3 pr-1"></div>
              <span>or</span>
              <div className="border-t w-1/2  mt-3 mb-3 pl-1"></div>
            </div>
            <div>
              <div>
                <p className=" text-sm text-gray-900 mb-1">Email address</p>
                <div className="border-2 pl-2 rounded-md  mb-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-2">Password</p>
                <div className="flex border-2 pl-2 rounded-md mb-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your password"
                  />
                  <div className="flex justify-end w-4/5 mt-1 pr-2">
                    <img src={PasswordIcon} alt="eye" className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex pl-2 mb-2 mt-2">
                  <div className="w-1/2 flex text-xs text-gray-900">
                    <input type="checkbox" name="" id="" />
                    <p>Remember for 30 days</p>
                  </div>
                  <div className="flex justify-end w-1/2 pl-5 text-xs">
                    <Link className=" justify-end underline to-black">
                      Forget password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" border-t p-5 mt-5">
            <div>
              <button className="border bg-black text-white text-center rounded-md w-full h-10">
                Sign in
              </button>
            </div>
            <div className="flex justify-center">
              <p>Don't have an account?</p>
              <Link>Create account</Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Login;
