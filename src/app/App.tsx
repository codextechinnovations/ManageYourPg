import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { About } from './components/About';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { WhyChoose } from './components/WhyChoose';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { ServiceAreas } from './components/ServiceAreas';
import { WorkflowAnimation } from './components/WorkflowAnimation';
import { FAQ } from './components/FAQ';
import { PropertyListing } from './components/PropertyListing';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <ScrollToTop />
      <Navigation />
      <main>
        <Hero />
        <TrustStats />
        <WorkflowAnimation />
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
      <Toaster position="top-right" />
    </div>
  );
}