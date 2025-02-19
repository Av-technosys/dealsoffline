"use client";
import Footer from "@/components/footer";
import React, { useState } from "react";
import NavBar from "@/components/nav/navBar";
import { Check, ChevronDownIcon, ChevronLeftCircle, ChevronLeftCircleIcon, ChevronRightCircle, Clock, CornerUpRightIcon, Phone, Share2, Star, ThumbsUp } from "lucide-react";
import PartnerLoginDialog from "@/components/dialog/partnerLoginDialog";
import PartnerLoginOTPDialog from "@/components/dialog/partnerLoginOTPDialog";
import CreateUserDialog from "@/components/dialog/createUserDialog";
import GetCreateOTP from "@/components/dialog/createUserOTP";
import GetPsswordOTP from "@/components/dialog/changePassOTP";
import LoginDialog from "@/components/dialog/loginUserDialog";
import ChangePassDialog from "@/components/dialog/changePassDialog";
import ThankYou from "./thankYou";
import GallaryDialog from "@/components/dialog/gallaryDialog";
import { Menus, storeMenu } from "@/components/nav/utils";
import StoreMenuNavItem from "./storeMenuNavItem";


const Page = () => {
  const [isCreateUser, setIsCreateUser] = React.useState(false);
  const [isUserLogin, setIsUserLogin] = React.useState(false);
  const [isPassOTP, setIsPassOTP] = React.useState(false);
  const [isCreateOTP, setIsCreateOTP] = React.useState(false);
  const [isUerPassword, setIsUerPassword] = React.useState(false);
  const [isPartnerLogin, setIsPartnerLogin] = React.useState(false);
  const [isPartnerOTP, setIsPartnerOTP] = React.useState(false);
  return (
    <div>
      <NavBar />
      
      <CreateUserDialog isOpen={isCreateUser} handleOTPDialog={setIsCreateOTP} setUserLogin={setIsUserLogin} setIsOpen={setIsCreateUser} />
      <GetCreateOTP isOpen={isCreateOTP} setIsOpen={setIsCreateOTP} handleUserLogin={setIsUserLogin} />
      <GetPsswordOTP isOpen={isPassOTP} setIsOpen={setIsPassOTP} handleOTPDialog={setIsUerPassword} />

      <LoginDialog isOpen={isUserLogin} handleCreateAccount={setIsCreateUser} handleOTPDialog={setIsPassOTP} setIsOpen={setIsUserLogin} />
      <ChangePassDialog isOpen={isUerPassword} setIsOpen={setIsUerPassword} handleUserLogin={setIsUserLogin} />


      <PartnerLoginDialog isOpen={isPartnerLogin} setIsOpen={setIsPartnerLogin} handleOTPDialog={setIsPartnerOTP} />
      <PartnerLoginOTPDialog isOpen={isPartnerOTP} setIsOpen={setIsPartnerOTP} />

      <div className=" max-w-7xl mx-auto w-full mt-12  px-6 md:px-4 flex flex-col gap-8">
        <div className="flex md:border-2 flex-col md:px-4 py-4 mt-12 rounded-xl  gap-6 md:flex-row">
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="w-full h-full rounded-md overflow-hidden ">
              <img src="./hero-main.png" className="w-full h-full object-cover" alt="" />
            </div>

          </div>
          <div className="w-full flex flex-col gap-4">
            <div className=" flex items-center justify-between gap-2" >
              <p className="font-semibold text-3xl">Lifestyle- A Brand for Clot...</p>
              <div className=" flex gap-2 items-center justify-center" >
                <img src="./golden-star.svg" alt="" />
                <p className=" text-2xl font-semibold mt-1 " >3.9</p>
              </div>
            </div>
            <p className="text-primary-gray-light overflow-y-auto max-h-[4.5rem] ">
              The Lifestyle stores have a multi-level store format, which is
              normally spread over two or three floors that provides a square
              line-of-sight, allowing customers to view the product sections in
              a single glance. Each Lifestyle store offers womenswear, menswear,
              kidswear, footwear, bags, beauty, skincare & accessories such as
              watches, fragrances, sunglasses.
            </p>
            <div className=" flex gap-2" >
              <div className=" p-0.5 text-red-500 shrink-0 size-5 flex items-center justify-center border-2 rounded-full border-red-500" >
                <CornerUpRightIcon size={14} strokeWidth={3} />
              </div>
              <p className=" text-primary-gray" >MGF Metropolitan Bhawani Singh Marg, Sahakar Bhawan Circle, 22 Godam Cir, opposite Nehru, Durgadas Colony, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302006</p>
            </div>
            <div className=" flex flex-col gap-0.5" >
              <p className=" text-2xl font-medium" >Brand we have</p>
              <p className=" text-gray-600" >Selece your trusted brand</p>
              <div className=" flex flex-wrap gap-2 items-center" >
                {
                  ["H&M", "Puma", "Forever 21", "Gap", "Snitch", "Levi’s", "Marks & Spencer"].map((data) => {
                    return (
                      <div key={data} className=" py-1 px-2 border border-gray-600 text-gray-700 cursor-pointer font-semibold text-sm rounded-md" >{data}</div>
                    )
                  })
                }
              </div>
            </div>
            <div className=" flex items-centern gap-2 justify-between items-center" >
              <div className=" flex md:items-center gap-4 flex-col md:flex-row" >
                <div className=" flex gap-2 items-center" >
                  <Clock className=" text-red-500" size={18} />
                  <p className=" text-gray-800" >11:00 AM - 08:00 PM</p>
                  <ChevronDownIcon size={18} className=" text-primary-gray" />
                </div>
                <div className=" flex gap-2 items-center" >
                  <Phone className=" text-red-500" size={18} />
                  <p className=" text-gray-800" >+91 - 8112XXXXXX</p>
                </div>
              </div>
              <div className=" flex items-center gap-3" >
                <div className=" flex flex-col items-center justify-center gap-1" >
                  <ThumbsUp size={18} />
                  <p className=" text-sm" >40k</p>
                </div>
                <div className=" flex flex-col items-center justify-center gap-1" >
                  <Share2 size={18} />
                  <p className=" text-sm" >40k</p>
                </div>
              </div>
            </div>
            <div className=" w-full items-center gap-1 flex" >
              <ChevronLeftCircle className="shrink-0" size={20} />
              <div className="flex overflow-x-scroll py-3 hide-scrollbar items-center gap-6">
                <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
                <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
                <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
                <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
                <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
              </div>
              <ChevronRightCircle className="shrink-0" size={20} />
            </div>
          </div>
        </div>

        <StoreMenuNavBar />

        <div className=" flex  flex-col md:flex-row gap-6 w-full" >
          <AllOffers />
          <OtherOutlet />
        </div>
        <p className=" text-gray-500" >T&C Apply <span className=" text-red-500" >*</span> </p>
        <Gallary />
        <ReviewUs />
      </div>

      <Footer />
    </div>
  );
};

export default Page;


function AllOffers() {
  return (
    <div className=" border w-full p-4 rounded-lg " >
      <p className=" text-4xl font-semibold py-2" >All Offers</p>
      <div className=" items-center w-full border-b-2 border-gray-200 py-2 flex gap-2" >
        <div className=" size-3 bg-red-700 shrink-0" ></div>
        <p className=" font-medium" >Ongoing offers</p>
        <div className=" size-3 border border-red-700 shrink-0" ></div>
        <p className=" font-medium" >Closing soon</p>
        <div className=" size-3 border border-red-700 shrink-0" ></div>
        <p className=" font-medium" >Upcoming Offers</p>
      </div>
      <div className=" flex mt-3 max-h-96 hide-scrollbar overflow-y-scroll px-2  flex-col gap-2" >
        {
          [
            {
              image: "./hero-small.png",
              offer: "Flat 25% Off",
              description: "on shirts and Trousers",
              valid_till: "20th Mar"
            },
            {
              image: "./hero-small.png",
              offer: "Flat Rs 1,000 Off",
              description: "on Smart Phones Above Rs. 10,000",
              valid_till: "22nd Mar"
            },
            {
              image: "./hero-small.png",
              offer: "Buy 1 get 1",
              description: "on men Shirts",
              valid_till: "25th Mar"
            },
            {
              image: "./hero-small.png",
              offer: "Flat 25% Off",
              description: "on shirts and Trousers",
              valid_till: "20th Mar"
            }
          ].map((item, idx) => {
            return (
              <div key={idx} className=" md:h-28 flex flex-col md:flex-row gap-3 md:gap-6 md:items-center  py-1 border-b" >
                <div className=" flex md:items-center gap-2" >
                  <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
                  <p className=" text-gray-600" ><span className=" text-red-500" >{item.offer}</span>{item.description}</p>
                </div>
                <p className="shrink-0 md:ml-auto" >Valid till <span className=" text-red-500" >{item.valid_till}</span></p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
function OtherOutlet() {
  return (
    <div className=" border w-full p-4 rounded-lg " >
      <p className=" text-4xl font-semibold py-2" >Other Outlets</p>
      <div className=" items-center w-full border-b-2 border-gray-200 h-10 py-2 flex gap-2" >
      </div>
      <div className=" flex mt-3 max-h-96 hide-scrollbar overflow-y-scroll px-2  flex-col gap-2" >
        {
          [1, 2, 3, 4, 5, 6].map((idx) => {
            return (
              <div key={idx} className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
                <div className=" w-full flex gap-3" >
                  <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
                  <div className=" flex flex-col gap-2 justify-between" >
                    <p className=" font-medium" >Happy Shoppy Brand of Clothes</p>
                    <div className=" flex items-center gap-2" >
                      <img src="./golden-star.svg" className=" size-4" alt="" />
                      <p className=" text-xl font-semibold" >4.1</p>
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col gap-2" >
                  <div className=" flex items-center gap-2" >
                    <div className=" p-0.5 text-red-500 shrink-0 size-5 flex items-center justify-center border-2 rounded-full border-red-500" >
                      <CornerUpRightIcon size={14} strokeWidth={3} />
                    </div>
                    <p className=" text-xl font-semibold" >0.5</p>
                  </div>
                  <p className=" text-gray-500" >MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


function Gallary() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-full gap-6">
      <GallaryDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <p className="text-xl font-semibold">Similar Stores Having Offer</p>
      <div className=" flex gap-3 items-center w-full" >
        <ChevronLeftCircleIcon />
        <div onClick={() => setIsOpen(true)} className="w-full flex overflow-x-scroll hide-scrollbar gap-4">
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
        </div>
        <ChevronRightCircle />
      </div>
      <p className="text-xl font-semibold mt-4">Customers also liked</p>
      <div className=" flex gap-3 items-center w-full" >
        <ChevronLeftCircleIcon />
        <div onClick={() => setIsOpen(true)} className="w-full flex overflow-x-scroll hide-scrollbar gap-4">
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim3.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim1.png" alt="" />
          </div>
          <div className="shrink-0 size-28">
            <img src="./sim2.png" alt="" />
          </div>
        </div>
        <ChevronRightCircle />
      </div>

    </div>
  )
}


function ReviewUs() {
  return (
    <div>
      <p className=" text-2xl font-semibold" >Review Us</p>
      <div className=" flex flex-col md:flex-row gap-4 w-full" >
        <div className=" border p-4 h-fit rounded-md w-full flex flex-col gap-4" >
          <div className=" flex gap-3 justify-between items-center" >
            <img src="./review-profile.png" alt="" />
            <div className=" flex gap-4 items-center" >
              <p className=" font-semibold" >Rate Us</p>
              <div className=" flex gap-3 items-center" >
                {
                  ["Excellent", "Good", "Average", "Poor", "Bad"].map((item) => {
                    return (
                      <div key={item} className=" flex w-full items-center flex-col" >
                        <Star className=" text-yellow-500" size={28} />
                        <p className=" text-[0.6rem]" >{item}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <textarea className=" border rounded-md p-2" placeholder="Write your review here" rows={4} />
          <ThankYou />
        </div>
        <div className=" w-full flex flex-col gap-4" >
          {[0, 1].map(() => {
            return (
              <div key={Math.random()} className=" border p-4 rounded-md w-full flex flex-col gap-4" >
                <div className=" flex gap-3 items-center" >
                  <img src="./review-profile.png" alt="" />
                  <div className=" flex gap-1 flex-col-reverse" >
                    <div className=" flex gap-1 items-center" >
                      <Star fill="#eab308" className=" text-yellow-500" size={18} />
                      <Star fill="#eab308" className=" text-yellow-500" size={18} />
                      <Star fill="#eab308" className=" text-yellow-500" size={18} />
                      <Star fill="#eab308" className=" text-yellow-500" size={18} />
                      <Star className=" text-yellow-500" size={18} />
                    </div>
                    <p className=" text-gray-500 font-semibold" >Shruti Rathore</p>
                  </div>
                </div>
                <p className=" text-primary-gray" >"I highly recommend this store for shopping aspects" - Based on the store's outstanding pricing and customer service, the reviewer wholeheartedly endorses the store as a top choice for anyone looking to make a purchase, ensuring a satisfying and hassle-free shopping experience.</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


function StoreMenuNavBar() {
  return (
    <div className=" relative flex flex-wrap w-full gap-3 items-center" >
      {
        Menus.map((menu, i) => {
          const [storeSubMenu] = storeMenu.filter((item) => item.lable === menu.lable);
          return (
            <StoreMenuNavItem key={i} storeMenu={storeSubMenu} menu={menu} />
          )
        })
      }
    </div>
  )
}