import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { TrustStats } from './components/TrustStats'
import { Features } from './components/Features'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { Careers } from './components/Careers'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { ServiceAreas } from './components/ServiceAreas'
import { About } from './components/About'
import { WhyChoose } from './components/WhyChoose'
import { PropertyListing } from './components/PropertyListing'
import { ChatBox } from './components/ChatBox'
import AboutUs from './pages/AboutUs'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CareersPage from './pages/Careers'

function ScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])
  return null
}

function ScrollToTopOnNav() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <ScrollToHash />
      <Navigation />
      <main>
        <Hero />
        <TrustStats />
        <Features />
        <Screenshots />
        <Pricing />
        <Careers />
        <PropertyListing />
        <ServiceAreas />
        <About />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ChatBox />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  )
}
