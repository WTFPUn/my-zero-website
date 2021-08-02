import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Modal from "@components/Modal"
import * as Util from '@utils/common'



export default function Cfreserve({ fname, lname, email, reason, telnum, room, floor, dayp, timep }) {
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
                  disable={true}
                  className="border-2"
                  type="text"
                  id="fname"
                  placeholder="Name" />
              </div>
              <div className="ml-5">
                <div>Last Name:</div>
                <input
                  value={lname}
                  disable={true}
                  className="border-2"
                  type="text"
                  id="lname"
                  placeholder="Lastname" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-2">
                <div>Telephone Number:</div>
                <input
                  value={telnum}
                  disable={true}
                  className="border-2"
                  type="text"
                  id="Telnum"
                  placeholder="0XXXXXXXXX" />
              </div>
              <div className="mt-2 ml-5">
                <div>E-mail:</div>
                <input
                  value={email}
                  disable={true}
                  className="border-2"
                  type="text"
                  id="email"
                  placeholder="example@email.com" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mt-2">
                <div>Room</div>
                <input
                  value={room}
                  disable={true}
                  className="border-2 resize-none"
                  rows="5"
                  cols="40"
                  id="reason" />
              </div>
              <div className="mt-2 ml-5">
                <div>floor</div>
                <input
                  value={floor}
                  disable={true}
                  className="border-2 resize-none"
                  rows="5"
                  cols="40"
                  id="reason" />
              </div>
            </div>
            <div className="mt-2">
              <div>
                {"วันที่ " + dayp}
              </div>
              <div
                className=" mt-2">
                {"เวลา" + timep}
              </div>
            </div>

            <div className="mt-2">
              <div>Reserve for:</div>
              <textarea
                value={reason}
                disable={true}
                className="border-2 resize-none"
                rows="5"
                cols="40"
                id="reason" />
            </div>

            <button
              type="submit"
              className='mt-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 hover:bg-blue-200'>
              Confirm
            </button>
          </form>
        </div>

      </Modal>
    </div>

  )
}