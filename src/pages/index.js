import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Navbar from "@components/Navbar"
import Image from 'next/image'
import logoimg from "@publics/pic1.jpg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays"

export default function Home() {
  const room = [{ id: 1, roomn: "hong" }, { id: 2, roomn: "honghong" }, { id: 3, roomn: "boxbox" }]
  const floor = [1, 2, 3, 4, 5, 6]
  const time = [{
    id: 1, peroid: "8:00-10:00 น."
  },
  { id: 2, peroid: "10:00-12:00 น." },
  { id: 3, peroid: "13:00-15:00 น." },
  { id: 4, peroid: "15:00-17:00 น." },
  { id: 5, peroid: "18:00-20:00 น." },
  { id: 6, peroid: "20:00-22:00 น." },


  ]
  const [startDate, setStartDate] = useState(new Date());
  const [selectroom, setselectroom] = useState(room[0])

  return (
    <div className="flex flex-col items-center  w-full h-screen">
      <Navbar />
      <div className=" bg-blue-400 w-full h-full flex flex-row  ">

        <div className="h-4/5 w-4/5 rounded-2xl mt-10 ml-10  flex flex-col bg-blue-200 bg-opacity-40 border-r-2 ">
          <div className=" h-4/5 mt-10 ">
            <div className="mt-8 ml-20 flex flex-row ">
              <select className="w-2/5 mr-10" required>
                <option value="" disabled selected>Choose room</option>
                {room.map((option) => (<option key={room.id} value={option.roomn}>{option.roomn}</option>))}
              </select>
              <select className="w-2/5" required>
                <option value="" disabled selected>Choose floor</option>
                {floor.map((option) => (<option key={option} value={option}>{option}</option>))}
              </select>
            </div>
            <div className=" mt-10 ml-48">
              <div >
                <Image src={logoimg} />
              </div>
            </div>
            <div className="flex flex-row items-center ml-10 mt-10">
              <div className="ml-8">Choose day :</div>
              <div className="ml-8">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={subDays(new Date(), 0)}/>
              </div>
            </div>
            <div className="flex flex-row mt-10 ml-10 items-center">

              <div className="ml-8">Choose time period :</div>
              <select className="w-2/5 ml-8" required>
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
                <input type="text" id="fname" placeholder="Name"></input>
              </div>
              <div className="ml-5">
                <div>Last Name:</div>
                <input type="text" id="lname" placeholder="Lastname"></input>
              </div>
            </div>
            <div className="mt-8">
              <div>Telephone Number:</div>
              <input type="text" id="Telnum" placeholder="0XXXXXXXXX"></input>
            </div>
            <div className="mt-8">
              <div>E-mail:</div>
              <input type="text" id="email" placeholder="example@email.com"></input>
            </div>
            <div className="mt-8">
              <div>Reserve for:</div>
              <textarea rows="5" cols="40" id="reason" className="resize-none" ></textarea>
            </div>
            <div className="mt-8">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                submit</button>

            </div>
          </form>
        </div>
      </div>

    </div>

  )
}
