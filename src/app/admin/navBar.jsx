import { Settings, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavBar = ({ page }) => {
    return (
        <div className=' w-full py-3 border-b-2' >
            <div className=' w-full flex items-center gap-4 justify-between max-w-7xl mx-auto px-4' >
                <p className=' text-4xl font-semibold' >Admin Dashboard</p>
                <div className=' flex gap-4 items-center' >
                    <div className=' py-2 px-3 border-2 rounded-md border-red-600 text-red-600 flex items-center gap-2 ' >
                        <p className=' font-semibold' >Settings</p>
                        <Settings size={20} />
                    </div>
                    <Link href={'/admin/vendor'} className={`py-2 px-3  rounded-md flex items-center gap-2 ${page === "admin" ? "bg-red-700 text-white" : "border-red-600 border-2 text-red-600"} `} >
                        <p className=' font-semibold' >Vendor</p>
                        {
                            page === "admin" ?
                                <img src="./../vendor-store-white.svg" alt="" /> :

                                <img src="./../vendor-store-red.svg" alt="" />
                        }
                    </Link>
                    <Link href={'/admin/customer'} className={`py-2 px-3  rounded-md flex items-center gap-2 ${page === "customer" ? "bg-red-700 text-white" : "border-red-600 border-2 text-red-600"} `} >
                        <p className=' font-semibold' >Customers</p>
                        <User size={20} />
                    </Link>
                    <img src="./bell.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar