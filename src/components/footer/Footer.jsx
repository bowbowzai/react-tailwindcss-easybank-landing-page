import React from 'react'

export default function Footer() {
  return (
    <div className='h-auto lg:h-80 w-full py-10 px-10 lg:px-32 bg-dark-blue flex items-center justify-between flex-col lg:flex-row'>
      {/* left */}
      <div className='grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <img src="images/logo.svg" alt="" />
          </div>
          <div className='mt-10 flex items-center'>
            <img src="images/icon-facebook.svg" alt="" className='mr-2 cursor-pointer' />
            <img src="images/icon-youtube.svg" alt="" className='mx-2 cursor-pointer' />
            <img src="images/icon-twitter.svg" alt="" className='mx-2 cursor-pointer' />
            <img src="images/icon-pinterest.svg" alt="" className='mx-2 cursor-pointer' />
            <img src="images/icon-instagram.svg" alt="" className='mx-2 cursor-pointer' />
          </div>
        </div>
        <div className='ml-0 lg:ml-20 mt-5 lg:mt-0 flex items-center justify-center'>
          <ul className='text-white text-lg w-full lg:w-auto text-center lg:text-left'>
            <li className='mb-3 transition duration-100 cursor-pointer  hover:text-lime-green'>About Us</li>
            <li className='my-3 transition duration-100 cursor-pointer  hover:text-lime-green'>Contact</li>
            <li className='mt-3 transition duration-100 cursor-pointer  hover:text-lime-green'>Blog</li>
          </ul>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='text-white text-lg w-full lg:w-auto text-center lg:text-left'>
            <li className='mb-3 transition duration-100 cursor-pointer  hover:text-lime-green'>Careers</li>
            <li className='my-3 transition duration-100 cursor-pointer  hover:text-lime-green'>Support</li>
            <li className='mt-3 transition duration-100 cursor-pointer  hover:text-lime-green'>Privacy Policy</li>
          </ul>
        </div>
      </div>
      {/* right */}
      <div className='flex flex-col justify-center items-center'>
        <a href="" className='inline-block py-3 px-8 bg-gradient-to-r from-lime-green to-bright-cyan rounded-full font-bold text-white cursor-pointer transition duration-100 mt-5 lg:mt-0 hover:opacity-80'>
          Request Invite
        </a>
        <span className='mt-10 text-gray-500'>
          ©Easybank. All Rights Reserved
        </span>
      </div>
    </div>
  )
}
