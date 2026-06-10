import React, { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderData } from '../data/sliderData'
import DigiBanner from '../assets/images/digital-banner/dgBanner1.jpg'
import DigitalMarketingSecond from '../assets/images/digital-banner/DigitalMarketingSecond3.webp'
import DigitalMarketingLast from '../assets/images/digital-banner/digiBanner8.webp'
export default function DigitalMarketing() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Digital Marketing Services | Namrata Universal</title>
        <meta
          name='description'
          content='Grow your business with Namrata Universal Digital Marketing services including SEO, Social Media Marketing, Google Ads, Content Marketing, and Online Branding strategies.'
        />
        <meta
          name='keywords'
          content='Digital Marketing, SEO Services, Social Media Marketing, Google Ads, Online Marketing, Content Marketing, Namrata Universal Digital Marketing'
        />
        <meta name='author' content='Namrata Universal' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='Digital Marketing Services | Namrata Universal' />
        <meta
          property='og:description'
          content='Boost your online presence with expert digital marketing services including SEO, PPC, and social media marketing.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Digital Marketing Services | Namrata Universal' />
        <meta
          name='twitter:description'
          content='Professional SEO, Google Ads, and social media marketing services to grow your business online.'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://namratauniversal.com/digital-marketing' />
      </Helmet>
      <section id='digitalMarketing' className='flex items-center justify-center flex-col'>
        <div className='w-full flex flex-col justify-center'>
          <img
            src={DigiBanner}
            alt='Digital Marketing Poster'
            width={1200}
            height={500}
            loading='lazy'
            decoding='async'
            fetchPriority='low'
            className='w-full h-40 sm:h-72 md:h-96 object-cover'
          />
          <div className='w-10/12 mx-auto mt-10 flex justify-center'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-bold p-4 text-center'>
              BEST DIGITAL MARKETING SERVICE IN DELHI
            </h1>
          </div>
          <div className='w-10/12 mx-auto sm:max-w-4/5 py-6'>
            <h2 className='text-xl sm:text-2xl font-bold sm:p-6'>Why digital marketing is important?</h2>
            <p>
              Digital marketing has been the need of every business as it helps them in promoting brand of
              their products and services. The digital marketing is very important for enhancing sales.
              Through digital marketing, you can reach your target audience at local and global level. It also
              helps you increasing brand awareness, the various content types are also available in digital
              marketing to showcase your online brand that helps you attract the customers makes them to
              understand the products with the ease. It helps you to increase brand engagement by sharing blog
              post or a paid ad click. Digital marketing helps you in maintaining brand reputation, increasing
              in brand awareness for both large and small sized businesses, competing with large corporations,
              converting the website visitors into paid customers and tracking and taking action. Digital
              marketing strategies are cost effective, affordable and faster that assists you in establishing
              long term relationship with your customers.
            </p>
            <div className='w-full'>
              <h2 className='sm:text-2xl font-bold sm:px-6 py-4'>Digital marketing</h2>
              <div className='flex flex-col md:flex-row justify-center items-center gap-8 px-4'>
                <div className='md:w-2/3'>
                  <p>
                    Digital marketing also known as online marketing refers to all the online activities that
                    boost the growth and development of the business using digital channels. Digital marketing
                    can be in any form such as online video, display ads, search engine marketing, paid social
                    ads and social media posts. Digital marketing is a vast platform that attracts customers
                    via email, content marketing, search platform, social media and many more. Website
                    marketing, pay-per-click advertising, content marketing, email marketing social media
                    marketing, affiliate marketing, video marketing and SMS messaging are the form of digital
                    marketing. Being digital marketers, we help all types of businesses in promoting the
                    product and services brand and also assist them to stay in touch with their customers and
                    boost sales in this challenging time. We also offer our customers the best services in
                    their budget by adding credits to their account.
                  </p>
                </div>
                <div className='md:w-1/3'>
                  <img
                    className='h-80 rounded-4xl'
                    src={DigitalMarketingSecond}
                    alt='Digital Marketing Poster'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-4/5 mx-auto'>
            <h2 className='text-xl sm:text-2xl font-bold px-2 sm:px-6 py-6'>
              Definition of Digital Marketing and Online Marketing
            </h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 sm:p-4'>
              <div className='w-full'>
                <h2 className='text-xl font-bold px-2 sm:px-6 py-4'>Digital Marketing</h2>
                <p>
                  Digital marketing is the way of advertising and selling the products through the social
                  media platforms using internet to promote brands and interact with the potential customers.
                  In other words, digital marketing refers to all the efforts to promote products and services
                  through digital channels like social media, SEO, emails and mobile apps. Digital marketing
                  involves all the electronic devices such as computer, laptop, tablet and mobile Online
                  marketing uses a variety of digital online and electronic means to deliver the messages in
                  the form of an image, a piece of text or a video.
                </p>
              </div>
              <div className='w-full'>
                <h2 className='text-xl font-bold py-6'>Online Marketing</h2>
                <p>
                  Online marketing is a subset of digital marketing that consists of finding marketing
                  strategies to promote prodicts and services on the internet. In other words online marketing
                  refers to the message in the form of a piece of text, video or audio delivered through the
                  digital, online and electornic devices via internet. Online marketing is also known as
                  internet marketing.Online marketing is suitable for all kinds of businesses.
                </p>
              </div>
            </div>
          </div>
          <div className='w-10/12 mx-auto sm:px-8 md:px-10 pb-10'>
            <div className='typeOfDigitalMarketing border-l-1 border-blue-700'>
              <div className='px-2 sm:p-10 pt-8'>
                <h1 className='text-2xl font-bold'>Types of Digital Marketing</h1>
              </div>
              <ul className='px-6 sm:px-10 md:px-20 list-disc'>
                <h2 className='text-2xl text-gray-600 py-2'>
                  Digital marketing has eight different types and each type assists you to enhance your sales.
                </h2>
                <li>
                  <strong>Search Engine Optimization (SEO)</strong> is the act of creating content in such a
                  way that search engines rank your page high on the search engine results page.SEO helps you
                  to increase brand visibility.
                </li>
                <li>
                  <strong>Pay Per Click</strong> is a paid advertisement that appears on the top of the search
                  engine results page. It helps you to get top rank quickly.
                </li>
                <li>
                  <strong>Social Media Marketing</strong> is the platform for digital marketing that assists
                  you to reach out to your new customers and create profiles or posts to advertise new
                  products, sales or newly published content.
                </li>
                <li>
                  <strong>Content marketing</strong> refers to informational and valuable content post blog
                  that helps you connect with your audience and answer their questions and it also generates
                  leads and increases sales
                </li>
                <li>
                  <strong>Email Marketing</strong> is used to send emails about sales, special events or
                  product releases to your customers. Through email marketing, you can establish a mutual
                  relationship with your customers that will increase your brand loyalty.
                </li>
                <li>
                  <strong>Mobile Marketing</strong> most people use mobile phones. So, mobile marketing helps
                  you to reach your customer where they spend most of their time
                </li>
                <li>
                  <strong>Video Marketing</strong> Video content is reliable digital marketing that helps you
                  to connect with your customers or masses and spread your product information effectively.
                </li>
                <li>
                  <strong>Audio Marketing</strong> refers to the marketing in which the audio content is used
                  to promote a business and products or services brand. Audio marketing helps you to meet your
                  target audience at personal level and generate leads through digital audio devices like
                  radio, podcast, telephone and many more.
                </li>
                <li>
                  <strong>Affiliate Marketing</strong> helps you to enhance your customer's reach by engaging
                  with their existing audience. It helps you promote your business or products and share a
                  link to your website.
                </li>
                <li>
                  <strong>Instant Message Marketing</strong> means using specific instant messaging software
                  applications to send or share content to one person or a small group of people. This is the
                  great way of communicating your customers as most people prefer sending message to get
                  customer services. Instant messaging marketing helps the businesses in generating leads and
                  reaching their target audience conveniently.
                </li>
                <li>
                  <strong>Influence Marketing </strong>Influence Marketing is when the company pays to a
                  celebrity or influencer for promoting its products or services at social media platform.
                </li>
                <li>
                  <strong>Virtual Reality Marketing</strong> is a kind of marketing tragedy which uses virtual
                  reality technologies or software a kind of three dimensional devices. Virtual reality
                  marketing helps the businesses to connect with their customers and build better brand
                  engagement. The customer interacts with a virtual persona instead of reading content on the
                  screen.
                </li>
              </ul>
            </div>
          </div>
          <div
            className='w-11/12 mx-auto relative origin-bottom px-4 sm:px-10 py-10 text-center flex
              justify-center items-center bg-[#91ADC8] rounded-tl-4xl rounded-br-4xl'
          >
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={40}
              slidesPerGroup={3}
              speed={600}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              // make custom button clickable
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
              }}
              className='rounded-2xl'
            >
              {sliderData.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='relative group w-full h-60 rounded-xl overflow-hidden shadow-2xl'>
                    {/* Background Image */}
                    <img
                      src={item.image}
                      className='w-full h-full object-cover rounded-xl'
                      alt={item.title}
                    />

                    {/* Text Overlay */}
                    <div
                      className='absolute left-0 bottom-0 w-full bg-white text-black p-5 flex flex-col
                        justify-center items-center text-center opacity-0 translate-x-[-500px] transition-all
                        duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 shadow-2xl
                        hover:shadow-2xl'
                    >
                      <h2 className='text-xl font-bold mb-2'>{item.title}</h2>
                      <p className='text-sm'>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='w-10/12 mx-auto'>
            <div className='sm:p-5 md:p-10'>
              <h1 className='text-xl sm:text-2xl md:-3xl font-bold py-4'>
                How to gain Google trusts for digital marketing?
              </h1>
              <p>
                Google is a search engine that organises world’s information offered by web servers and makes
                it globally accessible and beneficial. Google is the world’s top search engine that collects
                the information from the web servers and ranks the page on the basis of its content. This is
                the only Google that brings any website on the top of the search engine results page (SERP).
                Google’s algorithm uses hundred of metrics to rank your website. For this, you have to earn
                Google’s trust. If you are not trusted by Google, you won’t simply reach that top in the
                search engines. You can earn Google’s trust for digital marketing by following the listed
                below tips.
              </p>
              <ul className='list-disc py-5 px-8 sm:px-12 md:px-16'>
                <li>Create high quality content frequently</li>
                <li>Don’t neglect outdated content</li>
                <li>Avoid errors on your websites</li>
                <li>Repair broken links</li>
                <li>Get more links</li>
                <li>Ensure that your website is secure</li>
                <li>Always follow Google’s guidelines</li>
                <li>Get social</li>
                <li>Push for more reviews</li>
                <li>Your website must have clear contact information</li>
              </ul>
            </div>
            <div className='sm:px-5 md:px-10 py-4'>
              <h1 className='text-xl sm:text-2xl md:-3xl font-bold py-4'>
                What skills are needed in digital marketing?
              </h1>
              <p>
                As you know that digital marketing is a kind of art that give growth and development to
                businesses by promoting brand of products or services. Digital marketing is a broad term which
                uses social media platforms. It consists of traditional marketing, web designing, web
                development, content marketing, social media marketing, SEO and much more that altogether make
                the digital marketing complete. A good digital marketer must have ability to adapt quickly and
                learn with their own. They must have skills to work with the diverse team and client and have
                ability to understand the need of clients. For hiring digital marketing professionals, the
                person must have skills to make it effective and successful.
              </p>
              <ul className='list-disc py-5 px-8 sm:px-12 md:px-16'>
                <li>
                  You must be an expert in using SEO (Search Engine Optimisation) and SEM (Search Engine
                  Marketing).
                </li>
                <li>
                  You must have ability to analyse the data means you are required to understand the concept
                  of the data such as update the data and remove unwanted data to make effective decision.
                </li>
                <li>
                  A digital marketer must be skilled in high quality content creation because digital
                  marketing is based on the content that pulls company target audience to the brand.
                </li>
                <li>
                  A digital marketer must have good communication in order to spread effective messages,
                  establishing trust and building long term relationship with the customers or clients
                </li>
                <li>
                  Basic design skills are must for a good digital marketer, he/she must have knowledge about
                  software like adobe creative suite (Photoshop, after effect, illustrator, InDesign, coral
                  draw, etc.), Canva, Inkscape. These all help in creating visual content.
                </li>
              </ul>
            </div>
          </div>
          <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-8 py-6'>
            <div className='w-full'>
              <img src={DigitalMarketingLast} alt='digital Environment' />
            </div>
            <div className='w-full text-center'>
              <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>Digital</h1>
              <p>
                Hesitating between two subject lines? Not sure what content your audience will react best to?
                A/B testing is one way to find out — and a great way to optimize your campaigns. Test
                different email subject line formulas, content formats and CTAs. See which ones get the best
                engagement and stick with the approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
