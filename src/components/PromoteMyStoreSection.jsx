import { Info } from "lucide-react"
import InputFild from "./inputFild"


export default function PromoteMyStoreSection() {
    return <div className=' max-w-5xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
      <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
        <p className=' text-3xl md:text-4xl font-medium text-center' >Profile Setup</p>
        <p className=' text-gray-600 text-center' >Manage all your account settings and preferences</p>
      </div>
      <div className=' flex flex-col w-full gap-4' >
        <div>
          <div className=' flex gap-2 items-center' >
            <p className=' text-gray-600 text-lg' >Subscription Plan</p>
            <Info size={18} color="#666" />
          </div>
          <div className=' flex gap-1' >
            <div className=' flex gap-1 items-center' >
              <input name='radio' type='radio' className=' w-fit' />
              <p className='' >Silver</p>
            </div>
            <div className=' flex gap-1 items-center' >
              <input name='radio' type='radio' defaultChecked className=' w-fit' />
              <p className='  text-red-700' >Gold</p>
            </div>
            <div className=' flex gap-1 items-center' >
              <input name='radio' type='radio' className=' w-fit' />
              <p className=' ' >Platinum</p>
            </div>
          </div>
        </div>
        <div className=' px-4 md:px-0 flex gap-4 flex-col md:flex-row max-w-3xl mx-auto w-full'>
          <div className=' flex flex-col gap-2 rounded-md border h-96 w-full border-red-700 p-3'>
            <p className=' border-b-2 text-red-700 font-semibold text-lg py-2 text-center' >Silver</p>
            <p> <span className=' text-red-700'>-</span> Free Listing</p>
            <p> <span className=' text-red-700'>-</span> Get discovered InTown through search</p>
            <div className=' h-full flex items-end justify-center'>
              <img src='./silver.png' className='' />
            </div>
          </div>
          <div className=' flex from-yellow-200 via-20% via-yellow-50 to-yellow-500 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-red-700 p-3'>
            <p className=' border-b-2 text-red-700 font-semibold text-lg py-2 text-center' >Gold</p>
            <p> <span className=' text-red-700'>-</span> Gold - Enhanced Visibility</p>
            <p> <span className=' text-red-700'>-</span> Get featured in prominent app sections and update your offers monthly</p>
            <div className='  h-full flex items-end justify-center'>
              <img src='./gold.png' className='' />
            </div>
          </div>
          <div className=' flex from-zinc-200 via-20% via-zinc-50 to-zinc-400 bg-gradient-to-b flex-col gap-2 rounded-md border h-96 w-full border-red-700 p-3'>
            <p className=' border-b-2 text-red-700 font-semibold text-lg py-2 text-center' >Platinum</p>
            <p> <span className=' text-red-700'>-</span> Platinum - Maximum Exposure</p>
            <p> <span className=' text-red-700'>-</span> Get premium placement, weekly offer updates, and priority support</p>
            <div className=' h-full flex items-end justify-center'>
              <img src='./platinum.png' className='' />
            </div>
          </div>
        </div>
        <div className=' max-w-3xl flex-col md:flex-row mx-auto w-full flex gap-6' >
          <InputFild label={"offer Days"} notNsc={true} />
          <InputFild label={"offer Hours"} notNsc={true} />
          <InputFild label={"Maximum changes per offer"} disable={true} notNsc={true} />
        </div>
        <div className=' max-w-x2l w-full mx-auto flex flex-col gap-2' >
          <p className=' text-xl' >Plan Pricing</p>
          <div className='w-full flex-col md:flex-row flex max-w-xl gap-6'>
  
            {
              planData.map((data) => {
                return <div key={data.name} className=' w-full max-w-52 flex flex-col' >
                  <p className=' text-red-700' >{data.name}</p>
                  {
                    data.data?.map((item) => {
                      return <p key={item} >{item}</p>
                    })
                  }
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  }

  const planData = [
    {
      name: "Silver",
      data: [
        "500 / month",
        "2000 / Quaterly",
        "6000 / Yearly"
      ]
    },
    {
      name: "Gold",
      data: [
        "1500 / month",
        "6000 / Quaterly",
        "18,000 / Yearly"
      ]
    },
    {
      name: "Platunum",
      data: [
        "5000 / month",
        "20,000 / Quaterly",
        "60,000 / Yearly"
      ]
    },
  ]