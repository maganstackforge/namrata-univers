import React from 'react'
import 'aos/dist/aos.css'

import Client1 from '../assets/images/client-1.webp'
import Client2 from '../assets/images/client-2.webp'
import Client3 from '../assets/images/client-3.webp'
import Client4 from '../assets/images/client-4.webp'
import Client5 from '../assets/images/client-5.webp'
import Client6 from '../assets/images/client-6.webp'
import Client7 from '../assets/images/client-7.webp'
import Client8 from '../assets/images/client-8.webp'
import Client9 from '../assets/images/client-9.webp'
import Client10 from '../assets/images/client-10.webp'
import Client11 from '../assets/images/client-11.webp'
import Client12 from '../assets/images/client-12.webp'
import Client13 from '../assets/images/client-13.webp'
import Client14 from '../assets/images/client-14.webp'
import Client15 from '../assets/images/client-15.webp'
import Client16 from '../assets/images/client-16.webp'
import Client17 from '../assets/images/client-17.webp'
import Client18 from '../assets/images/client-18.webp'
import Client19 from '../assets/images/client-19.webp'
import Client20 from '../assets/images/client-20.webp'
import Client21 from '../assets/images/client-21.webp'
import Client22 from '../assets/images/client-22.webp'
import Client23 from '../assets/images/client-23.webp'
import Client24 from '../assets/images/client-24.webp'
import Client25 from '../assets/images/client-25.webp'
import Client26 from '../assets/images/client-26.webp'
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function OurClients() {
  return (
    <section
      id='ourClient'
      className='section-container pb-20 flex items-center justify-center flex-col px-6 pt-6 bg-[#eee]'
    >
      <div className='section-header aos-init sm:p-8 flex flex-col justify-center items-center'>
        <h2 className='text-4xl sm:text-5xl font-bold my-5'>Our Clients</h2>
        <span className='bg-gray-300 rounded-b-2xl w-24 h-2'></span>
      </div>
      <div
        className='w-full sm:px-4'
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-anchor-placement='top-bottom'
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={6}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className='w-full py-20'
        >
          {[
            Client1,
            Client2,
            Client3,
            Client4,
            Client5,
            Client6,
            Client7,
            Client8,
            Client9,
            Client10,
            Client11,
            Client12,
            Client13,
            Client14,
            Client15,
            Client16,
            Client17,
            Client18,
            Client19,
            Client20,
            Client20,
            Client21,
            Client22,
            Client23,
            Client24,
            Client25,
            Client26,
          ].map((imgSrc, i) => (
            <SwiperSlide key={i} className='w-full overflow-visible shadow-xl'>
              <div
                className='flex flex-col justify-center items-center text-center shadow-md hover:shadow-6xl
                  hover:scale-105 transition-all duration-300 bg-white cursor-pointer py-16'
              >
                <img className='h-20 object-cover' src={imgSrc} alt={`Client ${i + 1}`} loading='lazy' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
