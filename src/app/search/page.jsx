"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import NavBarBG from "@/components/navBarBG";
import { Share2 } from "lucide";
import { Share2Icon, ThumbsUp, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import CreateUserDialog from "@/components/createUserDialog";
import GetCreateOTP from "@/components/createUserOTP";
import GetPsswordOTP from "@/components/changePassOTP";
import LoginDialog from "@/components/loginUserDialog";
import ChangePassDialog from "@/components/changePassDialog";
import PartnerLoginDialog from "@/components/partnerLoginDialog";
import PartnerLoginOTPDialog from "@/components/partnerLoginOTPDialog";

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
      <div className="relative flex flex-col h-full justify-center gap-6 w-full min-h-screen">
        <NavBar setIsPartnerLogin={setIsPartnerLogin} />

        <CreateUserDialog isOpen={isCreateUser} handleOTPDialog={setIsCreateOTP} setUserLogin={setIsUserLogin} setIsOpen={setIsCreateUser} />
        <GetCreateOTP isOpen={isCreateOTP} setIsOpen={setIsCreateOTP} />
        <GetPsswordOTP isOpen={isPassOTP} setIsOpen={setIsPassOTP} handleOTPDialog={setIsUerPassword} />

        <LoginDialog isOpen={isUserLogin} handleCreateAccount={setIsCreateUser} handleOTPDialog={setIsPassOTP} setIsOpen={setIsUserLogin} />
        <ChangePassDialog isOpen={isUerPassword} setIsOpen={setIsUerPassword} />

        <PartnerLoginDialog isOpen={isPartnerLogin} setIsOpen={setIsPartnerLogin} handleOTPDialog={setIsPartnerOTP} />
        <PartnerLoginOTPDialog isOpen={isPartnerOTP} setIsOpen={setIsPartnerOTP} />

        <img
          src="./hero-bg.png"
          className="absolute top-0 -z-10 h-full w-full left-0 object-cover"
          alt=""
        />
        {/* <div className="absolute top-0 h-36 left-0 w-full bg-gradient-to-b from-black to-transparent"></div> */}
        <div className=" flex container justify-center px-6 md:px-4 flex-col">
          <p className="text-4xl md:text-5xl uppercase font-semibold text-white">
            weekend sale
          </p>
          <p className="text-6xl md:text-7xl uppercase font-bold text-red-700">
            buy now
          </p>
          <p className="text-4xl md:text-5xl uppercase font-semibold text-white">
            upto 70% off
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="py-10 px-6 w-full max-w-72 hidden md:flex flex-col gap-4">
          <div className="flex flex-col gap-0">
            <p className="font-semibold text-lg">Product Categories</p>
            <p className=" text-sm text-gray-600" >Select Categories for Shop</p>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <div className="border flex items-center gap-1 border-black px-2.5 py-0.5 text-xs rounded font-semibold text-black">
                Men
                <img src="./men.svg" alt="" />
              </div>
              <WomenBox />
              <div className=" flex items-center gap-1 border border-black px-2.5 py-0.5 text-xs rounded font-semibold text-black">
                Kids
                <img src="./nav/kids.png" alt="" />
              </div>
              <div className=" border border-black flex items-center gap-1  px-2.5 py-0.5 text-xs rounded font-semibold text-black">
                Beauty
                <img src="./nav/beauty.png" alt="" />
              </div>
              <div className="border flex items-center gap-1 border-black px-2.5 py-0.5 text-xs rounded font-semibold text-black">
                Home Decore
                <img src="./nav/home-decore.png" alt="" />
              </div>

              <div className="border flex items-center gap-1 border-black px-2.5 py-0.5 text-xs rounded font-semibold text-black">
                Home Appliances
                <img src="./nav/home-appliences.png" alt="" />
              </div>
              <div className="border flex items-center gap-1 border-black px-2.5 py-0.5 text-xs rounded font-semibold text-black">
                Electronics
                <img src="./nav/electronics.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 gap-0">
            <p className="font-semibold text-lg">Brands</p>
            <p className=" text-sm text-gray-600" >Select your Trusted Brand</p>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <div className=" py-1 px-2  bg-red-200 font-semibold text-sm rounded-md" >Zara</div>
              {
                ["H&M", "Puma", "Forever 21", "Gap", "Snitch", "Levi’s", "Marks & Spencer"].map((data) => {
                  return (
                    <div key={data} className=" py-1 px-2 border border-black font-semibold text-sm rounded-md" >{data}</div>
                  )
                })
              }
            </div>
            <div className=" mt-1 flex items-center gap-1 px-1.5 py-0.5 text-xs rounded-md font-semibold text-red-700">
              See More
            </div>

            <p className="font-semibold mt-6 text-lg">Area/Location</p>
            <p className=" text-sm text-gray-600" >Explore Shops in your Defined Area</p>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <div className=" py-1 px-2  bg-red-200 font-semibold text-sm rounded-md" >Vaishali Nagar</div>
              {
                ["Jagatpura", "Civil Lines", "C- Scheme", "Malviya Nagar", "Mansarovar", "Ajmer Road"].map((data) => {
                  return (
                    <div key={data} className=" py-1 px-2 border border-black font-semibold text-sm rounded-md" >{data}</div>
                  )
                })
              }
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <p className="font-semibold text-lg mt-2">Suggested</p>
              <div className="flex gap-3 items-center">
                <SuggestionBox />

                <p className="">Ongoing offer</p>
              </div>
              <div className="flex gap-3 items-center">
                <SuggestionBox />
                <p className=" font-medium">Closing soon</p>
              </div>
              <div className="flex gap-3 items-center">
                <SuggestionBox />
                <p className=" font-medium">Upcoming Offers</p>
              </div>
              <div className="flex gap-3 items-center">
                <SuggestionBox />
                <p className=" font-medium">Closing Today</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 max-w-7xl px-6 flex flex-col w-full gap-3">
          <div className="flex gap-2 flex-wrap items-center">
            {
              ["Women", "Zara", "Vaishali Nagar"].map((data) => {
                return (
                  <div key={data} className=" gap-1 justify-center rounded-md bg-red-200 font-semibold flex items-center px-2 py-1.5">
                    <p className="text-red-950">{data}</p>
                    <X className="text-red-950" size={18} />
                  </div>
                )
              })
            }
          </div>
          <ProductList setIsUserLogin={setIsUserLogin} />
          <ProductList setIsUserLogin={setIsUserLogin} />
          <ProductList setIsUserLogin={setIsUserLogin} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;

function SuggestionBox() {
  return <input type="checkbox" className=" size-3.5" />;
}

// function SelectOffer() {
//   const [isShow, setIsShow] = useState(false);
//   const list = [
//     "Flat",
//     "Buy one get one",
//     "Tiered",
//     "Cash Back",
//     "Lucky Gift",
//     "Free Rewards",
//     "Bogo",
//   ];
//   return (
//     <div className=" relative">
//       <div
//         onClick={() => {
//           setIsShow(!isShow);
//         }}
//         className="border z-10 cursor-pointer border-red-700 px-2 py-1.5 rounded-md flex items-center gap-2"
//       >
//         <img src="./red-percentage.svg" className="h-4 w-4" alt="" />
//         <p className="font-semibold w-full">Offer</p>
//         <img src="./chow-down-red.svg" className="h-4 w-4" alt="" />
//       </div>

//       {isShow && (
//         <div className=" absolute p-2 top-10 bg-white border-red-700 left-0 w-full border rounded-md flex flex-col gap-2">
//           {list.map((item) => {
//             return (
//               <div
//                 key={item}
//                 className=" border border-red-300 rounded-sm px-2 py-1 w-full flex gap-2 items-center    "
//               >
//                 <input type="checkbox" className=" size-4" />
//                 <p className=" font-semibold">{item}</p>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

function WomenBox() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      onClick={() => setIsShow(!isShow)}
      className="  cursor-pointer relative flex bg-red-200 items-center gap-1 px-3 py-1 text-sm rounded  font-semibold "
    >
      Women
      <img src="./nav/women.png" alt="" />
      {isShow && (
        <div className=" z-10 shadow-md shadow-gray-600 absolute flex gap-4 flex-wrap w-96 md:w-[36rem] bg-white top-6 border px-4 py-3 rounded-md  -left-1 text-black font-normal">
          {navBarData.map((data) => {
            return (
              <div key={data.title} className=" flex flex-col gap-1">
                <p className=" text-xl font-semibold text-red-700">
                  {data.title}
                </p>
                {data.items.map((item) => {
                  return (
                    <p className=" text-gray-500  font-semibold" key={item}>
                      {item}
                    </p>
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

function ProductList({ setIsUserLogin }) {
  return (
    <div
      onClick={setIsUserLogin}
      className="w-full max-w-7xl flex-col md:flex-row p-6 bg-white border rounded-lg flex gap-4 items-center"
    >
      <img src="./category1.png" className="" alt="" />
      <div className="flex w-full justify-between h-full gap-4 md:gap-4 flex-col">
        <div className=" flex flex-col gap-1 w-full" >
          <div className="flex w-full gap-4 justify-between">
            <p className=" text-2xl md:text-3xl font-semibold">Lifestyle</p>
            <div className=" flex items-center gap-1">
              <img src="./golden-star.svg" className=" size-6 md:size-8" alt="" />
              <p className=" text-2xl md:text-4xl font-semibold" >3.9</p>
            </div>
          </div>
          <p className="text-primary-gray md:text-lg max-w-80">
            A unit of is one of the biggest brand in the tops in women wears.
          </p>
          <div className=" mt-1 flex gap-2 items-center" >
            <img src="./right-circle.png" className=" size-6 md:size-8" />
            <p className=" md:text-xl" >MI Road</p>
          </div>
          <div className=" mt-1 flex gap-2 items-center justify-between" >
            <p className=" text-xl md:text-4xl font-medium" >35% Off on food items <span className=" text-lg  font-normal" > (Valid till 28th dec)</span> </p>
            <div className=" flex flex-col items-center justify-center" >
              <ThumbsUp size={20} />
              <p className=" text-sm font-semibold" >45K</p>
            </div>
          </div>
        </div>
        <div className=" flex text-base  md:text-lg flex-col gap-2 md:flex-row" >
          <div className=" flex gap-1 items-center" >
            <img src="./time.png" alt="" />
            <p>Mon - Fri (11:00 AM - 08:00 PM)</p>
          </div>
          <div className=" flex gap-1 items-center" >
            <img src="./phone-red.png" alt="" />
            <p>+91 - 8112XXXXXX</p>
          </div>
          <div className=" flex flex-col items-center justify-center self-end ml-auto" >
            <Share2Icon size={20} />
            <p className=" text-sm font-semibold" >40K</p>
          </div>
        </div>
      </div>
    </div>
  );
}