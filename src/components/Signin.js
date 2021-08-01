import { useEffect, useState } from "react"
import { Transition, Menu } from '@headlessui/react'
import Modal from "@components/Modal"
import * as Util from '@utils/common'

export default function Signin() {
  const [isOpen, setIsOpen] = useState(false)

  const [signupform, setsignupform] = useState({ username: '', password: '' })

  const updateField = e => {
    setsignupform({
      ...signupform,
      [e.target.name]: e.target.value
    });
  };
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
        Sign in
      </button>
      <Modal
        show={isOpen}
        onClose={closeModal}
      >
        <h1 className="text-lg font-medium  leading-6 text-gray-900">Sign in</h1>



        <div className="mt-2">
          <form className="text-sm text-gray-500" onSubmit={submitForm}>

            <div className="flex flex-col">

              <div>E-mail:</div>
              <input value={signupform.email}
                name="email"
                onChange={updateField}
                className="border-2"
                type="email"
                placeholder="example@email.com" />
              <div>password</div>
              <input value={signupform.password}
                name="password"
                onChange={updateField}
                className={`border-2  focus:outline-none `}
                type="password"
                placeholder="contain more than 8 characters" />
            </div>




            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className={Util.classes(
                  'inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
                  (!signupform.password || !signupform.email  ) ? 'cursor-not-allowed' : 'hover:bg-blue-200'
                )}
                disabled={!signupform.email || !signupform.password}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )

}