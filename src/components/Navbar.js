import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Image from 'next/image'
import logoimg from "@publics/favicon.ico"

export default function Navbar(){
    const [isMenuHovered, setIsMenuHovered] = useState(false)


    return (
        <div className="bg-yellow-300 flex flex-row w-full">
        <div className="px-3"><Image className="flex m-2 p-5 w-24 h-24 border-r-2 items-center" src={logoimg}/></div>
        <div className="flex p-6 pl-0.5 mr-12 font-medium text-xl">
          Reserve <br />System
        </div>
        <div className="p-6 pt-10 ml-10">จองห้องประชุม</div>
        <div >
        <Menu as = "div" className="relative items-center" >
          <Menu.Button 
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
          >
            <div className=" flex pt-10 p-12 ml-10 items-end  bg-gradient-to-b hover:from-white  hover:to-yellow-300">การจองของคุณ</div>
          </Menu.Button>

          <Transition
            show={isMenuHovered}
            enter="transition duration-200 ease-in-out"
            enterFrom="transform -translate-y-2 scale-0"
            enterTo="transform scale-100"
            leave="transition duration-200 ease-in-out"
            leaveFrom="transform scale-100"
            leaveTo="transform -translate-y-2 scale-0"
          >
            <Menu.Items as="div" className="absolute  right-15 transform -translate-y-2  items-center w-full rounded-xl bg-white divide-y divide-light-yellow-400 mt-5 ">
              <Menu.Item><div >eiei<br/>sdsdsd<br/></div></Menu.Item>
              <Menu.Item><div>eiei1</div></Menu.Item>
              <Menu.Item><div>eiei1</div></Menu.Item>
              <Menu.Item><div>eiei1</div></Menu.Item>
              <Menu.Item><div>eiei1</div></Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        </div>
        <div className="p-6 m-5 ml-auto border-r-2">Sign in</div>
        <div className="p-6 mr-5 mt-5 mb-5">Sign up</div>

      </div >
    ) 
}