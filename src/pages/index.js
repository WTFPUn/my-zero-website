import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Navbar from "@components/Navbar"
import Image from 'next/image'
import logoimg from "@publics/pic1.jpg"
import { Listbox } from "@headlessui/react"
import { Fragment } from "react-is"
import { CheckIcon } from '@heroicons/react/solid'

export default function Home() {
  const room = [ "hong", "honghong", "boxbox"]
  const floor = [1, 2, 3, 4, 5, 6]
  const [selectroom, setselectroom] = useState(room[0])

  return (
    <div className="flex flex-col items-center  w-full h-screen">
      <Navbar />
      <div className=" bg-blue-400 w-full h-full flex flex-row  ">

        <div className="h-4/5 w-4/5 rounded-2xl mt-10 ml-10  flex flex-col bg-blue-200 bg-opacity-40 border-r-2 ">
          <div className=" h-4/5 mt-10 ">
            <div className="mt-8 ml-20 flex flex-row ">
              <select className="w-2/5 mr-10" required>
                <option value="" disabled selected>เลือกห้อง</option>
                {room.map((option) => (<option value={option}>{option}</option>))}
              </select>
              <select className="w-2/5" required>
                <option value="" disabled selected>เลือกชั้น</option>
                {floor.map((option) => (<option value={option}>{option}</option>))}
              </select>
            </div>
            <div className="relative mt-10 ml-48">
              <div className="absolute">
                <Image src={logoimg} />
              </div>
              <div className="absolute">1</div>
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
              <textarea rows="5" cols="40"></textarea>
            </div>
            <div className="mt-8">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            submit</button>

            </div>
          </form>
        </div>
      </div>

    </div>

  )
}
