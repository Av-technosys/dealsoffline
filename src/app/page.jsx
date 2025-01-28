import Footer from "@/components/footer";
import NavBarBG from "@/components/navBarBG";
import Link from "next/link";
import React from "react";

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
        <div className="  flex container -translate-y-full justify-center px-6 md:px-4 flex-col">
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

      <div className="w-full mt-8 min-h-96 relative">
        <div className="absolute hidden md:block top-0 left-0">
          <img
            src="./bg-dots.png"
            className="h-52 w-auto object-contain"
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

        <div className="flex flex-col gap-14">
          <p className="container px-6 md:px-4 text-primary-gray text-center mx-auto font-semibold md:font-normal text-xl md:text-2xl">
            Explore our wide range of categories to find exactly what you need!
          </p>
          <div className="flex overflow-x-scroll hide-scrollbar px-6 md:px-4 gap-16">
            <div className="size-72 text-white overflow-hidden pl-4 relative shrink-0">
              <img
                src="./dealsoffline1.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="bg-black rounded-lg opacity-20 absolute top-0 left-0 w-full h-full"></div>
              <div className="px-4 py-2 absolute bottom-4 w-full flex flex-col gap-1 left-0">
                <div className="w-full z-10 flex items-center justify-between">
                  <p className="font-semibold">Women</p>
                  <div className="p-1 rounded-full">
                    <img src="./right-arrow.svg" className="" alt="" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm">
                  Explore the latest trends in clothing, shoes, and more for
                  every occasion.
                </p>
                <div className="h-0.5 w-1/3 rounded-lg bg-white mt-2 mx-auto"></div>
              </div>
            </div>
            <div className="size-72 text-white overflow-hidden pl-4 relative shrink-0">
              <img
                src="./dealsoffline2.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="bg-black rounded-lg opacity-20 absolute top-0 left-0 w-full h-full"></div>
              <div className="px-4 py-2 absolute bottom-4 w-full flex flex-col gap-1 left-0">
                <div className="w-full z-10 flex items-center justify-between">
                  <p className="font-semibold">Men</p>
                  <div className="p-1 rounded-full">
                    <img src="./right-arrow.svg" className="" alt="" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm">
                  Sharp styles, versatile footwear, and timeless pieces for
                  every moment.
                </p>
                <div className="h-0.5 w-1/3 rounded-lg bg-white mt-2 mx-auto"></div>
              </div>
            </div>
            <div className="size-72 text-white overflow-hidden pl-4 relative shrink-0">
              <img
                src="./dealsoffline3.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="bg-black rounded-lg opacity-20 absolute top-0 left-0 w-full h-full"></div>
              <div className="px-4 py-2 absolute bottom-4 w-full flex flex-col gap-1 left-0">
                <div className="w-full z-10 flex items-center justify-between">
                  <p className="font-semibold">Kids</p>
                  <div className="p-1 rounded-full">
                    <img src="./right-arrow.svg" className="" alt="" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm">
                  Playful outfits and cozy shoes for every adventure.
                </p>
                <div className="h-0.5 w-1/3 rounded-lg bg-white mt-2 mx-auto"></div>
              </div>
            </div>
            <div className="size-72 text-white overflow-hidden pl-4 relative shrink-0">
              <img
                src="./dealsoffline4.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="bg-black rounded-lg opacity-20 absolute top-0 left-0 w-full h-full"></div>
              <div className="px-4 py-2 absolute bottom-4 w-full flex flex-col gap-1 left-0">
                <div className="w-full z-10 flex items-center justify-between">
                  <p className="font-semibold">Home & Living</p>
                  <div className="p-1 rounded-full">
                    <img src="./right-arrow.svg" className="" alt="" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm">
                  Elegant décor and accents that bring comfort and personality
                  home.
                </p>
                <div className="h-0.5 w-1/3 rounded-lg bg-white mt-2 mx-auto"></div>
              </div>
            </div>
            <div className="size-72 text-white overflow-hidden pl-4 relative shrink-0">
              <img
                src="./dealsoffline5.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="bg-black rounded-lg opacity-20 absolute top-0 left-0 w-full h-full"></div>
              <div className="px-4 py-2 absolute bottom-4 w-full flex flex-col gap-1 left-0">
                <div className="w-full z-10 flex items-center justify-between">
                  <p className="font-semibold">Women</p>
                  <div className="p-1 rounded-full">
                    <img src="./right-arrow.svg" className="" alt="" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm">
                  Explore the latest trends in clothing, shoes, and more for
                  every occasion.
                </p>
                <div className="h-0.5 w-1/3 rounded-lg bg-white mt-2 mx-auto"></div>
              </div>
            </div>
            <div className="size-72 text-white overflow-hidden pl-4 relative shrink-0">
              <img
                src="./dealsoffline6.png"
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt=""
              />
              <div className="bg-black rounded-lg opacity-20 absolute top-0 left-0 w-full h-full"></div>
              <div className="px-4 py-2 absolute bottom-4 w-full flex flex-col gap-1 left-0">
                <div className="w-full z-10 flex items-center justify-between">
                  <p className="font-semibold">Women</p>
                  <div className="p-1 rounded-full">
                    <img src="./right-arrow.svg" className="" alt="" />
                  </div>
                </div>
                <p className="line-clamp-2 text-sm">
                  Explore the latest trends in clothing, shoes, and more for
                  every occasion.
                </p>
                <div className="h-0.5 w-1/3 rounded-lg bg-white mt-2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-gray-100 py-12 min-h-96 flex flex-col gap-14 md:px-4">
        <div className="flex w-full px-4 items-center flex-col gap-4">
          <p className="text-black text-center text-2xl md:text-3xl font-semibold">
            Popular Deals Of The Day
          </p>
          <p className="text-primary-gray text-center text-lg md:text-2xl">
            Discover exciting discounts and offers curated just for you.
          </p>
        </div>

        <StoreList storeData={popData} />
        <StoreList storeData={popData2} />
      </div>
      <div className="w-full bg-gray-100 py-12 min-h-96 flex flex-col gap-14 md:px-4">
        <div className="flex w-full px-4 items-center flex-col gap-4">
          <p className="text-black text-center text-2xl md:text-3xl font-semibold">
            Popular Deals Of The Day
          </p>
          <p className="text-primary-gray text-center text-lg md:text-2xl">
            Discover exciting discounts and offers curated just for you.
          </p>
        </div>

        <StoreList storeData={storeData} />
        <StoreList storeData={storeData2} />
      </div>

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
          className={`w-auto shrink-0 ${
            logo.src.includes("logo") ? "h-20" : "h-2"
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
