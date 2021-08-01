import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Modal from "@components/Modal"
import * as Util from '@utils/common'



export default function Cfreserve({fname,lname,email,reason,telnum}) {
  const [isOpen, setIsOpen] = useState(false)



  const closeModal = () => setIsOpen(false)

  const openModal = () => setIsOpen(true)
  
  const submitForm = (e) => {
    e.preventDefault()
    closeModal()
  }


  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        className="px-4 mr-5 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
         Reserve!
      </button>
      <Modal
        show={isOpen}
        onClose={closeModal}
      >
        <h1 className="text-lg font-medium  leading-6 text-gray-900">Reserve confirmation</h1>
        <div></div>
        <div className="flex flex-col mt-4">
        <form className="text-sm text-gray-500" onSubmit={submitForm}>
        <div className="flex flex-row">
              <div>
                <div>First Name:</div>
                <input 
                value={fname}
                disable
                className ="border-2"
                type="text" 
                id="fname" 
                placeholder="Name"/>
              </div>
              <div className="ml-5">
                <div>Last Name:</div>
                <input 
                value={lname}
                disable
                className ="border-2"
                type="text" 
                id="lname" 
                placeholder="Lastname"/>
              </div>
            </div>
            <div className="mt-8">
              <div>Telephone Number:</div>
              <input 
              value={telnum}
              disable
              className ="border-2"
              type="text" 
              id="Telnum" 
              placeholder="0XXXXXXXXX"/>
            </div>
            <div className="mt-8">
              <div>E-mail:</div>
              <input 
              value={email}
              disable
              className ="border-2"
              type="text" 
              id="email" 
              placeholder="example@email.com"/>
            </div>
            <div className="mt-8">
              <div>Reserve for:</div>
              <textarea 
              value={reason}
              disable
              className ="border-2"
              rows="5" 
              cols="40" 
              id="reason" 
              className="resize-none"/>
            </div>
            <button
              type="submit">
              Sign in
            </button>
          </form>
        </div>

      </Modal>
    </div>

  )
}