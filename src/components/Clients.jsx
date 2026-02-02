import React from 'react'
import massEnergyWorks from '../assets/clients/mass_energy_works.png'
import public_works_la from "../assets/clients/public_works_LA.png"
import vvwra from "../assets/clients/vvwra.png"
import san_ramon from "../assets/clients/san_ramon.png"

export const Clients = () => {
  const clients = [
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Public Works Los Angeles', logo: public_works_la },
    { name: 'VVWRA', logo: vvwra },
    { name: 'San Ramon', logo: san_ramon },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks },
    { name: 'Mass Energy Works', logo: massEnergyWorks }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-black font-bold text-center">Clients & Works</h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
          {clients.map((c, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-32 h-20 sm:w-40 sm:h-24 "
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-16 sm:h-20 object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
