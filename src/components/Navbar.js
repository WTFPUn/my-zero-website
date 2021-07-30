import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Image from 'next/image'
import logoimg from "@publics/favicon.ico"

export default function Navbar(){
    const [isMenuHovered, setIsMenuHovered] = useState(false)


    return (
        <div className="bg-blue-700 flex flex-row w-full items-center">
        <div className="px-3"><div className="relative flex m-2 p-5 w-12 h-12 border-r-2 items-center"><Image layout="fill" src={logoimg}/></div></div>
        <div className="flex p-6 pl-0.5 mr-12 font-medium text-xl">
          Reserve <br />System
        </div>
        
        
        <div className="p-6 m-5 ml-auto border-r-2">Sign in</div>
        <div className="p-6 mr-5 mt-5 mb-5">Sign up</div>

      </div >
    ) 
}