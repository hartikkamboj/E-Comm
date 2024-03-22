import React from "react";
import EmailIcon from "../../../../assets/Emailcon.png";
function NewsLetterSubscriptionView() {
  return (
    <>
      <div className="w-full pl-16 pr-16 pt-8 relative z-10 top-16">
        <div className="lg:flex w-full bg-black rounded-3xl ">
          <div className="lg:w-3/5 w-full flex justify-center p-8 ">
            <h1 className="text-white lg:text-4xl text-2xl font-black">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS{" "}
            </h1>
          </div>
          <div className="lg:w-1/2 w-full flex lg:justify-end justify-center items-center">
            <div className="w-4/5 p-4">
              <div className="flex border bg-white w-11/12 rounded-full p-2">
                <img src={EmailIcon} alt="" className="pl-1 pr-1" />
                <input
                  className="w-full  focus:outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>
              <button className="border-2 rounded-full bg-white  p-2 mt-4 w-11/12">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetterSubscriptionView;
