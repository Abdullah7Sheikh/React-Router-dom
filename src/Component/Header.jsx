import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-gray-500 text-white flex items-center justify-between' >
        <Link to="#">
        <h2 className='text-4xl'>Hello</h2>
        </Link>
        <div className='flex gap-10'>
            <Link className='no-underline ' to="/">Home</Link>
            <Link className='no-underline ' to="/Contact">Contact</Link>
            <Link className='no-underline ' to="/About">About</Link>
            

        </div>
    </div>
  )
}

export default Header