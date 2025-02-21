"use client"
import { BookImage, CameraIcon, ChevronLeftCircle, ChevronRightCircle, Info, InfoIcon, Pencil, PencilLineIcon, Save, Square } from "lucide-react";
import InputFild from "./inputFild";
import MenMenu from "./dialog/filter/men";
import WomenMenu from "./dialog/filter/women";
import MenuKids from "./dialog/filter/kid";
import BeautyMenu from "./dialog/filter/beauty";
import HomeDecoreMenu from "./dialog/filter/homeDecore";
import HomeAppliencesMenu from "./dialog/filter/homeAppliences";
import ElectronicsMenu from "./dialog/filter/electronics";
import TermsAndConditioBusinessDetailsnDialog from "./dialog/termsAndCondition";
import React, { useState } from "react";
import BrandsShowMore from "./dialog/brandsShowMore";

export default function ShopDetailsSection({ path }) {
  const [userImage, setUserImage] = React.useState(null)
  function handleImageUpload(e) {
    setUserImage(e.target.files[0])
  }


  function handleApplyFilter() {

  }
  const [isChecked, setIsChecked] = React.useState(false);
  return <div className=' px-4 max-w-5xl md:mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' flex flex-col gap-16 md:gap-20 md:flex-row' >
      <div className=' flex md:max-w-60 md:mt-28 shrink-0 flex-col gap-4' >
        <div className=' max-w-44 md:max-w-60 w-full relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
          {
            userImage ? <img src={URL.createObjectURL(userImage)} className=" h-full rounded-md w-full object-cover" alt="" /> : <p className=' text-center p-4' >Upload your image here</p>
          }
          <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-red-700 p-1 flex items-center justify-center rounded-full" >
            <CameraIcon className=' text-white' size={36} />
          </div>
          <input onChange={handleImageUpload} type='file' accept='image/*' className=' absolute opacity-0 w-full h-full inset-0' />
        </div>
        <div className="flex mt-12 flex-col">
          <div className=' flex flex-col gap-4' >
            <p className=' text-3xl md:text-4xl font-medium' >Product Categories</p>
            <p className=' text-gray-600' >Select Categories for Shop</p>
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
          <p className="font-semibold mt-6 text-lg">Brands</p>
          <p className=" text-sm text-gray-600" >Select your Trusted Brand</p>
          <div className="flex w-full mt-3 flex-wrap gap-2">
            {/* <div className=" py-1 px-2  bg-red-200 font-semibold text-sm rounded-md" >Zara</div> */}
            {/* {
                ["H&M", "Puma", "Forever 21", "Gap", "Snitch", "Levi’s", "Marks & Spencer"].map((data) => {
                  return (
                    <div key={data} className=" py-1 px-2 border border-black font-semibold text-sm rounded-md" >{data}</div>
                  )
                })
              } */}
            {/* {
              ["h&m", "puma", "forever", "gap", "gap"].map((data, ind) => {
                return (
                  // <div key={data} className=" py-1 px-2 border border-black font-semibold text-sm rounded-md" >{data}</div>
                  <div key={ind} className=" h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md" >
                    <img key={data} className=" w-full h-full " src={`/companies-logo/${data}.png`} alt="" />
                  </div>
                )
              })
            } */}

            <SearchByBrand path="vendor" />
          </div>
          <div onClick={handleApplyFilter} className=" border border-red-700 flex gap-2 items-center justify-center duration-200 bg-red-700 px-4 py-2 rounded-md cursor-pointer text-white text-center font-semibold mt-6" >
            <p>Save</p>
            <Save size={20} />
          </div>
        </div>
      </div>

      <div>
        <div className=' w-fit flex flex-col gap-4' >
          <p className=' text-3xl md:text-4xl font-medium ' >Business Details</p>
          <p className=' text-gray-600 ' >Fill the Details to get more business Opportunities</p>
        </div>
        <div className=' flex mt-6 flex-col gap-2 w-full' >
          <InputFild label={"Shop Name"} />
          <div className=' flex flex-col gap-1' >
            <p className=" font-semibold" >Shop Description <span className=' text-red-700' >*</span></p>
            <textarea rows={4} type='text' className=' text-sm rounded-md p-2 border ' />
          </div>
          <InputFild label={"Address"} />
          <div className=' w-full flex flex-col md:flex-row gap-4'  >
            <InputFild label={"Pin code"} />
            <InputFild label={"Landmark"} notNsc={true} />
          </div>
          <div className=' w-full flex flex-col md:flex-row gap-4'  >
            <InputFild label={"State"} notNsc={true} disable={true} />
            <InputFild label={"City"} notNsc={true} disable={true} />
          </div>
          <div className=' w-full flex flex-col md:flex-row gap-4'  >
            <InputFild label={"Longitude"} notNsc={true} disable={true} />
            <InputFild label={"Latitude"} notNsc={true} disable={true} />
          </div>
          <div className=' w-full flex flex-col md:flex-row gap-4'  >
            <div className=' w-full flex flex-col gap-1' >
              <p className=" font-semibold" >Location/Area* <span className=' text-red-700' >*</span></p>
              <select rows={4} type='text' className=' bg-white text-sm rounded-md p-2 border ' />
            </div>
            <InputFild label={"GST Number"} notNsc={true} />
          </div>
          <div className=' w-full flex flex-col md:flex-row gap-4'  >
            <div className=' w-full flex justify-between flex-col gap-1' >
              <p className=" font-semibold" >WalkIn Town Additional Discount <span className=' text-red-700' >*</span></p>
              <input type='text' className=' bg-white text-sm rounded-md p-2 border ' />
              <div className="mt-2">
                <TermsAndConditioBusinessDetailsnDialog isChecked={isChecked} setIsChecked={setIsChecked} />
              </div>
            </div>
            <div className=' w-full flex flex-col gap-1' >
              <div className=' flex gap-1 items-center' >Subscription Plan <span className=' text-red-700' >*</span><Info size={18} color="#666" /></div>
              <div className=' flex flex-col gap-1' >
                <div className=' flex gap-1 items-center' >
                  <input name='radio' type='radio' defaultChecked className=' w-fit' />
                  <p className='' >Silver</p>
                </div>
                <div className=' flex gap-1 items-center' >
                  <input name='radio' type='radio' className=' w-fit' />
                  <p className='  text-gray-400' >Gold</p>
                </div>
                <div className=' flex gap-1 items-center' >
                  <input name='radio' type='radio' className=' w-fit' />
                  <p className='  text-gray-400' >Platinum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' mt-6  flex items-center gap-2 flex-row' >
          <ChevronLeftCircle className="shrink-0" size={20} />
          <div className=' max-w-2xl overflow-x-scroll px-2 hide-scrollbar flex relative gap-2 w-full' >
            <div className=' relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5' >
              <p className='  text-black text-sm  text-center' >Upload image here</p>
              <BookImage size={20} className=" absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white" />
            </div>
            {
              ["./v2.png", "./v3.png", "./v4.png", "./v5.png", "./v2.png", "./v3.png"].map((item, index) => (
                <div key={index} className=" w-36 shrink-0 relative" >
                  <img src={item} />
                  <Pencil size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
                </div>
              ))
            }
          </div>
          <ChevronRightCircle className="shrink-0" size={20} />
        </div>
      </div>
    </div>
  </div>
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
    "./companies-logo/gap.png"
  ];
  const [selectedFields, setSelectedFields] = useState([]);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      setSelectedFields(selectedFields.filter((item) => item !== value));
    } else {
      setSelectedFields([...selectedFields, value]);
    }
  }
  return (
    <div className="flex w-full mt-3 overflow-x-auto md:flex-wrap gap-2">
      {/* <div className=" py-1 px-2 shrink-0 flex items-center justify-center bg-red-200 font-semibold text-sm rounded-md" >Vaishali Nagar</div> */}
      {
        brands?.slice(0, 6).map((data, idx) => {
          const isPresect = selectedFields.includes(data);
          console.log(data)
          return (
            <div onClick={() => handleCheckboxChange(data)} key={idx} className={`h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md ${isPresect ? "bg-red-200" : ""}`} >
              <img key={data} className=" w-full h-full " src={data} alt="" />
            </div>)
        })
      }
      <BrandsShowMore path={path} selectedFields={selectedFields} setSelectedFields={setSelectedFields} itemsToShow={brands.slice(6)} />
    </div>
  )
}