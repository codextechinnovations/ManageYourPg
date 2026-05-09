import { motion } from 'motion/react'
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
  ShieldCheck,
  Wallet,
  MessageSquare,
  Building,
  BarChart3,
  CalendarClock,
  Soup,
  Sparkles,
  Video,
} from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: LayoutDashboard,
      title: 'PG Owner Dashboard',
      description:
        'Complete real-time PG owner dashboard showing occupancy rates, rent collection status, pending payments, and revenue analytics at a glance. Available for all PG owners in India.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: UserPlus,
      title: 'Tenant Management System',
      description:
        'Comprehensive tenant management system with digital KYC storage, contact details, payment history, and document management. Add and manage tenant profiles with ease.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: UserCheck,
      title: 'Digital Check-In for PG',
      description:
        'Tenants can submit digital check-in requests for your PG accommodation. Approve with one click - no paperwork needed. Paperless tenant onboarding.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: CreditCard,
      title: 'Rent Collection Software',
      description:
        'Automated rent collection software that sends reminders via WhatsApp and SMS, tracks payments in real-time, and generates digital receipts. Reduce late payments by 80%.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Receipt,
      title: 'PG Accounting Software',
      description:
        'Record and categorize PG expenses - maintenance, food, staff salary, utilities. Track spending patterns and generate tax-ready reports with ease.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: FileText,
      title: 'Occupancy Management Software',
      description:
        'Generate detailed reports on occupancy rates, payments, revenue, and expenses. Make data-driven decisions with our occupancy management software.',
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
      title: 'Online Rent Collection App',
      description:
        'Automated WhatsApp and SMS reminders for rent due dates via our online rent collection app. Reduce follow-ups and late payments significantly.',
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
      icon: ShieldCheck,
      title: 'Police & Background Verification',
      description:
        'Comprehensive tenant verification including police verification, address proof, identity check, and background screening for complete peace of mind.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Soup,
      title: 'Food Management for PG',
      description:
        'Manage meal plans, food menus, dietary preferences, mess timings, and food expenses. Track breakfast, lunch, and dinner services effortlessly.',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Sparkles,
      title: 'Cleaning & Maintenance Services',
      description:
        'Schedule room cleaning, common area maintenance, pest control, and hygiene management. Track service history and maintain PG standards.',
      color: 'from-sky-500 to-cyan-600',
    },
    {
      icon: Video,
      title: 'CCTV Camera Integration',
      description:
        'Integrate and monitor CCTV cameras across your PG properties. Live surveillance, recording storage, and remote access for complete security.',
      color: 'from-slate-500 to-gray-600',
    },
    {
      icon: Building,
      title: 'Multi Property Management Software',
      description:
        'Manage multiple PG properties from one dashboard with our multi property management software. Track occupancy and revenue across all locations in real-time.',
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
      title: 'PG Billing Software',
      description:
        'Generate professional digital rent receipts and bills instantly with our PG billing software. Share receipts via WhatsApp or email - accepted for tax filing across India.',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: CalendarClock,
      title: 'Short Stay & Long Stay',
      description:
        'Flexible rental plans for both short stays (daily/weekly) and long stays (monthly/yearly). Manage different pricing and terms effortlessly.',
      color: 'from-amber-500 to-orange-600',
    },
  ]

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
            Complete PG Management & Hostel ERP System
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
              <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1a1a4e] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}