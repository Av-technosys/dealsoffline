import InputFild from "./inputFild";

export default function ProfileSection() {
  return <div className=' max-w-5xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Profile Setup</p>
      <p className=' text-gray-600 text-center' >Manage all your account settings and preferences</p>
    </div>
    <div className=' flex flex-col gap-8 md:flex-row' >
      <div className=' flex shrink-0 flex-col gap-4' >
        <p className=' text-3xl font-medium text-center md:text-left' >Contact Details</p>
        <p className=' text-gray-600 text-center md:text-left' >Enter your shop details</p>
      </div>
      <div className=' flex flex-col gap-2 w-full' >
        <div className=' grid grid-cols-1 sm:grid-cols-2 w-full gap-2' >
          <InputFild label={"Name"} inputName={"Naveen Sharma"} />
          <InputFild label={"Email ID/ User ID"} inputName={"naveensharma@gmail.com"} />
          <InputFild label={"Phone Number"} inputName={"91-9012345678"} />
          <InputFild label={"WhatsApp Number"} inputName={"91-9012345678"} same={true} />
        </div>
        <div className=' flex items-center gap-6'>
          <div className=' flex gap-2 items-center' >
            <input type='checkbox' className=' size-4' ></input>
            <p className=' text-gray-600 ' >Active</p>
          </div>
          <div className=' flex gap-2 items-center' >
            <input type='checkbox' className=' size-4' ></input>
            <p className=' text-gray-600 ' >Verified</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}
