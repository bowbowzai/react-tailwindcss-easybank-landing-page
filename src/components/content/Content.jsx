import React from 'react'

export default function Content() {
  return (
    <div className='h-auto w-full bg-gray-200 py-24 px-10 lg:px-32 flex flex-col'>
      <h3 className='text-4xl lg:text-5xl text-dark-blue'>Why choose Easybank?</h3>
      <p className='mt-12 text-xl lg:text-2xl text-gray-400'>We leverage Open Banking to turn your bank account into your financial hub. <br /> Control your finances like never before.</p>
      <div className='grid grid-cols-1 grid-rows-4 gap-y-10 lg:grid-cols-4 lg:grid-rows-1 mt-12 lg:gap-x-10'>
        <div className='flex flex-col w-full items-center justify-center lg:items-start'>
          <div className='overflow-hidden w-24 h-24 flex '>
            <img src="images/icon-online.svg" alt="" className='w-full' />
          </div>
          <h5 className='mt-9 text-3xl text-dark-blue'>Online Banking</h5>
          <p className='mt-6 text-lg text-gray-500 text-center lg:text-left'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. </p>
        </div>
        <div className='flex flex-col w-full items-center justify-center lg:items-start'>
          <div className='overflow-hidden w-24 h-24'>
            <img src="images/icon-online.svg" alt="" className='w-full' />
          </div>
          <h5 className='mt-9 text-3xl text-dark-blue'>Simple Budgeting</h5>
          <p className='mt-6 text-lg text-gray-500 text-center lg:text-left'>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
        </div>
        <div className='flex flex-col w-full items-center justify-center lg:items-start'>
          <div className='overflow-hidden w-24 h-24'>
            <img src="images/icon-online.svg" alt="" className='w-full' />
          </div>
          <h5 className='mt-9 text-3xl text-dark-blue'> Fast Onboarding</h5>
          <p className='mt-6 text-lg text-gray-500 text-center lg:text-left'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>
        <div className='flex flex-col w-full items-center justify-center lg:items-start'>
          <div className='overflow-hidden w-24 h-24'>
            <img src="images/icon-online.svg" alt="" className='w-full' />
          </div>
          <h5 className='mt-9 text-3xl text-dark-blue'>Open API</h5>
          <p className='mt-6 text-lg text-gray-500 text-center lg:text-left'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>
      </div>
    </div>
  )
}
