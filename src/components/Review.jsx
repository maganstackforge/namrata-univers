import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Prateek from '../assets/images/review/Prateek Jaiswal.webp'
import Amit from '../assets/images/review/Amit Tamang.webp'
import Premlata from '../assets/images/review/Premlata Patel.webp'
import Somya from '../assets/images/review/Somya Gupta.webp'
import Suraj from '../assets/images/review/suraj.webp'
import Mamta from '../assets/images/review/Mamta Rani.webp'
import Kritee from '../assets/images/review/Kritee Dixit.webp'
import Ekaa from '../assets/images/review/Ekaa Architects.webp'
import ClientSkeleton from './ClientSkelton'

export default function Review() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const clients = [
    {
      img: Prateek,
      name: 'Prateek Jaiswal',
      role: 'Human',
      review:
        'They are amazing working for website industry. Thanks a lot to provide us world class website in short budget. I can say you are top.',
    },
    {
      img: Somya,
      name: 'Somya Gupta',
      role: 'BUSINESSWOMAN',
      review:
        'We hired NAMRATA UNIVERSAL for website develop & designing and the rate was also in our budget. His ideas were new and fresh, nice web site design by NAMRATA UNIVERSAL.',
    },
    {
      img: Amit,
      name: 'Amit Tamang',
      role: 'BUSINESSMAN',
      review:
        'Guys, this is the best company for website designing. I am very grateful towards Namrata Universal for your good work and support. Thank you mam.',
    },
    {
      img: Suraj,
      name: 'Suraj',
      role: 'HUMAN',
      review:
        'Namrata Universal are the best website creators I have ever seen, and I would suggest more and more people for website designing.',
    },
    {
      img: Premlata,
      name: 'Premlata Patel',
      role: 'WOMAN',
      review:
        'Namrata Universal is a good organization with very helpful staff. I am very happy because they are always available and reply your message and calls.',
    },
    {
      img: Mamta,
      name: 'Mumta Rani',
      role: 'BUSINESSWOMAN',
      review:
        'Nice experience with NAMRATA UNIVERSAL. Really satisfied with services. I can say this is top website design company in Noida.',
    },
    {
      img: Ekaa,
      name: 'Ekaa Architects',
      role: 'BUSINESS',
      review: 'Good & Professional company for website designing, ERP, CRM & Digital Marketing Services.',
    },
    {
      img: Kritee,
      name: 'Kritee Dixit',
      role: 'BUSINESSWOMAN',
      review:
        'What a Team! NAMRATA UNIVERSAL really good service provider - completely down to earth. Completely satisfied with your service.',
    },
  ]
  return (
    <section
      id='review'
      className='section-container flex items-center justify-center flex-col px-6 pt-6 bg-gray-200'
    >
      <div className='section-header p-10 flex flex-col justify-center items-center'>
        <h2 className='text-5xl font-bold my-5'>Reviews</h2>
      </div>

      <div className='w-full p-8' ref={ref}>
        {!inView && <ClientSkeleton />}

        {inView && (
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            speed={500}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {clients.map((member, i) => (
              <SwiperSlide key={i}>
                <div
                  className='flex flex-col items-center bg-white rounded-t-full p-10 h-[450px] text-center
                    shadow-xl'
                >
                  <img
                    className='w-48 h-48 rounded-full mb-4 object-cover'
                    src={member.img}
                    alt={member.name}
                    loading='lazy'
                  />
                  <h1 className='text-lg font-bold'>{member.name}</h1>
                  <span className='text-sm text-gray-600'>{member.role}</span>
                  <p className='mt-4 text-gray-700 text-sm'>{member.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  )
}
