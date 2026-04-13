import { motion } from 'motion/react';
import { CheckCircle2, Smartphone, Monitor, Clock, Shield, Zap, HeadphonesIcon } from 'lucide-react';

export function About() {
  const features = [
    'Manage tenants, check-ins, and rent payments seamlessly',
    'Track expenses and generate comprehensive reports',
    'Access from anywhere - mobile app or web dashboard',
    'Designed for both small and large PG businesses',
  ];

  const stats = [
    { value: '99.9%', label: 'Uptime', icon: Clock, color: 'from-blue-500 to-blue-600' },
    { value: '24/7', label: 'Support', icon: HeadphonesIcon, color: 'from-emerald-500 to-emerald-600' },
    { value: 'Secure', label: 'Data', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { value: 'Fast', label: 'Performance', icon: Zap, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full"
            >
              About MY PG
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Complete{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management Solution
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Manage Your PG helps PG owners and managers across India handle daily property
              operations from one place. Say goodbye to spreadsheets and manual
              tracking - manage everything digitally with ease. Available in all major cities.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg"
              >
                <Smartphone className="w-6 h-6 text-[#1a1a4e]" />
                <span className="font-medium text-gray-900">
                  Mobile App Available
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg"
              >
                <Monitor className="w-6 h-6 text-[#1a1a4e]" />
                <span className="font-medium text-gray-900">
                  Web Dashboard
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Animated Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:border-blue-300 transition-all h-full">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg mx-auto`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <motion.p
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="text-2xl font-bold bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent mb-1"
                      >
                        {stat.value}
                      </motion.p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Circle Animation */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#1a1a4e]/20 to-[#1e3a8a]/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#2d2d7e]/20 to-[#1e3a8a]/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
