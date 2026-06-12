import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function RefundPolicy() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Refund Policy | Namrata Univers</title>

        <meta
          name='description'
          content='Read the Refund Policy of Namrata Univers for information regarding cancellations, refunds, payments, and service policies.'
        />

        <meta
          name='keywords'
          content='Refund Policy, Cancellation Policy, Payment Refund, Service Refund, Internship Refund Policy, Namrata Univers Refund Terms'
        />

        <meta name='author' content='Namrata Univers' />

        {/* Legal Pages SEO */}
        <meta name='robots' content='noindex, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='Refund Policy | Namrata Univers' />

        <meta
          property='og:description'
          content='Understand the refund and cancellation policy for Namrata Univers services and internship programs.'
        />

        <meta property='og:url' content='https://namrataunivers.netlify.app/refund-policy' />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary' />

        <meta name='twitter:title' content='Refund Policy | Namrata Univers' />

        <meta
          name='twitter:description'
          content='Read the refund and cancellation terms for services and training programs offered by Namrata Univers.'
        />

        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://namrataunivers.netlify.app/refund-policy' />
      </Helmet>
      <section id='CallToAction' className='section-container flex flex-col items-center justify-center px-6'>
        <div className='full sm:w-4/5 bg-gray-200 h-full py-16 mx-4'>
          <h1 className='p-2 sm:p-4 text-3xl sm:text-4xl font-bold text-center'>Refund Policy</h1>
          <div className='p-6'>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>Returns</h1>
              <p>
                Our policy lasts 7 days. If 7 days have gone by since your purchase, unfortunately we can’t
                offer you a refund or exchange. Additional non-returnable items Please do not send your
                purchase back to the manufacturer. There are certain situations where only partial refunds are
                granted: (if applicable) Book with obvious signs of use software, website, or mobile
                application that has been opened. Refunds (if applicable)
              </p>
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we
                have received your returned item. We will also notify you of the approval or rejection of your
                refund. If you are approved, then your refund will be processed, and a credit will
                automatically be applied to your credit card or original method of payment, within a certain
                amount of days. Late or missing refunds (if applicable)
              </p>
              <p>
                If you haven’t received a refund yet, first check your bank account again. Then contact your
                credit card company, it may take some time before your refund is officially posted. Next
                contact your bank. There is often some processing time before a refund is posted. If you’ve
                done all of this and you still have not received your refund yet, please contact us at
                [___Company Contact Email___info@namratauniversal.com___] Sale items (if applicable)
              </p>
              <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
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
    </>
  )
}
