import { BookImage, CameraIcon, Info, InfoIcon, PencilLineIcon } from "lucide-react";
import InputFild from "./inputFild";
import WomenBox from "./womenBook";

export default function ShopDetailsSection() {
  return <div className=' px-4 max-w-5xl mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' flex flex-col gap-16 md:flex-row' >
      <div className=' flex md:max-w-60 md:mt-28 shrink-0 flex-col gap-4' >
        <div className=' max-w-60 relative items-center justify-center p-4 aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
          <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-black p-1 flex items-center justify-center rounded-full" >
            <CameraIcon className=' text-white' size={36} />
          </div>
          <p className=" text-center" >Upload Logo or Shop image Here</p>
        </div>
        <div className="flex flex-col"> 
          <p className="font-semibold text-xl">Product Categories</p>
          <p className=" text-gray-600" >Select Categories for Shop</p>
          <div className="flex w-full mt-3 flex-wrap gap-2">
            <div className="border flex items-center gap-1 border-black px-3 py-1 text-sm rounded font-semibold text-black">
              Men
              <img src="./men.svg" alt="" />
            </div>
            <WomenBox />
            <div className=" flex items-center gap-1 bg-red-200 px-3 py-1 text-sm rounded font-semibold text-black">
              Kids
              <img src="./nav/kids.png" alt="" />
            </div>
            <div className=" bg-red-200 flex items-center gap-1  px-3 py-1 text-sm rounded font-semibold text-black">
              Beauty
              <img src="./nav/beauty.png" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-black px-3 py-1 text-sm rounded font-semibold text-black">
              Home Decore
              <img src="./nav/home-decore.png" alt="" />
            </div>

            <div className="border flex items-center gap-1 border-black px-3 py-1 text-sm rounded font-semibold text-black">
              Home Appliances
              <img src="./nav/home-appliences.png" alt="" />
            </div>
            <div className="border flex items-center gap-1 border-black px-3 py-1 text-sm rounded font-semibold text-black">
              Electronics
              <img src="./nav/electronics.png" alt="" />
            </div>
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
        <div className=' mt-6  flex flex-col gap-8 md:flex-row' >
          <div className=' max-w-2xl overflow-x-scroll px-2 hide-scrollbar flex relative gap-2 w-full' >
            <div className=' relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5' >
              <p className='  text-black text-sm  text-center' >Upload image here</p>
              <BookImage size={20} className=" absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white" />
            </div>
            <div className=" w-36 shrink-0 relative" >
              <img src='./v2.png' />
              <PencilLineIcon size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
            </div>
            <div className=" w-36 shrink-0 relative" >
              <img src='./v3.png' />
              <PencilLineIcon size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
            </div>            <div className=" w-36 shrink-0 relative" >
              <img src='./v4.png' />
              <PencilLineIcon size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
            </div>            <div className=" w-36 shrink-0 relative" >
              <img src='./v5.png' />
              <PencilLineIcon size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
            </div>            <div className=" w-36 shrink-0 relative" >
              <img src='./v2.png' />
              <PencilLineIcon size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
            </div>            <div className=" w-36 shrink-0 relative" >
              <img src='./v3.png' />
              <PencilLineIcon size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}