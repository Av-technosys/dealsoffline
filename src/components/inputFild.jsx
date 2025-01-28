
export default function InputFild({ label, inputName, same, notNsc, disable }) {
  return <div className=' w-full flex flex-col gap-1' >
    <p className={`${disable && " text-gray-400"}`}>{label} {!notNsc && <span className=' text-red-700' >*</span>}</p>
    <input type='text' defaultValue={inputName} className=' w-full text-sm rounded-md p-2 border ' />
    {
      same && <div className=' flex gap-2 items-center' >
        <input type='checkbox' ></input>
        <p className=' text-gray-600 text-sm' >Same as phone number</p>
      </div>
    }
  </div>
}