import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Otp } from './otp'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-blue-400'>hi</div>
      <div className='flex justify-between'>
        <div className='bg-blue-600'>
          child 1
        </div> 
        <div className='bg-green-600'>
          child 2
        </div>
        <div className='bg-red-600'>
          child 3
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-4 bg-purple-300'>
          child 4
        </div>
        <div className='col-span-6 bg-purple-600'>
          child 5
        </div>
        <div className='col-span-2 bg-purple-900'>
          child 6
        </div>
      </div>
      <div className='md:bg-green-300 sm:bg-blue-300 bg-red-300'>
        hi there
      </div>

      <div className='md:flex justify-center'>
        <div className='bg-pink-200'>child 7</div>
        <div className='bg-pink-400'>child 8</div>
        <div className='bg-pink-600'>child 9</div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='col-span-12 sm:col-span-6 bg-yellow-200 text-8xl rounded-4xl'>child 10</div>
        <div className='col-span-12 sm:col-span-4 bg-yellow-400'>child 11</div>
        <div className='col-span-12 sm:col-span-2 bg-yellow-600'>child 12</div>
      </div>


      
      <div className=' flex flex-col justify-center items-center bg-blue-700 min-h-screen'>
        <h1 className='text-white text-3xl font-bold mb-2'>Verify Your Age</h1>
        <p className='text-white mb-6 text-center'>Please confirm your birth year. This data will not be stored.</p>
        <input type="number" placeholder='Your Age' className="w-80 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"/>
        <br></br>
        <button type="button" className="w-80 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Continue</button>
      </div>

      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-600">
          <div className="p-6 bg-gray-400 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Enter OTP</h1>
            <Otp />
          </div>
        </div>
      </div>
     </>
  )
}

export default App
