import { Helmet } from 'react-helmet-async'

export default function Contact() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Contact Us | Namrata Universal</title>
        <meta
          name='description'
          content='Get in touch with Namrata Universal for web development, UI/UX design, SEO, and digital marketing services. Contact us for project inquiries, internships, and business solutions.'
        />
        <meta
          name='keywords'
          content='Contact Namrata Universal, Web Development Contact, IT Company Contact, SEO Services Contact, Digital Marketing Agency Contact, Hire Developers, Project Inquiry'
        />
        <meta name='author' content='Namrata Universal' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='Contact Us | Namrata Universal' />
        <meta
          property='og:description'
          content='Contact Namrata Universal for web development, SEO, and digital marketing services.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Contact Us | Namrata Universal' />
        <meta
          name='twitter:description'
          content='Reach out for project inquiries, internships, and IT services.'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://your-domain.com/contact' />
      </Helmet>
      <section
        id='contact'
        className='section-container py-4 flex flex-col items-center justify-between bg-[#f2f2f2]'
      >
        <div className='mx-auto'>
          <div
            className='w-3/4 mx-auto mt-20 text-center px-2 sm:px-6 md:px-10 flex flex-col justify-center
              items-center'
          >
            <h2 className='p-1 sm:p-2 md:p-3 text-3xl sm:text-4xl md:text-5xl font-bold'>Contact Us</h2>

            <p className='text-sm sm:text-2xl md:text-2xl px-2 sm:px-4 md:px-10 text-center mb-10'>
              If you have any queries or doubt regarding IT Services, you can contact us by filling out the
              details given below and send it. We will surely help you as soon as possible.
            </p>
            <span className='bg-gray-600 rounded-b-2xl w-24 h-2'></span>
          </div>

          <div className='w-full flex justify-center flex-col md:flex-row mt-8'>
            <div className='w-full flex flex-col gap-6 p-8 bg-[#fdfdfd] shadow-xl'>
              <div className='flex justify-center items-center gap-8'>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='w-full h-10 border-t-1 border-b-1 border-gray-300 focus:border-t-blue-500
                    focus:border-b-blue-500 focus:outline-none transition-all duration-300'
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  className='w-full h-10 border-t-1 border-b-1 border-gray-300 focus:border-t-blue-500
                    focus:border-b-blue-500 focus:outline-none transition-all duration-300'
                />
              </div>
              <div className='flex flex-col justify-center items-center w-full gap-8'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='h-10 border-t-1 border-b-1 border-gray-300 w-full focus:border-t-blue-500
                    focus:border-b-blue-500 focus:outline-none transition-all duration-300'
                />
                <textarea
                  placeholder='Message'
                  className='w-full h-32 border-t-1 border-b-1 border-gray-300 focus:border-t-blue-500
                    focus:border-b-blue-500 focus:outline-none transition-all duration-300'
                ></textarea>
              </div>
              <button className='bg-gray-500 p-4 text-white'>Send Message</button>
            </div>

            <div className='w-full shadow-xl p-4'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.774499799178!2d77.366!3d28.680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6f1234567%3A0xabcdef123456789!2sPlot%20No-827%2C%20Shalimar%20Garden%20Extension-1%2C%20Ghaziabad!'
                width='100%'
                height='400'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Namrata Universal Ghaziabad Location'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
