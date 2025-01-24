"use client";
import Footer from "@/components/footer";
import Link from "next/link";
import React, { useState } from "react";
import MakePayment from "./makePayment";
import ReviewUs from "./reviewForm";
import NavBar from "@/components/navBar";

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className="container px-6 md:px-4 flex flex-col gap-16">
        <div className="flex flex-col py-12 gap-6 md:flex-row">
          <div className="flex w-full max-w-xl flex-col gap-4">
            <div className="w-full">
              <img src="./hero-main.png" className="w-full h-auto" alt="" />
            </div>
            <div className="flex overflow-x-scroll hide-scrollbar items-center gap-6">
              <img src="./hero-small.png" className="w-full h-auto" alt="" />
              <img src="./hero-small.png" className="w-full h-auto" alt="" />
              <img src="./hero-small.png" className="w-full h-auto" alt="" />
              <img src="./hero-small.png" className="w-full h-auto" alt="" />
              <img src="./hero-small.png" className="w-full h-auto" alt="" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold text-3xl">Lifestyle</p>
            <div className="flex items-center gap-1 w-full border-b border-primary-gray py-2">
              <img src="./rating.svg" alt="" />
              <p className="font-semibold">(3.9)</p>
              <p className="text-primary-gray-light">56 reviews</p>
            </div>
            <div className="w-fit mt-2 text-primary-gray-light text-lg font-semibold border-b-2 border-red-700">
              Description
            </div>
            <p className="text-primary-gray-light py-3 border-b border-primary-gray-light">
              The Lifestyle stores have a multi-level store format, which is
              normally spread over two or three floors that provides a square
              line-of-sight, allowing customers to view the product sections in
              a single glance. Each Lifestyle store offers womenswear, menswear,
              kidswear, footwear, bags, beauty, skincare & accessories such as
              watches, fragrances, sunglasses.
            </p>
            <div className="items-center flex mt-4 flex-wrap gap-2">
              <img src="./clock.svg" className="h-4 w-4" alt="" />
              <p className="text-primary-gray font-semibold">Mon - Fri</p>
              <p className="text-primary-gray text-xs">(11:00 AM - 08:00 PM)</p>
            </div>
            <div className="items-center flex flex-wrap gap-2">
              <img src="./phone.svg" className="h-4 w-4" alt="" />
              <p className="text-primary-gray">+91 - 8112XXXXXX</p>
            </div>
            <div className="items-center flex flex-wrap gap-2">
              <img src="./location.svg" className="h-4 w-4" alt="" />
              <p className="text-primary-gray font-semibold">Address</p>
            </div>
            <p className="text-primary-gray-light">
              MGF Metropolitan Bhawani Singh Marg, Sahakar Bhawan Circle, 22
              Godam Cir, opposite Nehru, Durgadas Colony, C Scheme, Ashok Nagar,
              Jaipur, Rajasthan 302006
            </p>
            <div className="flex w-full mt-auto items-center gap-2 self-end justify-between">
              <Link
                href={"/gallary"}
                className="py-2 px-3 bg-red-700 flex gap-1 items-center rounded-md text-white"
              >
                <p>View Gallery</p>
                <img src="./gallary.svg" alt="" />
              </Link>
              <MakePayment />
            </div>
          </div>
        </div>

        <ProductPageDetail />
      </div>

      <Footer />
    </div>
  );
};

export default Page;

function ProductPageDetail() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="w-full flex justify-between gap-4 items-center flex-col md:flex-row">
        <div className="flex gap-6 w-full flex-wrap items-center">
          <div
            onClick={() => setTab(0)}
            className={`flex cursor-pointer gap-1 py-2 ${
              tab === 0 && "border-b-2 text-red-700 border-red-700 "
            }`}
          >
            <p>Store Details</p>
            <img src="./shop.svg" alt="" />
          </div>
          <div
            onClick={() => setTab(1)}
            className={`flex cursor-pointer gap-1 py-2 ${
              tab === 1 && "border-b-2 text-red-700 border-red-700 "
            }`}
          >
            <p className="text-primary-gray">Ratings & Review</p>
            <img src="./shop.svg" alt="" />
          </div>
        </div>
        <div className=" self-end">
          <ReviewUs />
        </div>
      </div>
      {tab === 0 ? <StoreDetailsTab /> : <ReviewTab />}
    </div>
  );
}

function StoreDetailsTab() {
  return (
    <div>
      <div className="w-full mt-4 flex flex-col gap-16 md:flex-row">
        <div className="max-w-md w-full flex flex-col gap-4">
          <p className="text-2xl font-semibold">Offers</p>
          <div className="bg-white rounded-md w-full flex flex-col gap-6 p-3">
            <div className="flex gap-3 justify-between">
              <div className="">
                <span className="text-red-700">Flat 25% Off</span> on shirts and
                Trousers
              </div>
              <div className="">
                Valid till
                <span className="text-red-700">20th dec</span>
              </div>
            </div>
            <div className="flex gap-3 justify-between">
              <div className="">
                <span className="text-red-700">Flat 25% Off</span> on shirts and
                Trousers
              </div>
              <div className="">
                Valid till
                <span className="text-red-700">20th dec</span>
              </div>
            </div>
            <div className="flex gap-3 justify-between">
              <div className="">
                <span className="text-red-700">Flat 25% Off</span> on shirts and
                Trousers
              </div>
              <div className="">
                Valid till
                <span className="text-red-700">20th dec</span>
              </div>
            </div>
            <div className="flex gap-3 justify-between">
              <div className="">
                <span className="text-red-700">Flat 25% Off</span> on shirts and
                Trousers
              </div>
              <div className="">
                Valid till
                <span className="text-red-700">20th dec</span>
              </div>
            </div>
          </div>
          <div className="w-fit self-end">
            <p className="text-primary-gray">
              T&C Apply <span className="text-red-700">*</span>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-2xl font-semibold">Other Outlets</p>
          <div className="bg-white p-3 rounded-md flex items-center gap-4">
            <div className="flex gap-1">
              <p className="text-primary-gray">Shop Details</p>
              <img src="./shop.svg" alt="" />
            </div>
            <div className="flex gap-1">
              <p className="text-primary-gray">Location</p>
              <img src="./location.svg" alt="" />
            </div>
          </div>

          <div className="bg-white p-3 rounded-md flex-col flex items-center gap-8">
            <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
              <div className="flex flex-col shrink-0 gap-2">
                <p className="text-primary-gray font-semibold">Happy Shoppy</p>
                <div className="flex justify-between items-center gap-2">
                  <img src="./rating.svg" alt="" />
                  <p className="font-semibold">4.1</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>1 km</p>
                <p className="underline text-sm text-primary-gray">
                  MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
                </p>
              </div>
              <img className="shrink-0" src="./store-review.png" alt="" />
            </div>
            <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
              <div className="flex flex-col shrink-0 gap-2">
                <p className="text-primary-gray font-semibold">Happy Shoppy</p>
                <div className="flex justify-between items-center gap-2">
                  <img src="./rating.svg" alt="" />
                  <p className="font-semibold">4.1</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>1 km</p>
                <p className="underline text-sm text-primary-gray">
                  MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
                </p>
              </div>
              <img className="shrink-0" src="./store-review.png" alt="" />
            </div>
            <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
              <div className="flex flex-col shrink-0 gap-2">
                <p className="text-primary-gray font-semibold">Happy Shoppy</p>
                <div className="flex justify-between items-center gap-2">
                  <img src="./rating.svg" alt="" />
                  <p className="font-semibold">4.1</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>1 km</p>
                <p className="underline text-sm text-primary-gray">
                  MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
                </p>
              </div>
              <img className="shrink-0" src="./store-review.png" alt="" />
            </div>
            <div className="flex gap-6 py-2 border-b flex-col lg:flex-row">
              <div className="flex flex-col shrink-0 gap-2">
                <p className="text-primary-gray font-semibold">Happy Shoppy</p>
                <div className="flex justify-between items-center gap-2">
                  <img src="./rating.svg" alt="" />
                  <p className="font-semibold">4.1</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p>1 km</p>
                <p className="underline text-sm text-primary-gray">
                  MI Road, Sansar Chandra Road, Ajmer Road, Jaipur, Rajasth...
                </p>
              </div>
              <img className="shrink-0" src="./store-review.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6">
        <p className="text-xl font-semibold">Similar Stores Having Offer</p>
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
        <p className="text-xl font-semibold mt-4">Customers also liked</p>
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
      </div>
    </div>
  );
}

function ReviewTab() {
  return (
    <div>
      <div className="flex w-full flex-col divide-y-2">
        <div className="flex flex-col w-full gap-2 py-6">
          <div className="flex gap-4 w-full">
            <img src="./profile-pic.png" alt="" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Riya Kumari</p>
              <img src="./rating.svg" alt="" />
            </div>
          </div>
          <p className="text-primary-gray">
            This store truly exceeded my expectations in every way. Competitive
            prices and outstanding customer service made for a perfect shopping
            experience. The staff were knowledgeable, friendly, and went above
            and beyond to assist me. I highly recommend this store to anyone
            looking for a top-notch shopping experience! I'll definitely be back
            for future purchases!
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 py-6">
          <div className="flex gap-4 w-full">
            <img src="./prof2.png" alt="" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Shreya Singh</p>
              <img src="./rating.svg" alt="" />
            </div>
          </div>
          <p className="text-primary-gray">
            This establishment surpassingly exceeded my expectations across all
            metrics. The confluence of competitive pricing and exceptional
            customer service culminated in a truly exemplary shopping
            experience. The staff demonstrated a profound knowledge of their
            products, while their affable demeanor and unwavering commitment to
            assistance were truly commendable. I wholeheartedly endorse this
            store to discerning individuals seeking a superlative shopping
            experience. Rest assured, I shall return for future acquisitions.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 py-6">
          <div className="flex gap-4 w-full">
            <img src="./prof3.png" alt="" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Neha Jain</p>
              <img src="./rating.svg" alt="" />
            </div>
          </div>
          <p className="text-primary-gray">
            "I highly recommend this store for shopping aspects" - Based on the
            store's outstanding pricing and customer service, the reviewer
            wholeheartedly endorses the store as a top choice for anyone looking
            to make a purchase, ensuring a satisfying and hassle-free shopping
            experience.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 py-6">
          <div className="flex gap-4 w-full">
            <img src="./prof4.png" alt="" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Rohit Sah</p>
              <img src="./rating.svg" alt="" />
            </div>
          </div>
          <p className="text-primary-gray">
            "I highly recommend this store for shopping aspects" - Based on the
            store's outstanding pricing and customer service, the reviewer
            wholeheartedly endorses the store as a top choice for anyone looking
            to make a purchase, ensuring a satisfying and hassle-free shopping
            experience.
          </p>
        </div>
        <div className="flex flex-col w-full gap-2 py-6">
          <div className="flex gap-4 w-full">
            <img src="./profile-pic.png" alt="" />
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Tripti Singh</p>
              <img src="./rating.svg" alt="" />
            </div>
          </div>
          <p className="text-primary-gray">
            "I highly recommend this store for shopping aspects" - Based on the
            store's outstanding pricing and customer service, the reviewer
            wholeheartedly endorses the store as a top choice for anyone looking
            to make a purchase, ensuring a satisfying and hassle-free shopping
            experience.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center gap-2">
        <img src="./left-arrow.svg" alt="" />
        <div className="border border-gray-300 text-sm px-1.5 w-6 flex items-center justify-center shrink-0 rounded-md">
          1
        </div>
        <div className="border border-gray-300 text-sm px-1.5 w-6 flex items-center justify-center shrink-0 rounded-md">
          2
        </div>
        <div className="border border-gray-300 text-sm px-1.5 w-6 flex items-center justify-center shrink-0 rounded-md">
          3
        </div>
        <img src="./right-arrow.svg" alt="" />
      </div>
    </div>
  );
}
