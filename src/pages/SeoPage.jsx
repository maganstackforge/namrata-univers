import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SeoHeroImage from '../assets/images/seo/SeoHeroImage.jpg'
import SeoRankingImage from '../assets/images/seo/SeoRankingImage.webp'
export default function Seo() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>SEO Services | Namrata Universal</title>
        <meta
          name='description'
          content='Improve your website ranking with Namrata Universal SEO services including On-Page SEO, Off-Page SEO, Technical SEO, Keyword Research, and Link Building strategies.'
        />
        <meta
          name='keywords'
          content='SEO Services, Search Engine Optimization, On Page SEO, Off Page SEO, Technical SEO, Keyword Research, Link Building, Digital Marketing SEO, Namrata Universal SEO'
        />
        <meta name='author' content='Namrata Universal' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta property='og:title' content='SEO Services | Namrata Universal' />
        <meta
          property='og:description'
          content='Rank your website on Google with professional SEO services including on-page, off-page, and technical SEO.'
        />
        <meta property='og:type' content='website' />

        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='SEO Services | Namrata Universal' />
        <meta
          name='twitter:description'
          content='Professional SEO services to improve Google ranking, traffic, and online visibility.'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://your-domain.com/seo-services' />
      </Helmet>
      <section id='digitalMarketing' className='flex items-center justify-center flex-col'>
        <img
          src={SeoHeroImage}
          alt='Digital Marketing Poster'
          loading='lazy'
          className='w-full h-40 sm:h-72 md:h-96'
        />
        <div className='w-10/11 flex flex-col justify-center'>
          <div className='mt-20 flex justify-center'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-bold p-4 text-center text-[#234C6A]'>
              "Boost Discoverability. Boost Business."
            </h1>
          </div>

          <div className='flex flex-col md:flex-row justify-center p-2'>
            <div className='w-full md:w-1/4 py-10 sm:py-0 md:py-0'>
              <ul className='p-2 h-full rounded-tl-2xl rounded-br-2xl text-white'>
                <li className='bg-[#6E8CFB] rounded-tr-2xl rounded-bl-2xl'>
                  <h1 className='text-center p-4 font-bold'>INTRODUCTION</h1>
                </li>
                {[
                  { linkName: 'How ro become an SEO Expert?', link: '/ModernTechnology' },
                  { linkName: 'Seo 101', link: '/DigitalMarketing' },
                  { linkName: 'How Search Engines Work', link: '/Seo' },
                  { linkName: 'CRAWLING', link: '/Privacy Policy' },
                  { linkName: 'Indexing', link: '/TermConditions' },
                  { linkName: 'Ranking', link: '/RefundPolicy' },
                  { linkName: 'Keyword Research', link: '/RefundPolicy' },
                  { linkName: 'On-Page SEO', link: '/RefundPolicy' },
                  { linkName: 'Technical SEO', link: '/RefundPolicy' },
                  { linkName: 'How Website Work', link: '/RefundPolicy' },
                  { linkName: 'How Search Engines Understand Website', link: '/RefundPolicy' },
                  { linkName: 'How User Interact with Website', link: '/RefundPolicy' },
                ].map((item, i) => (
                  <li key={i} className='bg-[#6E8CFB] rounded-tr-2xl rounded-bl-2xl my-4 p-2'>
                    <Link to={item.link}>{item.linkName}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full sm:w-3/4'>
              <div className=''>
                <div className='sm:px-5 md:px-10'>
                  <p>
                    Search Engine Optimization is a set of technical and content practices that improve the
                    quality of your website to increase the visibility on the search engine like Google when
                    people search for products or services related to your business. SEO meets the user’s
                    search needs by creating relevant, effective and high-quality content and giving the best
                    possible user experience. It increases top rank of your website. SEO activities take place
                    both on-page SEO and off-page SEO.
                  </p>
                  <h3>SEO includes the following components</h3>
                  <ul className='list-disc py-5 px-8 sm:px-12 md:px-16'>
                    <li>Link building</li>
                    <li>Technical Optimization</li>
                    <li>Keyword research</li>
                    <li>Content creation and optimization</li>
                  </ul>
                </div>
                <div className='sm:px-5 md:px-10 py-4'>
                  <h1 className='text-xl sm:text-2xl md:-3xl font-bold py-4'>How does SEO work?</h1>
                  <p>
                    SEO is basically aimed at increasing the number of visitors to the company’s website which
                    results in leading more customers and more revenue. SEO works by creating reliable and
                    high-quality content. After that, the website’s content is optimized, keyword research is
                    conducted and inbound links are earned to enhance the content’s ranking and visibility of
                    a website on search engines like Google, Bing and many more.
                  </p>
                  <p>
                    The SEO result takes effect on SERP (Search Engine Results Page) once the webpage has been
                    crawled and indexed by the search engine. SEO takes months to fully materialize.
                  </p>
                  <p>
                    Search engines like Google crawl pages on the web using bots, visiting several sites and
                    gathering information about those pages and putting them in an index. The index is
                    equivalent to a big library where you can find exactly what you are seeking for at that
                    time.
                  </p>
                  <p>
                    Search engines like Google, and Bing use bots to analyze billions of pages in their index
                    and show relevant results specific to the users’ query. SEO is such a marketing tragedy
                    that helps you understand what your website users want so that you can implement that
                    knowledge across your website and social media properties.
                  </p>
                </div>
                <div className='sm:px-5 md:px-10 py-4'>
                  <h1 className='text-xl sm:text-2xl md:-3xl font-bold py-4'>
                    What is the importance of SEO?
                  </h1>
                  <p>
                    The aim of SEO is to understand the user’s online search so that high-quality content can
                    be created to satisfy their needs. It also helps to create a website where the search
                    engine can find out the index and understand its content. SEO is very important in the
                    following ways.
                  </p>
                  <ul className='list-disc py-5 px-8 sm:px-12 md:px-16'>
                    <li>SEO improves the user experience and a website’s usability.</li>
                    <li>It improves the visibility of your website on the search engine.</li>
                    <li>
                      SEO understands the need of the customers using search query data, SERP analysis and
                      analytic data and AI insight.
                    </li>
                    <li>SEO is relatively cheap and very effective.</li>
                    <li>
                      SEO helps establish long-term equity for your brand because a good ranking and favorable
                      placement to boost your brand profile.
                    </li>
                    <li>SEO helps you to gain the trust of potential customers.</li>
                    <li>
                      SEO increases the web traffic on your website which results in enhancing the number of
                      visitors to your page each day.
                    </li>
                  </ul>
                </div>
                <div className='mx-auto sm:px-5 md:px-10 py-4'>
                  <h1 className='text-xl sm:text-2xl md:-3xl font-bold py-4'>
                    Namrata Universal’s SEO Library
                  </h1>
                  <p>
                    In addition to covering SEO generally, Namrata Universal has search engine optimization
                    areas specifically for the major search engines:
                  </p>
                  <ul className='list-disc py-5 px-8 sm:px-12 md:px-16'>
                    <li>Google SEO</li>
                    <li>Google Algorithm Updates</li>
                    <li>Google Search Console</li>
                    <li>Bing SEO</li>
                  </ul>
                  <h3 className='text-2xl'>The basics of search engine optimization</h3>
                  <p>
                    If you really want to be expert in search engine optimization (SEO). Then you must know
                    all the aspects of SEO. First of all, you must have knowledge of the basics of SEO that
                    are the important fundamentals for SEO. You can’t do SEO without these basics.
                  </p>
                  <h4 className='font-bold'>The basics of search engine optimization are mentioned below:</h4>
                  <ul className='list-disc py-5 px-8 sm:px-12 md:px-16'>
                    <li>
                      <strong>Keyword research: </strong>Determine the keywords that you want to rank for and
                      use them in your website's content and Meta tags.
                    </li>
                    <li>
                      <strong>On-page optimization:</strong>Ensure that your website is properly optimized
                      with keywords in the title tags, Meta descriptions, header tags, and content.
                    </li>
                    <li>
                      <strong>Content creation::</strong>Develop high-quality, original, and relevant content
                      that provides value to your target audience and includes your target keywords.
                    </li>
                    <li>
                      <strong>Link building:</strong>Obtain high-quality links from other relevant and
                      authoritative websites to your website. This helps improve your website's credibility
                      and search engine ranking.
                    </li>
                    <li>
                      <strong>Site structure:</strong>Make sure your website has a logical and
                      easy-to-understand structure, with a clear hierarchy of pages and a sitemap.
                    </li>
                    <li>
                      <strong>Technical optimization:</strong>Ensure that your website is technically sound
                      and meets the technical requirements of search engines, such as fast loading speeds,
                      mobile responsiveness, and security.
                    </li>
                    <li>
                      <strong>Analytics and tracking:</strong>Use tools like Google Analytics to track your
                      website's traffic, user behavior, and conversion rates, and adjust your SEO strategy
                      accordingly.
                    </li>
                  </ul>
                </div>
              </div>

              <div className='w-full sm:p-6'>
                <img src={SeoRankingImage} alt='digital Environment' />
                <p>
                  These are the basic building blocks of an effective SEO strategy, but it's important to note
                  that SEO is an ongoing process and requires constant monitoring and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
