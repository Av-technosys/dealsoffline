import { BadgePercent, Camera, CircleUser, Landmark, Megaphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const VendorOnbordForm = ({ num }) => {

    return (
        <div className=' px-4 max-w-6xl hide-scrollbar overflow-x-scroll py-3 mx-auto w-full mt-6 flex gap-12 items-center justify-start lg:justify-center' >
            {/* <div className={`text-xl font-semibold ${num == 1 && "opacity-0"} `} >Happy Shappy</div> */}
            <div className=' flex  gap-3' >
                <ContactDetails />
                <Line isRed={num > 1} />
                <ShopDetails isRed={num > 1} />
                <Line isRed={num > 2} />
                {/* <BankDetails isRed={num > 2} />
                <Line isRed={num > 3} /> */}
                <OfferDetails isRed={num > 2} />
                <Line isRed={num > 3} />
                <PromoteMyStore isRed={num > 3} />
            </div>
            {/* <StoreImage /> */}
        </div>
    )
}

export default VendorOnbordForm;

function Line({ isRed }) {
    return (
        <div className={` h-1.5 mt-7 w-20 rounded bg-gray-300`} ></div>
    )
}

function ContactDetails() {
    return <div className=' flex w-16 flex-col gap-2 items-center ' >
        <Link href={`/vendor-dashbord?form=1`} className=' size-16 flex items-center justify-center rounded-full bg-red-200' >
            <CircleUser className=' size-9 text-black ' />
        </Link>
        <p className=' text-xs text-black font-semibold text-center' >Vendor Details</p>
    </div>
}
function ShopDetails({ isRed }) {
    return <div className=' flex w-16 flex-col gap-2 items-center ' >
        <Link href={`/vendor-dashbord?form=2`} className={`size-16 flex items-center justify-center rounded-full  ${isRed ? "bg-red-200" : " bg-gray-300"}`} >

            <img src='./nav/shop.svg' className=' size-9' />

        </Link>
        <p className={`text-xs  font-semibold text-center text-black `}  >Business Details</p>

    </div>
}
function BankDetails({ isRed }) {
    return <div className=' flex w-16 flex-col gap-2 items-center ' >
        <Link href={`/vendor-dashbord?form=3`} className={`size-16 flex items-center justify-center rounded-full  ${isRed ? "bg-red-700" : " bg-gray-300"}`} >
            <Landmark className={`size-9 ${isRed ? " text-white" : " text-black"} `} />
        </Link>
        <p className={`text-xs  font-semibold text-center ${isRed ? " text-red-700" : " text-black"} `} >Bank Details</p>

    </div>
}
function OfferDetails({ isRed }) {
    return <div className=' flex w-16 flex-col gap-2 items-center ' >
        <Link href={`/vendor-dashbord?form=3`} className={`size-16 flex items-center justify-center rounded-full  ${isRed ? "bg-red-200" : " bg-gray-300"}`} >
            <BadgePercent className={`size-9 text-black `} />
        </Link>
        <p className={`text-xs  font-semibold text-center text-black `}  >Product Offers</p>

    </div>
}
function PromoteMyStore({ isRed }) {
    return <div className=' flex w-16 flex-col gap-2 items-center ' >
        <Link href={`/vendor-dashbord?form=4`} className={`size-16 flex items-center justify-center rounded-full  ${isRed ? "bg-red-200" : " bg-gray-300"}`} >
            <Megaphone className={`size-9 text-black `} />
        </Link>
        <p className={`text-xs  font-semibold text-center text-black `}  >Promote My Store</p>

    </div>
}
function StoreImage() {
    return <div className=' shrink-0 relative' >
        <img src='./store.png' />
        <div className=' -bottom-3 size-12 absolute rounded-full flex items-center justify-center bg-red-700 -right-3' >
            <Camera className=' text-white' />
        </div>
    </div>
}