"use client";
import { Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [showMegaMenu, setShowMegaMenu] = React.useState(false);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);

  const navMenue = [
    {
      "label": "Men",
      "image": "./nav/men.png",
      "toggleMenu": true
    },
    {
      "label": "Women",
      "image": "./nav/women.png"
    },
    {
      "label": "Kids",
      "image": "./nav/kids.png"
    },
    {
      "label": "Home Decor",
      "image": "./nav/home-decore.png"
    },
    {
      "label": "Home Appliances",
      "image": "./nav/home-appliences.png"
    }
  ]

  return (
    <div className=" absolute left-0 top-0 bg-white w-full px-6 py-5" >
      <div className="max-w-7xl relative w-full mx-auto">
        <div className="flex justify-between ">
          <div className="flex items-center gap-6 w-full md:flex-row">
            <Link href={"/"} className=" font-semibold uppercase px-4 w-fit h-fit py-1">
              <img src="./logo.svg" alt="" />
            </Link>


            <div className="xl:flex justify-between hidden gap-3">
              {
                navMenue.map((data, index) => {
                  return <div
                    key={index}
                    className="cursor-pointer flex items-center gap-1"
                    onClick={() => setShowMegaMenu(!showMegaMenu)}
                  >
                    <p className="font-medium text-sm">{data.label}</p>
                    <img src={data.image} alt="" />
                  </div>
                })
              }
              {showMegaMenu && <WomenBox />}
            </div>
            <div className=" ml-auto hidden xl:flex items-center gap-4 ">
              <Link href={"/search"} className=" border  border-black rounded py-2 px-3 flex items-center gap-3">
                <img src="./nav/search.png" alt="" />
                <p className="font-medium text-gray-400">Search</p>
                <div className=" px-3 border-l border-black flex items-center gap-2 ">

                  <img src="./search-locaion.svg" alt="" />
                  <p className="font-medium">Jaipur</p>
                  <img src="./map-pin.svg" alt="" />
                </div>
              </Link>
              <Link href={"/vendor-login/signup"} className="bg-red-700 rounded py-2 px-3 flex items-center gap-2">
                <img src="./nav/hand-shake.png" alt="" />
                <p className="font-medium text-sm text-white">Partner with us</p>
              </Link>
              <Link href={"/user-dashbord"} className=" size-8 cursor-pointer" >
                <img src="./nav/navUser.svg" alt="" />
              </Link>
            </div>
            <div onClick={() => setOpenMobileMenu(!openMobileMenu)} className=" block xl:hidden ml-auto" >
              {
                openMobileMenu ? <X size={20} /> : <Menu size={20} />
              }
            </div>
            {
              openMobileMenu && <MobileMenu />
            }
          </div>

          {/* <div className="flex gap-2 relative items-center md:hidden">
            <User color="#000" />
            <div
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              className="cursor-pointer ml-4 mt-1 text-2xl"
            >
              {openMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </div>
            {openMobileMenu && <MobileMenu />}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

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

function WomenBox() {
  return (
    <div
      id="megaMenu"
      className="absolute top-12 shadow-md left-0 w-full max-w-3xl mx-auto p-4 border grid grid-cols-4  bg-white  gap-6 rounded-md z-50"
    >
      {navBarData.map((data) => {
        return (
          <div key={data.title} className="flex w-fit flex-col gap-1">
            <p className="text-xl font-semibold text-red-700">{data.title}</p>
            {data.items.map((item) => {
              return (
                <p key={item} className="text-gray-500 ">
                  {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function MobileMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className=" z-50 h-[80vh] overflow-y-scroll w-60 bg-white text-black p-4 border absolute top-12 -right-4">
      <Link
        href={"/search"}
        className=" border flex gap-2 items-center justify-between text-gray-300 rounded-md border-red-700 px-3 pt-1.5"
      >
        <p>Search here</p>
        <Search size={20} />
      </Link>
      <div className=" flex w-full py-4 items-center justify-between" >
        <Link href={"/vendor-login/signup"} className="  flex items-center gap-2 text-red-700 font-medium pt-2 underline">
          <p>Partner with us</p>
          {/* <img src="./nav/shop.svg" alt="asdf" /> */}
        </Link>
        <Link href="/user-dashbord" >
          <img src="./nav/navUser.svg" className=" size-6" alt="" />
        </Link>
      </div>

      <div
        onClick={() => setShowSubMenu(!showSubMenu)}
        className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600"
      >
        <p>Women</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      {showSubMenu && <MobileWomenSubMenu />}
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Men</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Kids</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Home & Living</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Beauty</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Home Appliances</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
      <div className=" flex gap-2 items-center justify-between text-gray-600 py-2 border-t mt-2 border-gray-600">
        <p>Personal Electronics</p>
        <img src="./nav/chowdown.svg" alt="" />
      </div>
    </div>
  );
}

function MobileWomenSubMenu() {
  return (
    <div>
      {navBarData.map((data) => {
        return (
          <div key={data.title} className="flex w-fit flex-col gap-1">
            <p className="text-xl font-semibold text-red-700">Indiwear</p>
            {data.items.map((item) => {
              return (
                <p key={item} className="text-gray-500 ">
                  {item}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
