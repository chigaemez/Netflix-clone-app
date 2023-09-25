import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SingnUp = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()


  const handleSubmit= async (e) => {
    e.preventDefault()

    try {
      await signUp(Email, Password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/4cf96b2b-975a-415b-9988-b7aa2e5b35de/NG-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'> Sign Up </h1>

              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  className='p-3 my-2 bg-gray-700 rounded outline-none'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className='p-3 my-2 bg-gray-700 rounded outline-none'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-red-600 py-3 my-3 rounded outline-none font-bold'>
                  Sign Up{' '}
                </button>

                <div className='flex justify-between items-center text-base text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>Already Subscribe to netflix</span><Link className='text-slate-200' to='/login'> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingnUp
