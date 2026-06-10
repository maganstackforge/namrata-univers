import { lazy, Suspense } from 'react'
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
