"use client";

import React, { Suspense, useEffect, useState } from "react";
import VendorOnbordForm from "@/components/vendor-onbordForm";
import VendorFooterBar from "@/components/vendorFooterBar";
import VendorNavBar from "@/components/vendorNavBar";

const ProfileSection = React.lazy(() => import('@/components/ProfileSection'));
const ShopDetailsSection = React.lazy(() => import('@/components/ShopDetailsSection'));
const BankDetailsSection = React.lazy(() => import('@/components/BankDetailsSection'));
const OfferDetailsSection = React.lazy(() => import('@/components/OfferDetailsSection'));
const PromoteMyStoreSection = React.lazy(() => import('@/components/PromoteMyStoreSection'));

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCheck } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
const DynamicContent = () => {
  const params = useSearchParams();
  const num = parseInt(params.get("form") || "1", 10);
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideAnimation(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <VendorOnbordForm num={num} />
      {!hideAnimation && (
        <div className="block relative md:hidden">
          <Image src="/swipe-animation.gif" alt="Swipe Animation" fill={true} className="-mt-10 mx-auto h-12" />
        </div>
      )}

      {/* Dynamic sections based on `num` */}
      <Suspense fallback={<div>Loading...</div>}>
        {num === 1 && <ProfileSection />}
        {num === 2 && <ShopDetailsSection />}
        {/* {num === 3 && <BankDetailsSection />} */}
        {num === 3 && <OfferDetailsSection />}
        {num === 4 && <PromoteMyStoreSection />}
        <div className="h-8"></div>
        {
          num === 4 ?
            <VendorFooterBarFinal num={num} /> : <VendorFooterBar num={num} />
        }
      </Suspense>
    </>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <VendorNavBar page={"dashbord"} />
      <Suspense fallback={<div>Loading content...</div>}>
        <DynamicContent />
      </Suspense>
      <Footer />

      {/* <div className="h-60"></div> */}
    </div>
  );
};

export default Page;


const VendorFooterBarFinal = ({ num }) => {
  const showBack = num != 1
  return (
    <div className=' w-full max-w-5xl px-4 mx-auto justify-end flex gap-4 items-end' >

      <img src="/swipe-animation.gif" alt="Swipe Animation" className="hidden" />
      {showBack &&
        <Link href={`/vendor-dashbord?form=${String(num) - 1}`} className=' flex items-center gap-2 w-fit rounded-md text-red-700 border-red-700 border px-4 py-2' >
          <p className=' font-semibold'>Back</p>
          <ArrowLeft size={20} />
        </Link>
      }
      <div className=' w-fit rounded-md text-white flex items-center gap-2 bg-red-700 px-4 py-2' >
        <p className=' font-semibold'>Finish</p>
        <CheckCheck color='white' size={20} />
      </div>
    </div>
  )
}




