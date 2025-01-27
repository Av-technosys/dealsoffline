import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";

const ThankYou = () => {
  return (
    <div>
      <DialogDemo />
    </div>
  );
};

export default ThankYou;

function DialogDemo() {
  const showCloseButton = true;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" border border-red-700 px-3 py-2 flex gap-1 items-center justify-center font-medium rounded-md text-white bg-red-700">
          Submit <MessageSquare size={20} />
        </div>
      </DialogTrigger>
      <DialogContent showCloseButton={showCloseButton} className="sm:max-w-3xl">
        <DialogTitle></DialogTitle>
        <div className=" flex flex-col gap-2 items-center justify-center py-6">
          <img src="lootie.gif" className=" size-20" />
          <div className=" flex gap-1 items-center justify-center">
            <img src="./lootie-icon.svg" />
            <p className=" text-lg text-red-700 font-semibold">
              Thank you for sharing your feedback!
            </p>
          </div>
          <div className=" flex gap-2 items-center justify-center">
            <div className=" h-1 rounded-md bg-red-700 w-10"></div>
            <p className=" text-gray-600  font-semibold">Happy Shopping!</p>
            <div className=" h-1 rounded-md bg-red-700 w-10"></div>
          </div>
          <p className=" text-gray-600 text-center w-full max-w-lg font-poppins text-sm mt-4">
            We appreciate your feedback and value your opinion. It's essential
            to us, as it helps us identify areas for improvement. By listening
            to your thoughts, we can refine our approach and serve you better.
          </p>
        </div>

        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
