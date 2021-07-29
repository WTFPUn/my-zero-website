import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Navbar from "@components/Navbar"

export default function Home() {

  return (
    <div className="flex flex-col items-center  w-full h-screen">
      <Navbar/>
      <div className="bg-blue-400 w-full h-full ">ควย</div>

    </div >
  )
}
