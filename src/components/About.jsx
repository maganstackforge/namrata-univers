import 'aos/dist/aos.css'
import AboutImage from '../assets/images/about_image.webp'
import AboutStory from '../assets/images/about-story.webp'
import AboutGoal from '../assets/images/about-goal.webp'
export default function About() {
  return (
    <section
      id='about'
      className='section-container my-8 sm:my-16 md:my-20 flex items-center justify-center flex-col px-6 pt-6'
    >
      <div className='w-full text-center px-2 sm:px-4 md:px-6 flex flex-col justify-center items-center'>
        <h2 className='p-1 sm:p-2 md:p-3 text-4xl sm:text-5xl md:text-7xl font-bold'>About Us!</h2>

        <p className='text-sm ms:text-2xl md:text-3xl px-2 sm:px-4 md:px-6 text-center mb-10'>
          At Namrata Universal We Deliver With Focus On Quality, Integrity And Long Term Relation. We have
          experienced professionals who understand that IT services is changing, and are true partners who
          care about your success.
        </p>

        <img src={AboutImage} alt='Unity Image' className='w-5xl object-cover' loading='lazy' />
        <div className='-mt-10 mx-8 sm:mx-10 md:mx-16 xl:mx-28'>
          <div
            className='bg-white p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center rounded-2xl
              shadow-lg mx-auto'
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='5000'
          >
            <h2 className='text-xl md:text-3xl font-bold p-4'>
              Welcome to the World of <span className='text-blue-600'>Namrata Universal</span>
            </h2>

            <p className='leading-relaxed text-sm sm:text-sm md:text-base'>
              Trusted by the world's best organizations, for 12 years and running, it has been delivering
              smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for
              all difficult IT problems to ensure high availability.
            </p>

            <p className='leading-relaxed text-xs sm:text-sm md:text-base'>
              Our biggest strength is our <b className='text-blue-600'>Global Reach</b>. Our ability to cater
              to any business segments &amp; needs. Our experience enables us to create unique products. High
              volume of our work makes us provide value-added services with wallet-friendly charges. Strong
              ground support and extensive network keep us always a step ahead. We are always on toes and this
              attitude has given us a strong presence in the Indian Subcontinent.
            </p>
          </div>
        </div>
      </div>

      {/* about gole and sotry */}

      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-20'>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='' data-aos='flip-left'>
            <img className='rounded-tl-2xl rounded-br-2xl' src={AboutStory} alt='About Story' />
          </div>
          <div
            className='bg-white p-4 md:-8 shadow-xl rounded-2xl -mt-20 mx-4 sm:mx-8 md:10'
            data-aos='fade-up'
            data-aos-duration='3000'
          >
            <h2 className='text-2xl font-bold mb-5'>Our Story</h2>
            <p>
              Namrata Group has been serving clients in diverse fields for over 14 years through
              <b>Namrata Health Care Pvt. Ltd</b>, <b>Namrata Wellness</b>, <b>Namrata Store</b>,
              <b>Sylister Health Care Pvt. Ltd</b> and
              <b>Jingle Holiday Bazar Pvt. Ltd.</b> Our objective is to take the business of our customers
              forward through our products and services. The Namrata Universal is the complete IT Solution
              Company and we welcome you to the world of Namrata Universal.
            </p>
          </div>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='' data-aos='flip-right'>
            <img className='rounded-bl-2xl rounded-tr-2xl' src={AboutGoal} alt='Our Goal' />
          </div>
          <div
            className='bg-white p-4 md:p-9 shadow-xl rounded-2xl -mt-20 mx-4 sm:8 md:mx-10'
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='3000'
          >
            <h2 className='text-2xl font-bold mb-5'>Our Goal</h2>
            <p></p>
            <p>Improve Efficiency And Provide Better Experience By Our IT Solutions!</p>
            <p>
              Trusted by the world's best organizations, for 11 years and running, it has been delivering
              smiles to hundreds of IT advisors, developers, users, and business owners. Easy solutions for
              all difficult IT problems to ensure high availability.
              <br />
              Like <b> Specific, Measureable, Achievable, Realistic, Time-bound.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
