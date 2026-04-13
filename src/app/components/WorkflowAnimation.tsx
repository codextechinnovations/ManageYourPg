import { motion } from 'motion/react';
import { 
  UserPlus, 
  FileCheck, 
  Key, 
  CreditCard, 
  Home, 
  BarChart3,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export function WorkflowAnimation() {
  const workflowSteps = [
    {
      id: 1,
      icon: UserPlus,
      title: 'Register Tenant',
      description: 'Add new tenant details, documents, and contact information',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      icon: FileCheck,
      title: 'Verify Documents',
      description: 'Digital verification of ID proof, agreement, and other documents',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 3,
      icon: Key,
      title: 'Allocate Room',
      description: 'Assign room and bed to tenant with automated room management',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 4,
      icon: CreditCard,
      title: 'Collect Payment',
      description: 'Track rent payments, send reminders, and manage transactions',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 5,
      icon: Home,
      title: 'Daily Operations',
      description: 'Manage complaints, maintenance requests, and daily activities',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      id: 6,
      icon: BarChart3,
      title: 'Generate Reports',
      description: 'View occupancy, revenue, and expense reports in real-time',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-50',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-5"
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
            <CheckCircle2 className="w-4 h-4" />
            How It Works
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Workflow
            </span>{' '}
            for PG Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your PG operations with our intuitive 6-step workflow. 
            From tenant registration to reports generation - everything in one place.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-violet-200 transform -translate-y-1/2 origin-left"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative group"
              >
                <div className={`${step.bgColor} rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-2xl h-full`}>
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                    className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  >
                    {step.id}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for larger screens */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <ArrowRight className="w-6 h-6 text-[#1a1a4e]" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Phone/App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            {/* Phone Frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[2.5rem] p-4 w-64 md:w-80">
                {/* Phone Screen */}
                <div className="bg-white rounded-2xl p-4 h-80 md:h-96 overflow-hidden">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] rounded-lg flex items-center justify-center">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">MY PG App</span>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <UserPlus className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>

                  {/* Dashboard Preview */}
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 text-white">
                      <p className="text-xs opacity-80">Occupancy Rate</p>
                      <p className="text-2xl font-bold">94%</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-green-50 rounded-xl p-3"
                      >
                        <p className="text-xs text-green-600">Revenue</p>
                        <p className="text-lg font-bold text-green-700">₹4.8L</p>
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="bg-orange-50 rounded-xl p-3"
                      >
                        <p className="text-xs text-orange-600">Pending</p>
                        <p className="text-lg font-bold text-orange-700">₹12K</p>
                      </motion.div>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 overflow-x-auto">
                      {[
                        { icon: UserPlus, label: 'Add', color: 'bg-blue-500' },
                        { icon: CreditCard, label: 'Payment', color: 'bg-green-500' },
                        { icon: FileCheck, label: 'Verify', color: 'bg-purple-500' },
                      ].map((action, i) => (
                        <motion.div
                          key={action.label}
                          whileHover={{ scale: 1.1 }}
                          className={`${action.color} rounded-xl p-2 flex flex-col items-center min-w-[60px]`}
                        >
                          <action.icon className="w-4 h-4 text-white mb-1" />
                          <span className="text-[10px] text-white">{action.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-8 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              Live Updates
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-2 -left-6 bg-[#1a1a4e] text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              Secure Data
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to streamline your PG management?
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
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}