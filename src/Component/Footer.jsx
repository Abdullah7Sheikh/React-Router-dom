import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 w-full flex justify-center text-center items-center absolute bottom-0 h-12'>
    <h1 className='text-3xl'>this is footer {new Date().getFullYear()} </h1>
</div>

  )
}

export default Footer