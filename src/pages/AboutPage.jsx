import { Helmet } from 'react-helmet-async'
import AboutHeroSection from '../components/AboutHeroSection'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Namrata Universal Clone</title>

        <meta
          name='description'
          content='Learn more about Namrata Universal services, company mission, and development solutions.'
        />

        <meta name='keywords' content='Namrata Universal, About, Web Development, Digital Marketing' />

        <meta property='og:title' content='About Us | Namrata Universal Clone' />

        <meta
          property='og:description'
          content='Learn more about Namrata Universal services and solutions.'
        />

        <meta property='og:type' content='website' />
      </Helmet>
      <AboutHeroSection />
      <About />
    </>
  )
}
