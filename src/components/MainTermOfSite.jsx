import React from 'react'

import BrajeshCeo from '../assets/images/mainteam/brajesh-ceo.webp'
import PreetiCeo from '../assets/images/mainteam/Preeti-ceo.webp'
import SaurabhCeo from '../assets/images/mainteam/Saurabh-ceo.webp'
export default function MainTermOfSite() {
  return (
    <section id='mainTeam' className='section-container flex items-center justify-center flex-col px-6 pt-6'>
      <div className='w-full flex flex-col justify-center items-center my-10'>
        <div className='text-center flex flex-col justify-center items-center my-10'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold my-5'>Main Team of Namrata Universal</h2>
          <p className='text-sm sm:text-xl md:text-2xl pb-6 text-center'>
            Our main team comprises passionate individuals from various backgrounds. From creative designers
            to meticulous engineers and skilled marketers, we work together synergistically to deliver
            innovative solutions that exceed expectations.
          </p>
          <span className='bg-gray-200 rounded-b-2xl w-24 h-2'></span>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-6 p-6 w-full'>
          {[
            { img: BrajeshCeo, name: 'Brajesh Kumar Jaiswal', role: 'CO-FOUNDER' },
            { img: PreetiCeo, name: 'Preeti', role: 'CEO & FOUNDER' },
            { img: SaurabhCeo, name: 'Saurabh Mahawar', role: 'CO-FOUNDER' },
          ].map((member) => (
            <div
              key={member.name}
              className='text-center flex flex-col items-center bg-[#3E727C] rounded-t-full p-10 h-[400px]
                text-white'
            >
              <img
                src={member.img}
                alt={member.name}
                className='w-60 h-60 object-cover rounded-full mb-4'
                loading='lazy'
              />
              <h1 className='text-xl font-bold'>{member.name}</h1>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
