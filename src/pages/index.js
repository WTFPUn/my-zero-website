import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Navbar from "@components/Navbar"
import Image from 'next/image'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays"
import ImageSlide from "@components/Imageslide"
import pic1 from "@public/pic1.jpg"
import pic2 from "@public/pic2.jpg"
import pic3 from "@public/pic3.jpg"
import Cfreserve from "@components/Cfreserve"


export default function Home() {
  const imagedata = [pic1,pic2,pic3]
  const room = [{ id: 1, roomn: "hong" }, { id: 2, roomn: "honghong" }, { id: 3, roomn: "boxbox" }]
  const floor = [1, 2, 3, 4, 5, 6]
  const time = [{
    id: 1, peroid: "8:00-10:00 น."},
  { id: 2, peroid: "10:00-12:00 น." },
  { id: 3, peroid: "13:00-15:00 น." },
  { id: 4, peroid: "15:00-17:00 น." },
  { id: 5, peroid: "18:00-20:00 น." },
  { id: 6, peroid: "20:00-22:00 น." },
 ]
  const [rsform,setrsform ]=useState({ email: '', fname: '' ,lname:'',telnum:'',reason:'',room:'',floor:'',timep:''})
  const [startDate, setStartDate] = useState(new Date());
  const updateField = e => {
    setrsform({
      ...rsform,
      [e.target.name]: e.target.value
    });
  };
  

  return (
    <div className="flex flex-col items-center  w-full h-screen">
      <Navbar />
      <div className=" bg-blue-400 w-full h-full flex flex-row  ">

        <div className="h-4/5 w-4/5 rounded-2xl mt-10 ml-10  flex flex-col bg-blue-200 bg-opacity-40 border-r-2 ">
          <div className=" h-4/5 mt-10 ">
          
            <div className="mt-8 ml-20 flex flex-row ">
              
              <select className="w-2/5 mr-10" 
                onChange={updateField}
                name='room'>
                <option 
                >Choose room</option>
                {room.map((option) => (<option key={room.id} value={option.roomn}>{option.roomn}</option>))}
              </select>
              <select 
              className="w-2/5"
              onChange={updateField}
              name='floor'>
                <option
                >Choose floor</option>
                {floor.map((option) => (<option key={option} value={option}>{option}</option>))}
              </select>
            </div>
          
            <div className=" mt-10 ml-48 h-50 w-80 pl-10 pr-2 pt-2">
              <div >
                <ImageSlide imagedata={imagedata} />
              </div>
            </div>
            <div className="flex flex-row items-center ml-10 mt-10">
              <div className="ml-8">Choose day :</div>
              <div className="ml-8">
              <DatePicker 
              selected={startDate} 
              onChange={(date) => {  
                setStartDate(date)
                console.log(startDate.getFullYear)}} 
              
              name='dayp'
              value={startDate}
              />
              
              </div>
            </div>
            <div className="flex flex-row mt-10 ml-10 items-center">

              <div className="ml-8">Choose time period :</div>
              <select className="w-2/5 ml-8"
              onChange={updateField}
              name='timep'
              >
                <option value="" disabled selected>Choose time peroid</option>
                {time.map((option) => (<option key={time.id} value={time.peroid}>{option.peroid}</option>))}
              </select>
            </div>

          </div>

        </div>
        <div className="h-4/5 w-full rounded-2xl mt-10 ml-20 mr-10 bg-blue-200 bg-opacity-40 border-l-2">
          <form className="mt-12 ml-10">
            <div className="flex flex-row">
              <div>
                <div>First Name:</div>
                <input 
                name= "fname"
                value={rsform.fname}
                onChange={updateField}
                type="text"
                 id="fname"
                placeholder="Name"></input>
              </div>
              <div className="ml-5">
                <div>Last Name:</div>
                <input 
                name='lname'
                value={rsform.lname}
                onChange={updateField}
                type="text"
                 id="lname"
                placeholder="Lastname"></input>
              </div>
            </div>
            <div className="mt-8">
              <div>Telephone Number:</div>
              <input 
              name="telnum"
              type="text" 
              onChange={updateField}
              id="Telnum" 
              placeholder="0XXXXXXXXX"></input>
            </div>
            <div className="mt-8">
              <div>E-mail:</div>
              <input
              name='email'
              value={rsform.email}
              onChange={updateField}
              type="text"
              id="email" 
              placeholder="example@email.com"></input>
            </div>
            <div className="mt-8">
              <div>Reserve for:</div>
              <textarea 
              name='reason'
              value={rsform.reason}
              onChange={updateField}
              rows="5" 
              cols="40" 
              id="reason" 
              className="resize-none" ></textarea>
            </div>
            <div className="mt-8">
            <div>
            <Cfreserve fname={rsform.fname} lname={rsform.lname}email={rsform.email}reason={rsform.reason}telnum={rsform.telnum}room={rsform.room}floor={rsform.floor}dayp={startDate.toDateString}timep={rsform.timep}/>
            </div>
            </div>
          </form>
        </div>
      </div>

    </div>

  )
}
