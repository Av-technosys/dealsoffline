import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-black mt-12 w-full text-white px-6 py-6 md:px-4">
      <div className="bg-primary-black container flex justify-between flex-col gap-4">
        <div className="flex w-full flex-col md:flex-row justify-between gap-8">
          <div className="w-full max-w-80">
            <p className="text-4xl font-semibold">LOGO</p>
            <p className="leading-8 text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="flex gap-6 md:flex-row flex-col">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Quick Links</p>
              <p className="text-sm">Home</p>
              <p className="text-sm">About Us</p>
              <p className="text-sm">Terms & condition</p>
              <p className="text-sm">Privacy Policy</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Categories</p>
              <p className="text-sm">Fashion</p>
              <p className="text-sm">Electronics</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-xl">Office</p>
              <p className="text-sm">xyz</p>
              <p className="text-sm">xyz</p>
              <p className="text-sm">xyz</p>
              <p className="mt-1">info@logo.com</p>
              <p className="mt-1">012-345-6789</p>
              <p className="mt-1 font-semibold text-lg">Follow us on</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="p-2 rounded-full overflow-hidden bg-white">
                  <img src="./fb.svg" alt="" />
                </div>
                <div className="p-2 rounded-full overflow-hidden bg-white">
                  <img src="./x.svg" alt="" />
                </div>
                <div className="p-2 rounded-full overflow-hidden bg-white">
                  <img src="./insta.svg" alt="" />
                </div>
              </div>
            </div>
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
