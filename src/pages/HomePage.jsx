import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Service from '../components/Service'
import CallToAction from '../components/CallToAction'
import MainTermOfSite from '../components/MainTermOfSite'
import Review from '../components/Review'
import OurClients from '../components/OurClients'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Service />
      <CallToAction />
      <MainTermOfSite />
      <Review />
      <OurClients />
    </>
  )
}
