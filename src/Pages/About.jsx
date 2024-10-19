import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

const about = () => {
  return (
    <>
    <div className=" bg-slate-900 w-full h-[100vh] align-middle">
        <Header />
        <h1 className='text-7xl justify-center items-center flex my-56 text-white'>About</h1>
        <Footer />
    </div>
        </>
    
  )
}

export default about