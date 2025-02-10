import { ArrowRight, BadgePercent, BadgePercentIcon, BookImage, CalendarDays, CalendarDaysIcon, CameraIcon, Check, ChevronLeft, ChevronLeftIcon, ChevronRightIcon, CircleUser, CopyPlus, History, Menu, Pencil, PencilLineIcon, Plus, ShapesIcon, Sigma, User } from "lucide-react"
import WomenBox from "./womenBook"
import Link from "next/link"

export default function OfferDetailsSection() {
  return <div className=' max-w-6xl px-4 mt-12 mx-auto flex-col w-full flex gap-4' >
    <div className=' flex flex-col gap-16 md:flex-row' >
      <div className='flex md:max-w-60 md:mt-28 shrink-0 flex-col gap-4' >
        <div className=' max-w-60 relative items-center justify-center aspect-square flex shrink-0 flex-col gap-4 border border-gray-600 rounded-md ' >
          <div className=" absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 size-16 bg-black p-1 flex items-center justify-center rounded-full" >
            <CameraIcon className=' text-white' size={36} />
          </div>
          {/* <p>Upload your image here</p> */}
          <img src="./store-pic.jpg" className=" h-full w-full object-cover" alt="" />
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

      <div  >
        <div className=' w-full flex flex-col gap-4' >
          <p className=' text-3xl md:text-4xl font-medium ' >Product & Offer Details</p>
          <p className=' text-gray-600 ' >Create deals & offers</p>
        </div>
        <div className=' flex mt-6 flex-col gap-6 w-full' >
          <div className=" w-full flex flex-col md:flex-row gap-4" >
            <div className=' w-full flex flex-col gap-1' >
              <p className={``}>Offer Type <span className=' text-red-700' >*</span></p>
              <select className=' w-full text-sm bg-white rounded-md p-2 border ' >
                <option value="" >Select Offer Type</option>
                <option value="1" >One Time</option>
                <option value="2" >Recurring</option>
              </select>
            </div>
            <InputFild label={"Discount"} inputName={"10%"} />
          </div>

          <div className=" w-full flex flex-col md:flex-row gap-4" >
            <div className=' w-full flex flex-col gap-1' >
              <p className={``}>Validity From<span className=' text-red-700' >*</span></p>
              <div className=" flex   w-full text-sm bg-white rounded-md p-2 justify-between  border ">
                <input defaultValue={"01/04/2025"} />
                <CalendarDaysIcon />
              </div>
            </div>


            <div className=' w-full flex flex-col gap-1' >
              <p className={``}>Validity Till<span className=' text-red-700' >*</span></p>
              <div className=" flex   w-full text-sm bg-white rounded-md p-2 justify-between  border ">
                <input defaultValue={"01/05/2025"} />
                <CalendarDaysIcon />
              </div>
            </div>


          </div>

          <div className=" w-full flex flex-col md:flex-row gap-4" >

            <div className=" w-full flex flex-col gap-4" >
              <div className=' w-full flex flex-col gap-1' >
                <p className={``}>Offer Type <span className=' text-red-700' >*</span></p>
                <select className=' w-full text-sm bg-white rounded-md p-2 border ' >
                  <option value="" >Select Offer Type</option>
                  <option value="1" >One Time</option>
                  <option value="2" >Recurring</option>
                </select>

                {/* <input type='text' className=' w-full text-sm rounded-md p-2 border ' /> */}
                {/* <div className=' flex gap-2 mt-4 items-center' >
                  <input type='checkbox' className=" size-4" ></input>
                  <p className=' text-gray-600 text-sm' >Same as phone number</p>
                </div> */}
              </div>
              <InputFild label={"Discount"} inputName={"10%"} />
            </div>

            <div className=" w-full flex flex-col gap-1" >
              <p className={``}>Offer Description <span className=' text-red-700' >*</span></p>

              <textarea defaultValue={"Get it soon"} className=" p-2 border w-full min-h-32 rounded h-full" />
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

        <OfferBottonBts />
      </div>
    </div>
    <div className=' overflow-x-scroll hide-scrollbar' >
      <p>Offer History</p>
      <div className=' border rounded-md  w-[72rem]' >
        <div className=' grid bg-red-700 text-white py-2 grid-cols-7' >
          <div className=' flex gap-2 items-center justify-center' >
            <p>Type</p>
            <ShapesIcon size={18} />
          </div>
          <div className=' flex gap-2 items-center justify-center' >
            <p>Category</p>
            <Menu size={18} />
          </div>
          <div className=' flex gap-2 items-center justify-center' >
            <p>Discount</p>
            <BadgePercent size={18} />
          </div>
          <div className=' flex gap-2 items-center justify-center' >
            <p>Validity</p>
            <CalendarDays size={18} />
          </div>
          <div className=' flex gap-2 items-center justify-center' >
            <p>Offer Display</p>
            <BadgePercentIcon size={18} />
          </div>
          <div className=' flex gap-2 items-center justify-center' >
            <p>Offer Status</p>
            {/* <CalendarDays size={18} /> */}
          </div>
          <div className=' flex gap-2 items-center justify-center' >
            <p>Edit the offer</p>
            <Pencil size={18} />
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
  return <div className={`grid  text-black py-2 grid-cols-7 ${idx % 2 == 0 ? "bg-gray-100" : "bg-white"} `} >
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.type}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.category}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.discount}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.validity}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.offerDisplay}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <input type='checkbox' />
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <Pencil size={18} />
    </div>
  </div>
}
const offerData = [
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "18%",
    "validity": "31st Dec - 2nd Jan",
    "offerDisplay": "Offer display message",
    "status": "Active"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "12%",
    "validity": "31st Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "20%",
    "validity": "30th Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "30%",
    "validity": "29th Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "15%",
    "validity": "28th Dec - 31st Dec",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  }
]


function InputFild({ label, inputName, same, notNsc, disable }) {
  return <div className=' w-full flex flex-col gap-1' >
    <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
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
              <div className=' flex items-center gap-2 w-fit rounded-md text-red-700 border-red-700 border px-4 py-2' >
                  <p className=' font-semibold'>Create New</p>
                  <CopyPlus size={20} />
              </div>
          }
          <div className=' w-fit  rounded-md text-white flex items-center gap-2 bg-red-700 px-4 py-2' >
              <p className=' font-semibold'>Save Offer</p>
              <Check color='white' size={20} />
          </div>
      </div>
  )
}