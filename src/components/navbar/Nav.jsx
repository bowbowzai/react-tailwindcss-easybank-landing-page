import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
export default function Nav() {
  return (
    <div className='absolute z-50 bg-white top-0 px-10 lg:px-20 h-24 w-full flex items-center justify-between'>
      {/* logo */}
      <div>
        <img src="images/logo.svg" alt="" />
      </div>
      {/* hamburger */}
      <Menu as="div" className="inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='lg:hidden cursor-pointer'>
                  <img src={!open ? "images/icon-hamburger.svg" : "images/icon-close.svg"} alt="" />
                </div>
              </Menu.Button>
            </div>
            {open && (
              <div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items static className="absolute transform -translate-x-1/2 left-1-2 w-4/5 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                    <div className="">
                      <Menu.Item>
                        <button className='w-full h-20 hover:bg-gray-300 transition duration-100'>
                          Home
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="">
                      <Menu.Item>
                        <button className='w-full h-20 hover:bg-gray-300 transition duration-100'>
                          About
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="">
                      <Menu.Item>
                        <button className='w-full h-20 hover:bg-gray-300 transition duration-100'>
                          Contact
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="">
                      <Menu.Item>
                        <button className='w-full h-20 hover:bg-gray-300 transition duration-100'>
                          Blog
                        </button>
                      </Menu.Item>
                    </div>
                    <div className="">
                      <Menu.Item>
                        <button className='w-full h-20 hover:bg-gray-300 transition duration-100'>
                          Careers
                        </button>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>

              </div>
            )}
          </>
        )}
      </Menu>

      {/* nav */}
      <ul className='hidden lg:flex text-gray-400 h-full items-center my-5'>
        <li className='w-28 justify-center text-lg h-full cursor-pointer flex items-center text-center hover:border-lime-green border-b-4 border-r-4 border-transparent'>Home
        </li>
        <li className='w-28 justify-center text-lg h-full cursor-pointer flex items-center hover:border-lime-green border-b-4 border-transparent text-center border-r-4 '>About</li>
        <li className='w-28 justify-center text-lg h-full cursor-pointer flex items-center hover:border-lime-green border-b-4 border-transparent text-center  border-r-4 '>Contact</li>
        <li className='w-28 justify-center text-lg h-full cursor-pointer flex items-center hover:border-lime-green border-b-4 border-transparent text-center border-r-4 '>Blog</li>
        <li className='w-28 justify-center text-lg h-full cursor-pointer flex items-center hover:border-lime-green border-b-4 border-transparent text-center border-r-4 '>Careers</li>
      </ul>
      <a href="" className='hidden lg:inline-block bg-gradient-to-r from-lime-green to-bright-cyan font-bold text-white rounded-full py-2 px-5 hover:opacity-80 transition duration-200'>Request Invite</a>
    </div>
  )
}
