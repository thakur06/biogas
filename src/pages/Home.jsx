import React from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Clients } from '../components/Clients'
import { Details } from '../components/Details'
export const Home = () => {
  return (
    <div className="min-h-full bg-gray-50">
      {/* Pull hero under fixed navbar */}
      <div className="-mt-16">
        <Hero/>
      </div>
      <div className="max-w-svw mx-auto">
         {/* this is main home div */}
         
         <Details/>
         <Clients/>
      
      </div>
      <div className='flex md:flex-row md:justify-between py-12 md:py-24 px-4 sm:px-6 lg:px-36 items-center flex-col bg-black w-full min-h-64 gap-6'>
        <div>
          <h1 className='text-2xl md:text-5xl text-white text-center font-bold font-helvetica-light' >
            Have a Project for Us?
          </h1>
          <h2 className='text-sm md:text-sm text-white font-bold'>
          Let’s turn your waste into clean, <span className='font-extrabold text-green-600 text-lg text-shadow-green-500 text-shadow-2xs'>renewable</span> energy.
          </h2>
        </div>
       
       
        <div>
          <Link to="/contact">
            <button className='bg-white text-black px-14 py-2  md:text-sm hover:bg-transparent hover:border hover:border-white hover:ease-in-out text-center font-semibold hover:text-white transition-all'>
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

