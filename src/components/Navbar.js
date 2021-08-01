import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Image from 'next/image'
import logoimg from "@publics/favicon.ico"
import Signup from "@components/Signup"
import Signin from "@components/Signin"


export default function Navbar(){
    
    

    return (
        <div className="bg-blue-700 flex flex-row w-full items-center">
        <div className="px-3"><div className="relative flex m-2 p-5 w-12 h-12 border-r-2 items-center"><Image layout="fill" src={logoimg}/></div></div>
        <div className="flex p-6 pl-0.5 mr-12 font-medium text-xl">
          Reserve <br />System
        </div>
        
        
        <div className="p-6 m-5 ml-auto border-r-2"><Signin/></div>
        <div className=" transition duration-500 transform hover:scale-125"> <Signup/></div>

      </div >
    ) 
}