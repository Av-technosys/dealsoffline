"use client";
import React, { useEffect, useRef, useState } from "react";
import TermsAndConditionVendorDetailsDialog from "./dialog/termsAndConditionVendorDetails";
import InputFild from "./inputFild";
import { CameraIcon, X } from "lucide-react";
import StoreImageSelector from "./storeImageSelector";

export default function ProfileSection() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className=" max-w-6xl px-4 md:mt-12 mx-auto w-full flex flex-col gap-4">
      <div className=" flex flex-col h-full gap-16 md:gap-20 md:flex-row ">
        <div className="  h-full w-full max-w-56  flex md:justify-end md:items-end  mt-auto ">
          <StoreImageSelector />
        </div>
        <div className=" flex flex-col w-full gap-6 md:gap-12">
          <div className=" flex flex-col gap-4">
            <p className=" text-3xl md:text-4xl font-medium">Vendor Details</p>
            <p className=" text-gray-600">
              Fill the Details to gain Costumer’s trust
            </p>
          </div>
          <div className=" flex flex-col gap-3 w-full">
            <div className=" grid grid-cols-1 sm:grid-cols-2 w-full gap-2">
              <InputFild label={"Name"} inputName={"Naveen Sharma"} />
              <InputFild
                label={"Email ID/ User ID"}
                inputName={"naveensharma@gmail.com"}
              />
              <div className=" flex flex-col w-full gap-1">
                <p className={`font-semibold`}>
                  Phone Number
                  <span className=" text-primary-red">*</span>
                </p>
                <input
                  type="text"
                  defaultValue={"91-9012345678"}
                  className=" w-full text-sm rounded-md p-2 border "
                />
                <InputFildNumber />
              </div>
              <InputFild
                label={"WhatsApp Number"}
                inputName={"91-9012345678"}
                same={true}
              />
            </div>
            <div className=" mt-3">
              <TermsAndConditionVendorDetailsDialog
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFildNumber() {
  return (
    <div className=" w-full flex flex-col gap-1">
      <div className=" flex mt-4 items-center gap-6">
        <div className=" flex gap-2 items-center">
          <input type="checkbox" className=" size-4" disabled />
          <p className=" text-gray-600 ">Active</p>
        </div>
        <div className=" flex gap-2 items-center">
          <input type="checkbox" className=" size-4" disabled />
          <p className=" text-gray-600 ">Verified</p>
        </div>
      </div>
    </div>
  );
}
