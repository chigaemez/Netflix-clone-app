import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white text-center flex justify-between p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 text-5xl font-bold cursor-pointer' >NETFLIX</h1>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer'>Log In</button>
      </div>
    </div>
  )
}

export default Navbar
