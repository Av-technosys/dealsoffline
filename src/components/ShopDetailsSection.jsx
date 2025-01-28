import { BookImage, Info, InfoIcon } from "lucide-react";
import InputFild from "./inputFild";
import WomenBox from "./womenBook";

export default function ShopDetailsSection() {
  return <div className=' px-4 max-w-5xl mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Profile Setup</p>
      <p className=' text-gray-600 text-center' >Manage all your account settings and preferences</p>
    </div>
    <div className=' flex flex-col gap-8 md:flex-row' >
      <div className=' flex md:max-w-72 shrink-0 flex-col gap-4' >
        <p className=' text-3xl font-medium text-centerblack mx-auto md:text-left' >Contact Details</p>
        <p className=' text-gray-600 text-center mx-auto md:text-left' >Enter your shop details</p>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-lg">Types</p>
          <div className="flex w-full flex-wrap gap-2">
            <WomenBox />
            <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
              Men
              <img src="./men.svg" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
              Kids
              <img src="./kids.svg" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
              Home & Living
              <img src="./home-and-living.svg" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
              Beauty
              <img src="./beauty.svg" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
              Home Appliances
              <img src="./home-applience.svg" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
              Personal Electronics
              <img src="./personal-electronics.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col gap-2 w-full' >
        <InputFild label={"Shop Name"} />
        <div className=' flex flex-col gap-1' >
          <p>Shop Description <span className=' text-red-700' >*</span></p>
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
            <p>Brand <span className=' text-red-700' >*</span></p>
            <select rows={4} type='text' className=' bg-white text-sm rounded-md p-2 border ' />
          </div>
          <InputFild label={"GST Number"} notNsc={true} />
        </div>
        <div className=' w-full flex flex-col md:flex-row gap-4'  >
          <div className=' w-full flex flex-col gap-1' >
            <p>WalkIn Town Additional Discount <span className=' text-red-700' >*</span></p>
            <input type='text' className=' bg-white text-sm rounded-md p-2 border ' />
            <div className=' flex gap-2 items-center' >
              <input type='checkbox' ></input>
              <p className=' text-gray-600 text-sm' >Terms and Conditions</p>
              <Info size={18} color="#666" />
            </div>
          </div>
          <div className=' w-full flex flex-col gap-1' >
            <div className=' flex gap-1 items-center' >Subscription Plan <span className=' text-red-700' >*</span><Info size={18} color="#666" /></div>
            <div className=' flex flex-col gap-1' >
              <div className=' flex gap-1 items-center' >
                <input name='radio' type='radio' defaultChecked className=' w-fit' />
                <p className=' text-red-700' >Silver</p>
              </div>
              <div className=' flex gap-1 items-center' >
                <input name='radio' type='radio' className=' w-fit' />
                <p className=' ' >Gold</p>
              </div>
              <div className=' flex gap-1 items-center' >
                <input name='radio' type='radio' className=' w-fit' />
                <p className=' ' >Platinum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=' mt-6  flex flex-col gap-8 md:flex-row' >
      <div className=' w-fit rounded cursor-pointer h-fit mx-auto items-center flex gap-2 px-3 border border-red-700 py-1.5' >
        <p className='  text-red-700 text-sm text-nowrap text-center' >Click to upload images</p>
        <BookImage size={20} color='#b91c1c' />
      </div>
      <div className=' overflow-x-scroll px-4 hide-scrollbar flex relative gap-2 w-full' >
        {/* <div className=' p-1 border absolute -translate-y-1/2 bg-white top-1/2 -left-1 rounded-full' >
        <ChevronLeft className='text-red-700' size={18} />
        </div>
        <div className=' p-1 border absolute -translate-y-1/2 bg-white top-1/2 translate-x-1/2 right-0 rounded-full' >
        <ChevronRight className='text-red-700' size={18} />
        </div> */}
        <img src='./v2.png' />
        <img src='./v3.png' />
        <img src='./v4.png' />
        <img src='./v5.png' />
        <img src='./v2.png' />
        <img src='./v3.png' />
      </div>
    </div>
  </div>
}