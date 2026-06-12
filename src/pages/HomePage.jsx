import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
const Service = lazy(() => import('../components/Service'))
const CallToAction = lazy(() => import('../components/CallToAction'))
const MainTermOfSite = lazy(() => import('../components/MainTermOfSite'))
const Review = lazy(() => import('../components/Review'))
const OurClients = lazy(() => import('../components/OurClients'))

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Namrata Univers | IT Solutions, Digital Marketing & Training</title>

        <meta
          name='description'
          content='Namrata Univers is a leading IT solutions and training company providing web development, software services, digital marketing, and corporate training.'
        />

        <meta name='robots' content='index, follow' />

        <meta name='author' content='Namrata Univers' />

        <meta name='theme-color' content='#6FA4AF' />

        <link rel='canonical' href='https://namrataunivers.netlify.app/' />

        <meta property='og:title' content='Namrata Univers - Empowering IT Solutions & Training' />

        <meta
          property='og:description'
          content='Namrata Univers provides innovative IT solutions and digital marketing services.'
        />

        <meta property='og:image' content='https://namrataunivers.netlify.app/og-image.jpg' />

        <meta property='og:url' content='https://namrataunivers.netlify.app/' />

        <meta property='og:type' content='website' />

        <meta name='twitter:card' content='summary_large_image' />

        <meta name='twitter:title' content='Namrata Univers - Empowering IT Solutions & Training' />

        <meta
          name='twitter:description'
          content='Namrata Univers provides innovative IT solutions and digital marketing services.'
        />

        <meta name='twitter:image' content='https://namrataunivers.netlify.app/og-image.jpg' />
      </Helmet>

      <HeroSection />
      <About />

      <Suspense fallback={null}>
        <Service />
      </Suspense>

      <Suspense fallback={null}>
        <CallToAction />
      </Suspense>

      <Suspense fallback={null}>
        <MainTermOfSite />
      </Suspense>

      <Suspense fallback={null}>
        <Review />
      </Suspense>

      <Suspense fallback={null}>
        <OurClients />
      </Suspense>
    </>
  )
}
