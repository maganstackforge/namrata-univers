import React from 'react'
import 'aos/dist/aos.css'
import Prateek from '../assets/images/Prateek jaiswal.webp'
import Amit from '../assets/images/Amit Tamang.webp'
import Premlata from '../assets/images/Premlata Patel.webp'
import Somya from '../assets/images/Somya Gupta.webp'
import Suraj from '../assets/images/suraj.webp'
import Mamta from '../assets/images/Mamta Rani.webp'
import Kritee from '../assets/images/Kritee Dixit.webp'
import Ekaa from '../assets/images/Ekaa Architects.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Review() {
  return (
    <section
      id='review'
      className='section-container flex items-center justify-center flex-col px-6 pt-6 bg-gray-200'
    >
      <div
        className='section-header aos-init p-10 flex flex-col justify-center items-center'
        data-aos='flip-left'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
      >
        <h2 className='text-5xl font-bold my-5'>Reviews</h2>
        <span className='bg-gray-100 rounded-b-2xl w-24 h-2'></span>
      </div>
      <div
        className='w-full p-8'
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-anchor-placement='top-bottom'
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className='w-full'
        >
          {[
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
              review:
                'Good & Professional company for website designing, ERP, CRM & Digital Marketing Services.',
            },
            {
              img: Kritee,
              name: 'Kritee Dixit',
              role: 'BUSINESSWOMAN',
              review:
                'What a Team! NAMRATA UNIVERSAL really good service provider - completely down to earth. Completely satisfied with your service.',
            },
          ].map((member, i) => (
            <SwiperSlide key={i} className='w-full active:cursor-[grabbing]'>
              <div
                className='flex flex-col justify-center items-center bg-[#FFFFFF] rounded-t-full p-10
                  h-[450px] text-center shadow-xl hover:shadow-lg transition-shadow duration-300'
                data-aos='fade-up'
                data-aos-duration='2000'
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
      </div>
    </section>
  )
}
