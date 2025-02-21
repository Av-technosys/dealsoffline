import { BadgePercentIcon, BookImage, CalendarDays, CameraIcon, Check, ChevronLeftCircle, ChevronLeftIcon, ChevronRightCircle, ChevronRightIcon, CircleUser, CopyPlus, History, Image, Menu, Pencil, PencilLineIcon, Plus, ShapesIcon, Sigma, Square, Trash2, User } from "lucide-react"
import WomenBox from "./womenBook"
import Link from "next/link"
import { CalendarForm } from "./datePicker"

export default function OfferDetailsSection() {
  return <div className=' max-w-6xl px-4 md:mt-12 mx-auto flex-col w-full flex gap-4' >
    <div className=' flex flex-col gap-12 md:gap-16 lg:flex-row' >
      <div className='flex md:max-w-60 md:mt-28 shrink-0 flex-col gap-4' >
        <div className=' max-w-44 md:max-w-60 relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
          <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-primary-red p-1 flex items-center justify-center rounded-full" >
            <CameraIcon className=' text-white' size={36} />
          </div>
          <img src="./store-pic.jpg" className=" h-full w-full object-cover" alt="" />
        </div>
        <p className=" font-semibold text-lg" >Happy Shop</p>
      </div>

      <div  >
        <div className=' w-full flex flex-col gap-4' >
          <p className=' text-3xl md:text-4xl font-medium ' >Product & Offer Details</p>
          <p className=' text-gray-600 ' >Create deals & offers</p>
        </div>
        <div className=' flex mt-4 flex-col gap-4 w-full' >
          <div className=" w-full flex flex-col md:flex-row gap-4" >
            <div className=' w-full flex flex-col gap-1' >
              <p className={` font-semibold`}>Offer <span className=' text-primary-red' >*</span></p>
              <input className=" w-full text-sm bg-white rounded-md p-2 border " ></input>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-1" >
            <p className={` font-semibold`}>Offer Description <span className=' text-primary-red' >*</span></p>

            <textarea defaultValue={"Get it soon"} className=" p-2 border w-full min-h-32 rounded h-full" />
          </div>

          <div className=" w-full flex flex-col md:flex-row gap-4" >
            <div className=' w-full flex flex-col gap-1' >
              <p className={` font-semibold`}>Validity From<span className=' text-primary-red' >*</span></p>
              <CalendarForm />
            </div>

            <div className=' w-full flex flex-col gap-1' >
              <p className={` font-semibold`}>Validity Till<span className=' text-primary-red' >*</span></p>
              <CalendarForm />

            </div>


          </div>

          <div className=" w-full flex flex-col md:flex-row gap-4" >
          </div>
        </div>
        <div className=' mt-2  flex flex-col gap-2' >
          <p>Select Template/Image for Offer Display<span className=' text-primary-red' >*</span></p>
          <div className=" w-full gap-2 items-center flex" >
            <ChevronLeftCircle className="shrink-0" size={20} />

            <div className=' max-w-2xl overflow-x-scroll h-fit px-2 hide-scrollbar flex relative gap-2 w-full' >
              <div className=' relative rounded-md cursor-pointer h-28 w-36 shrink-0 items-center flex gap-2 px-3 border border-black py-1.5' >
                <p className='  text-black text-sm  text-center' >Upload image here</p>
                <BookImage size={20} className=" absolute bottom-0 right-0 bg-black p-1 rounded size-7 text-white" />
                <input type="file" accept="image/*" className=" opacity-0 absolute inset-0 w-full h-full" />
              </div>
              {
                ["./v2.png", "./v3.png", "./v4.png", "./v5.png", "./v2.png", "./v3.png"].map((item, index) => (
                  <div key={index} className=" w-36 shrink-0 relative" >
                    <img src={item} className=" h-full w-full object-cover" />
                    {/* <Square size={20} className=" absolute bottom-0 right-0 bg-white p-1 rounded size-7 text-black" /> */}
                    <div className=" absolute bottom-1 right-1 bg-white p-1 rounded text-black size-6 flex items-center justify-center" >
                      <input type="checkbox" className=" w-full h-full" />
                    </div>
                  </div>
                ))
              }
            </div>
            <ChevronRightCircle className="shrink-0" size={20} />

            <div className=" max-w-32 md:max-w-none rounded-md overflow-hidden" >
              <img src="./special-deal.png" alt="" />
            </div>
          </div>
        </div>

        <OfferBottonBts />
      </div>
    </div>
    <div>
      <p className=" text-lg py-3 font-semibold" >Offer History</p>
      <div className=' overflow-x-scroll hide-scrollbar' >

        <div className=' border rounded-md  w-[70rem]' >
          <div className=' grid bg-primary-red text-white py-2 grid-cols-7' >
            <div className=' flex gap-2 items-center justify-center' >
              <p>Offer Image</p>
              <Image size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Offer</p>
              <ShapesIcon size={18} />
            </div>
            <div className=' flex items-center justify-center' >
              <p className=" text-sm" >Start Date-End Date</p>
              <CalendarDays size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Status</p>
              <div className=" border bg-gray-50 p-0.5" >
                <Check size={18} className=" text-primary-red" />
              </div>
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Offer Display</p>
              <BadgePercentIcon size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Edit the offer</p>
              <Pencil size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Delete</p>
              <Trash2 size={18} />
            </div>
          </div>
          {
            offerData.map((data, idx) => {
              return (
                <OfferDetailList key={idx} data={data} idx={idx} />
              )
            })
          }
        </div>

      </div>
      <div className=" mt-6 flex justify-center gap-2">
        <div className=" border rounded-md p-1" >
          <ChevronLeftIcon size={18} />
        </div>
        <div className=" border rounded-md py-1 px-3 bg-gray-100" >
          <p>1</p>
        </div>
        <div className=" border text-gray-600 rounded-md py-1 px-2" >
          <p>2</p>
        </div>
        <div className=" border text-gray-600 rounded-md py-1 px-2" >
          <p>3</p>
        </div>
        <div className=" border text-gray-600 rounded-md py-1 px-2" >
          <p>4</p>
        </div>
        <div className=" border rounded-md p-1" >
          <ChevronRightIcon size={18} />
        </div>
      </div>
    </div>
  </div>
}

function OfferDetailList({ data, idx }) {
  return <div className={`grid  text-gray-600 py-2 grid-cols-7 ${idx % 2 == 0 ? "bg-gray-100" : "bg-white"} `} >
    <div className=' flex gap-2 items-center justify-center' >
      <img src={data.img} />
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.type}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.validity}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.status}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.offerDisplay}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <Pencil size={18} />
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <Trash2 size={18} />
    </div>
  </div>
}
const offerData = [
  {
    "img": "./vendor-store-offer.png",
    "type": "Weekend Sale",
    "category": "All Categories",
    "discount": "18%",
    "validity": "31st Dec - 2nd Jan",
    "offerDisplay": "Offer display message",
    "status": "Active"
  },
  {
    "img": "./vendor-store-offer.png",
    "type": "Weekend Sale",
    "category": "All Categories",
    "discount": "12%",
    "validity": "31st Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Ending Soon Offer"
  },
  {
    "img": "./vendor-store-offer.png",
    "type": "Weekend Sale",
    "category": "All Categories",
    "discount": "20%",
    "validity": "30th Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
]


function InputFild({ label, inputName, same, notNsc, disable }) {
  return <div className=' w-full flex flex-col gap-1' >
    <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-primary-red' >*</span>}</p>
    <input type='text' defaultValue={inputName} className=' w-full text-sm rounded-md p-2 border ' />
    {
      same && <div className=' flex gap-2 mt-4 items-center' >
        <input type='checkbox' className=" size-4" ></input>
        <p className=' text-gray-600 text-sm' >Same as phone number</p>
      </div>
    }
  </div>
}


const OfferBottonBts = ({ num }) => {
  // console.log(num)
  const showBack = num != 1
  return (
    <div className=' w-full mt-12 max-w-5xl mx-auto justify-end flex gap-4 items-center' >
      {showBack &&
        <div className=' flex items-center gap-2 w-fit rounded-md text-primary-red border-primary-red border px-4 py-2' >
          <p className=' font-semibold'>Create New</p>
          <CopyPlus size={20} />
        </div>
      }
      <div className=' w-fit  rounded-md text-white flex items-center gap-2 bg-primary-red px-4 py-2' >
        <p className=' font-semibold'>Save Offer</p>
        <Check color='white' size={20} />
      </div>
    </div>
  )
}