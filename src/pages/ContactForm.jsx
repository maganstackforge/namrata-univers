import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useModal } from '../context/ModalContext'
import ConfirmDialog from '../components/ConfirmDialog'
import SuccessDialog from '../components/SuccessDialog'

export default function ContactForm() {
  const { openModal, closeModal } = useModal()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const handleActualSubmit = () => {
    console.log('API Call: Sending data to backend...', formData)
    // alert('Form submitted successfully!')
    openModal(
      <SuccessDialog
        title='Message Sent!'
        message='Thank you! We will contact you soon.'
        onClose={closeModal}
      />,
      'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm p-0'
    )

    // reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  // 2. Yeh main function hai jo Form ke submit button par trigger hoga
  const handleSubmitTrigger = (e) => {
    e.preventDefault() // Pehle page reload hone se roko

    // Validation Check (Optional): Agar fields khali hain toh modal mat kholo
    if (!formData.name || !formData.email) {
      alert('Please fill required fields first!')
      return
    }

    openModal(
      <ConfirmDialog
        title='Submit Message?'
        message='Are you sure you want to send this message to Namrata Univers support?'
        variant='success' // Isse button ka color green (emerald) ho jayega!
        onConfirm={handleActualSubmit} // Asli submission function yahan pass kar diya
      />,
      'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-0'
    )
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
        <div className='mx-auto max-w-7xl w-full'>
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

          <div className='w-full flex justify-center flex-col md:flex-row mt-8 gap-6 px-4'>
            <form
              id='mainForm'
              onSubmit={handleSubmitTrigger}
              className='w-full flex flex-col gap-6 p-8 bg-[#fdfdfd] shadow-xl'
            >
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                autoComplete='name'
                required
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                autoComplete='email'
                required
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
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
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
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                autoComplete='off'
                placeholder='Message'
                className='w-full h-32 border-t border-b border-gray-300 focus:border-t-blue-500
                  focus:border-b-blue-500 focus:outline-none transition-all duration-300'
              ></textarea>

              <button type='submit' className='bg-gray-500 p-4 text-white hover:bg-gray-600 transition'>
                Send Message
              </button>
            </form>

            {/* FIXED MODAL DIALOG CONTAINER */}
            {/* <dialog
              open={isOpen}
              className='fixed inset-0 z-50 m-auto h-fit w-full max-w-md rounded-lg bg-white p-6 shadow-2xl
                transition-all'
            >
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-gray-900'>Confirm Action</h3>
                <p className='text-sm text-gray-600'>
                  Are you sure you want to submit this form? This action cannot be undone.
                </p>

                <div className='flex justify-end gap-3 pt-2'>
                  <button
                    type='button'
                    onClick={() => setIsOpen(false)} // Added state trigger
                    className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md
                      hover:bg-gray-200 transition'
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    onClick={handleConfirm} // Connected execution function
                    className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md
                      hover:bg-blue-700 transition'
                  >
                    Yes, Confirm
                  </button>
                </div>
              </div>
            </dialog> */}

            {/* BACKDROP OVERLAY
            {isOpen && (
              <div
                className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
                onClick={() => setIsOpen(false)} // Optional: closes modal when user clicks outside
              />
            )} */}

            {/* SUCCESS TOAST NOTIFICATION */}
            {/* {isSuccess && (
              <div
                className='fixed bottom-5 right-5 z-50 flex items-center p-4 mb-4 text-green-800 rounded-lg
                  bg-green-50 shadow-2xl border border-green-200 transition-all duration-500 transform
                  translate-y-0 animate-bounce'
              >
                <svg
                  className='flex-shrink-0 w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
                </svg>
                <div className='ms-3 text-sm font-medium'>Form successfully submitted! Thank you.</div>
              </div>
            )} */}
            <div className='w-full shadow-xl p-4 bg-white'>
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
