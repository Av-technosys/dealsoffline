import { BadgePercent, BadgePercentIcon, CalendarDays, CircleUser, History, Menu, Pencil, Plus, ShapesIcon, Sigma, User } from "lucide-react"

export default function OfferDetailsSection() {
  return <div className=' max-w-6xl px-4 mt-12 mx-auto w-full flex flex-col gap-4' >
    <div className=' w-fit mx-auto items-center flex flex-col gap-4' >
      <p className=' text-3xl md:text-4xl font-medium text-center' >Product & Offer Details</p>
      <p className=' text-gray-600 text-center' >Create deals & offers</p>
    </div>
    <div className=' flex flex-col gap-8 ' >
      <div className=' flex flex-col gap-3' >
        <p className=' text-xl font-semibold' >Offer Details</p>
        <p className=' text-gray-600' >Select your offer details</p>
      </div>
      <div className='py-2 w-full flex-wrap  flex items-center gap-4 mx-auto ' >
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Type <span className=' text-red-700' >*</span></p>
          <select type='text' className=' w-full text-sm rounded-md bg-white p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Category  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-40 flex flex-col gap-1' >
          <p className={``}>Discount  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Validity  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={`opacity-0`}>Validity  <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Display <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Display <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-56 flex flex-col gap-1' >
          <p className={``}>Offer Display <span className=' text-red-700' >*</span></p>
          <input type='text' className=' w-full text-sm rounded-md p-2 border ' />
        </div>
        <div className=' w-16 flex flex-col justify-start gap-1' >
          <p className={``}>Status <span className=' text-red-700' >*</span></p>
          <input type='checkbox' className='' ></input>
        </div>
        <div className=' w-24 flex flex-col justify-start gap-1' >
          <div className=' border border-red-700 flex justify-center items-center gap-2 px-2 py-1 rounded-md text-red-700 ' >
            <p>Add</p>
            <Plus size={18} />
          </div>
          <div className=' border  flex justify-center items-center gap-2 px-2 py-1 rounded-md text-gray-300 ' >
            <p>Update</p>
            <History size={18} />
          </div>
        </div>
      </div>
      <div className=' overflow-x-scroll hide-scrollbar' >
        <p>Offer History</p>
        <div className=' border rounded-md  w-[72rem]' >
          <div className=' grid bg-red-700 text-white py-2 grid-cols-7' >
            <div className=' flex gap-2 items-center justify-center' >
              <p>Type</p>
              <ShapesIcon size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Category</p>
              <Menu size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Discount</p>
              <BadgePercent size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Validity</p>
              <CalendarDays size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Offer Display</p>
              <BadgePercentIcon size={18} />
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Offer Status</p>
              {/* <CalendarDays size={18} /> */}
            </div>
            <div className=' flex gap-2 items-center justify-center' >
              <p>Edit the offer</p>
              <Pencil size={18} />
            </div>
          </div>
          {
            offerData.map((data, idx) => {
              return (
                <OfferDetailList key={idx} data={data} idx={idx} />
              )
            })
          }
        </div>
      </div>

      <div className=' overflow-x-scroll hide-scrollbar' >

        <div className=' rounded-md border' >
          <div className=' w-full justify-between flex items-center p-2' >
            <p className=' text-red-700 text-xl'>Transaction History</p>
            <div className=' border p-2 rounded border-red-700 gap-2 flex items-center' >
              <p className=' text-sm'>Select Date</p>
              <CalendarDays color='#b91c1c' size={18} />
            </div>
          </div>
          <div className=' border  overflow-x-scroll w-[72rem]' >
            <div className=' grid bg-red-700 text-white py-2 grid-cols-5' >
              <div className=' flex gap-2 items-center justify-center' >
                <p>Sr.no</p>
                {/* <Shapes size={18} /> */}
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>User Name</p>
                <User size={18} />
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>Total</p>
                <Sigma size={18} />
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>Status</p>
                <User size={18} />
              </div>
              <div className=' flex gap-2 items-center justify-center' >
                <p>Date</p>
                <CalendarDays size={18} />
              </div>
            </div>
            {
              orderData.map((data, idx) => {
                return (
                  <OrderDetailList key={idx} data={data} idx={idx} />
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  </div>
}

function OfferDetailList({ data, idx }) {
  return <div className={`grid  text-black py-2 grid-cols-7 ${idx % 2 == 0 ? "bg-gray-100" : "bg-white"} `} >
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.type}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.category}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.discount}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.validity}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.offerDisplay}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <input type='checkbox' />
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <Pencil size={18} />
    </div>
  </div>
}
function OrderDetailList({ data, idx }) {
  return <div className={`grid  text-black py-2 grid-cols-5 ${idx % 2 == 0 ? "bg-gray-100" : "bg-white"} `} >
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.sr_no}</p>
    </div>
    <div className=' flex gap-2 items-center' >
      <div className=' rounded-md bg-gray-200 size-8 flex items-center justify-center' >
        <CircleUser color='#b91c1c' size={16} />
      </div>
      <p className=' text-sm' >{data.user_name}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.total}</p>
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      {
        data.status == "Processing" ? <Processing /> : <Delivered />
      }
      {/* <Processing /> */}
    </div>
    <div className=' flex gap-2 items-center justify-center' >
      <p className=' text-sm text-center' >{data.date}</p>
    </div>

  </div>
}


function Processing() {
  return <div className=' text-sm py-0.5 px-2 rounded-lg mx-auto bg-yellow-50 text-yellow-600' >Processing</div>
}

function Delivered() {
  return <div className=' text-sm py-0.5 px-2 rounded-lg mx-auto bg-red-50 text-red-600' >Delivered</div>
}

const offerData = [
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "18%",
    "validity": "31st Dec - 2nd Jan",
    "offerDisplay": "Offer display message",
    "status": "Active"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "12%",
    "validity": "31st Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "20%",
    "validity": "30th Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "30%",
    "validity": "29th Dec - 1st Jan",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  },
  {
    "type": "Discount",
    "category": "All Categories",
    "discount": "15%",
    "validity": "28th Dec - 31st Dec",
    "offerDisplay": "Offer display message",
    "status": "Expired"
  }
]


const orderData = [
  {
    "sr_no": 1,
    "user_name": "Naveen Sharma",
    "total": "Rs 10,000",
    "status": "Processing",
    "date": "9 Jan 2025"
  },
  {
    "sr_no": 2,
    "user_name": "Rajesh Sah",
    "total": "Rs 7,000",
    "status": "Processing",
    "date": "9 Jan 2025"
  },
  {
    "sr_no": 3,
    "user_name": "Shreya Sah",
    "total": "Rs 2,000",
    "status": "Delivered",
    "date": "7 Dec 2025"
  },
  {
    "sr_no": 4,
    "user_name": "Shruti Kumari",
    "total": "Rs 22,000",
    "status": "Processing",
    "date": "9 Dec 2023"
  },
  {
    "sr_no": 5,
    "user_name": "Rohit Raj",
    "total": "Rs 25,000",
    "status": "Delivered",
    "date": "12 Dec 2025"
  },
  {
    "sr_no": 6,
    "user_name": "Mohan Sharma",
    "total": "Rs 3,000",
    "status": "Processing",
    "date": "9 Jan 2025"
  },
  {
    "sr_no": 7,
    "user_name": "Prachi Gupta",
    "total": "Rs 10,000",
    "status": "Processing",
    "date": "29 Jan 2025"
  }
]

