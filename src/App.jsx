import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ModalProvider } from './context/ModalContext'
import Layout from './layouts/Layout' // ★ NEW

const HeroSection = lazy(() => import('./components/HeroSection'))
const About = lazy(() => import('./components/About'))
const Service = lazy(() => import('./components/Service'))
import CallToAction from './components/CallToAction'
import MainTermOfSite from './components/MainTermOfSite'
import Review from './components/Review'
import OurClients from './components/OurClients'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import AboutHeroSection from './components/AboutHeroSection'
import OurPricing from './components/OurPricing'
import MeetOurTeam from './components/MeetOurTeam'
import Skill from './components/skill'
import ModernTechnology from './components/ModernTechnology'
import DigitalMarketing from './components/DigitalMarketing'
import Seo from './components/Seo'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndCondition from './components/TermsAndCondition'
import RefundPolicy from './components/RefundPolicy'
import Internship from './components/Internship'
import Blog from './components/Blog'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <>
      <ModalProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/*  Layout Routes (Header + Footer visible) */}
            <Route element={<Layout />}>
              <Route
                path='/'
                element={
                  <>
                    <HeroSection />
                    <About />
                    <Service />
                    <CallToAction />
                    <MainTermOfSite />
                    <Review />
                    <OurClients />
                  </>
                }
              />
              <Route
                path='/About'
                element={
                  <>
                    <AboutHeroSection />
                    <About />
                  </>
                }
              />

              <Route path='/Service' element={<Service />} />
              <Route path='/CallToAction' element={<CallToAction />} />
              <Route path='/Terms' element={<MainTermOfSite />} />
              <Route path='/Reviews' element={<Review />} />
              <Route path='/Client' element={<OurClients />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Portfolio' element={<Portfolio />} />
              <Route path='/Pricing' element={<OurPricing />} />
              <Route path='/MeetOurTeam' element={<MeetOurTeam />} />
              <Route path='/Skill' element={<Skill />} />
              <Route path='/ModernTechnology' element={<ModernTechnology />} />
              <Route path='/DigitalMarketing' element={<DigitalMarketing />} />
              <Route path='/DigitalMarketing' element={<DigitalMarketing />} />
              <Route path='/Seo' element={<Seo />} />
              <Route path='/Internship' element={<Internship />} />
              <Route path='/Blog' element={<Blog />} />
            </Route>

            {/*  Without Layout Route (NO Header & NO Footer) */}

            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/TermConditions' element={<TermsAndCondition />} />
            <Route path='/RefundPolicy' element={<RefundPolicy />} />
          </Routes>
        </Suspense>
      </ModalProvider>
    </>
  )
}

export default App
