import React from 'react'
import massEnergyWorks from '../assets/clients/mass_energy_works.png'

export const Clients = () => {
  const clients = [
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks }
  ]

  return (
    <section className='w-full border-e-gray-100 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl text-black font-bold text-center'>Clients & Works</h2>
        <div className='mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center'>
          {clients.map((c, idx) => (
            <img
              key={idx}
              src={c.logo}
              alt={c.name}
              className='h-12 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition'
            />
          ))}
        </div>
      </div>
    </section>
  )
}
