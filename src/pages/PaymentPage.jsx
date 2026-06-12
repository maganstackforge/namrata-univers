import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Pay() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Payment | Namrata Univers</title>

        <meta
          name='description'
          content='Secure payment page for Namrata Univers services including web development, digital marketing, internship programs, and training courses.'
        />

        <meta
          name='keywords'
          content='Payment, Online Payment, Internship Fee, Web Development Payment, Digital Marketing Payment, Namrata Univers Payment'
        />

        <meta name='author' content='Namrata Univers' />

        {/* Keep payment pages out of search results */}
        <meta name='robots' content='noindex, nofollow' />

        {/* Open Graph */}
        <meta property='og:title' content='Payment | Namrata Univers' />

        <meta
          property='og:description'
          content='Secure payment portal for services and internship programs.'
        />

        <meta property='og:url' content='https://namrataunivers.netlify.app/pay' />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:type' content='website' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content='Payment | Namrata Univers' />

        <meta name='twitter:description' content='Make secure payments for services and training programs.' />

        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        {/* Canonical */}
        <link rel='canonical' href='https://namrataunivers.netlify.app/pay' />
      </Helmet>

      {/* Page UI */}
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
        <div className='bg-white shadow-lg p-8 rounded-xl w-full max-w-md text-center'>
          <h1 className='text-2xl font-bold mb-4'>Secure Payment</h1>

          <p className='mb-6 text-gray-600'>Complete your payment securely for services.</p>

          <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>Pay Now</button>
        </div>
      </div>
    </>
  )
}
