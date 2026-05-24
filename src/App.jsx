import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { ScrollToTop } from './components/ScrollToTop'

const KeyFacts = lazy(() => import('./components/KeyFacts').then(m => ({ default: m.KeyFacts })))
const TrustStats = lazy(() => import('./components/TrustStats').then(m => ({ default: m.TrustStats })))
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })))
const Screenshots = lazy(() => import('./components/Screenshots').then(m => ({ default: m.Screenshots })))
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })))
const Careers = lazy(() => import('./components/Careers').then(m => ({ default: m.Careers })))
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })))
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))
const ServiceAreas = lazy(() => import('./components/ServiceAreas').then(m => ({ default: m.ServiceAreas })))
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })))
const WhyChoose = lazy(() => import('./components/WhyChoose').then(m => ({ default: m.WhyChoose })))
const PropertyListing = lazy(() => import('./components/PropertyListing').then(m => ({ default: m.PropertyListing })))
const ChatBox = lazy(() => import('./components/ChatBox').then(m => ({ default: m.ChatBox })))
import AboutUs from './pages/AboutUs'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CareersPage from './pages/Careers'
import { PressKit } from './pages/PressKit'
import { FeaturesPage } from './pages/FeaturesPage'
import { FeatureDetail } from './pages/FeatureDetail'
import { ListYourPG } from './pages/ListYourPG'
import { WhyChoosePage } from './pages/WhyChoosePage'
import { PGManagementGuide } from './pages/guides/PGManagementGuide'
import { RentCollectionGuide } from './pages/guides/RentCollectionGuide'
import { TenantManagementGuide } from './pages/guides/TenantManagementGuide'
import { PGBusinessGuide } from './pages/guides/PGBusinessGuide'
import { MultiPropertyGuide } from './pages/guides/MultiPropertyGuide'
import { PGvsHostelGuide } from './pages/guides/PGvsHostelGuide'
import { CityPage } from './pages/city/CityPage'
import { Franchise } from './pages/Franchise'

function SectionLoader() {
  return <div className="h-64 bg-gradient-to-b from-gray-50 to-white animate-pulse" />
}

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
        <Suspense fallback={<SectionLoader />}><KeyFacts /></Suspense>
        <Suspense fallback={<SectionLoader />}><TrustStats /></Suspense>
        <Suspense fallback={<SectionLoader />}><Features /></Suspense>
        <Suspense fallback={<SectionLoader />}><Screenshots /></Suspense>
        <Suspense fallback={<SectionLoader />}><Pricing /></Suspense>
        <Suspense fallback={<SectionLoader />}><Careers /></Suspense>
        <Suspense fallback={<SectionLoader />}><PropertyListing /></Suspense>
        <Suspense fallback={<SectionLoader />}><ServiceAreas /></Suspense>
        <Suspense fallback={<SectionLoader />}><About /></Suspense>
        <Suspense fallback={<SectionLoader />}><WhyChoose /></Suspense>
        <Suspense fallback={<SectionLoader />}><Testimonials /></Suspense>
        <Suspense fallback={<SectionLoader />}><FAQ /></Suspense>
        <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
      <Suspense fallback={null}><ChatBox /></Suspense>
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
          <Route path="/guides/pg-management-software-guide" element={<PGManagementGuide />} />
          <Route path="/guides/rent-collection-guide" element={<RentCollectionGuide />} />
          <Route path="/guides/tenant-management-guide" element={<TenantManagementGuide />} />
          <Route path="/guides/pg-business-guide" element={<PGBusinessGuide />} />
          <Route path="/guides/multi-property-pg-management" element={<MultiPropertyGuide />} />
          <Route path="/guides/pg-vs-hostel-vs-co-living" element={<PGvsHostelGuide />} />
          <Route path="/city/:citySlug" element={<CityPage />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
