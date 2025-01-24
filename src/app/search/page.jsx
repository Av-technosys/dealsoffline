"use client";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import NavBarBG from "@/components/navBarBG";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  return (
    <div>
      <div className="relative flex flex-col h-full justify-between gap-6 w-full min-h-screen">
        <NavBarBG />
        <img
          src="./hero-bg.png"
          className="absolute top-0 -z-10 h-full w-full left-0 object-cover"
          alt=""
        />
        <div className="absolute top-0 h-36 left-0 w-full bg-gradient-to-b from-black to-transparent"></div>
        <div className=" -translate-y-full flex container justify-center px-6 md:px-4 flex-col">
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
      <div className="flex">
        <div className="py-12 px-6 w-full max-w-72 border-r border-gray-300 hidden md:flex flex-col gap-4">
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
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-lg">Brands</p>
            <div className="flex w-full flex-wrap gap-2">
              <div className="border flex items-center gap-1 border-red-700 px-1.5 py-0.5 text-xs rounded-md font-semibold text-red-700">
                Puma
              </div>
              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Zara
              </div>
              <div className="border flex items-center gap-1 border-red-700 px-1.5 py-0.5 text-xs rounded-md font-semibold text-red-700">
                H & M
              </div>

              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Forever 21
              </div>
              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Mango
              </div>
              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Gap
              </div>
              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Vero Moda
              </div>
              <div className="border flex items-center gap-1 border-red-700 px-1.5 py-0.5 text-xs rounded-md font-semibold text-red-700">
                Levi's
              </div>
              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Zalando
              </div>
              <div className="border flex items-center gap-1 border-gray-600 px-1.5 py-0.5 text-xs rounded-md font-semibold text-gray-500">
                Marks & spencer
              </div>
            </div>
            <div className="-mt-1 flex items-center gap-1 px-1.5 py-0.5 text-xs rounded-md font-semibold text-red-700">
              See More
            </div>

            <SelectOffer />
            <div className="flex flex-col gap-1 mt-2">
              <p className="font-semibold text-lg mt-2">Suggested</p>
              <div className="flex gap-3 items-center">
                <SuggestionBox />

                <p className="text-primary-gray">Ongoing offer</p>
              </div>
              <div className="flex gap-3 items-center">
                <SuggestionBox />
                <p className="text-primary-gray">Closing soon</p>
              </div>
              <div className="flex gap-3 items-center">
                <SuggestionBox />
                <p className="text-primary-gray">Upcoming Offers</p>
              </div>
              <div className="flex gap-3 items-center">
                <SuggestionBox />
                <p className="text-primary-gray">Closing Today</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 px-6 flex flex-col w-full gap-6">
          <div className="flex gap-2 flex-wrap items-center">
            <div className="border border-red-700 gap-2 rounded-md bg-red-600/20 flex items-center px-2 py-1.5">
              <p className="text-red-700">Jaipur</p>
              <div className="p-2 rounded-md bg-red-700">
                <img src="./cross.svg" alt="" />
              </div>
            </div>
            <div className="border border-red-700 gap-2 rounded-md bg-red-600/20 flex items-center px-2 py-1.5">
              <p className="text-red-700">Mi Road</p>
              <div className="p-2 rounded-md bg-red-700">
                <img src="./cross.svg" alt="" />
              </div>
            </div>
            <div className="border border-red-700 gap-2 rounded-md bg-red-600/20 flex items-center px-2 py-1.5">
              <p className="text-red-700">Tops</p>
              <div className="p-2 rounded-md bg-red-700">
                <img src="./cross.svg" alt="" />
              </div>
            </div>
            <div className="border border-red-700 gap-2 rounded-md bg-red-600/20 flex items-center px-2 py-1.5">
              <p className="text-red-700">Jeans</p>
              <div className="p-2 rounded-md bg-red-700">
                <img src="./cross.svg" alt="" />
              </div>
            </div>
          </div>
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;

function SuggestionBox() {
  return <input type="checkbox" className=" size-4" />;
}

function SelectOffer() {
  const [isShow, setIsShow] = useState(false);
  const list = [
    "Flat",
    "Buy one get one",
    "Tiered",
    "Cash Back",
    "Lucky Gift",
    "Free Rewards",
    "Bogo",
  ];
  return (
    <div className=" relative">
      <div
        onClick={() => {
          setIsShow(!isShow);
          console.log(isShow); // Add this to check the state change
        }}
        className="border z-10 cursor-pointer border-red-700 px-2 py-1.5 rounded-md flex items-center gap-2"
      >
        <img src="./red-percentage.svg" className="h-4 w-4" alt="" />
        <p className="font-semibold w-full">Offer</p>
        <img src="./chow-down-red.svg" className="h-4 w-4" alt="" />
      </div>

      {isShow && (
        <div className=" absolute p-2 top-10 bg-white border-red-700 left-0 w-full border rounded-md flex flex-col gap-2">
          {list.map((item) => {
            return (
              <div
                key={item}
                className=" border border-red-300 rounded-sm px-2 py-1 w-full flex gap-2 items-center    "
              >
                <input type="checkbox" className=" size-4" />
                <p className=" font-semibold">{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
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

function ProductList() {
  return (
    <Link
      href="/store"
      className="w-full flex-col md:flex-row p-4 bg-white rounded-md flex gap-4 items-center"
    >
      <img src="./category1.png" className="" alt="" />
      <div className="flex w-full gap-4 md:gap-4 flex-col">
        <div className="flex w-full gap-4 justify-between">
          <p className="text-xl font-semibold">Lifestyle</p>
          <img src="./view-more.svg" alt="" />
        </div>
        <div className="flex items-center gap-1">
          <img src="./rating.svg" alt="" />
          <p className="font-semibold">3.9</p>
        </div>
        <p className="text-primary-gray text-lg leading-8">
          A unit of is one of the biggest brand in the tops in women wears.
        </p>
        <div className="items-center flex flex-wrap gap-2">
          <img src="./red-percentage.svg" className="h-4 w-4" alt="" />
          <p className="text-red-600 font-semibold">35% Off on food items</p>
          <p className="text-primary-gray text-xs">(Valid till 28th dec)</p>
        </div>
        <div className="items-center flex flex-wrap gap-2">
          <img src="./clock.svg" className="h-4 w-4" alt="" />
          <p className="text-primary-gray font-semibold">Mon - Fri</p>
          <p className="text-primary-gray text-xs">(11:00 AM - 08:00 PM)</p>
        </div>
        <div className="items-center flex flex-wrap gap-2">
          <img src="./phone.svg" className="h-4 w-4" alt="" />
          <p className="text-primary-gray">+91 - 8112XXXXXX</p>
        </div>
      </div>
    </Link>
  );
}
