import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function ModernTechnology() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Modern Technologies | Namrata Univers</title>

        <meta
          name='description'
          content='Explore modern technologies at Namrata Univers including Web Development, React, Node.js, UI/UX Design, AI solutions, Cloud Computing, and Digital Innovation services.'
        />

        <meta
          name='keywords'
          content='Modern Technology, Web Development, React JS, Node JS, UI UX Design, Cloud Computing, AI Development, Digital Transformation, Namrata Univers Technologies'
        />

        <meta name='author' content='Namrata Univers' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph (Facebook / LinkedIn) */}
        <meta property='og:title' content='Modern Technologies | Namrata Univers' />

        <meta
          property='og:description'
          content='Discover advanced modern technologies used by Namrata Univers for building scalable web and digital solutions.'
        />

        <meta property='og:url' content='https://namrataunivers.netlify.app/ModernTechnology' />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content='Modern Technologies | Namrata Univers' />

        <meta
          name='twitter:description'
          content='Explore React, Node.js, UI/UX, AI, and cloud technologies used at Namrata Univers.'
        />

        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://namrataunivers.netlify.app/ModernTechnology' />
      </Helmet>
      <section
        id='mainTeam'
        className='section-container flex items-center justify-center flex-col px-2 sm:px-6 pt-6'
      >
        <div className='px-2 sm:px-20 md:px-28 text-center py-4'>
          <h1 className='text-xl sm:text-3xl md:text6xl my-12'>MODERN TECHNOLOGY DEVELOPMENT</h1>
          <p className='text-sm sm:text-xl md:text-2xl'>
            Namrata Univers is a renowned company leading the way in modern technology development. With
            cutting-edge innovations and a dedicated team of experts.
          </p>
        </div>

        <div
          className='grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-6 p-6 w-full max-w-screen-xl
            mx-auto bg-white'
        >
          {[
            {
              title: 'Informative',
              text: "The definition of informative is something that contains useful. It's really informative and includes lots of information about gestational diabetes, including a great sample diet plan, nutrition tips.",
            },
            {
              title: 'Business',
              text: 'Its defined as an organization or enterprising entity engaged in commercial, industrial, or professional activities. Businesses can be for-profit entities or non-profit organizations.',
            },
            {
              title: 'Editable',
              text: 'Any element can be editable. By using some JavaScript event handlers, you can transform your web page into a full and fast rich text editor',
            },
            {
              title: 'E-commerce',
              text: 'E-commerce is the buying and selling of goods and services, or the transmitting of funds or data. These business transactions occur either as B2B , B2C, C2C or C2B.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className='group relative h-72 rounded-xl shadow-md duration-300 border-b-4 border-r-4
                border-[#e8e8e8]'
            >
              <div
                className='shadow-xl w-full h-full rounded-lg absolute transition-all ease-out origin-bottom
                  hover:scale-y-110 hover:-translate-y-2"'
                style={{ boxShadow: '5px -5px 20px rgba(0,0,0,0.15)' }}
              >
                <h3 className='text-xl font-semibold text-[#60532c] p-4 shadow-sm'>{item.title}</h3>

                <p className='text-gray-800 text-sm leading-relaxed p-4'>{item.text}</p>
              </div>
              <div className='hidden group-hover:flex absolute bg-gray-400 rounded-b-xl top-60 w-full h-10'></div>
            </div>
          ))}
        </div>

        <div className='text-4xl sm:text-5xl font-bold my-20'>Programming</div>
        <div
          className='grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-10 sm:p-6 w-full
            max-w-screen-xl mx-auto bg-white'
        >
          {[
            {
              title: 'Php',
              text: 'PHP is a recursive acronym for "PHP: Hypertext Preprocessor".PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.',
            },
            {
              title: 'Html',
              text: "HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page's words and images.",
            },
            {
              title: 'CSS',
              text: 'CSS stands for Cascading Style Sheets CSS describes how HTML elements are to be displayed on screen, paper, or in other media CSS saves a lot of work.External stylesheets are stored in CSS files',
            },
            {
              title: 'Javascript',
              text: 'JavaScript is a dynamic computer programming language. whose implementations allow client-side script to interact with the user and make dynamic pages.',
            },
            {
              title: 'jQuery',
              text: 'jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish.',
            },
            {
              title: 'SQL',
              text: 'SQL stands for Structured Query Language SQL lets you access and manipulate databases SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className='group relative h-72 rounded-xl shadow-md duration-300 border-b-4 border-r-4
                hover:border-r-4 border-[#e8e8e8] mb-20'
            >
              <div
                className='shadow-xl w-full h-full rounded-lg transition-all ease-out origin-bottom
                  hover:scale-y-110 hover:-translate-y-2"'
                style={{ boxShadow: '5px -5px 20px rgba(0,0,0,0.15)' }}
              >
                <h3 className='text-xl font-semibold text-[#60532c] p-4 shadow-sm'>{item.title}</h3>

                <p className='text-gray-800 text-sm leading-relaxed p-4'>{item.text}</p>
              </div>
              <div className='hidden group-hover:flex absolute bg-gray-400 rounded-b-xl top-60 w-full h-10'></div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
