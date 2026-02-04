import React from 'react'

import { useModal } from '../context/ModalContext'
import { IoMdEye, IoMdOpen } from 'react-icons/io'
import Portfolio1 from '../assets/images/portfolio-1.webp'
import Portfolio2 from '../assets/images/portfolio-2.webp'
import Portfolio3 from '../assets/images/portfolio-3.webp'
import Portfolio4 from '../assets/images/portfolio-4.webp'
import Portfolio5 from '../assets/images/portfolio-5.webp'
import Portfolio6 from '../assets/images/portfolio-6.webp'
export default function Portfolio() {
  const { openModal, closeModal } = useModal()
  const handleMobileMenu = () => {
    openModal(<Portfolio closeModal={closeModal} />)
  }
  return (
    <section
      id='portfolio'
      className='section-container py-4 flex flex-col items-center justify-between bg-[#f2f2f2]'
    >
      <div className='mx-auto'>
        <div
          className='w-3/4 mx-auto text-center px-2 sm:px-6 md:px-10 flex flex-col justify-center
            items-center'
        >
          <h2 className='p-1 sm:p-2 md:p-3 text-4xl sm:text-5xl md:text-6xl font-bold'>Our Portfolio</h2>

          <p className='text-sm sm:text-2xl md:text-2xl px-2 sm:px-4 md:px-10 text-center mb-10'>
            A portfolio is a compilation of materials that exemplifies your beliefs, skills, qualifications,
            education, training and experiences. It provides insight into your personality and work ethic.
          </p>
          <span className='bg-gray-600 rounded-b-2xl w-24 h-2'></span>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] w-full gap-16 mt-8'>
          {[
            { img: Portfolio1, aboutPortfolio: 'Jewelry & Watches Portfolio Template' },
            { img: Portfolio2, aboutPortfolio: 'Business Financial Portfolio Template' },
            { img: Portfolio3, aboutPortfolio: 'Minimal Work Portfolio Template' },
            { img: Portfolio4, aboutPortfolio: 'Beauty & Planet Project Portfolio Template' },
            { img: Portfolio5, aboutPortfolio: 'Personal Investment Portfolio Template' },
            { img: Portfolio6, aboutPortfolio: 'Creative Work Portfolio Template' },
          ].map((member, i) => (
            <div
              key={i}
              className='relative group text-center flex flex-col items-center shadow-xl rounded-2xl'
            >
              <img
                src={member.img}
                alt={member.name}
                className='object-cover w-full shadow-lg rounded-t-2xl'
                loading='lazy'
              />
              <h1 className='text-xl font-bold p-4'>{member.aboutPortfolio}</h1>
              <div
                className='absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center
                  gap-4 transition-all duration-300'
              >
                <button
                  className='bg-[#5B99C2] text-white p-3 rounded-md cursor-pointer transform -translate-x-40
                    opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500'
                  onClick={handleMobileMenu}
                >
                  <IoMdEye />
                </button>
                <button
                  className='bg-[#5B99C2] text-white p-3 rounded-md cursor-pointer transform translate-x-40
                    opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500'
                >
                  <IoMdOpen />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
