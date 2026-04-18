import { motion } from 'motion/react';
import {
  LayoutDashboard,
  UserPlus,
  UserCheck,
  CreditCard,
  Receipt,
  FileText,
  BedDouble,
  BellRing,
  Shield,
  Clock,
  Wallet,
  MessageSquare,
  Building,
  BarChart3,
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: LayoutDashboard,
      title: 'Real-Time Dashboard',
      description:
        'Complete overview of your PG operations - occupancy, rent collection, pending payments, and revenue at a glance. Available for all PG owners in India.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: UserPlus,
      title: 'Tenant Management',
      description:
        'Add and manage tenant profiles with documents. Digital KYC storage, contact details, payment history - everything in one place.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: UserCheck,
      title: 'Self Check-In Requests',
      description:
        'Tenants can submit check-in requests digitally. Approve with one click - no paperwork needed.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CreditCard,
      title: 'Automated Rent Collection',
      description:
        'Set up automatic rent reminders, track payments, generate digital receipts. Reduce late payments by 80%.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Receipt,
      title: 'Expense Tracking',
      description:
        'Record and categorize PG expenses - maintenance, food, staff salary. Monitor spending patterns easily.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: FileText,
      title: 'Reports & Analytics',
      description:
        'Generate detailed reports on payments, occupancy, revenue, and expenses. Make data-driven decisions.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: BedDouble,
      title: 'Room & Bed Management',
      description:
        'Track room occupancy, bed availability, and pricing. Know vacant beds instantly - ideal for multi-floor PGs across India.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: BellRing,
      title: 'Rent Reminders & Notifications',
      description:
        'Automated WhatsApp and SMS reminders for rent due dates. Reduce follow-ups and late payments significantly.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Shield,
      title: 'Secure Data & Documents',
      description:
        'Bank-grade security for tenant documents, rent records, and KYC data. GDPR compliant data storage.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Building,
      title: 'Multi-Property Management',
      description:
        'Manage multiple PG properties from one dashboard. Track occupancy and revenue across all locations.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: MessageSquare,
      title: 'Notice Board',
      description:
        'Send notices and announcements to all tenants instantly. Emergency broadcasts, monthly updates.',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Wallet,
      title: 'Generate Rent Receipts',
      description:
        'Create professional digital rent receipts instantly. Share via WhatsApp or email - accepted everywhere in India.',
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            Best PG Management Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              PG Management System
            </span>{' '}
            for Indian PG Owners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The most feature-rich PG management app in India. Automate rent collection, manage tenants, track occupancy - all in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.03, rotate: 1 }}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a1a4e] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mt-4 flex items-center gap-2 text-[#1a1a4e]"
              >
                <span className="text-sm font-medium">Learn more</span>
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}