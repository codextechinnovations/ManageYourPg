import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { TrustStats } from './components/TrustStats'
import { Features } from './components/Features'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { ServiceAreas } from './components/ServiceAreas'
import { About } from './components/About'
import { WhyChoose } from './components/WhyChoose'
import { PropertyListing } from './components/PropertyListing'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <main>
        <Hero />
        <TrustStats />
        <Features />
        <Screenshots />
        <Pricing />
        <PropertyListing />
        <ServiceAreas />
        <About />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}