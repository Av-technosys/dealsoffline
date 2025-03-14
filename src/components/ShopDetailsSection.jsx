"use client";
import {
  BookImage,
  ChevronLeftCircle,
  ChevronRightCircle,
  Info,
  Pencil,
} from "lucide-react";
import InputFild from "./inputFild";
import MenMenu from "./dialog/filter/men";
import WomenMenu from "./dialog/filter/women";
import MenuKids from "./dialog/filter/kid";
import BeautyMenu from "./dialog/filter/beauty";
import HomeDecoreMenu from "./dialog/filter/homeDecore";
import HomeAppliencesMenu from "./dialog/filter/homeAppliences";
import ElectronicsMenu from "./dialog/filter/electronics";
import React, { useState } from "react";
import BrandsShowMore from "./dialog/brandsShowMore";
import StoreImageSelector from "./storeImageSelector";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import TermsAndConditionVendorDetailsDialog from "./dialog/termsAndConditionVendorDetails";

export default function ShopDetailsSection({ path }) {
  const [userImage, setUserImage] = React.useState(null);
  function handleImageUpload(e) {
    setUserImage(e.target.files[0]);
  }
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className=" px-4 max-w-5xl mx-auto w-full flex flex-col gap-4">
      <div className=" mx-auto w-fit flex flex-col gap-4">
        <p className=" text-3xl md:text-4xl font-medium ">Business Details</p>
        <p className=" text-gray-600 ">
          Fill the Details to get more business Opportunities
        </p>
      </div>
      <div className=" flex flex-col gap-16 md:gap-20 lg:flex-row">
        <div className=" flex w-full max-w-none  lg:max-w-60 mt-6 lg:mt-28 shrink-0 flex-col gap-4">
          <StoreImageSelector />

          <div className="flex mt-12 flex-col">
            <div className=" flex flex-col gap-4">
              <p className=" text-3xl md:text-4xl font-medium">
                Product Categories
              </p>
              <p className=" text-gray-600">Select Categories for Shop</p>
            </div>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <MenMenu path="vendor" />
              <WomenMenu path="vendor" />
              <MenuKids path="vendor" />
              <BeautyMenu path="vendor" />
              <HomeDecoreMenu path="vendor" />

              <HomeAppliencesMenu path="vendor" />
              <ElectronicsMenu path="vendor" />
            </div>
            <div>
              <p className="font-semibold mt-6 text-lg">Brands</p>
              <p className=" text-sm text-gray-600">
                Select your Trusted Brand
              </p>
            </div>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <SearchByBrand path="vendor" />
            </div>
          </div>
        </div>

        <div>
          <div className=" flex mt-6 flex-col gap-2 w-full">
            <InputFild label={"Shop Name"} />
            <div className=" flex flex-col gap-1">
              <p className=" font-semibold">
                Shop Description <span className=" text-primary-red">*</span>
              </p>
              <textarea
                rows={4}
                type="text"
                className=" text-sm rounded-md p-2 border "
              />
            </div>
            <InputFild label={"Address"} />
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <InputFild label={"Pin code"} />
              <InputFild label={"Landmark"} notNsc={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <InputFild label={"State"} notNsc={true} disable={true} />
              <InputFild label={"City"} notNsc={true} disable={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <InputFild label={"Longitude"} notNsc={true} disable={true} />
              <InputFild label={"Latitude"} notNsc={true} disable={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex flex-col gap-1">
                <p className=" font-semibold">
                  Location/Area* <span className=" text-primary-red">*</span>
                </p>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Jaipur">Jaipur</SelectItem>
                      <SelectItem value="Malviya Nagar">
                        Malviya Nagar
                      </SelectItem>
                      <SelectItem value="Delhi">Delhi</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <InputFild label={"GST Number"} notNsc={true} />
            </div>
            <div className=" w-full flex flex-col md:flex-row gap-4">
              <div className=" w-full flex justify-between flex-col gap-1">
                <p className=" font-semibold">
                  WalkIn Town Additional Discount{" "}
                  <span className=" text-primary-red">*</span>
                </p>
                <input
                  type="text"
                  className=" bg-white text-sm rounded-md p-2 border "
                />
                <div className="mt-2">
                  <TermsAndConditionVendorDetailsDialog
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                  />
                </div>
              </div>
              <div className=" w-full flex flex-col gap-1">
                <div className=" flex gap-1 items-center">
                  Subscription Plan <span className=" text-primary-red">*</span>
                  <Info size={18} color="#666" />
                </div>
                <SelectPlan />
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2 flex-row">
            <ChevronLeftCircle className="shrink-0" size={20} />
            <div className=" max-w-2xl overflow-x-scroll px-2 hide-scrollbar flex relative gap-2 w-full">
              <div className=" relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5">
                <p className="  text-black text-sm  text-center">
                  Upload image here
                </p>
                <BookImage
                  size={20}
                  className=" absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white"
                />
              </div>
              {[
                "./v2.png",
                "./v3.png",
                "./v4.png",
                "./v5.png",
                "./v2.png",
                "./v3.png",
              ].map((item, index) => (
                <div key={index} className=" w-36 shrink-0 relative">
                  <img src={item} />
                  <Pencil
                    size={20}
                    className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black"
                  />
                </div>
              ))}
            </div>
            <ChevronRightCircle className="shrink-0" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchByBrand({ path }) {
  const brands = [
    "./companies-logo/zara.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./companies-logo/gap.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./companies-logo/gap.png",
  ];
  const [selectedFields, setSelectedFields] = useState([]);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      setSelectedFields(selectedFields.filter((item) => item !== value));
    } else {
      setSelectedFields([...selectedFields, value]);
    }
  };
  return (
    <div className="flex w-full mt-3 overflow-x-auto md:flex-wrap gap-2">
      {/* <div className=" py-1 px-2 shrink-0 flex items-center justify-center bg-secondary-red font-semibold text-sm rounded-md" >Vaishali Nagar</div> */}
      {brands?.slice(0, 6).map((data, idx) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={idx}
            className={`h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md ${
              isPresect ? "bg-secondary-red" : ""
            }`}
          >
            <img key={data} className=" w-full h-full " src={data} alt="" />
          </div>
        );
      })}
      <BrandsShowMore
        path={path}
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
        itemsToShow={brands.slice(6)}
      />
    </div>
  );
}
function SelectPlan() {
  const [selected, setSelected] = useState("Silver");
  const types = ["Silver", "Gold", "Platinum"];
  return (
    <div className=" flex cursor-pointer w-fit flex-col gap-1">
      {types.map((item, index) => (
        <div
          onClick={() => setSelected(item)}
          key={index}
          className=" flex gap-1 items-center"
        >
          <input
            checked={selected === item}
            onChange={() => setSelected(item)}
            name="radio"
            type="radio"
            className="w-fit"
          />

          <p
            className={`${selected === item ? "text-black" : " text-gray-400"}`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}
