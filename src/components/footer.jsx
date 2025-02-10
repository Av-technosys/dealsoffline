import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-black mt-12 w-full text-white px-6 py-6 md:px-4">
      <div className="bg-primary-black container flex justify-between flex-col gap-4">
        <div className="flex w-full flex-col md:flex-row justify-between gap-8">
          <div className="w-full flex flex-col gap-2">
            <p className="text-4xl font-semibold">LOGO</p>
            <p className="  text-lg font-semibold">About</p>
            <p className=" text-sm">About walk in town</p>
            <p className=" text-sm">Carrer</p>
            <p className=" text-sm">WIT Stories</p>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <p className="font-semibold text-xl">Quick Links</p>
            <p className="text-sm">Home</p>
            <p className="text-sm">About Us</p>
            <p className="text-sm">Terms & Conditions</p>
            <p className="mt-1">Privacy Policy</p>
            <p className="mt-1 font-semibold text-lg">Follow us on</p>
            <div className="flex items-center gap-3 mt-2">
              <div>
                <img src="./facebook.png" alt="" />
              </div>
              <div>
                <img src="./location.png" alt="" />
              </div>
              <div>
                <img src="./insta.png" alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-xl">Categories</p>
            <p className="text-sm">Men</p>
            <p className="text-sm">Women</p>
            <p className="text-sm">Kids</p>
            <p className="text-sm">Beauty</p>
            <p className="text-sm">Home Decor</p>
            <p className="text-sm">Home Appliences</p>
            <p className="text-sm">Electronics</p>
          </div>

          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-xl">Grow With Us</p>
            <p className="text-sm">Protect & Build Brand</p>
            <p className="text-sm">Become WIT Affiliated</p>
            <p className="text-sm">Advertise Your Product</p>
            <p className="text-sm">Security</p>
            <p className="text-sm">Privacy</p>
          </div>


          <div className="flex flex-col w-full gap-2">
            <p className="font-semibold text-xl">Let Us Help You</p>
            <p className="text-sm">Mail us</p>
            <p className="text-sm">Your Account</p>
            <p className="text-sm">100% Authentication</p>
            <p className="text-sm">Download App</p>
            <p className="text-sm">Help Center</p>
          </div>

        </div>
        <hr />
        <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
          <p>Copyright © 2024. All rights reserved</p>
          <p>
            We use cookies for better service.
            <span className="font-semibold">Accept</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
