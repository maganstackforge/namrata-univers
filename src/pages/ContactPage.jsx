import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    console.log(data)
  }
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Contact Us | Namrata Univers</title>

        <meta
          name='description'
          content='Contact Namrata Univers for professional web development, UI/UX design, SEO, and digital marketing services. Get project quotes, internship inquiries, and business support.'
        />

        <meta
          name='keywords'
          content='Contact Namrata Univers, Web Development Contact, IT Company Contact, SEO Services Contact, Digital Marketing Agency Contact, Hire Developers, Project Inquiry'
        />

        <meta name='author' content='Namrata Univers' />
        <meta name='robots' content='index, follow' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://namrataunivers.netlify.app/contact' />

        {/* Open Graph */}
        <meta property='og:title' content='Contact Us | Namrata Univers' />

        <meta
          property='og:description'
          content='Contact Namrata Univers for web development, SEO, and digital marketing services.'
        />

        <meta property='og:url' content='https://namrataunivers.netlify.app/contact' />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content='Contact Us | Namrata Univers' />

        <meta
          name='twitter:description'
          content='Reach out for project inquiries, internships, and IT services.'
        />
        <meta property='og:site_name' content='Namrata Univers' />
        <meta name='twitter:site' content='@yourhandle' />
        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />
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
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-6 p-8 bg-[#fdfdfd] shadow-xl'>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                autoComplete='name'
                placeholder='Your Name'
                className='w-full h-10 border-t border-b border-gray-300 focus:border-t-blue-500
                  focus:border-b-blue-500 focus:outline-none transition-all duration-300'
              />
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                required
                autoComplete='email'
                placeholder='Your Email'
                className='w-full h-10 border-t border-b border-gray-300 focus:border-t-blue-500
                  focus:border-b-blue-500 focus:outline-none transition-all duration-300'
              />
              <label htmlFor='subject' className='sr-only'>
                Subject
              </label>
              <input
                id='subject'
                name='subject'
                type='text'
                required
                autoComplete='off'
                placeholder='Subject'
                className='h-10 border-t border-b border-gray-300 w-full focus:border-t-blue-500
                  focus:border-b-blue-500 focus:outline-none transition-all duration-300'
              />

              <label htmlFor='message' className='sr-only'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                required
                autoComplete='off'
                placeholder='Message'
                className='w-full h-32 border-t border-b border-gray-300 focus:border-t-blue-500
                  focus:border-b-blue-500 focus:outline-none transition-all duration-300'
              ></textarea>

              <button type='submit' className='bg-gray-500 p-4 text-white'>
                Send Message
              </button>
            </form>

            <div className='w-full shadow-xl p-4'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9173483464647!2d77.33258867216807!3d28.692118921777112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa5209dd0bd3%3A0x5e398909af95ee80!2s827%2C%20Shalimar%20Garden%20Extension%20I%2C%20Shalimar%20Garden%2C%20Sahibabad%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201006!5e0!3m2!1sen!2sin!4v1781254369134!5m2!1sen!2sin'
                width='100%'
                height='400'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Namrata Univers Ghaziabad Location'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
