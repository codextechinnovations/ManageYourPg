import { motion } from 'motion/react'
import { MapPin, Building2, Users, TrendingUp, CheckCircle } from 'lucide-react'

export function ServiceAreas() {
  const majorCities = [
    { name: 'Bangalore', pgs: '500+' },
    { name: 'Mumbai', pgs: '450+' },
    { name: 'Delhi NCR', pgs: '400+' },
    { name: 'Chennai', pgs: '350+' },
    { name: 'Hyderabad', pgs: '300+' },
    { name: 'Pune', pgs: '250+' },
  ]

  const stats = [
    { icon: Building2, value: '5000+', label: 'PGs Managed' },
    { icon: Users, value: '50000+', label: 'Tenants Served' },
    { icon: MapPin, value: '25+', label: 'Cities' },
    { icon: TrendingUp, value: '98%', label: 'Customer Retention' },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(26,26,78,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full"
          >
            <MapPin className="w-4 h-4" />
            Available Across India
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving PG Owners in{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Every Major City
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive PG management platform is trusted by property owners across India. 
            From metro cities to emerging urban centers, we help streamline PG operations nationwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] flex items-center justify-center"
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Major Cities We Serve</h3>
            <p className="text-gray-600">Trusted by PG owners in these key metropolitan areas</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {majorCities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 text-center border border-gray-200 hover:border-blue-300 transition-all"
              >
                <MapPin className="w-6 h-6 mx-auto mb-2 text-[#1a1a4e]" />
                <h4 className="font-semibold text-gray-900 mb-1">{city.name}</h4>
                <p className="text-sm text-gray-600">{city.pgs} PGs</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">
              And many more cities across India. Our platform is designed to work seamlessly 
              regardless of your location.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Coimbatore', 'Vizag', 'Indore'].map((city) => (
                <motion.span
                  key={city}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center gap-1"
                >
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {city}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your PG management across India?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-2xl transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}