import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
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
import { KeyFacts } from './components/KeyFacts'
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
      <Helmet>
        <title>MY PG - #1 PG Management Software in India | Best Tenant & Rent Management App for PG Owners</title>
        <meta name="description" content="MY PG is India's leading PG management software trusted by 5000+ PG owners. Automate rent collection, manage tenants, and track occupancy from one app. Start your 7-day free trial today." />
        <link rel="canonical" href="https://manageyourpg.com/" />
        <meta property="og:title" content="MY PG - #1 PG Management Software in India | Tenant & Rent Management App" />
        <meta property="og:description" content="Manage your PG professionally with MY PG. Automate rent collection, manage tenants, and track occupancy. Trusted by 5000+ PG owners in India." />
        <meta property="og:url" content="https://manageyourpg.com/" />
      </Helmet>
      <ScrollToTop />
      <ScrollToHash />
      <Navigation />
      <main>
        <Hero />
        <KeyFacts />
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
    <HelmetProvider>
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
    </HelmetProvider>
  )
}
