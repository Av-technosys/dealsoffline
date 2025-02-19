"use client";
import React, { useEffect } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../../ui/dialog'
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BadgePercent, BadgePercentIcon, Camera, CircleUser, Megaphone, BookImage, CalendarDays, CalendarDaysIcon, CameraIcon, Check, ChevronLeftIcon, ChevronRightIcon, CopyPlus, Info, Menu, Pencil, ScanQrCode, ShapesIcon, Square, X, ChartPie, ChevronDown } from 'lucide-react';
import WomenBox from '@/components/womenBook';
import VendorAdminNavBar from './vendorAdminNavBar';

const VendorReportDialog = ({ isOpen, setIsVendorReport, setIsVendorSetting, setIsEditVendor }) => {
    const [currentStep, setCurrentStep] = React.useState(1);
    useEffect(() => {
        if (isOpen)
            setCurrentStep(1)
    }, [isOpen])
    return (
        <Dialog open={isOpen}>
            <DialogContent className=" max-w-7xl w-full max-h-[80vh] h-full overflow-y-auto" >
                <DialogHeader className={"flex flex-col space-y-1.5 py-8 items-center text-center justify-center sm:text-left"} >
                    <X onClick={() => setIsVendorReport(false)} className=' absolute top-4 right-4 cursor-pointer' />
                    <DialogTitle className="text-center" ></DialogTitle>
                    <VendorAdminNavBar setIsVendorReport={setIsVendorReport} setIsVendorSetting={setIsVendorSetting} setIsEditVendor={setIsEditVendor} page={"report"} />
                    <div className=' max-w-7xl w-full px-4 mt-6 mx-auto flex flex-col gap-4' >
                        <p className=' text-2xl font-semibold' >Reports</p>
                        <div className=' flex flex-col md:flex-row gap-4' >
                            <div className=' w-full rounded-lg shadow-md p-4' >
                                <div className=' w-full flex gap-4 items-center justify-between' >
                                    <div className=' text-white bg-red-700 p-1 rounded-xl size-9 flex items-center justify-center' >
                                        <ChartPie size={20} />
                                    </div>
                                    <div className=' flex items-center gap-2' >
                                        <p className=' text-gray-500' >All-times</p>
                                        <ChevronDown size={20} color='#4b5563' />
                                    </div>
                                </div>
                                <div>
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            Total orders
                                        </p>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-full rounded-lg shadow-md p-4' >
                                <div className=' w-full flex gap-4 items-center justify-between' >
                                    <img src="./report-bag.svg" alt="" />
                                    <div className=' flex items-center gap-2' >
                                        <p className=' text-gray-500' >All-times</p>
                                        <ChevronDown size={20} color='#4b5563' />
                                    </div>
                                </div>
                                <div className=' flex justify-between items-center' >
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            All order
                                        </p>
                                        <p>10</p>
                                    </div>
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            Pending
                                        </p>
                                        <p>2</p>
                                    </div>
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            Completed
                                        </p>
                                        <p>8</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-full rounded-lg shadow-md p-4' >
                                <div className=' w-full flex gap-4 items-center justify-between' >
                                    <img src="./report-bag.svg" alt="" />
                                    <div className=' flex items-center gap-2' >
                                        <p className=' text-gray-500' >All-times</p>
                                        <ChevronDown size={20} color='#4b5563' />
                                    </div>
                                </div>
                                <div className=' flex justify-between items-center' >
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            Returned
                                        </p>
                                        <p>0</p>
                                    </div>
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            Canceled
                                        </p>
                                        <p>0</p>
                                    </div>
                                    <div className=' mt-6 flex flex-col gap-1' >
                                        <p className=' text-gray-500 font-semibold ' >
                                            Demaged
                                        </p>
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' flex h-40 w-full gap-5' >
                            <div className=' w-full h-40 bg-gray-200 animate-pulse rounded-xl' ></div>
                            <div className=' w-full h-40 bg-gray-200 animate-pulse rounded-xl' ></div>
                        </div>
                        <div className=' bg-gray-200 animate-pulse h-48 w-full rounded-xl' ></div>
                        <div className=' flex h-48 w-full gap-5' >
                            <div className=' w-full h-48 bg-gray-200 animate-pulse rounded-xl' ></div>
                            <div className=' w-full h-48 bg-gray-200 animate-pulse rounded-xl' ></div>
                        </div>
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default VendorReportDialog;
