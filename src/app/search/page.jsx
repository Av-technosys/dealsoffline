"use client";
import BrandsShowMore from "@/components/dialog/brandsShowMore";
import ChangePassDialog from "@/components/dialog/changePassDialog";
import GetPsswordOTP from "@/components/dialog/changePassOTP";
import CreateUserDialog from "@/components/dialog/createUserDialog";
import GetCreateOTP from "@/components/dialog/createUserOTP";
import BeautyMenu from "@/components/dialog/filter/beauty";
import ElectronicsMenu from "@/components/dialog/filter/electronics";
import HomeAppliencesMenu from "@/components/dialog/filter/homeAppliences";
import HomeDecoreMenu from "@/components/dialog/filter/homeDecore";
import MenuKids from "@/components/dialog/filter/kid";
import MenMenu from "@/components/dialog/filter/men";
import WomenMenu from "@/components/dialog/filter/women";
import LocationShowMore from "@/components/dialog/locationSeeMore";
import LoginDialog from "@/components/dialog/loginUserDialog";
import PartnerLoginDialog from "@/components/dialog/partnerLoginDialog";
import PartnerLoginOTPDialog from "@/components/dialog/partnerLoginOTPDialog";
import Footer from "@/components/footer";
import { HeroCarousel } from "@/components/heroCarousel";
import NavBar from "@/components/nav/navBar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Share2Icon, ThumbsUp, X } from "lucide-react";
import React, { useState } from "react";

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
      <HeroCarousel />
      <div className="relative flex flex-col justify-center gap-6">
        <NavBar />

        <CreateUserDialog
          isOpen={isCreateUser}
          handleOTPDialog={setIsCreateOTP}
          setUserLogin={setIsUserLogin}
          setIsOpen={setIsCreateUser}
        />
        <GetCreateOTP
          isOpen={isCreateOTP}
          setIsOpen={setIsCreateOTP}
          handleUserLogin={setIsUserLogin}
        />
        <GetPsswordOTP
          isOpen={isPassOTP}
          setIsOpen={setIsPassOTP}
          handleOTPDialog={setIsUerPassword}
        />

        <LoginDialog
          isOpen={isUserLogin}
          handleCreateAccount={setIsCreateUser}
          handleOTPDialog={setIsPassOTP}
          setIsOpen={setIsUserLogin}
        />
        <ChangePassDialog
          isOpen={isUerPassword}
          setIsOpen={setIsUerPassword}
          handleUserLogin={setIsUserLogin}
        />

        <PartnerLoginDialog
          isOpen={isPartnerLogin}
          setIsOpen={setIsPartnerLogin}
          handleOTPDialog={setIsPartnerOTP}
        />
        <PartnerLoginOTPDialog
          isOpen={isPartnerOTP}
          setIsOpen={setIsPartnerOTP}
        />

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
          <p className="text-6xl md:text-7xl uppercase font-bold text-primary-red">
            buy now
          </p>
          <p className="text-4xl md:text-5xl uppercase font-semibold text-white">
            upto 70% off
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="lg:py-10 px-6 w-full lg:max-w-72 lg:flex flex-col gap-4">
          <div className="flex flex-col gap-0">
            <p className="font-semibold mt-12 text-lg">Product Categories</p>
            <p className=" hidden lg:block text-sm text-gray-600">
              Select Categories for Shop
            </p>
            <div className="flex overflow-x-auto py-3 w-full md:flex-wrap gap-2">
              <div className="shrink-0">
                <MenMenu />
              </div>
              <div className="shrink-0">
                <WomenMenu />
              </div>
              <div className="shrink-0">
                <MenuKids />
              </div>
              <div className="shrink-0">
                <BeautyMenu />
              </div>
              <div className="shrink-0">
                <HomeDecoreMenu />
              </div>
              <div className="shrink-0">
                <HomeAppliencesMenu />
              </div>
              <div className="shrink-0">
                <ElectronicsMenu />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-3 gap-0">
            <p className="font-semibold text-lg">Brands</p>
            <p className=" text-sm text-gray-600">Select your Trusted Brand</p>
            <div className="flex w-full mt-3 flex-wrap gap-2">
              <SearchByBrand />
            </div>

            <p className="font-semibold mt-8 text-lg">Area/Location</p>
            <p className=" hidden lg:block text-sm text-gray-600">
              Explore Shops in your Area
            </p>
            <SearchByLoaction />

            <div className="flex flex-col gap-1 mt-4">
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
            <div className=" border border-primary-red flex gap-2 items-center justify-center duration-200 bg-primary-red px-4 py-2 rounded-md cursor-pointer text-white text-center font-semibold mt-6">
              <p>Apply</p>
              <Check size={20} />
            </div>
          </div>
        </div>

        <div className="py-10 max-w-7xl px-6 flex flex-col w-full gap-3">
          <AllAppliedFilter />
          <ProductList setIsUserLogin={setIsPartnerLogin} />
          <ProductList setIsUserLogin={setIsPartnerLogin} />
          <ProductList setIsUserLogin={setIsPartnerLogin} />
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

function AllAppliedFilter() {
  const [allFilter, setAllFilter] = useState([
    "Women",
    "Zara",
    "Vaishali Nagar",
  ]);
  function handleRemove(item) {
    setAllFilter(allFilter.filter((data) => data !== item));
  }
  return (
    <div className="flex gap-2 flex-wrap items-center">
      {allFilter.map((data) => {
        return (
          <div
            key={data}
            className=" gap-1 justify-center rounded-md bg-secondary-red font-semibold flex items-center px-2 py-1.5"
          >
            <p className="text-red-950">{data}</p>
            <X
              onClick={() => handleRemove(data)}
              className=" cursor-pointer text-red-950"
              size={18}
            />
          </div>
        );
      })}
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
      className="w-full max-w-7xl flex-col cursor-pointer md:flex-row p-6 bg-white border rounded-lg flex gap-4 items-center"
    >
      <img src="./category1.png" className="" alt="" />
      <div className="flex w-full justify-between h-full gap-4 md:gap-4 flex-col">
        <div className=" flex flex-col gap-1 w-full">
          <div className="flex w-full gap-4 justify-between">
            <p className=" text-2xl md:text-3xl font-semibold">Lifestyle</p>
            <div className=" flex items-center gap-1">
              <img
                src="./golden-star.svg"
                className=" size-6 md:size-8"
                alt=""
              />
              <p className=" text-2xl md:text-4xl font-semibold">3.9</p>
            </div>
          </div>
          <p className="text-primary-gray md:text-lg max-w-80">
            A unit of is one of the biggest brand in the tops in women wears.
          </p>
          <div className=" mt-1 flex gap-2 items-center">
            <img src="./right-circle.png" className=" size-6 md:size-8" />
            <p className=" md:text-xl">MI Road</p>
          </div>
          <div className=" mt-1 flex gap-2 items-center justify-between">
            <p className=" text-xl md:text-4xl font-medium">
              35% Off on food items{" "}
              <span className=" text-lg  font-normal">
                {" "}
                (Valid till 28th dec)
              </span>{" "}
            </p>
            <div className=" flex flex-col items-center justify-center">
              <ThumbsUp size={20} />
              <p className=" text-sm font-semibold">45K</p>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <div className=" flex text-base  md:text-lg flex-col gap-2 xl:flex-row">
            <div className=" flex gap-1 items-center">
              <img src="./time.png" alt="" />
              <p>Mon - Fri (11:00 AM - 08:00 PM)</p>
            </div>
            <div className=" flex gap-1 items-center">
              <img src="./phone-red.png" alt="" />
              <p>+91 - 8112XXXXXX</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center self-end ml-auto">
            <Share2Icon size={20} />
            <p className=" text-sm font-semibold">40K</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchByLoaction() {
  const locations = [
    "Vaishali Nagar",
    "Jagatpura",
    "Civil Lines",
    "C- Scheme",
    "Malviya Nagar",
    "Mansarovar",
    "Ajmer Road",
    "fort lake",
    "amer fort",
    "jal mahal",
    "mukesh art gallery",
    "nargadh fort",
    "Khatu sham ji",
  ];
  const [selectedFields, setSelectedFields] = useState([]);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      setSelectedFields(selectedFields.filter((item) => item !== value));
    } else {
      setSelectedFields([...selectedFields, value]);
    }
  };
  return (
    <div className="flex w-full py-3 overflow-x-auto md:flex-wrap gap-2">
      {/* <div className=" py-1 px-2 shrink-0 flex items-center justify-center bg-secondary-red font-semibold text-sm rounded-md" >Vaishali Nagar</div> */}
      {locations?.slice(0, 6).map((data) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={data}
            className={`shrink-0 cursor-pointer py-1 px-2 border border-black font-semibold text-sm rounded-md ${
              isPresect ? "bg-secondary-red" : ""
            }`}
          >
            {data}
          </div>
        );
      })}
      <LocationShowMore
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
        itemsToShow={locations.slice(6)}
      />
    </div>
  );
}

function SearchByBrand() {
  const brands = [
    "./companies-logo/zara.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./companies-logo/gap.png",
    "./companies-logo/h&m.png",
    "./companies-logo/puma.png",
    "./companies-logo/forever.png",
    "./companies-logo/gap.png",
    "./companies-logo/gap.png",
  ];
  const [selectedFields, setSelectedFields] = useState([]);
  const handleCheckboxChange = (value) => {
    if (selectedFields.includes(value)) {
      setSelectedFields(selectedFields.filter((item) => item !== value));
    } else {
      setSelectedFields([...selectedFields, value]);
    }
  };
  return (
    <div className="flex w-full pb-3 overflow-x-auto md:flex-wrap gap-2">
      {/* <div className=" py-1 px-2 shrink-0 flex items-center justify-center bg-secondary-red font-semibold text-sm rounded-md" >Vaishali Nagar</div> */}
      {brands?.slice(0, 6).map((data, idx) => {
        const isPresect = selectedFields.includes(data);
        return (
          <div
            onClick={() => handleCheckboxChange(data)}
            key={idx}
            className={`h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md ${
              isPresect ? "bg-secondary-red" : ""
            }`}
          >
            <img key={data} className=" w-full h-full " src={data} alt="" />
          </div>
        );
      })}
      <BrandsShowMore
        selectedFields={selectedFields}
        setSelectedFields={setSelectedFields}
        itemsToShow={brands.slice(6)}
      />
    </div>
  );
}
