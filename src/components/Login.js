import { useEffect, useState, Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"
import * as Util from '@utils/common'
import Modal from "@components/Modal"

export default function Login() {
  const [isOpen, setIsOpen] = useState(false)
  const [signupform, setsignupform] = useState({ username: '', password: '', confirmpassword: '', email: '', fname: '', lname: '' })

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
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 mr-5 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Sign Up
      </button>
      <Modal
        show={isOpen}
        onClose={closeModal}
      >
        <h1 className="text-lg font-medium  leading-6 text-gray-900">Create your account</h1>
        <div className="mt-2">
          <form className="text-sm text-gray-500" onSubmit={submitForm}>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div>Your name</div>
                <input className="border-2"
                  value={signupform.fname}
                  name="fname"
                  onChange={updateField}
                  placeholder="Johny" />
              </div>
              <div className="flex flex-col ml-5">
                <div>Last name</div>
                <input value={signupform.lname}
                  name="lname"
                  onChange={updateField}
                  className="border-2"
                  placeholder="Eieiderka" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div>Username</div>
                <input value={signupform.username}
                  name="username"
                  onChange={updateField}
                  className="border-2"
                  placeholder="it up to you!" />
              </div>
              <div>E-mail:</div>
              <input value={signupform.email}
                name="email"
                onChange={updateField}
                className="border-2"
                type="email"
                placeholder="example@email.com" />
            </div>

            <div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <div>password</div>
                  <input value={signupform.password}
                    name="password"
                    onChange={updateField}
                    className={`border-2 w-40 focus:outline-none ${signupform.password.length < 8 && 'ring-1 ring-red-600'}`}
                    type="password"
                    placeholder="contain more than 8 characters" />
                </div>
                <div className="flex flex-col ml-5">
                  <div>confirm password</div>
                  <input value={signupform.confirmpassword}
                    name="confirmpassword"
                    onChange={updateField}
                    className={`border-2 focus:outline-none ${signupform.password != signupform.confirmpassword && 'ring-1 ring-red-600'}`}
                    type="password"
                    placeholder="conform password" />
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <button
                type="submit"
                className={Util.classes(
                  'inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
                  (signupform.password.length < 8 || signupform.password != signupform.confirmpassword) ? 'cursor-not-allowed' : 'hover:bg-blue-200'
                )}
                disabled={signupform.password.length < 8 || signupform.password != signupform.confirmpassword || !signupform.fname || !signupform.lname || !signupform.username || !signupform.email}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}
