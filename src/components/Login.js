import { useEffect, useState, Fragment } from "react"
import { Transition, Dialog } from "@headlessui/react"



export default function Login() {
  const [isOpen, setIsOpen] = useState(false)
  const [signupform, setsignupform] = useState([{ username: '', password: '', confirmpassword: '' }])


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (


    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 mr-5 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        Sign Up
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>


            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h1"
                  className="text-lg font-medium  leading-6 text-gray-900"
                >
                  Create your account
                </Dialog.Title>
                <div className="mt-2">
                  <form className="text-sm text-gray-500">
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <div>Your name</div>
                        <input className="border-2 " placeholder="Johny" />
                      </div>
                      <div className="flex flex-col ml-5">
                        <div>Last name</div>
                        <input className="border-2" placeholder="Eieiderka" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-col">
                        <div>Username</div>
                        <input className="border-2" placeholder="it up to you!" />
                      </div>
                      <div>E-mail:</div>
                        <input className="border-2" placeholder="example@email.com" />
                      
                    </div>
                    
                    <div>
                      <div className="flex flex-row">
                        <div className="flex flex-col">
                          <div>password</div>
                          <input className="border-2 w-40" type="password" placeholder="contain more than 8 characters" />
                        </div>
                        <div className="flex flex-col ml-5">
                          <div>conform password</div>
                          <input className="border-2" type="password" placeholder="conform password" />
                        </div>
                      </div>
                      </div>
                  </form>
                </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                      >
                    </button>
                        Register
                  </div>
                </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
      )
}
