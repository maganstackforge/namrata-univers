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
const Contact = lazy(() => import('./pages/ContactPage'))
const Portfolio = lazy(() => import('./pages/PortfolioPage'))
const OurPricing = lazy(() => import('./components/OurPricing'))
const MeetOurTeam = lazy(() => import('./components/MeetOurTeam'))
const Skill = lazy(() => import('./pages/SkillPage'))
const ModernTechnology = lazy(() => import('./pages/ModernTechnologyPage'))
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketingPage'))
const Seo = lazy(() => import('./pages/SeoPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsAndCondition = lazy(() => import('./pages/TermsAndConditionPage'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicyPage'))
const Internship = lazy(() => import('./pages/InternshipPage'))
const Blog = lazy(() => import('./pages/BlogPage'))
const Payment = lazy(() => import('./pages/PaymentPage'))
const NotFound = lazy(() => import('./pages/NotFoundPage'))
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
            <Route path='/Payment' element={<Payment />} />
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
