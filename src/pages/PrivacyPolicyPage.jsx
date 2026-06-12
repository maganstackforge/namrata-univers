import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Privacy Policy | Namrata Univers</title>

        <meta
          name='description'
          content='Read the Privacy Policy of Namrata Univers to understand how we collect, use, and protect user information and data.'
        />

        <meta
          name='keywords'
          content='Privacy Policy, User Data Protection, Website Privacy, Data Security, Namrata Univers Privacy Policy'
        />

        <meta name='author' content='Namrata Univers' />

        {/* Legal Pages SEO */}
        <meta name='robots' content='noindex, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='Privacy Policy | Namrata Univers' />

        <meta
          property='og:description'
          content='Learn how Namrata Univers collects, uses, and protects your personal information.'
        />

        <meta property='og:url' content='https://namrataunivers.netlify.app/privacy-policy' />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary' />

        <meta name='twitter:title' content='Privacy Policy | Namrata Univers' />

        <meta
          name='twitter:description'
          content='Read the privacy practices and data protection policy of Namrata Univers.'
        />

        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://namrataunivers.netlify.app/privacy-policy' />
      </Helmet>
      <section id='CallToAction' className='flex flex-col items-center justify-center px-6'>
        <div className='full sm:w-4/5 bg-gray-200 h-full py-16 mx-4'>
          <h1 className='p-2 sm:p-4 text-3xl sm:text-4xl font-bold text-center'>Privacy & Policy</h1>
          <div className='p-6'>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>
                SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
              </h1>
              <p>
                When you purchase something from our store, as part of the buying and selling process, we
                collect the personal information you give us such as your name, address and email address.
                When you browse our store, we also automatically receive your computer’s internet protocol
                (IP) address in order to provide us with information that helps us learn about your browser
                and operating system. Email marketing (if applicable): With your permission, we may send you
                emails about our store, new products and other updates.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 2 - CONSENT</h1>
              <p>
                How do you get my consent? When you provide us with personal information to complete a
                transaction, verify your credit card, place an order, arrange for a delivery or return a
                purchase, we imply that you consent to our collecting it and using it for that specific reason
                only. If we ask for your personal information for a secondary reason, like marketing, we will
                either ask you directly for your expressed consent, or provide you with an opportunity to say
                no. How do I withdraw my consent? If after you opt-in, you change your mind, you may withdraw
                your consent for us to contact you, for the continued collection, use or disclosure of your
                information, at anytime, by contacting us at [___Company Contact{' '}
                <strong>info@namratauniversal.com</strong>] or mailing us at: [___Company Office Address___
                <strong>3C, A1 Sector 10, Noida Uttar Pradesh, India</strong>]
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>
                SECTION 3 - DISCLOSURE We may disclose your person
              </h1>
              <p>
                We may disclose your personal information if we are required by law to do so or if you violate
                our Terms of Service.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 4 - PAYMENT</h1>
              <p>
                We use Razorpay for processing payments. We/Razorpay do not store your card data on their
                servers. The data is encrypted through the Payment Card Industry Data Security Standard
                (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is
                necessary to complete your purchase transaction. After that is complete, your purchase
                transaction information is not saved. Our payment gateway adheres to the standards set by
                PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands
                like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the
                secure handling of credit card information by our store and its service providers. For more
                insight, you may also want to read terms and conditions of razorpay on https://razorpay.com
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 5 - THIRD-PARTY SERVICES</h1>
              <p>
                In general, the third-party providers used by us will only collect, use and disclose your
                information to the extent necessary to allow them to perform the services they provide to us.
                However, certain third-party service providers, such as payment gateways and other payment
                transaction processors, have their own privacy policies in respect to the information we are
                required to provide to them for your purchase-related transactions. For these providers, we
                recommend that you read their privacy policies so you can understand the manner in which your
                personal information will be handled by these providers. In particular, remember that certain
                providers may be located in or have facilities that are located a different jurisdiction than
                either you or us. So if you elect to proceed with a transaction that involves the services of
                a third-party service provider, then your information may become subject to the laws of the
                jurisdiction(s) in which that service provider or its facilities are located. Once you leave
                our store’s website or are redirected to a third-party website or application, you are no
                longer governed by this Privacy Policy or our website’s Terms of Service.
              </p>
              <i>
                <strong>
                  Link:-
                  <Link to='https://namratauniversal.com/?utm_source=chatgpt.com' className='text-blue-700'>
                    NamrataUniversal
                  </Link>
                </strong>
              </i>
              <p className='py-4'>
                When you click on links on our store, they may direct you away from our site. We are not
                responsible for the privacy practices of other sites and encourage you to read their privacy
                statements.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 6 - SECURITY</h1>
              <p>
                To protect your personal information, we take reasonable precautions and follow industry best
                practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered
                or destroyed.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 7 - COOKIES</h1>
              <p>
                We use cookies to maintain session of your user. It is not used to personally identify you on
                other websites.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 8 - AGE OF CONSENT</h1>
              <p>
                By using this site, you represent that you are at least the age of majority in your state or
                province of residence, or that you are the age of majority in your state or province of
                residence and you have given us your consent to allow any of your minor dependents to use this
                site.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>SECTION 9 - CHANGES TO THIS PRIVACY POLICY</h1>
              <p>
                We reserve the right to modify this privacy policy at any time, so please review it
                frequently. Changes and clarifications will take effect immediately upon their posting on the
                website. If we make material changes to this policy, we will notify you here that it has been
                updated, so that you are aware of what information we collect, how we use it, and under what
                circumstances, if any, we use and/or disclose it. If our store is acquired or merged with
                another company, your information may be transferred to the new owners so that we may continue
                to sell products to you.
              </p>
            </section>
            <section className='py-2 sm:px-2'>
              <h1 className='text-lg sm:text-xl text-gray-600'>QUESTIONS AND CONTACT INFORMATION</h1>
              <p>
                If you would like to: access, correct, amend or delete any personal information we have about
                you, register a complaint, or simply want more information contact our Privacy Compliance
                Officer at
              </p>
            </section>

            <section className='py-2 sm:px-2'>
              <p>
                <b>[___Company Contact Email___]</b>
              </p>
              <p className='pb-4'>
                <b>[info@namratauniversal.com]</b>
              </p>
              <p>
                <b>[___Company Office Address___]/</b>
              </p>
              <p>
                <b>[3C, A1 Sector 10, Noida Uttar Pradesh, India]</b>
              </p>
              <p>
                <b>[Re: Privacy Compliance Officer:] [Mr.Brijesh Kumar jaiswal]</b>
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
    </>
  )
}
