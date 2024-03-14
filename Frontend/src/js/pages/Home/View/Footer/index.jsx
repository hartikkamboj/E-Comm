import React from "react";
import TwitterIcon from "../../../../../assets/TwitterIcon.png";
import FaceBookIcon from "../../../../../assets/FaceBookIcon.png";
import InstaIcon from "../../../../../assets/InstaIcon.png";
import GitIcon from "../../../../../assets/GitIcon.png";

function FooterView() {
  return (
    <div className="flex p-16 bg-Background-color w-full absolute">
      <div className="w-1/3">
        <div className=" w-1/7 mr-2 flex justify-start items-center">
          <h1 className=" text-3xl font-bold pb-4">SHOP.CO</h1>
        </div>
        <div className="w-2/3">
          <p className="text-xs">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <div className="flex">
          <img src={TwitterIcon} alt="TwitterLogo" />
          <img src={FaceBookIcon} alt="FaceBookLogo" />
          <img src={InstaIcon} alt="InstaLogo" />
          <img src={GitIcon} alt="GitLogo" />
        </div>
      </div>
      <div className="flex justify-evenly w-2/3">
        <div>
          <p className="font-bold pb-4">Company</p>
          <ul>
            <li className="pb-3">About</li>
            <li className="pb-3">Features</li>
            <li className="pb-3">Works</li>
            <li className="pb-3">Career</li>
          </ul>
        </div>
        <div>
          <p className="font-bold pb-4">Help</p>
          <ul>
            <li className="pb-3"> Customer Support</li>
            <li className="pb-3">Delivery Details</li>
            <li className="pb-3">Terms & Conditions</li>
            <li className="pb-3"> Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="font-bold pb-4">FAQ</p>
          <ul>
            <li className="pb-3">Account</li>
            <li className="pb-3">Manage Deliveries</li>
            <li className="pb-3">Orders</li>
            <li className="pb-3">Payments</li>
          </ul>
        </div>
        <div>
          <p className="font-bold pb-4">Resources</p>
          <ul>
            <li className="pb-3"> Free eBooks</li>
            <li className="pb-3">Development Tutorial</li>
            <li className="pb-3">How to - Blog</li>
            <li className="pb-3">Youtube Playlist</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterView;
