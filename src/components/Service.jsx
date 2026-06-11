import apdImg from '../assets/images/blogs-services/apd.webp'
import cutsImg from '../assets/images/blogs-services/cuts.webp'
import gdImg from '../assets/images/blogs-services/gd.webp'
import mapdImg from '../assets/images/blogs-services/mapd.webp'
import web1Img from '../assets/images/blogs-services/web1.webp'
import webdImg from '../assets/images/blogs-services/webd.webp'
import digitalImg from '../assets/images/blogs-services/digital.webp'
import seoImg from '../assets/images/blogs-services/seo.webp'

export default function Service() {
  const services = [
    {
      imgSrc: web1Img,
      linkHref: 'https://namratauniversal.com/BusinessPortalDevelopment',
      heading: 'Business Portal Development',
      description:
        'At Namrata Universal, we offer mobile-compliant Business Portal Development services leveraging a plethora of frameworks including Drupal, WordPress, Magento, AngularJS and much more.',
    },
    {
      imgSrc: mapdImg,
      linkHref: 'https://namratauniversal.com/MobileAppService',
      heading: 'Mobile Application Development',
      description:
        'We have designed and developed Android apps in categories, and productivity, shopping, social messaging, gaming and entertainment, news and publishing and so on.',
    },
    {
      imgSrc: webdImg,
      linkHref: 'https://namratauniversal.com/WebsiteDesigningDevelopment',
      heading: 'Website Development',
      description:
        'We create websites that appeal to your sense of style, with intuitive layouts and navigation. We also ensure that your website is a search engine friendly so that it attracts customers and sales.',
    },
    {
      imgSrc: digitalImg,
      linkHref: '/DigitalMarketing',
      heading: 'Digital Marketing',
      description:
        'Digital marketing connect customers using internet and many types of digital platform such as: Search Engines, Websites, Social Media Marketing, Email Marketing, Mobile apps, Text messaging and Online promoting.',
    },
    {
      imgSrc: cutsImg,
      linkHref: 'https://namratauniversal.com/Software',
      heading: 'Custom Software',
      description:
        'Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions. We offer quality and valuable price in our software and services without sacrificing quality.',
    },
    {
      imgSrc: gdImg,
      linkHref: 'https://namratauniversal.com/GraphicDesigningService',
      heading: 'Graphic Designing',
      description:
        ' Graphic design is the most common way of making visual content. The specialty of visual communicate is fundamental, especially for brands looking to connect with their target audience, and graphic design is the perfect solution.',
    },
    {
      imgSrc: apdImg,
      linkHref: 'https://namratauniversal.com/AppDesigning',
      heading: 'App Design',
      description:
        'Our experts cover an entire cycle of mobile app development, including business analysis, UX/UI design and development of your mobile application From ideation to final polish, our UX/UI design process.',
    },
    {
      imgSrc: seoImg,
      linkHref: '/Seo',
      heading: 'SEO',
      description:
        'SEO stands for search engine optimization. Namrata Universal Provides best Search engine optimization services. SEO is the most common way of doing whatever it takes to help a site or piece of content position higher on Google.',
    },
  ]
  return (
    <section id='service' className='section-container flex items-center justify-center flex-col px-6 pt-6'>
      <div className='w-full'>
        <div className='section-header aos-init px- py-8 flex flex-col justify-center items-center'>
          <h2 className='text-4xl sm:text-5xl font-bold my-5'>Services</h2>
          <p className='text-xl sm:text-2xl text-center'>
            Nationwide Service, Local Expertise Offer The Latest Software And Solutions To Our Customers!
          </p>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6'>
          {services.map((item, i) => (
            <div key={i} className='shadow-lg rounded-2xl'>
              <div className='service-icon'>
                <img
                  className='mx-auto w-full h-auto object-cover rounded-t-2xl shadow-lg'
                  src={item.imgSrc}
                  alt={item.heading}
                  width={500}
                  height={500}
                  loading='lazy'
                  decoding='async'
                />
              </div>
              <div className='p-2 py-4 text-center flex flex-col justify-center items-center service-detail'>
                <h3 className='text-xl text-center text-blue-900 p-6'>
                  <a href={item.linkHref}>{item.heading}</a>
                </h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
