"use client"
import VendorOnbordForm from '@/components/vendor-onbordForm'
import VendorFooterBar from '@/components/vendorFooterBar'
import VendorNavBar from '@/components/vendorNavBar'
import { ArrowLeft, ArrowRight, BadgePercent, BookImage, CalendarDays, CheckCheck, ChevronLeft, ChevronRight, CircleUser, History, Info, Menu, Pencil, Plus, ScanQrCode, Shapes, Sigma, User } from 'lucide-react'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const params = useSearchParams();
  const num = params.get("form") ? params.get("form") : 1;
  const [hideAnimation, setHideAnimation] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideAnimation(true);
    }, 4000);
    return () => clearTimeout(timer);
  })

  return (
    <div className=' flex flex-col gap-6 w-full' >
      <VendorNavBar />
      <VendorOnbordForm num={num} />
      {
        !hideAnimation && <div className=' block md:hidden' >
          <img src='./swipe-animatoin.gif' className=' -mt-10 mx-auto h-12 ' />
        </div>
      }

      {num == 1 && <ProfileSection />}
      {num == 2 && <ShopDetailsSection />}
      {num == 3 && <BankDetailsSection />}
      {num == 4 && <OfferDetailsSection />}
      {num == 5 && <PromoteMyStoreSection />}
      <div className='h-8' ></div>
      <VendorFooterBarFinal num={num} />
      <div className='h-60' ></div>
    </div>
  )
}

export default Page

function ProfileSection() {
  return <div className=' max-w-5xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Profile Setup</p>
      <p className=' text-gray-600 text-center' >Manage all your account settings and preferences</p>
    </div>
    <div className=' flex flex-col gap-8 md:flex-row' >
      <div className=' flex shrink-0 flex-col gap-4' >
        <p className=' text-3xl font-medium text-center md:text-left' >Contact Details</p>
        <p className=' text-gray-600 text-center md:text-left' >Enter your shop details</p>
      </div>
      <div className=' flex flex-col gap-2 w-full' >
        <div className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-2' >
          <InputFild label={"Name"} inputName={"Naveen Sharma"} />
          <InputFild label={"Email ID/ User ID"} inputName={"naveensharma@gmail.com"} />
          <InputFild label={"Phone Number"} inputName={"91-9012345678"} />
          <InputFild label={"WhatsApp Number"} inputName={"91-9012345678"} same={true} />
        </div>
        <div className=' flex items-center gap-6'>
          <div className=' flex gap-2 items-center' >
            <input type='checkbox' className=' size-4' ></input>
            <p className=' text-gray-600 ' >Active</p>
          </div>
          <div className=' flex gap-2 items-center' >
            <input type='checkbox' className=' size-4' ></input>
            <p className=' text-gray-600 ' >Verified</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function InputFild({ label, inputName, same, notNsc, disable }) {
  return <div className=' w-full flex flex-col gap-1' >
    <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
    <input type='text' defaultValue={inputName} className=' w-full text-sm rounded-md p-2 border ' />
    {
      same && <div className=' flex gap-2 items-center' >
        <input type='checkbox' ></input>
        <p className=' text-gray-600 text-sm' >Same as phone number</p>
      </div>
    }
  </div>
}
function ShopDetailsSection() {
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
function WomenBox() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      onClick={() => setIsShow(!isShow)}
      className="border  cursor-pointer relative flex items-center gap-1 border-red-700 px-1.5 py-0.5 text-xs rounded-md font-semibold text-red-700"
    >
      Women
      <img src="./women.svg" alt="" />
      {isShow && (
        <div className=" z-10 shadow-md shadow-gray-600 absolute flex gap-4 flex-wrap w-96 md:w-[36rem] bg-white top-6 border px-4 py-3 rounded-md  -left-1 text-black font-normal">
          {navBarData.map((data, idx) => {
            return (
              <div key={idx} className=" flex flex-col gap-1">
                <div className=' flex items-center gap-1' >
                  <input type="checkbox" className=' size-3' />
                  <p className=" text-xl font-semibold text-red-700">
                    {data.title}
                  </p>
                </div>
                {data.items.map((item) => {
                  return (
                    <div className=' flex items-center gap-1' >
                      <input type="checkbox" className=' size-3' />
                      <p className=" text-gray-500  font-semibold" key={item}>
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
const navBarData = [
  {
    title: "Indiwear",
    items: [
      "Kurtis, Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings, Salwars & Churidars",
      "Skirts & Palazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
    ],
  },
  {
    title: "Western Wear",
    items: [
      "Dresses",
      "Tops",
      "Tshirts",
      "Jeans",
      "Trousers & Capris",
      "Shorts & Skirts",
      "Co-ords",
      "Playsuits",
      "Jumpsuits",
      "Shrugs",
    ],
  },
  {
    title: "Footwear",
    items: [
      "Flats",
      "Casual Shoes",
      "Heels",
      "Boots",
      "Sports Shoes & Floaters",
    ],
  },
  {
    title: "Lingerie",
    items: [
      "Bra",
      "Briefs",
      "Shapewear",
      "Sleepwear & Loungewear",
      "Swimwear",
      "Camisoles & Thermals",
    ],
  },
  {
    title: "Active Go",
    items: [
      "Sports & Active Wear",
      "Clothing",
      "Footwear",
      "Sports Accessories",
      "Sports Equipment",
    ],
  },
  {
    title: "BagHub",
    items: ["GoBag"],
  },
  {
    title: "Jewellery",
    items: ["Maternity", "Fashion Jewellery", "Fine Jewellery", "Earrings"],
  },
  {
    title: "Belts & Scarves",
    items: [],
  },
  {
    title: "Sunglasses",
    items: [],
  },
  {
    title: "Watches",
    items: [],
  },
];
function BankDetailsSection() {
  return <div className=' px-4 max-w-5xl mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Bank Details</p>
      <p className=' text-gray-600 text-center' >Add your bank details</p>
    </div>
    <div className=' flex flex-col gap-8 md:flex-row' >
      <div className=' flex shrink-0 flex-col max-w-56 mx-auto gap-4' >
        <p className=' text-3xl font-medium text-center md:text-left' >Bank Info</p>
        <p className=' text-gray-600 text-center md:text-left' >Set Up Your Bank Info</p>
        <img src='./qr.png' />
        <div className=' flex items-center gap-2 border rounded border-red-700 px-3 py-1.5'>
          <p className=' text-red-700' >Generate a QR code</p>
          <ScanQrCode size={18} color='#b91c1c' />
        </div>
      </div>
      <div className=' flex flex-col gap-2 w-full' >
        <div className=' flex flex-col gap-2' >
          <div className=' w-full md:w-1/3' >
            <InputFild label={"IFSC Code"} />
          </div>
          <div className=' flex gap-2' >
            <div className=' w-full md:w-1/3' >
              <InputFild notNsc={true} disable={true} label={"Bank Name "} />
            </div>
            <div className=' w-full md:w-2/3' >
              <InputFild notNsc={true} disable={true} label={"Branch Name "} />
            </div>
          </div>
          <div className=' flex flex-col md:flex-row gap-2' >
            <div className=' w-full md:w-1/3' >
              <InputFild label={"Account Holder Name"} />
            </div>
            <div className=' w-full md:w-1/3' >
              <InputFild label={"Account Number"} />
            </div>
            <div className=' w-full md:w-1/3' >
              <InputFild label={"Confirm Account Number"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
function PromoteMyStoreSection() {
  return <div className=' max-w-5xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Profile Setup</p>
      <p className=' text-gray-600 text-center' >Manage all your account settings and preferences</p>
    </div>
    <div className=' flex flex-col w-full gap-4' >
      <div>
        <div className=' flex gap-2 items-center' >
          <p className=' text-gray-600 text-lg' >Subscription Plan</p>
          <Info size={18} color="#666" />
        </div>
        <div className=' flex gap-1' >
          <div className=' flex gap-1 items-center' >
            <input name='radio' type='radio' className=' w-fit' />
            <p className='' >Silver</p>
          </div>
          <div className=' flex gap-1 items-center' >
            <input name='radio' type='radio' defaultChecked className=' w-fit' />
            <p className='  text-red-700' >Gold</p>
          </div>
          <div className=' flex gap-1 items-center' >
            <input name='radio' type='radio' className=' w-fit' />
            <p className=' ' >Platinum</p>
          </div>
        </div>
      </div>
      <div className=' px-4 md:px-0 flex gap-4 flex-col md:flex-row max-w-3xl mx-auto w-full'>
        <div className=' flex flex-col gap-2 rounded-md border h-96 w-full border-red-700 p-3'>
          <p className=' border-b-2 text-red-700 font-semibold text-lg py-2 text-center' >Silver</p>
          <p> <span className=' text-red-700'>-</span> Free Listing</p>
          <p> <span className=' text-red-700'>-</span> Get discovered InTown through search</p>
          <div className=' h-full flex items-end justify-center'>
            <img src='./silver.png' className='' />
          </div>
        </div>
        <div className=' flex from-yellow-200 via-20% via-yellow-50 to-yellow-500 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-red-700 p-3'>
          <p className=' border-b-2 text-red-700 font-semibold text-lg py-2 text-center' >Gold</p>
          <p> <span className=' text-red-700'>-</span> Gold - Enhanced Visibility</p>
          <p> <span className=' text-red-700'>-</span> Get featured in prominent app sections and update your offers monthly</p>
          <div className='  h-full flex items-end justify-center'>
            <img src='./gold.png' className='' />
          </div>
        </div>
        <div className=' flex from-zinc-200 via-20% via-zinc-50 to-zinc-400 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-red-700 p-3'>
          <p className=' border-b-2 text-red-700 font-semibold text-lg py-2 text-center' >Platinum</p>
          <p> <span className=' text-red-700'>-</span> Platinum - Maximum Exposure</p>
          <p> <span className=' text-red-700'>-</span> Get premium placement, weekly offer updates, and priority support</p>
          <div className=' h-full flex items-end justify-center'>
            <img src='./platinum.png' className='' />
          </div>
        </div>
      </div>
      <div className=' max-w-3xl flex-col md:flex-row mx-auto w-full flex gap-6' >
        <InputFild label={"offer Days"} notNsc={true} />
        <InputFild label={"offer Hours"} notNsc={true} />
        <InputFild label={"Maximum changes per offer"} disable={true} notNsc={true} />
      </div>
      <div className=' max-w-x2l w-full mx-auto flex flex-col gap-2' >
        <p className=' text-xl' >Plan Pricing</p>
        <div className='w-full flex-col md:flex-row flex max-w-xl gap-6'>

          {
            planData.map((data) => {
              return <div key={data.name} className=' w-full max-w-52 flex flex-col' >
                <p className=' text-red-700' >{data.name}</p>
                {
                  data.data?.map((item) => {
                    return <p key={item} >{item}</p>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  </div>
}
const planData = [
  {
    name: "Silver",
    data: [
      "500 / month",
      "2000 / Quaterly",
      "6000 / Yearly"
    ]
  },
  {
    name: "Gold",
    data: [
      "1500 / month",
      "6000 / Quaterly",
      "18,000 / Yearly"
    ]
  },
  {
    name: "Platunum",
    data: [
      "5000 / month",
      "20,000 / Quaterly",
      "60,000 / Yearly"
    ]
  },
]
const VendorFooterBarFinal = ({ num }) => {
  // console.log(num)
  const showBack = num != 1
  return (
    <div className=' w-full max-w-5xl px-4 mx-auto justify-between flex gap-4 items-center' >
      {showBack &&
        <Link href={`/vendor-dashbord?form=${String(num) - 1}`} className=' flex items-center gap-2 w-fit rounded-md text-red-700 border-red-700 border px-4 py-2' >
          <p className=' font-semibold'>Back</p>
          <ArrowLeft size={20} />
        </Link>
      }
      {/* <Link href={`/vendor-dashbord?form=${Number(num) + 1}`} className=' w-fit ml-auto rounded-md text-white flex items-center gap-2 bg-red-700 px-4 py-2' >
        <p className=' font-semibold'>Finish</p>
        <CheckCheck color='white' size={20} />
      </Link> */}
      <Link href={`/vendor-dashbord?form=${Number(num) + 1}`} className=' w-fit ml-auto rounded-md text-white flex items-center gap-2 bg-red-700 px-4 py-2' >
        <p className=' font-semibold'>Next</p>
        <ArrowRight color='white' size={20} />
      </Link>
    </div>
  )
}
function OfferDetailsSection() {
  return <div className=' max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Product & Offer Details</p>
      <p className=' text-gray-600 text-center' >Create deals & offers</p>
    </div>
    <div className=' flex flex-col gap-8 ' >
      <div className=' flex flex-col gap-3' >
        <p className=' text-xl font-semibold' >Offer Details</p>
        <p className=' text-gray-600' >Select your offer details</p>
      </div>
      <div className='py-2 w-full flex-wrap  flex items-center gap-4 mx-auto ' >
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Type <span className=' text-red-700' >*</span></p>
          <select type='text' className=' w-full text-sm rounded-md bg-white p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Category  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-40 flex flex-col gap-1' >
          <p className={``}>Discount  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Validity  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={`opacity-0`}>Validity  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Display <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Display <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Display <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-16 flex flex-col justify-start gap-1' >
          <p className={``}>Status <span className=' text-red-700' >*</span></p>
          <input type='checkbox' className='' ></input>
        </div>
        <div className=' w-24 flex flex-col justify-start gap-1' >
          <div className=' border border-red-700 flex justify-center items-center gap-2 px-2 py-1 rounded-md text-red-700 ' >
            <p>Add</p>
            <Plus size={18} />
          </div>
          <div className=' border  flex justify-center items-center gap-2 px-2 py-1 rounded-md text-gray-300 ' >
            <p>Update</p>
            <History size={18} />
          </div>
        </div>
      </div>
      <div className=' overflow-x-scroll hide-scrollbar' >
        <p>Offer History</p>
        <div className=' border rounded-md  w-[72rem]' >
          <div className=' grid bg-red-700 text-white py-2 grid-cols-7' >
            <div className=' flex gap-2 items-center justify-center' >
              <p>Type</p>
              <Shapes size={18} />
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
              <BadgePercent size={18} />
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
      </div>

      <div className=' overflow-x-scroll hide-scrollbar' >

        <div className=' rounded-md border' >
          <div className=' w-full justify-between flex items-center p-2' >
            <p className=' text-red-700 text-xl'>Transaction History</p>
            <div className=' border p-2 rounded border-red-700 gap-2 flex items-center' >
              <p className=' text-sm'>Select Date</p>
              <CalendarDays color='#b91c1c' size={18} />
            </div>
          </div>
          <div className=' border  overflow-x-scroll w-[72rem]' >
            <div className=' grid bg-red-700 text-white py-2 grid-cols-5' >
              <div className=' flex gap-2 items-center justify-center' >
                <p>Sr.no</p>
                {/* <Shapes size={18} /> */}
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>User Name</p>
                <User size={18} />
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>Total</p>
                <Sigma size={18} />
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>Status</p>
                <CircleUser size={18} />
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>Date</p>
                <CalendarDays size={18} />
              </div>
            </div>
            {
              orderData.map((data, idx) => {
                return (
                  <OrderDetailList key={idx} data={data} idx={idx} />
                )
              })
            }
          </div>
        </div>
      </div>

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

const orderData = [
  {
    "sr_no": 1,
    "user_name": "Naveen Sharma",
    "total": "Rs 10,000",
    "status": "Processing",
    "date": "9 Jan 2025"
  },
  {
    "sr_no": 2,
    "user_name": "Rajesh Sah",
    "total": "Rs 7,000",
    "status": "Processing",
    "date": "9 Jan 2025"
  },
  {
    "sr_no": 3,
    "user_name": "Shreya Sah",
    "total": "Rs 2,000",
    "status": "Delivered",
    "date": "7 Dec 2025"
  },
  {
    "sr_no": 4,
    "user_name": "Shruti Kumari",
    "total": "Rs 22,000",
    "status": "Processing",
    "date": "9 Dec 2023"
  },
  {
    "sr_no": 5,
    "user_name": "Rohit Raj",
    "total": "Rs 25,000",
    "status": "Delivered",
    "date": "12 Dec 2025"
  },
  {
    "sr_no": 6,
    "user_name": "Mohan Sharma",
    "total": "Rs 3,000",
    "status": "Processing",
    "date": "9 Jan 2025"
  },
  {
    "sr_no": 7,
    "user_name": "Prachi Gupta",
    "total": "Rs 10,000",
    "status": "Processing",
    "date": "29 Jan 2025"
  }
]

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
function OrderDetailList({ data, idx }) {
  return <div className={`grid  text-black py-2 grid-cols-5 ${idx % 2 == 0 ? "bg-gray-100" : "bg-white"} `} >
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.sr_no}</p>
    </div>
    <div className=' flex gap-2 items-center' >
      <div className=' rounded-md bg-gray-200 size-8 flex items-center justify-center' >
        <CircleUser color='#b91c1c' size={16} />
      </div>
      <p className=' text-sm' >{data.user_name}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.total}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      {
        data.status == "Processing" ? <Processing /> : <Delivered />
      }
      {/* <Processing /> */}
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.date}</p>
    </div>

  </div>
}

function Processing() {
  return <div className=' text-sm py-0.5 px-2 rounded-lg mx-auto bg-yellow-50 text-yellow-600' >Processing</div>
}

function Delivered() {
  return <div className=' text-sm py-0.5 px-2 rounded-lg mx-auto bg-red-50 text-red-600' >Delivered</div>
}