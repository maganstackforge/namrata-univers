import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ModalProvider } from './context/ModalContext'
import Layout from './layouts/Layout'

//  Lazy Loaded Components
// const HeroSection = lazy(() => import('./components/HeroSection'))
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const Service = lazy(() => import('./components/Service'))
const CallToAction = lazy(() => import('./components/CallToAction'))
const MainTermOfSite = lazy(() => import('./components/MainTermOfSite'))
const Review = lazy(() => import('./components/Review'))
const OurClients = lazy(() => import('./components/OurClients'))
const Contact = lazy(() => import('./components/Contact'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const OurPricing = lazy(() => import('./components/OurPricing'))
const MeetOurTeam = lazy(() => import('./components/MeetOurTeam'))
const Skill = lazy(() => import('./components/Skill'))
const ModernTechnology = lazy(() => import('./components/ModernTechnology'))
const DigitalMarketing = lazy(() => import('./components/DigitalMarketing'))
const Seo = lazy(() => import('./components/Seo'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const TermsAndCondition = lazy(() => import('./components/TermsAndCondition'))
const RefundPolicy = lazy(() => import('./components/RefundPolicy'))
const Internship = lazy(() => import('./components/Internship'))
const Blog = lazy(() => import('./components/Blog'))
const NotFound = lazy(() => import('./components/NotFound'))
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    AOS.refresh()
  }, [])

  return (
    <ModalProvider>
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-screen text-xl font-semibold'>Loading...</div>
        }
      >
        <Routes>
          {/*  Layout Routes */}
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />

            <Route path='/About' element={<AboutPage />} />
            <Route path='*' element={<NotFound />} />
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
            <Route path='/Seo' element={<Seo />} />
            <Route path='/Internship' element={<Internship />} />
            <Route path='/Blog' element={<Blog />} />
          </Route>

          {/*  Without Layout */}
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/TermConditions' element={<TermsAndCondition />} />
          <Route path='/RefundPolicy' element={<RefundPolicy />} />
        </Routes>
      </Suspense>
    </ModalProvider>
  )
}

export default App
