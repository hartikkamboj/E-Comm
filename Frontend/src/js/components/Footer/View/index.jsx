import React from "react";
import TwitterIcon from "../../../../assets/TwitterIcon.png";
import FaceBookIcon from "../../../../assets/FaceBookIcon.png";
import InstaIcon from "../../../../assets/InstaIcon.png";
import GitIcon from "../../../../assets/GitIcon.png";

function FooterView() {
  return (
    <div className="flex p-16 pb-8 bg-Background-color w-full absolute">
      <div className="m-8 lg:flex w-full">
        <div className="lg:w-1/3 w-full">
          <div className=" w-1/7 mr-2 flex justify-start items-center">
            <h1 className=" text-3xl font-bold pb-4">SHOP.CO</h1>
          </div>
          <div className="lg:w-2/3 w-full">
            <p className="text-xs">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>
          <div className="flex lg:justify-start justify-center">
            <img src={TwitterIcon} className="m-2" alt="TwitterLogo" />
            <img src={FaceBookIcon} className="m-2" alt="FaceBookLogo" />
            <img src={InstaIcon} className="m-2" alt="InstaLogo" />
            <img src={GitIcon} className="m-2" alt="GitLogo" />
          </div>
        </div>
        <div className="flex justify-evenly w-2/3">
          <div>
            <p className="font-bold pb-4  ">Company</p>
            <ul>
              <li className="pb-3 text-sm text-gray-500">About</li>
              <li className="pb-3 text-sm text-gray-500">Features</li>
              <li className="pb-3 text-sm text-gray-500">Works</li>
              <li className="pb-3 text-sm text-gray-500">Career</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4 ">Help</p>
            <ul>
              <li className="pb-3 text-sm text-gray-500"> Customer Support</li>
              <li className="pb-3 text-sm text-gray-500">Delivery Details</li>
              <li className="pb-3 text-sm text-gray-500">Terms & Conditions</li>
              <li className="pb-3 text-sm text-gray-500"> Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4 ">FAQ</p>
            <ul>
              <li className="pb-3 text-sm text-gray-500">Account</li>
              <li className="pb-3 text-sm text-gray-500">Manage Deliveries</li>
              <li className="pb-3 text-sm text-gray-500">Orders</li>
              <li className="pb-3 text-sm text-gray-500">Payments</li>
            </ul>
          </div>
          <div>
            <p className="font-bold pb-4 ">Resources</p>
            <ul>
              <li className="pb-3 text-sm text-gray-500"> Free eBooks</li>
              <li className="pb-3 text-sm text-gray-500">
                Development Tutorial
              </li>
              <li className="pb-3 text-sm text-gray-500">How to - Blog</li>
              <li className="pb-3 text-sm text-gray-500">Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterView;
