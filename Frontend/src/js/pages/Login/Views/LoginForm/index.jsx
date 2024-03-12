import React from "react";
import GoogleIcon from "../../../../../assets/google-2.png";
import MainIcon from "../../../../../assets/global.png";
import PasswordIcon from "../../../../../assets/eye.png";
import AppleIcon from "../../../../../assets/apple.png";
import FacebookIcon from "../../../../../assets/facebook.png";
import { Link } from "react-router-dom";

function loginFormView({ state, handlers }) {
  return (
    <>
      <>
        <div className="w-screen flex bg-[#F2F0F1] justify-center h-screen items-center">
          <main className="w-full sm:w-2/3 lg:w-3/12 p-4 bg-white rounded-lg shadow-md border h-fit">
            <div className="flex justify-center mb-5 mt-5">
              <div className="border shadow-sm shadow-gray-300 flex justify-center w-10 p-1 rounded-lg">
                <img src={MainIcon} alt="img" className="w-6" />
              </div>
            </div>
            <div className=" flex justify-center mb-6 mt-6">
              <div className="text-center">
                <h2 className="text-2xl">Welcome back</h2>
                <p className=" text-xs text-gray-500">
                  Please enter yours details to sign in
                </p>
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
              <div className="border-t w-1/2 mt-3 mb-3 mr-2"></div>
              <span className=" text-gray-600">or</span>
              <div className="border-t w-1/2  mt-3 mb-3 ml-2"></div>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                handlers.handleFormData(
                  state.email.current.value,
                  state.password.current.value
                );
              }}
            >
              <div>
                <div className="mb-4">
                  <p className=" text-xs text-gray-900 mb-2">Email address</p>
                  <div className=" border h-8 shadow-sm pl-2 rounded-md  mb-2">
                    <input
                      className=" w-full text-sm h-full focus:outline-none"
                      type="text"
                      name="email"
                      id="current-email"
                      placeholder="Enter your email"
                      required
                      ref={state.email}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-900 mb-2">Password</p>
                  <div className="flex h-8 border shadow-sm pl-2 rounded-md mb-1">
                    <input
                      className=" w-full text-sm focus:outline-none"
                      type="password"
                      name="password"
                      id="current-password"
                      placeholder="Enter your password"
                      required
                      ref={state.password}
                    />
                    <div className="flex justify-end w-1/12 mt-1 pr-2">
                      <img src={PasswordIcon} alt="eye" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                {/* <div>
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
              </div> */}
              </div>

              <div className=" border-t pt-5 pb-2 mt-5">
                <div>
                  <button
                    type="submit"
                    className="border text-xs bg-black text-white text-center rounded-md w-full h-10"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center text-xs pb-2">
              <p>Don't have an account?</p>
              <Link className=" underline">Create account</Link>
            </div>
          </main>
        </div>
      </>
    </>
  );
}

export default loginFormView;
