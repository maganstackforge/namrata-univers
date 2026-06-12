import { Helmet } from 'react-helmet-async'
import AboutHeroSection from '../components/AboutHeroSection'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Namrata Univers</title>

        <meta
          name='description'
          content='Learn more about Namrata Univers, our mission, vision, values, and expertise in IT solutions, software development, digital marketing, and professional training.'
        />

        <meta
          name='keywords'
          content='Namrata Univers, About Us, IT Solutions, Software Development, Digital Marketing, Corporate Training, Web Development'
        />

        <link rel='canonical' href='https://namrataunivers.netlify.app/about' />

        <meta property='og:title' content='About Us | Namrata Univers' />

        <meta
          property='og:description'
          content="Discover Namrata Univers's mission, services, and commitment to delivering innovative IT and digital solutions."
        />

        <meta property='og:url' content='https://namrataunivers.netlify.app/about' />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:type' content='website' />

        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content='About Us | Namrata Univers' />

        <meta
          name='twitter:description'
          content="Discover Namrata Univers's mission, services, and commitment to delivering innovative IT and digital solutions."
        />

        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />
      </Helmet>
      <AboutHeroSection />
      <About />
    </>
  )
}
