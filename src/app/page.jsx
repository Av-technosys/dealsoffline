"use client";
import ChangePassDialog from "@/components/dialog/changePassDialog";
import GetPsswordOTP from "@/components/dialog/changePassOTP";
import CreateUserDialog from "@/components/dialog/createUserDialog";
import GetCreateOTP from "@/components/dialog/createUserOTP";
import LoginDialog from "@/components/dialog/loginUserDialog";
import PartnerLoginDialog from "@/components/dialog/partnerLoginDialog";
import PartnerLoginOTPDialog from "@/components/dialog/partnerLoginOTPDialog";
import UserProfileDialog from "@/components/dialog/userProfileDialog";
import UserSettingDialog from "@/components/dialog/userSettingDialog";
import Footer from "@/components/footer";
import NavBar from "@/components/nav/navBar";
import { ChevronLeftCircle, MapPin } from "lucide";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isCreateUser, setIsCreateUser] = React.useState(false);
  const [isUserLogin, setIsUserLogin] = React.useState(false);
  const [isPassOTP, setIsPassOTP] = React.useState(false);
  const [isCreateOTP, setIsCreateOTP] = React.useState(false);
  const [isUerPassword, setIsUerPassword] = React.useState(false);
  const [isPartnerLogin, setIsPartnerLogin] = React.useState(false);
  const [isPartnerOTP, setIsPartnerOTP] = React.useState(false);


  // For location
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [])


  return (
    <div>
      <div className="relative flex justify-center flex-col h-full  gap-6 w-full min-h-screen">
        <NavBar />


        <CreateUserDialog isOpen={isCreateUser} handleOTPDialog={setIsCreateOTP} setUserLogin={setIsUserLogin} setIsOpen={setIsCreateUser} />
        <GetCreateOTP isOpen={isCreateOTP} setIsOpen={setIsCreateOTP} handleUserLogin={setIsUserLogin} />
        <GetPsswordOTP isOpen={isPassOTP} setIsOpen={setIsPassOTP} handleOTPDialog={setIsUerPassword} />

        <LoginDialog isOpen={isUserLogin} handleCreateAccount={setIsCreateUser} handleOTPDialog={setIsPassOTP} setIsOpen={setIsUserLogin} />
        <ChangePassDialog isOpen={isUerPassword} setIsOpen={setIsUerPassword} handleUserLogin={setIsUserLogin} />


        <PartnerLoginDialog isOpen={isPartnerLogin} setIsOpen={setIsPartnerLogin} handleOTPDialog={setIsPartnerOTP} />
        <PartnerLoginOTPDialog isOpen={isPartnerOTP} setIsOpen={setIsPartnerOTP} />
        <img
          src="./hero-bg.png"
          className="absolute top-0 -z-10 h-full w-full left-0 object-cover"
          alt=""
        />
        <div className="  flex container justify-center px-6 md:px-4 flex-col">
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

      <ExploreCategory />


      <PopularDetails setIsUserLogin={setIsPartnerLogin} />
      <PopularStores setIsUserLogin={setIsPartnerLogin} />


      <div className="flex flex-col bg-white gap-14 px-4 py-12 pb-20 md:px-6">
        <div className="flex flex-col gap-2 md:gap-0 items-center">
          <p className="text-center text-2xl font-semibold">Shop by Brands</p>
          <p className="text-center text-lg text-primary-gray">
            Find your favorite brands and explore trending names, all in one
            place.
          </p>
        </div>
        <LogoCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

const logos = [
  { src: "./logo-1.png", alt: "Logo 1" },
  { src: "./red-dot.svg", alt: "Red Dot 1" },
  { src: "./logo-2.png", alt: "Logo 2" },
  { src: "./red-dot.svg", alt: "Red Dot 2" },
  { src: "./logo-3.png", alt: "Logo 3" },
  { src: "./red-dot.svg", alt: "Red Dot 3" },
  { src: "./logo-4.png", alt: "Logo 4" },
  { src: "./red-dot.svg", alt: "Red Dot 4" },
  { src: "./logo-5.png", alt: "Logo 5" },
  { src: "./red-dot.svg", alt: "Red Dot 5" },
  { src: "./logo-6.png", alt: "Logo 6" },
  { src: "./red-dot.svg", alt: "Red Dot 6" },
  { src: "./logo-7.png", alt: "Logo 7" },
];

function LogoCarousel() {
  return (
    <div className="flex items-center overflow-x-scroll md:justify-center md:w-full hide-scrollbar gap-3 md:gap-6">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`w-auto shrink-0 ${logo.src.includes("logo") ? "h-20" : "h-2"
            }`}
        >
          <img
            src={logo.src}
            className="w-auto h-full object-contain"
            alt={logo.alt}
          />
        </div>
      ))}
    </div>
  );
}
const popData = [
  {
    name: "Metro Shoes",
    imgSrc: "./store1.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Lavie luxe store",
    imgSrc: "./store2.png",
    rating: 4.2,
    address: "Capital Highstreet Mall, GG-10...",
  },
  {
    name: "Levis",
    imgSrc: "./store3.png",
    rating: 4.2,
    address: "Gulab Niwas, 40, Mirza Ismail...",
  },
  {
    name: "Westside",
    imgSrc: "./store4.png",
    rating: 4.2,
    address: "J-47, Malviya Marg Gold..",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store5.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store6.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store7.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store8.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
];

const popData2 = [
  {
    name: "Zudio",
    imgSrc: "./store6.png",
    rating: 4.2,
    address: "Nearby Gold Souk Grande Mall, SG...",
  },
  {
    name: "Lifestyle",
    imgSrc: "./store7.png",
    rating: 4.2,
    address: "Nearby Gold Souk Grande Mall, SG...",
  },
  {
    name: "Allen Solly",
    imgSrc: "./store8.png",
    rating: 4.2,
    address: "Pragati Tower, Tonk Rd, Sq...",
  },
  {
    name: "Lee",
    imgSrc: "./store9.png",
    rating: 4.2,
    address: "Ground Floor, Pink Square Mall...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store9.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store9.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store9.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store9.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store9.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
];

// Data array
const storeData = [
  {
    name: "Lavanya",
    imgSrc: "./pop1.png",
    rating: 4.2,
    address: "Grand Anukampa, Ajmer Road...",
  },
  {
    name: "Shoppers Stop",
    imgSrc: "./pop2.png",
    rating: 4.2,
    address: "Man Upasana, Marg G...",
  },
  {
    name: "Nike",
    imgSrc: "./pop3.png",
    rating: 4.2,
    address: "Shop No F15, 1st Floor, MGF ...",
  },
  {
    name: "Peno",
    imgSrc: "./pop4.png",
    rating: 4.2,
    address: "Ajmer Road, Nera 200 Feet.....",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./pop3.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./pop6.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store1.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store1.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
];

const storeData2 = [
  {
    name: "Bata",
    imgSrc: "./pop6.png",
    rating: 4.2,
    address: "Shop No. 1, 2, Mirza Ismail Rd, Jaya...",
  },
  {
    name: "Lavie",
    imgSrc: "./store2.png",
    rating: 4.2,
    address: "Capital Highstreet Mall, GG-10,...",
  },
  {
    name: "Max",
    imgSrc: "./pop1.png",
    rating: 4.2,
    address: "MGF Metropolitan Mall, G...",
  },
  {
    name: "Levis",
    imgSrc: "./pop2.png",
    rating: 4.2,
    address: "Gulab Niwas, 40, Mirza Ismail......",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./pop3.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./pop4.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
  {
    name: "Metro Shoes",
    imgSrc: "./store1.png",
    rating: 4.2,
    address: "Ground floor, khandelwal mansion...",
  },
];

// StoreCard Component
const StoreCard = ({ name, imgSrc, rating, address }) => {
  return (
    <Link
      href={`/store`}
      className="max-w-56 shrink-0 rounded-lg overflow-hidden bg-white w-full flex flex-col"
    >
      <div className="w-full max-w-56 overflow-hidden h-48">
        <img
          src={imgSrc}
          className="w-full h-full object-cover"
          alt={`${name} store`}
        />
      </div>
      <div className="flex flex-col px-3 py-2 pb-6">
        <div className="flex justify-between w-full gap-2">
          <p>{name}</p>
          <div className="flex items-center gap-1">
            <img src="./star.png" alt="Rating star" />
            <p className="font-semibold">{rating}</p>
          </div>
        </div>
        <p className="text-primary-gray line-clamp-1 text-sm">{address}</p>
      </div>
    </Link>
  );
};

// Main Component
const StoreList = ({ storeData }) => {
  return (
    <div className="flex w-full gap-16 mt-4 md:mt-8 px-4 md:pl-6 overflow-x-scroll hide-scrollbar">
      {storeData.map((store, index) => (
        <StoreCard
          key={index}
          name={store.name}
          imgSrc={store.imgSrc}
          rating={store.rating}
          address={store.address}
        />
      ))}
    </div>
  );
};


function ExploreCategory() {
  return (
    <div className="w-full mt-8 min-h-96 relative">
      <div className="absolute hidden md:block top-0 left-0">
        <img
          src="./bg-dots.png"
          className="h-52 -z-10 w-auto object-contain"
          alt=""
        />
      </div>
      <div className="absolute hidden md:block top-8 right-0">
        <img
          src="./bg-dots.png"
          className="h-52 w-auto object-contain"
          alt=""
        />
      </div>

      <div className="flex mx-auto max-w-7xl px-4 w-full pb-12 flex-col gap-10">
        <p className="px-6 md:px-4  max-w-3xl font-semibold w-full text-primary-gray text-center mt-6 mx-auto text-2xl md:text-3xl">
          Explore our wide range of categories to find exactly what you need!
        </p>
        <div className="w-full flex flex-col md:flex-row [&>*]:h-60 md:[&>*]:h-96 gap-2">
          {/* Women Card on the Left */}
          <Link href={"/search"} className="col-span-1 row-span-2 w-full rounded-md overflow-hidden relative h-full">
            <p className="absolute bottom-3 left-4 text-white z-40 text-2xl font-semibold">Women</p>
            <img src="./women.png" alt="Women" className="absolute top-0 left-0 w-full h-full object-cover" />
          </Link>

          <Link href={"/search"} className=" w-full h-full flex md:flex-col gap-2">
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">Home Appliances</p>
              <img src="./home-appliences.png" alt="Home Appliances" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">Men</p>
              <img src="./men.png" alt="Home Appliances" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </Link>


          <Link href={"/search"} className="col-span-1 row-span-2 w-full rounded-md overflow-hidden relative h-full">
            <p className="absolute bottom-3 left-4 text-white z-40 text-2xl font-semibold">Kids</p>
            <img src="./kids.png" alt="Women" className="absolute top-0 left-0 w-full h-full object-cover" />
          </Link>


          <Link href={"/search"} className=" flex md:flex-col w-full h-full gap-2">
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">Home Decore</p>
              <img src="./home-decore.png" alt="Home Appliances" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 w-full rounded-md overflow-hidden relative h-full">
              <p className="absolute bottom-3 left-4 text-white z-40 text-xl font-semibold">Electronics</p>
              <img src="./electronics.png" alt="Home Appliances" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </Link>


          <Link href={"/search"} className="col-span-1 row-span-2 w-full rounded-md overflow-hidden relative h-full">
            <p className="absolute bottom-3 left-4 text-white z-40 text-2xl font-semibold">Beauty</p>
            <img src="./beauty.png" alt="Women" className="absolute top-0 left-0 w-full h-full object-cover" />
          </Link>
        </div>

      </div>
    </div>
  )
}

function PopularDetails({ setIsUserLogin }) {
  const zudioList = [
    "Women Fassion",
    "Kids Wear",
    "Men Collection",
    "Sweaters & Muffers",
    "Sweatshirt",
    "Men Accessories",
    "Women Accessories",
  ]
  return <div className=" bg-yellow-100 overflow-hidden min-h-96 px-4 w-full py-6 relative" >

    <div className="absolute hidden md:block top-6 left-0">
      <img
        src="./yellow-dots.png"
        className="h-52 -z-10 w-auto object-contain"
        alt=""
      />
    </div>
    <p className=" text-yellow-50 text-[10rem] absolute bottom-4 left-0 font-semibold overflow-hidden whitespace-nowrap translate-x-1/2" >Popular Deals Of The Day</p>
    <div className=" flex flex-col items-center gap-1">
      <p className=" text-3xl md:text-4xl font-semibold text-center " >Popular Deals Of The Day</p>
      <p className=" text-gray-600 md:text-xl  font-semibold text-center" >Discover exciting discounts and offers curated just for you.</p>
    </div>

    <div className=" max-w-7xl justify-center mx-auto items-center gap-2 flex flex-row ">
      {/* <img src="./backword-btn.png" className=" z-20 h-6 w-auto" alt="" /> */}
      {/* <div className=" p-2 border border-black rounded-full"> */}
      <ChevronLeftCircleIcon className=" shrink-0" />
      {/* </div> */}

      {/* Cards */}

      <div className=" flex gap-2 mt-4 items-center overflow-x-scroll hide-scrollbar" >
        <div onClick={() => setIsUserLogin(true)} className="h-96 w-60 md:w-72 rounded-md  shrink-0 py-6 px-4 flex z-10 flex-col bg-black">
          <div className=" text-white flex  justify-between gap-2 mb-4 items-center">
            <p className=" text-4xl font-semibold" >Zudio</p>
            <p className=" text-2xl font-semibold" >18%off</p>
          </div>
          {
            zudioList.map((item, index) => {
              return (
                <p key={index} className=" text-white  text-sm" >{item}</p>
              )
            })
          }

          <div className=" w-full mt-auto flex gap-2 justify-between">
            <div className=" flex gap-1 items-center" >
              <MapPinIcon className="h-5 w-6 text-white" />
              <p className=" text-white font-semibold " >3.2 Km</p>
            </div>
            <p className=" text-white font-semibold" >View Offers</p>
          </div>
        </div>

        <div onClick={() => { setIsUserLogin(true) }} className=" w-60 md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative" >
          <img src="./w1.png" className=" absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className=" bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
          <div className=" absolute bottom-6 left-4 flex flex-col gap-1" >
            <p className=" font-semibold text-white text-5xl" >10% off</p>
            <p className=" text-white font-semibold text-lg" >Karin Store</p>
          </div>
        </div>
        <div onClick={() => { setIsUserLogin(true) }} className=" w-60 md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative" >
          <img src="./w2.png" className=" absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className=" bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
          <div className=" absolute bottom-6 left-4 flex flex-col gap-1" >
            <p className=" font-semibold text-white text-5xl" >20% off</p>
            <p className=" text-white font-semibold text-lg" >Samanth Store</p>
          </div>
        </div>
        <div onClick={() => { setIsUserLogin(true) }} className=" w-60 md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative" >
          <img src="./w3.png" className=" absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className=" bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
          <div className=" absolute bottom-6 left-4 flex flex-col gap-1" >
            <p className=" font-semibold text-white text-5xl" >30% off</p>
            <p className=" text-white font-semibold text-lg" >Krishna Group</p>
          </div>
        </div>
      </div>


      {/* <img src="./forword-btn.png" className=" z-20 h-6 w-auto" alt="" /> */}
      <ChevronRightCircleIcon className=" shrink-0" />
    </div>
  </div>
}

function PopularStores({ setIsUserLogin }) {
  const zudioList = [
    "Women",
    "Kids Wear",
    "Men Collection",
    "Sweaters & Muffers",
    "Sweatshirt",
    "Men Accessories",
    "Women Accessories",
  ]
  return <div className=" bg-pink-100 overflow-hidden mt-6 min-h-96 px-4 w-full py-6 relative" >

    <div className="absolute hidden md:block bottom-6 right-10 z-10">
      <img
        src="./pink-dotes.png"
        className="h-52 -z-10 w-auto object-contain"
        alt=""
      />
    </div>
    <p className=" text-pink-50 text-[10rem] absolute bottom-4 left-0 font-semibold overflow-hidden whitespace-nowrap translate-x-1/2" >Popular Stores Of The Month</p>
    <div className=" flex flex-col items-center gap-1">
      <p className=" text-3xl md:text-4xl font-semibold text-center " >Popular Stores Of The Month</p>
      <p className=" text-gray-600 md:text-xl  font-semibold text-center" >Discover Star of the Month curated just for you.</p>
    </div>

    <div className=" z-20 max-w-7xl justify-center mx-auto items-center gap-2 flex flex-row ">
      {/* <img src="./backword-btn.png" className=" z-20 h-6 w-auto" alt="" /> */}
      <ChevronLeftCircleIcon className=" shrink-0" />

      {/* Cards */}

      <div onClick={() => { setIsUserLogin(true) }} className=" flex gap-2 mt-4 items-center overflow-x-scroll hide-scrollbar" >
        <div className="h-96 w-60 md:w-72 rounded-md  shrink-0 py-6 px-4 flex z-10 flex-col bg-black">
          <div className=" text-white flex  justify-between gap-2 mb-4 items-center">
            <p className=" text-4xl font-semibold" >Shreeji</p>
            <div className=" flex  text-xl font-semibold items-center" >4.8 <img src="./golden-star.png" className=" size-6" alt="" /></div>
          </div>
          {
            zudioList.map((item, index) => {
              return (
                <p key={index} className=" text-white  text-sm" >{item}</p>
              )
            })
          }

          <div className=" w-full mt-auto flex gap-2 justify-between">
            <div className=" flex gap-1 items-center" >
              <MapPinIcon className="h-5 w-6 text-white" />
              <p className=" text-white font-semibold " >3.2 Km</p>
            </div>
            <p className=" text-white font-semibold" >View Offers</p>
          </div>
        </div>

        <div onClick={() => { setIsUserLogin(true) }} className=" w-60  md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative" >
          <img src="./w1.png" className=" absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className=" bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
          <div className=" absolute bottom-6 left-4 flex flex-col gap-1" >
            <div className=" font-semibold flex  text-white text-5xl" >
              <img src="./golden-star.png" className=" size-12" alt="" />
              <p>4.6</p>
            </div>
            <p className=" text-white font-semibold text-lg" >Karin Store</p>
          </div>
        </div>
        <div onClick={() => { setIsUserLogin(true) }} className=" w-60 md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative" >
          <img src="./w2.png" className=" absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className=" bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
          <div className=" absolute bottom-6 left-4 flex flex-col gap-1" >
            <div className=" font-semibold flex  text-white text-5xl" >
              <img src="./golden-star.png" className=" size-12" alt="" />
              <p>4.2</p>
            </div>
            <p className=" text-white font-semibold text-lg" >Radhe-Krishnan Store</p>
          </div>
        </div>
        <div onClick={() => { setIsUserLogin(true) }} className=" z-20 w-60 md:w-72 h-96 rounded-md shrink-0 overflow-hidden relative" >
          <img src="./khushi-kirana-store.png" className=" absolute top-0 left-0 w-full h-full object-cover" alt="" />
          <div className=" bg-gradient-to-b from-transparent to-black absolute top-0 left-0 w-full h-full"></div>
          <div className=" absolute bottom-6 left-4 flex flex-col gap-1" >
            <div className=" font-semibold flex  text-white text-5xl" >
              <img src="./golden-star.png" className=" size-12" alt="" />
              <p>3.2</p>
            </div>
            <p className=" text-white font-semibold text-lg" >Khushi Kirana Store</p>
          </div>
        </div>
      </div>


      {/* <img src="./forword-btn.png" className="  z-20 h-6 w-auto" alt="" /> */}
      <ChevronRightCircleIcon className=" shrink-0" />
    </div>
  </div>
}