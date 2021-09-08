import React from 'react'

export default function Article({ imgUrl, byWho, title, content }) {
  return (
    <div className='flex flex-col overflow-hidden rounded-2xl shadow-xl bg-white'>
      {/* img container */}
      <div className='w-full h-60 overflow-hidden'>
        <img src={imgUrl} alt="" className='w-full' />
      </div>
      <div className='px-5 py-5'>
        <span className='inline-block my-3 text-gray-500'>{byWho}</span>
        <h5 className='text-2xl text-dark-blue mb-4 hover:text-lime-green cursor-pointer transition duration-200'>{title}</h5>
        <p className='text-gray-600 text-lg mb-4'>{content}</p>
      </div>
    </div>
  )
}
