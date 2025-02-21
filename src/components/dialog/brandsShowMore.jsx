import { Check, Save } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

function BrandsShowMore({ itemsToShow, selectedFields, setSelectedFields, path }) {
    const handleCheckboxChange = (value) => {
        if (selectedFields.includes(value)) {
            setSelectedFields(selectedFields.filter((item) => item !== value));
        } else {
            setSelectedFields([...selectedFields, value]);
        }
    }

    const handleApplyChange = () => {
        console.log(selectedFields)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className=" text-xs shrink-0 text-red-700 font-semibold">show more</button>
            </DialogTrigger>
            <DialogContent showCloseButton={true} className="w-full">
                <DialogHeader>
                    <DialogTitle className=" text-red-700 capitalize" >Others brands</DialogTitle>
                    <div className=" !mt-12 flex gap-3 flex-wrap" >
                        {
                            itemsToShow?.slice(0, 6).map((data, idx) => {
                                const isPresect = selectedFields.includes(data);
                                return (
                                    // <div onClick={() => handleCheckboxChange(data)} key={data} className={` w-fit shrink-0 cursor-pointer py-1 px-2 border border-black font-semibold text-sm rounded-md ${isPresect ? "bg-red-200" : ""}`} >{data}</div>
                                    <div onClick={() => handleCheckboxChange(data)} key={idx} className={`h-8 w-auto py-1 px-2 border border-black font-semibold text-sm rounded-md ${isPresect ? "bg-red-200" : ""}`} >
                                        <img key={data} className=" w-full h-full " src={data} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose className='w-full' >
                        <div onClick={handleApplyChange} className=' bg-red-700 px-4 py-2 flex items-center gap-2 rounded-md mt-4 text-white text-center font-semibold cursor-pointer w-fit ml-auto' >
                            <p>{path && path === "vendor" ? "Save" : "Apply"}</p>
                            {
                                path && path === "vendor" ? <Save size={20} /> : <Check size={20} />
                            }
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default BrandsShowMore;