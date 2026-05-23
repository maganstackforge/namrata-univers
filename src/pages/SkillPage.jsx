import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet-async'
import ProgressBar from '@ramonak/react-progress-bar'
import skillData from '../data/skillData'

export default function Skill() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Our Skills | Namrata Universal</title>
        <meta
          name='description'
          content='Explore the technical skills of Namrata Universal including Web Development, React JS, JavaScript, Node.js, UI/UX Design, SEO, and Digital Marketing expertise.'
        />
        <meta
          name='keywords'
          content='Web Development Skills, React JS Skills, JavaScript Developer Skills, UI UX Skills, Node JS Skills, SEO Skills, Digital Marketing Skills, IT Company Skills, Namrata Universal Skills'
        />
        <meta name='author' content='Namrata Universal' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='Our Skills | Namrata Universal' />
        <meta
          property='og:description'
          content='Discover our technical expertise in web development, UI/UX design, SEO, and digital marketing.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Our Skills | Namrata Universal' />
        <meta
          name='twitter:description'
          content='Explore our expertise in React, Node.js, UI/UX, SEO, and modern web technologies.'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://your-domain.com/skills' />
      </Helmet>
      <section
        id='ourPricing'
        className='section-container flex items-center justify-center flex-col px-6 pt-6'
      >
        <div className='w-full'>
          {/* Header */}
          <div
            className='section-header aos-init px-2 sm:px-4 md:px-8 flex flex-col justify-center items-center'
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <h2 className='text-4xl sm:text-6xl text-center font-bold my-5 sm:px-32 text-gray-500'>
              BEST WEB DEVELOPMENT TECHNOLOGIES TO USE BY OUR TEAM
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 sm:p-6'>
            {skillData.map((item, i) => (
              <div key={i} className='shadow-xl rounded-2xl overflow-hidden bg-white'>
                {/* Image + Price */}
                {/* Features */}
                <div
                  className='p-4 sm:p-6 flex flex-col justify-center gap-2 service-detail aos-init'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'
                >
                  <h3 className='text-xl font-semibold mb-2 text-center'>{item.title}</h3>
                  <div className='space-y-1'>
                    {item.languages.map((language, index) => (
                      <div key={index}>
                        <p className='p-2 font-bold'>{language.name}</p>
                        <div className='mb-4 p-2'>
                          <div className='flex justify-between text-sm mb-1'>
                            <span className='text-gray-600'>{language.level}%</span>
                          </div>
                          <ProgressBar
                            completed={language.level}
                            bgColor='#3b82f6'
                            baseBgColor='#e5e7eb'
                            height='24px'
                            labelColor='#000'
                            borderRadius='6px'
                            animateOnRender
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
