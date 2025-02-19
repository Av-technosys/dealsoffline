import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

function BrandsShowMore({ itemsToShow, selectedFields, setSelectedFields }) {
    const handleCheckboxChange = (value) => {
        if (selectedFields.includes(value)) {
            setSelectedFields(selectedFields.filter((item) => item !== value));
        } else {
            setSelectedFields([...selectedFields, value]);
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className=" text-xs text-red-700 font-semibold">show more</button>
            </DialogTrigger>
            <DialogContent showCloseButton={true} className="w-full">
                <DialogHeader>
                    <DialogTitle>Others location to choose</DialogTitle>
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
                    {/* <DialogCancel>Cancel</DialogCancel> */}
                    {/* <DialogAction>Continue</DialogAction> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default BrandsShowMore;