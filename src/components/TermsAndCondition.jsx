import React from 'react'
import { Link } from 'react-router-dom'

export default function TermsAndCondition() {
  return (
    <section id='CallToAction' className='section-container flex flex-col items-center justify-center px-6'>
      <div className='full sm:w-4/5 bg-gray-200 h-full py-16 mx-4'>
        <h1 className='p-2 sm:p-4 text-3xl sm:text-4xl font-bold text-center'>Terms & conditions</h1>
        <div className='p-6'>
          <section className='py-2 sm:px-2'>
            <h1 className='text-lg sm:text-xl text-gray-600'>OVERVIEW</h1>
            <p>
              This website is operated by [
              <strong>
                ___
                <Link to='/' className='text-blue-800'>
                  Namratauniversal
                </Link>
                ___
              </strong>
              ]. Throughout the site, the terms “we”, “us” and “our” refer to [
              <strong>___Company Name___</strong>]. [<strong>___Namratauniversal___</strong>] offers this
              website, including all information, tools and services available from this site to you, the
              user, conditioned upon your acceptance of all terms, conditions, policies and notices stated
              here. By visiting our site and/ or purchasing something from us, you engage in our “Service” and
              agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including
              those additional terms and conditions and policies referenced These Terms of Service apply to
              all users of the site, including without limitation users who are browsers, vendors, customers,
              merchants, and/ or contributors of content. Please read these Terms of Service carefully before
              accessing or using our website. By accessing or using any part of the site, you agree to be
              bound by these Terms of Service. If you do not agree to all the terms and conditions of this
              agreement, then you may not access the website or use any services. If these Terms of Service
              are considered an offer, acceptance is expressly limited to these Terms of Service.
            </p>
          </section>
          <section className='py-2 sm:px-2'>
            <h1 className='text-lg sm:text-xl text-gray-600'>SPRODUCTS OR SERVICES</h1>
            <p>
              Certain products or services may be available exclusively online through the website. These
              products or services and offers may have limited times and are subject to return or exchange
              only according to our Return Policy. We have made website software mobile application depends on
              clients requirments and i will provides all services will be accurate.
            </p>
          </section>
          <section className='py-2 sm:px-2'>
            <h1 className='text-lg sm:text-xl text-gray-600'>PERSONAL INFORMATION</h1>
            <p>Your submission of personal information through the store is governed by our Privacy Policy</p>
          </section>

          <section className='py-2 sm:px-2'>
            <h1 className='text-lg sm:text-xl text-gray-600'>CONTACT INFORMATION</h1>
            <p>
              Questions about the Terms of Service should be sent to us at{' '}
              <strong>
                ___
                <Link to='/' className='text-blue-800'>
                  namratauniversal@gmail.com
                </Link>
                ___
              </strong>
              . [___Company Address___3C, A1 Sector 10, Noida Uttar Pradesh, India]
            </p>
          </section>
        </div>
      </div>
      <section className='text-center sm:p-8'>
        <Link to='/'>
          <button className='bg-[#1A2A4F] text-white p-3 sm:p-4 rounded-3xl cursor-pointer'>
            Back To Website
          </button>
        </Link>
      </section>
    </section>
  )
}
