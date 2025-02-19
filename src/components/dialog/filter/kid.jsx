"use client"
import React, { useEffect, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './../../ui/dialog'
import Link from 'next/link';
import { X } from 'lucide-react';
import { Menus } from '@/components/nav/utils';

const MenuKids = () => {
    const [selectedItems, setSelectedItems] = useState(() => {
        return Menus[0].subMenu.flatMap(submenu => submenu.items.map(item => item.name)).filter(() => false);
    });

    const [selectedItemsLength, setSelectedItemsLength] = useState(0);
    // function handleSelect(item) {
    //     const isAlreadySelected = selectedItems.includes(item);
    //     if (isAlreadySelected) {
    //         setSelectedItems(selectedItems.filter((selected) => selected !== item));
    //     } else {
    //         setSelectedItems([...selectedItems, item]);
    //     }
    //     console.log(selectedItems)
    // }

    function handleSelect(item) {
        setSelectedItems((prevSelected) => {
            const isAlreadySelected = prevSelected.includes(item);
            return isAlreadySelected
                ? prevSelected.filter((selected) => selected !== item)
                : [...prevSelected, item];
        });
    }

    
    function handleApplyChange() {
        console.log(selectedItems)
    }

    useEffect(() => {
        setSelectedItemsLength(selectedItems.length);
    }, [selectedItems])


    return (
        <Dialog>
            <DialogTrigger >
                <div className={`border h-9 flex items-center gap-1 border-black px-3 py-1.5 text-xs rounded font-semibold text-black ${selectedItems.length > 0 ? "bg-red-200" : " bg-transparent"}`}>
                    {/* <div className=" flex items-center gap-1 border border-black px-2.5 py-0.5 text-xs rounded font-semibold text-black"> */}
                    Kids
                    <img src="./../kids.svg" className=' size-5' alt="" />
                    {/* </div> */}
                </div>
            </DialogTrigger>
            <DialogContent showCloseButton={true} className="max-w-5xl w-full" >
                <DialogHeader className={"flex flex-col space-y-1.5 py-8 items-center text-center sm:text-left"} >
                    <DialogTitle></DialogTitle>
                    <div>
                        <div
                            className={`gap-7 space-y-0 ${Menus[0].gridCols == 1
                                ? "columns-1"
                                : Menus[0].gridCols == 2
                                    ? "columns-2"
                                    : Menus[0].gridCols == 3
                                        ? "columns-3"
                                        : "columns-4"
                                }`}
                            style={{ columnGap: "1.75rem" }} // Adjusts spacing between columns
                        >
                            {
                                Menus[0].subMenu.map((submenu, index) => (
                                    <div key={index} className="  space-y-0.5" >
                                        <h6 className=" leading-5 py-1 font-semibold text-lg text-red-700">{submenu.title}</h6>
                                        {submenu?.items?.map((item, i) => (
                                            <div key={i} className=' flex items-center gap-2' >

                                                {/* {
                                                    selectedItems.includes(item.name) ? <input checked onChange={() => handleSelect(item.name)} type="checkbox" className=" size-4" /> : <input onChange={() => handleSelect(item.name)} type="checkbox" className=" size-4" />
                                                } */}

<input
                                                    type="checkbox"
                                                    className="size-4"
                                                    checked={selectedItems.includes(item.name)}
                                                    onChange={() => handleSelect(item.name)}
                                                />


                                                <div key={i} className=" block text-sm cursor-pointer text-gray-800">
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                        </div>
                        <DialogClose className='w-full' >
                            <div onClick={handleApplyChange} className=' bg-red-700 px-4 py-2 rounded-md mt-4 text-white text-center font-semibold cursor-pointer w-fit ml-auto' >Apply</div>
                        </DialogClose>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default MenuKids