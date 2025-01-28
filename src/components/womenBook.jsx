"use client";
import { useState } from "react";

export default function WomenBox() {
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