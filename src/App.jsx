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
import { PressKit } from './pages/PressKit'
import { FeaturesPage } from './pages/FeaturesPage'
import { FeatureDetail } from './pages/FeatureDetail'
import { ListYourPG } from './pages/ListYourPG'
import { WhyChoosePage } from './pages/WhyChoosePage'

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
        <title>MY PG - #1 PG Management Software & App | Hostel Management & Rent Collection Software for PG Owners</title>
        <meta name="description" content="MY PG is India's best PG management software and app for PG owners. Automate rent collection, manage tenants with digital KYC, track occupancy, and generate bills. Try our hostel management software and tenant management system free for 7 days." />
        <link rel="canonical" href="https://manageyourpg.com/" />
        <meta property="og:title" content="MY PG - #1 PG Management Software & App | Hostel & Rent Collection Software for PG Owners" />
        <meta property="og:description" content="MY PG is India's leading PG management software and app for PG owners. Automate rent collection, manage tenants with digital KYC, track occupancy, and generate bills with our hostel management software. Free trial." />
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
          <Route path="/press" element={<PressKit />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/features/:slug" element={<FeatureDetail />} />
          <Route path="/list-your-pg" element={<ListYourPG />} />
          <Route path="/why-choose" element={<WhyChoosePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
