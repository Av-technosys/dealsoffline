"use client";
import Footer from "@/components/footer";
import Link from "next/link";
import React, { useState } from "react";
import NavBar from "@/components/navBar";
import { ChevronDownIcon, ChevronLeftCircleIcon, ChevronRightCircle, Clock, CornerUpRightIcon, Phone, Star } from "lucide-react";


const Page = () => {

  return (
    <div>
      <NavBar />

      <div className=" max-w-7xl mx-auto w-full mt-12  px-6 md:px-4 flex flex-col gap-16">
        <div className="flex md:border-2 flex-col md:px-4 py-4 mt-12 rounded-xl  gap-6 md:flex-row">
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="w-full">
              <img src="./hero-main.png" className="w-full h-auto" alt="" />
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
            <p className="text-primary-gray-light ">
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
            <div className=" flex items-center gap-4" >
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
            <div className="flex overflow-x-scroll py-3 hide-scrollbar items-center gap-6">
              <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
              <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
              <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
              <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
              <img src="./hero-small.png" className="w-28 h-auto shrink-0" alt="" />
            </div>
            {/* <div className="flex w-full mt-auto items-center gap-2 self-end justify-between">
              <Link
                href={"/gallary"}
                className="py-2 px-3 bg-red-700 flex gap-1 items-center rounded-md text-white"
              >
                <p>View Gallery</p>
                <img src="./gallary.svg" alt="" />
              </Link>
              <MakePayment />
            </div> */}
          </div>
        </div>

        <div className=" flex flex-col md:flex-row gap-6 w-full" >
          <AllOffers />
          <OtherOutlet />
        </div>
        <p className=" text-gray-500 -mt-10" >T&C Apply <span className=" text-red-500" >*</span> </p>

        {/* <ProductPageDetail /> */}
        <Gallary />
        <ReviewUs />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

// function ProductPageDetail() {
//   const [tab, setTab] = useState(0);
//   return (
//     <div>
//       <div className="w-full flex justify-between gap-4 items-center flex-col md:flex-row">
//         <div className="flex gap-6 w-full flex-wrap items-center">
//           <div
//             onClick={() => setTab(0)}
//             className={`flex cursor-pointer gap-1 py-2 ${tab === 0 && "border-b-2 text-red-700 border-red-700 "
//               }`}
//           >
//             <p>Store Details</p>
//             <img src="./shop.svg" alt="" />
//           </div>
//           <div
//             onClick={() => setTab(1)}
//             className={`flex cursor-pointer gap-1 py-2 ${tab === 1 && "border-b-2 text-red-700 border-red-700 "
//               }`}
//           >
//             <p className="text-primary-gray">Ratings & Review</p>
//             <img src="./shop.svg" alt="" />
//           </div>
//         </div>
//         <div className=" self-end">
//           <ReviewUs />
//         </div>
//       </div>
//       {tab === 0 ? <StoreDetailsTab /> : <ReviewTab />}
//     </div>
//   );
// }

// function StoreDetailsTab() {
//   return (
//     <div>
//       <div className="w-full mt-4 flex flex-col gap-16 md:flex-row">
//         <div className="max-w-md w-full flex flex-col gap-4">
//           <p className="text-2xl font-semibold">Offers</p>
//           <div className="bg-white rounded-md w-full flex flex-col gap-6 p-3">
//             <div className="flex gap-3 justify-between">
//               <div className="">
//                 <span className="text-red-700">Flat 25% Off</span> on shirts and
//                 Trousers
//               </div>
//               <div className="">
//                 Valid till
//                 <span className="text-red-700">20th dec</span>
//               </div>
//             </div>
//             <div className="flex gap-3 justify-between">
//               <div className="">
//                 <span className="text-red-700">Flat 25% Off</span> on shirts and
//                 Trousers
//               </div>
//               <div className="">
//                 Valid till
//                 <span className="text-red-700">20th dec</span>
//               </div>
//             </div>
//             <div className="flex gap-3 justify-between">
//               <div className="">
//                 <span className="text-red-700">Flat 25% Off</span> on shirts and
//                 Trousers
//               </div>
//               <div className="">
//                 Valid till
//                 <span className="text-red-700">20th dec</span>
//               </div>
//             </div>
//             <div className="flex gap-3 justify-between">
//               <div className="">
//                 <span className="text-red-700">Flat 25% Off</span> on shirts and
//                 Trousers
//               </div>
//               <div className="">
//                 Valid till
//                 <span className="text-red-700">20th dec</span>
//               </div>
//             </div>
//           </div>
//           <div className="w-fit self-end">
//             <p className="text-primary-gray">
//               T&C Apply <span className="text-red-700">*</span>
//             </p>
//           </div>
//         </div>
//         <div className="w-full flex flex-col gap-4">
//           <p className="text-2xl font-semibold">Other Outlets</p>
//           <div className="bg-white p-3 rounded-md flex items-center gap-4">
//             <div className="flex gap-1">
//               <p className="text-primary-gray">Shop Details</p>
//               <img src="./shop.svg" alt="" />
//             </div>
//             <div className="flex gap-1">
//               <p className="text-primary-gray">Location</p>
//               <img src="./location.svg" alt="" />
//             </div>
//           </div>

//           <div className="bg-white p-3 rounded-md flex-col flex items-center gap-8">
//             <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
//               <div className="flex flex-col shrink-0 gap-2">
//                 <p className="text-primary-gray font-semibold">Happy Shoppy</p>
//                 <div className="flex justify-between items-center gap-2">
//                   <img src="./rating.svg" alt="" />
//                   <p className="font-semibold">4.1</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2 w-full">
//                 <p>1 km</p>
//                 <p className="underline text-sm text-primary-gray">
//                   MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
//                 </p>
//               </div>
//               <img className="shrink-0" src="./store-review.png" alt="" />
//             </div>
//             <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
//               <div className="flex flex-col shrink-0 gap-2">
//                 <p className="text-primary-gray font-semibold">Happy Shoppy</p>
//                 <div className="flex justify-between items-center gap-2">
//                   <img src="./rating.svg" alt="" />
//                   <p className="font-semibold">4.1</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2 w-full">
//                 <p>1 km</p>
//                 <p className="underline text-sm text-primary-gray">
//                   MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
//                 </p>
//               </div>
//               <img className="shrink-0" src="./store-review.png" alt="" />
//             </div>
//             <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
//               <div className="flex flex-col shrink-0 gap-2">
//                 <p className="text-primary-gray font-semibold">Happy Shoppy</p>
//                 <div className="flex justify-between items-center gap-2">
//                   <img src="./rating.svg" alt="" />
//                   <p className="font-semibold">4.1</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2 w-full">
//                 <p>1 km</p>
//                 <p className="underline text-sm text-primary-gray">
//                   MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
//                 </p>
//               </div>
//               <img className="shrink-0" src="./store-review.png" alt="" />
//             </div>
//             <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
//               <div className="flex flex-col shrink-0 gap-2">
//                 <p className="text-primary-gray font-semibold">Happy Shoppy</p>
//                 <div className="flex justify-between items-center gap-2">
//                   <img src="./rating.svg" alt="" />
//                   <p className="font-semibold">4.1</p>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2 w-full">
//                 <p>1 km</p>
//                 <p className="underline text-sm text-primary-gray">
//                   MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
//                 </p>
//               </div>
//               <img className="shrink-0" src="./store-review.png" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// }

// function ReviewTab() {
//   return (
//     <div>
//       <div className="flex w-full flex-col divide-y-2">
//         <div className="flex flex-col w-full gap-2 py-6">
//           <div className="flex gap-4 w-full">
//             <img src="./profile-pic.png" alt="" />
//             <div className="flex flex-col gap-1">
//               <p className="font-semibold">Riya Kumari</p>
//               <img src="./rating.svg" alt="" />
//             </div>
//           </div>
//           <p className="text-primary-gray">
//             This store truly exceeded my expectations in every way. Competitive
//             prices and outstanding customer service made for a perfect shopping
//             experience. The staff were knowledgeable, friendly, and went above
//             and beyond to assist me. I highly recommend this store to anyone
//             looking for a top-notch shopping experience! I'll definitely be back
//             for future purchases!
//           </p>
//         </div>
//         <div className="flex flex-col w-full gap-2 py-6">
//           <div className="flex gap-4 w-full">
//             <img src="./prof2.png" alt="" />
//             <div className="flex flex-col gap-1">
//               <p className="font-semibold">Shreya Singh</p>
//               <img src="./rating.svg" alt="" />
//             </div>
//           </div>
//           <p className="text-primary-gray">
//             This establishment surpassingly exceeded my expectations across all
//             metrics. The confluence of competitive pricing and exceptional
//             customer service culminated in a truly exemplary shopping
//             experience. The staff demonstrated a profound knowledge of their
//             products, while their affable demeanor and unwavering commitment to
//             assistance were truly commendable. I wholeheartedly endorse this
//             store to discerning individuals seeking a superlative shopping
//             experience. Rest assured, I shall return for future acquisitions.
//           </p>
//         </div>
//         <div className="flex flex-col w-full gap-2 py-6">
//           <div className="flex gap-4 w-full">
//             <img src="./prof3.png" alt="" />
//             <div className="flex flex-col gap-1">
//               <p className="font-semibold">Neha Jain</p>
//               <img src="./rating.svg" alt="" />
//             </div>
//           </div>
//           <p className="text-primary-gray">
//             "I highly recommend this store for shopping aspects" - Based on the
//             store's outstanding pricing and customer service, the reviewer
//             wholeheartedly endorses the store as a top choice for anyone looking
//             to make a purchase, ensuring a satisfying and hassle-free shopping
//             experience.
//           </p>
//         </div>
//         <div className="flex flex-col w-full gap-2 py-6">
//           <div className="flex gap-4 w-full">
//             <img src="./prof4.png" alt="" />
//             <div className="flex flex-col gap-1">
//               <p className="font-semibold">Rohit Sah</p>
//               <img src="./rating.svg" alt="" />
//             </div>
//           </div>
//           <p className="text-primary-gray">
//             "I highly recommend this store for shopping aspects" - Based on the
//             store's outstanding pricing and customer service, the reviewer
//             wholeheartedly endorses the store as a top choice for anyone looking
//             to make a purchase, ensuring a satisfying and hassle-free shopping
//             experience.
//           </p>
//         </div>
//         <div className="flex flex-col w-full gap-2 py-6">
//           <div className="flex gap-4 w-full">
//             <img src="./profile-pic.png" alt="" />
//             <div className="flex flex-col gap-1">
//               <p className="font-semibold">Tripti Singh</p>
//               <img src="./rating.svg" alt="" />
//             </div>
//           </div>
//           <p className="text-primary-gray">
//             "I highly recommend this store for shopping aspects" - Based on the
//             store's outstanding pricing and customer service, the reviewer
//             wholeheartedly endorses the store as a top choice for anyone looking
//             to make a purchase, ensuring a satisfying and hassle-free shopping
//             experience.
//           </p>
//         </div>
//       </div>

//       <div className="w-full flex justify-center gap-2">
//         <img src="./left-arrow.svg" alt="" />
//         <div className="border border-gray-300 text-sm px-1.5 w-6 flex items-center justify-center shrink-0 rounded-md">
//           1
//         </div>
//         <div className="border border-gray-300 text-sm px-1.5 w-6 flex items-center justify-center shrink-0 rounded-md">
//           2
//         </div>
//         <div className="border border-gray-300 text-sm px-1.5 w-6 flex items-center justify-center shrink-0 rounded-md">
//           3
//         </div>
//         <img src="./right-arrow.svg" alt="" />
//       </div>
//     </div>
//   );
// }


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
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <p className=" text-gray-600" ><span className=" text-red-500" >Flat 25% Off</span> on shirts and
            Trousers</p>
          <p className=" md:ml-auto" >Valid till <span className=" text-red-500" >20th Mar</span></p>
        </div>
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <p className=" text-gray-600" ><span className=" text-red-500" >Flat Rs 1,000 Off</span> on Smart Phones  Above Rs. 10,000</p>
          <p className=" md:ml-auto whitespace-nowrap " >Valid till <span className=" text-red-500" >22th Mar</span></p>
        </div>
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <p className=" text-gray-600" ><span className=" text-red-500" >Buy 1get 1</span> on men Shirts</p>
          <p className=" md:ml-auto" >Valid till <span className=" text-red-500" >25th Mar</span></p>
        </div>
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <p className=" text-gray-600" ><span className=" text-red-500" >Flat 25% Off</span> on shirts and
            Trousers</p>
          <p className=" md:ml-auto" >Valid till <span className=" text-red-500" >20th Mar</span></p>
        </div>
      </div>
    </div>
  )
}
function OtherOutlet() {
  return (
    <div className=" border w-full p-4 rounded-lg " >
      <p className=" text-4xl font-semibold py-2" >Other Outlets</p>
      <div className=" items-center w-full border-b-2 border-gray-200 h-10 py-2 flex gap-2" >
        {/* <div className=" size-3 bg-red-700 shrink-0" ></div>
        <p className=" font-medium" >Ongoing offers</p>
        <div className=" size-3 border border-red-700 shrink-0" ></div>
        <p className=" font-medium" >Closing soon</p>
        <div className=" size-3 border border-red-700 shrink-0" ></div>
        <p className=" font-medium" >Upcoming Offers</p> */}
      </div>
      <div className=" flex mt-3 max-h-96 hide-scrollbar overflow-y-scroll px-2  flex-col gap-2" >
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <div className=" flex flex-col gap-2 justify-between" >
            <p>Happy Shoppy Brand of Clothes</p>
            <div className=" flex items-center gap-2" >
              <img src="./golden-star.svg" className=" size-4" alt="" />
              <p className=" text-xl font-semibold" >4.1</p>
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
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <div className=" flex flex-col gap-2 justify-between" >
            <p>Happy Shoppy Brand of Clothes</p>
            <div className=" flex items-center gap-2" >
              <img src="./golden-star.svg" className=" size-4" alt="" />
              <p className=" text-xl font-semibold" >4.1</p>
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
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <div className=" flex flex-col gap-2 justify-between" >
            <p>Happy Shoppy Brand of Clothes</p>
            <div className=" flex items-center gap-2" >
              <img src="./golden-star.svg" className=" size-4" alt="" />
              <p className=" text-xl font-semibold" >4.1</p>
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
        <div className=" md:h-28 flex flex-col md:flex-row gap-3 md:items-center  py-1 border-b" >
          <img src="./hero-small.png" className=" md:h-full w-24 md:w-auto" alt="" />
          <div className=" flex flex-col gap-2 justify-between" >
            <p>Happy Shoppy Brand of Clothes</p>
            <div className=" flex items-center gap-2" >
              <img src="./golden-star.svg" className=" size-4" alt="" />
              <p className=" text-xl font-semibold" >4.1</p>
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
      </div>
    </div>
  )
}


function Gallary() {
  return (
    <div className="flex flex-col w-full gap-6">
      <p className="text-xl font-semibold">Similar Stores Having Offer</p>
      <div className=" flex gap-3 items-center w-full" >
        <ChevronLeftCircleIcon />
        <div className="w-full flex overflow-x-scroll hide-scrollbar gap-4">
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
        <div className="w-full flex overflow-x-scroll hide-scrollbar gap-4">
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
            <div className=" flex gap-2 flex-col" >
              <div className=" flex gap-1 items-center" >
                <Star className=" text-yellow-500" size={18} />
                <Star className=" text-yellow-500" size={18} />
                <Star className=" text-yellow-500" size={18} />
                <Star className=" text-yellow-500" size={18} />
                <Star className=" text-yellow-500" size={18} />
              </div>
              <p>Rate Us</p>
            </div>
          </div>
          <textarea className=" border rounded-md p-2" placeholder="Write your review here" rows={4} />
          <div className=" bg-red-700 px-3 py-2 w-fit ml-auto rounded-md cursor-pointer text-white font-semibold" >Submit Review</div>
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