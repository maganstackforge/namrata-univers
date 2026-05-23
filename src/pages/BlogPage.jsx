import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet-async'
export default function Blog() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Blog | Namrata Universal</title>
        <meta
          name='description'
          content='Read the latest blogs from Namrata Universal on Web Development, React JS, UI/UX Design, SEO, Digital Marketing, and modern IT technologies.'
        />
        <meta
          name='keywords'
          content='Tech Blog, Web Development Blog, React JS Blog, UI UX Design Articles, SEO Tips, Digital Marketing Blog, IT Company Blog, Programming Tutorials, Namrata Universal Blog'
        />
        <meta name='author' content='Namrata Universal' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='Blog | Namrata Universal' />
        <meta
          property='og:description'
          content='Explore articles on web development, React, SEO, and digital marketing from Namrata Universal.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Blog | Namrata Universal' />
        <meta
          name='twitter:description'
          content='Read tech articles, tutorials, and industry insights from Namrata Universal.'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://your-domain.com/blog' />
      </Helmet>
      <section id='service' className='section-container flex items-center justify-center flex-col px-6 pt-6'>
        <div className='w-full'>
          <div
            className='section-header aos-init px- py-8 flex flex-col justify-center items-center'
            data-aos='flip-left'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='2000'
          >
            <h2 className='text-4xl sm:text-5xl font-bold my-5'>Namrata Universal Blog Page</h2>
            <p className='text-xl sm:text-2xl text-center'>
              “Stay updated with the latest insights in Web Development, UI/UX, SEO, and Digital Marketing.
              Learn, grow, and explore modern technologies with Namrata Universal blogs.”
            </p>
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6'>
            {[
              {
                imgSrc: 'https://namratauniversal.com/img/web1.jpeg',
                linkHref: 'https://namratauniversal.com/BusinessPortalDevelopment',
                heading: 'Business Portal Development',
                description:
                  'At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/mapd.jpeg',
                linkHref: 'https://namratauniversal.com/MobileAppService',
                heading: 'Mobile Application Development',
                description:
                  'We have designed and developed Android apps in categories, and productivity, shopping, social messaging, gaming and entertainment, news and publishing and so on.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/webd.jpeg',
                linkHref: 'https://namratauniversal.com/WebsiteDesigningDevelopment',
                heading: 'Website Development',
                description:
                  'We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also ensure that your website is a search engine friendly so that it attracts customers and sales.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/digital.png',
                linkHref: 'https://namratauniversal.com/DigitalMarketingService',
                heading: 'Digital Marketing',
                description:
                  'Digital marketing connect customers using internet and many types of digital platform such as: Search Engines, Websites, Social Media Marketing, Email Marketing, Mobile apps, Text messaging and Online promoting.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/cuts.jpeg',
                linkHref: 'https://namratauniversal.com/Software',
                heading: 'Custom Software',
                description:
                  'Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions. We offer quality and valuable price in our software and services without sacrificing quality.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/gd.jpeg',
                linkHref: 'https://namratauniversal.com/GraphicDesigningService',
                heading: 'Graphic Designing',
                description:
                  ' Graphic design is the most common way of making visual content. The specialty of visual communicate is fundamental, especially for brands looking to connect with their target audience, and graphic design is the perfect solution.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/apd.jpeg',
                linkHref: 'https://namratauniversal.com/AppDesigning',
                heading: 'App Design',
                description:
                  'Our experts cover an entire cycle of mobile app development, including business analysis, UX/UI design and development of your mobile application From ideation to final polish, our UX/UI design process.',
              },
              {
                imgSrc: 'https://namratauniversal.com/img/seo.png',
                linkHref: 'https://namratauniversal.com/SEOService',
                heading: 'SEO',
                description:
                  'SEO stands for search engine optimization. Namrata Universal Provides best Search engine optimization services. SEO is the most common way of doing whatever it takes to help a site or piece of content position higher on Google.',
              },
            ].map((item, i) => (
              <div key={i} className='shadow-lg rounded-2xl'>
                <div className='service-icon aos-init' data-aos='flip-left'>
                  <img
                    className='mx-auto w-full h-40 rounded-t-2xl shadow-lg'
                    src={item.imgSrc}
                    alt={item.heading}
                  />
                </div>
                <div
                  className='p-2 py-4 text-center flex flex-col justify-center items-center service-detail
                    aos-init'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'
                >
                  <h4 className='text-xl text-center text-blue-900 p-6'>
                    <a href={item.linkHref}>{item.heading}</a>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
