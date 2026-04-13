import { motion } from 'motion/react';
import { 
  Building2, 
  Smartphone, 
  Globe, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Home,
  TrendingUp,
  Shield
} from 'lucide-react';

export function PropertyListing() {
  const benefits = [
    { 
      icon: Building2, 
      title: 'List Your PG', 
      description: 'Showcase your property to thousands of potential tenants searching for paying guest accommodation in your city.' 
    },
    { 
      icon: Smartphone, 
      title: 'Tenant App', 
      description: 'Your tenants get a dedicated mobile app to view rent, make payments, and raise complaints.' 
    },
    { 
      icon: Globe, 
      title: 'Tenant Website', 
      description: 'Tenants access a professional web portal for all their needs - dashboard, payments, notices, and more.' 
    },
    { 
      icon: Users, 
      title: 'Direct Bookings', 
      description: 'Receive booking inquiries directly through our platform. No middleman, no commission.' 
    },
  ];

  const features = [
    'Free property listing',
    'Verified tenant profiles',
    'Secure payment collection',
    'Digital rent receipts',
    'Maintenance tracking',
    '24/7 tenant support',
    'Multi-city exposure',
    'No commission on bookings',
  ];

  return (
    <section id="property-listing" className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">GetYourStay</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            List Your PG & Grow Your Tenant Base
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            GetYourStay helps PG owners list their properties and provides tenants with a 
            professional mobile app and website - everything they need in one place.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 ${
                index === 0 ? 'from-blue-500 to-blue-600' :
                index === 1 ? 'from-green-500 to-green-600' :
                index === 2 ? 'from-purple-500 to-purple-600' :
                'from-orange-500 to-orange-600'
              }`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tenant App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                What Tenants Get
              </h3>
              <p className="text-blue-100 mb-8">
                Your tenants get access to our complete tenant platform - mobile app and website.
                They can view rent details, make payments, raise complaints, and stay connected.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 6).map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-[2rem] h-full p-4 flex flex-col items-center justify-center text-center">
                    <Smartphone className="w-16 h-16 text-white mb-4" />
                    <span className="text-white font-semibold">Tenant App</span>
                    <span className="text-white/70 text-sm mt-2">GetYourStay</span>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-8 -right-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  Free Access
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            List Your PG on GetYourStay Today
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join thousands of PG owners who trust GetYourStay to fill their vacant beds 
            and provide tenants with a modern digital experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://getyourstay.in/list-your-pg')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-2xl transition-all"
          >
            <span>List Your Property</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="mt-4 text-sm text-gray-500">
            Free to list • No hidden fees • Only pay when you get tenants
          </p>
        </motion.div>
      </div>
    </section>
  );
}