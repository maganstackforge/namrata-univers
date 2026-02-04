import React from 'react'
import 'aos/dist/aos.css'
import { FaUser, FaUsers, FaChartLine, FaCheck } from 'react-icons/fa'

export default function CallToAction() {
  // Array for contact buttons
  const callButtons = [
    { id: 1, text: 'CALL US @ 8506922777', style: 'rounded-tl-2xl' },
    { id: 2, text: 'CALL US @ 8506922777', style: 'rounded-t-2xl' },
    { id: 3, text: 'CALL US @ 8506922777', style: 'rounded-tr-2xl' },
  ]

  // Array for stats boxes
  const stats = [
    {
      id: 1,
      icon: <FaUser className='text-7xl' />,
      number: '56',
      label: 'Our Staff',
      style: 'rounded-tl-2xl rounded-br-2xl',
    },
    {
      id: 2,
      icon: <FaUsers className='text-7xl' />,
      number: '120',
      label: 'Happy Clients',
      style: 'rounded-tr-2xl rounded-bl-2xl',
    },
    {
      id: 3,
      icon: <FaCheck className='text-7xl' />,
      number: '3811',
      label: 'Completed Projects',
      style: 'rounded-tl-2xl rounded-br-2xl',
    },
    {
      id: 4,
      icon: <FaChartLine className='text-7xl' />,
      number: '24*7',
      label: 'Support',
      style: 'rounded-tr-2xl rounded-bl-2xl',
    },
  ]

  return (
    <section
      id='CallToAction'
      className='section-container my-20 text-white flex flex-col items-center justify-center px-6 pt-6'
    >
      <div className='w-full bg-[#6FA4AF] rounded-2xl'>
        {/* HEADER */}
        <div
          className='section-header aos-init max-w-6xl p-8 my-10 mx-auto flex flex-col justify-center
            items-center text-center'
          data-aos='flip-left'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='2000'
        >
          <h2 className='text-5xl font-bold my-5'>CALL TO ACTION</h2>
          <p className='text-2xl pb-6'>Please contact us for any queries.</p>
          <span className='bg-[#A2C3DC] rounded-b-2xl w-24 h-2'></span>
        </div>

        {/* CALL BUTTONS (Grid Layout) */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-8'>
          {callButtons.map((btn) => (
            <a
              key={btn.id}
              className={`p-6 bg-[#5E939E] text-white font-semibold text-center transition-all duration-300
              hover:bg-[#7FB5BF] hover:shadow-xl ${btn.style}`}
              href='tel:8506922777'
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              {btn.text}
            </a>
          ))}
        </div>

        {/* STATS SECTION (Grid Layout) */}
        <div
          className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-8 justify-center
            items-center'
        >
          {stats.map((item) => (
            <div
              key={item.id}
              className={`p-6 h-60 bg-[#5E939E] flex flex-col items-center justify-between text-center
              ease-in-out transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer
              hover:bg-[#7FB5BF] ${item.style}`}
              data-aos='fade-up'
              data-aos-duration='2000'
            >
              {item.icon}
              <p className='pt-6 text-6xl font-bold'>{item.number}</p>
              <p className='text-2xl py-6 font-bold'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
