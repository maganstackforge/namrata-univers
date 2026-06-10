import React from 'react'
// import 'aos/dist/aos.css'

import Client1 from '../assets/images/clients/client-1.webp'
import Client2 from '../assets/images/clients/client-2.webp'
import Client3 from '../assets/images/clients/client-3.webp'
import Client4 from '../assets/images/clients/client-4.webp'
import Client5 from '../assets/images/clients/client-5.webp'
import Client6 from '../assets/images/clients/client-6.webp'
import Client7 from '../assets/images/clients/client-7.webp'
import Client8 from '../assets/images/clients/client-8.webp'
import Client9 from '../assets/images/clients/client-9.webp'
import Client10 from '../assets/images/clients/client-10.webp'
import Client11 from '../assets/images/clients/client-11.webp'
import Client12 from '../assets/images/clients/client-12.webp'
import Client13 from '../assets/images/clients/client-13.webp'
import Client14 from '../assets/images/clients/client-14.webp'
import Client15 from '../assets/images/clients/client-15.webp'
import Client16 from '../assets/images/clients/client-16.webp'
import Client17 from '../assets/images/clients/client-17.webp'
import Client18 from '../assets/images/clients/client-18.webp'
import Client19 from '../assets/images/clients/client-19.webp'
import Client20 from '../assets/images/clients/client-20.webp'
import Client21 from '../assets/images/clients/client-21.webp'
import Client22 from '../assets/images/clients/client-22.webp'
import Client23 from '../assets/images/clients/client-23.webp'
import Client24 from '../assets/images/clients/client-24.webp'
import Client25 from '../assets/images/clients/client-25.webp'
import Client26 from '../assets/images/clients/client-26.webp'

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useInView } from 'react-intersection-observer'
import ClientSkeleton from './ClientSkelton'

export default function OurClients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
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
    Client21,
    Client22,
    Client23,
    Client24,
    Client25,
    Client26,
  ]

  return (
    <section className='section-container pb-20 flex flex-col items-center bg-[#eee]'>
      <div className='section-header sm:p-8 flex flex-col items-center'>
        <h2 className='text-4xl sm:text-5xl font-bold my-5'>Our Clients</h2>
      </div>

      {/*  IMPORTANT: ref attach karo */}
      <div className='w-full sm:px-4' ref={ref}>
        {!inView && <ClientSkeleton />}

        {/*  SAFE RENDER (debug friendly) */}
        {inView && (
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            speed={500}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className='w-full py-20'
          >
            {clients.map((imgSrc, i) => (
              <SwiperSlide key={i}>
                <img
                  src={imgSrc}
                  alt={`Client ${i + 1}`}
                  loading='lazy'
                  className='w-72 h-20 object-cover mx-auto'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  )
}
