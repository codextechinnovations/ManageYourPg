import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard, UserPlus, UserCheck, CreditCard, Receipt, FileText,
  BedDouble, BellRing, Shield, ShieldCheck, Wallet, MessageSquare,
  Building, BarChart3, CalendarClock, Soup, Sparkles, Video,
  CheckCircle2, ArrowRight,
} from 'lucide-react'
import { ShareButton } from '../components/ShareButton'

const getSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const features = [
  {
    icon: LayoutDashboard,
    title: 'PG Owner Dashboard',
    color: 'from-blue-500 to-blue-600',
    problem: 'PG owners struggle with fragmented data across spreadsheets, paper records, and multiple apps. There is no single place to see occupancy, payments, pending dues, and revenue at a glance, leading to missed insights and delayed decisions.',
    solution: 'MY PG provides a real-time PG owner dashboard that consolidates every metric that matters. View current occupancy rates across all properties, track collected versus pending rent, monitor monthly and daily revenue trends, and identify overdue payments instantly. The dashboard updates automatically as tenants check in, pay rent, or move out.',
    benefits: [
      'Complete visibility into your entire PG business from one screen',
      'Real-time data eliminates manual spreadsheet updates and calculation errors',
      'Identify underperforming properties or rooms instantly and take corrective action',
    ],
    useCase: 'A PG owner with 3 properties in Bangalore logs into the dashboard every morning to see overnight check-ins, today\'s expected payments, and occupancy trends across all locations. They spot that one property has 3 vacant beds and immediately adjust the listing on GetYourStay.',
  },
  {
    icon: UserPlus,
    title: 'Tenant Management System',
    color: 'from-emerald-500 to-emerald-600',
    problem: 'Managing tenant information manually leads to lost documents, missed follow-ups, and time wasted searching for contact details. Paper KYC forms get misplaced and police verification records are scattered across files.',
    solution: 'The tenant management system stores complete digital profiles for every tenant including full name, phone number, email, emergency contact, government ID proofs, address proof, police verification certificates, and photographs. Upload documents once and access them instantly from any device. Set automatic reminders for lease renewals, rent due dates, and document expiry.',
    benefits: [
      'All tenant data in one secure, searchable digital repository',
      'Digital KYC storage eliminates paperwork and reduces onboarding time by 70%',
      'Never lose tenant documents again with automatic cloud backup',
    ],
    useCase: 'A property manager in Delhi receives 15 new tenant inquiries per week. Using the tenant management system, they upload KYC documents directly from WhatsApp, verify identity proofs, and approve check-ins in under 2 minutes per tenant.',
  },
  {
    icon: UserCheck,
    title: 'Digital Check-In for PG',
    color: 'from-purple-500 to-purple-600',
    problem: 'Manual check-in processes require in-person meetings, paper forms, and physical document collection. This creates delays, frustrates tenants who expect instant service, and increases administrative workload for PG staff.',
    solution: 'Tenants submit digital check-in requests through their mobile app or a web link shared by the owner. The system captures personal details, uploads ID proofs and photographs, collects emergency contact information, and records the agreed rent amount and deposit. Owners review and approve with a single tap, and the system automatically updates room occupancy status.',
    benefits: [
      'Paperless check-in reduces administrative time by 80%',
      'Tenants can check in from anywhere without visiting the office',
      'All required documents are captured digitally before the tenant arrives',
    ],
    useCase: 'A working professional moving to Pune for a new job finds a PG listing on GetYourStay. They complete the digital check-in from their hometown, upload all documents, and arrive at the PG to find their room ready and keys waiting.',
  },
  {
    icon: CreditCard,
    title: 'Rent Collection Software',
    color: 'from-orange-500 to-orange-600',
    problem: 'Late rent payments are the biggest pain point for PG owners. Manual follow-ups via phone calls and WhatsApp messages are time-consuming, awkward, and often ineffective. Tracking who has paid and who has not becomes impossible across multiple properties.',
    solution: 'The automated rent collection software sends WhatsApp reminders 3 days before the due date, 1 day before, and on the due date itself. Tenants receive a direct payment link and can pay via UPI, Google Pay, PhonePe, debit card, or credit card. Payments are confirmed instantly and digital receipts are auto-generated. Overdue tenants receive escalating reminders until payment is made.',
    benefits: [
      'Reduce late payments by up to 80% with automated multi-channel reminders',
      'Accept payments via UPI, Google Pay, PhonePe, cards, and net banking',
      'Digital receipts eliminate receipt book costs and disputes about payment proof',
    ],
    useCase: 'A PG owner in Mumbai with 40 tenants used to spend 3 hours every month chasing payments. After switching to MY PG, the automated system handles all reminders and collections. Late payments dropped from 60% to 8% in the first month.',
  },
  {
    icon: Receipt,
    title: 'PG Accounting Software',
    color: 'from-pink-500 to-pink-600',
    problem: 'PG owners struggle to track expenses across multiple categories like maintenance, food, staff salaries, utilities, and cleaning supplies. Without proper expense tracking, they cannot determine actual profitability per property.',
    solution: 'Record every expense with category tags, upload receipt images for documentation, and track spending against budgets. The system auto-categorizes recurring expenses, generates monthly spending reports, and calculates profit and loss per property. All data is exportable to Excel for CA/accountant review.',
    benefits: [
      'Know exactly how much each property earns and costs each month',
      'Tax-ready expense reports save thousands in CA fees during filing season',
      'Receipt images provide audit trail for every expense entry',
    ],
    useCase: 'A PG owner with properties in Chennai and Coimbatore uses the accounting software to track monthly expenses across both properties. They discover that electricity costs at one property are 40% higher than the other, investigate, and find an AC unit that needs servicing.',
  },
  {
    icon: FileText,
    title: 'Occupancy Management Software',
    color: 'from-cyan-500 to-cyan-600',
    problem: 'Without real-time occupancy data, PG owners cannot make informed decisions about pricing, marketing, or property expansion. Vacant beds go unnoticed for days or weeks, resulting in lost revenue.',
    solution: 'Real-time occupancy dashboards display filled versus vacant beds across all properties with color-coded visual indicators. Track monthly occupancy trends, seasonal patterns, and average length of stay. The system predicts occupancy based on historical data and alerts owners when vacancies exceed threshold limits.',
    benefits: [
      'Real-time occupancy data enables dynamic pricing and marketing decisions',
      'Identify seasonal patterns to prepare for peak and off-peak periods',
      'Get instant alerts when occupancy drops below your target threshold',
    ],
    useCase: 'A PG owner notices that occupancy drops to 70% every December based on the trend analysis report. They proactively run a holiday promotion in November and maintain 95% occupancy throughout the holiday season.',
  },
  {
    icon: BedDouble,
    title: 'Bed Management System',
    color: 'from-indigo-500 to-indigo-600',
    problem: 'Managing room and bed allocation manually across multiple floors and properties leads to double bookings, confusion about which beds are available, and inefficient space utilization.',
    solution: 'Visual floor-wise and room-wise bed layout showing exactly which beds are occupied, vacant, reserved, or under maintenance. Each bed has a complete history including current tenant, previous occupants, rent amount, and maintenance status. Assign tenants to specific beds with a single click.',
    benefits: [
      'Eliminate double bookings and allocation errors completely',
      'Visual bed map shows real-time availability across all properties',
      'Complete bed history helps with maintenance planning and tenant management',
    ],
    useCase: 'A PG with 50 beds across 4 floors uses the bed management system to track availability. A walk-in tenant asks for a bed, and the receptionist checks the app, finds 3 vacant beds, and shows the tenant exactly which rooms and beds are available.',
  },
  {
    icon: BellRing,
    title: 'Online Rent Collection App',
    color: 'from-yellow-500 to-yellow-600',
    problem: 'Tenants often forget rent due dates, and manual reminders strain the owner-tenant relationship. Without an organized reminder system, owners must personally message each tenant individually.',
    solution: 'Send automated WhatsApp and SMS reminders on a customizable schedule. Tenants receive personalized messages with their name, due amount, due date, and a direct payment link. Escalation reminders automatically trigger for overdue payments. All communication history is stored for reference.',
    benefits: [
      'Fully automated reminder system requires zero manual effort',
      'Personalized messages maintain professional owner-tenant relationships',
      'Complete communication trail for dispute resolution',
    ],
    useCase: 'A PG owner sets reminders to go out 5 days, 3 days, and 1 day before rent is due. On the due date, unpaid tenants receive a gentle reminder at 10 AM. Late payers get an escalation at 6 PM. The owner never needs to send a single rent reminder manually.',
  },
  {
    icon: Shield,
    title: 'Secure Data & Documents',
    color: 'from-red-500 to-red-600',
    problem: 'Storing tenant documents, rent records, and business data on personal phones or paper files poses serious security and compliance risks. Data loss, theft, or unauthorized access can lead to legal issues.',
    solution: 'Bank-grade 256-bit AES encryption protects all data at rest and in transit. Role-based access control ensures staff can only see information relevant to their role. Automatic daily backups to secure cloud servers prevent data loss. GDPR-compliant data handling with India-based server storage.',
    benefits: [
      'Enterprise-grade security protects sensitive tenant and business data',
      'Role-based access prevents unauthorized staff from viewing confidential information',
      'Automatic daily backups eliminate the risk of permanent data loss',
    ],
    useCase: 'A PG chain with 10 properties gives limited dashboard access to property managers so they can see only their assigned property\'s data. The owner retains full access to all properties. Staff cannot download or share tenant documents without authorization.',
  },
  {
    icon: ShieldCheck,
    title: 'Tenant Tracking & Verification',
    color: 'from-green-500 to-emerald-600',
    problem: 'Verifying tenant identity and background is essential for safety but is often skipped due to the hassle of manual verification. Unverified tenants pose security risks for PG accommodations.',
    solution: 'Built-in police verification workflow guides owners through the complete verification process. Capture and store government ID proofs (Aadhaar, PAN, Voter ID, Passport), address proof, employment details, and references. The system maintains verification status and sends renewal reminders when documents expire.',
    benefits: [
      'Complete peace of mind with verified tenant profiles',
      'Police verification workflow ensures compliance with local regulations',
      'Automated document expiry reminders prevent lapses in verification',
    ],
    useCase: 'A PG owner in Delhi NCR receives a tenant application with uploaded Aadhaar and PAN card. The system verifies the documents, initiates police verification workflow, and within 48 hours the tenant is approved with complete background clearance.',
  },
  {
    icon: Soup,
    title: 'Food Management for PG',
    color: 'from-yellow-500 to-amber-600',
    problem: 'Managing food services for PG tenants is complex - tracking meal preferences, dietary restrictions, meal counts, and food expenses manually leads to waste, unhappy tenants, and uncontrolled costs.',
    solution: 'Tenants set their meal preferences and dietary restrictions in the app. Owners plan weekly menus, track meal attendance, and manage food inventory. Daily meal counts help prepare the right quantity and reduce food waste. Mess staff get clear instructions on dietary requirements for each tenant.',
    benefits: [
      'Reduce food waste by up to 30% with accurate daily meal counts',
      'Tenants with special dietary needs (vegetarian, vegan, Jain, diabetic) are automatically flagged',
      'Track food expenses per tenant and include in monthly billing',
    ],
    useCase: 'Every evening at 8 PM, tenants mark their meal preferences for the next day in the app. The kitchen sees 28 tenants want breakfast, 35 want lunch, and 22 want dinner. They prepare exact quantities, eliminating guesswork and reducing food waste significantly.',
  },
  {
    icon: Sparkles,
    title: 'Complaint & Maintenance Management',
    color: 'from-sky-500 to-cyan-600',
    problem: 'Tenant complaints about room maintenance, cleaning issues, or facility problems get lost in WhatsApp messages or phone calls. There is no systematic way to track, assign, and resolve issues.',
    solution: 'Tenants raise complaints through the app with category selection (plumbing, electrical, cleaning, pest control, noise, etc.) and photo uploads. Complaints are automatically assigned to the relevant staff member with priority levels. Owners track resolution time, response rate, and recurring issues. Automatic escalation if complaints remain unresolved beyond the SLA.',
    benefits: [
      'Never lose a tenant complaint with centralized digital tracking',
      'Automatic assignment and escalation ensures timely resolution',
      'Complaint analytics help identify recurring problems across properties',
    ],
    useCase: 'A tenant reports a leaking faucet through the app at 9 AM with a photo. The system assigns it to the maintenance team with "High" priority. By 11 AM, the plumber confirms the fix. The tenant receives an automated satisfaction survey. The owner reviews the monthly maintenance report and notices this property needs plumbing upgrades.',
  },
  {
    icon: Video,
    title: 'CCTV Camera Integration',
    color: 'from-slate-500 to-gray-600',
    problem: 'PG security requires continuous monitoring, but checking CCTV footage from multiple cameras across properties is impractical without an integrated system.',
    solution: 'Connect existing CCTV cameras to the MY PG dashboard for live remote monitoring from anywhere. View multiple camera feeds simultaneously, access recorded footage with date and time filters, and receive motion detection alerts. Secure access ensures only authorized personnel can view feeds.',
    benefits: [
      'Monitor all properties from one dashboard - no separate CCTV app needed',
      'Motion detection alerts notify you of unusual activity in real-time',
      'Footage storage and easy playback helps resolve security incidents quickly',
    ],
    useCase: 'A PG owner on vacation in Goa checks their CCTV feed at 10 PM and notices an unknown person at the entrance of their Bangalore property. They call the caretaker immediately, who finds a former tenant attempting to enter without permission.',
  },
  {
    icon: Building,
    title: 'Multi Property Management Software',
    color: 'from-teal-500 to-teal-600',
    problem: 'As PG owners expand to multiple properties, managing them separately becomes impossible. Each property needs its own tenant records, expense tracking, staff management, and occupancy monitoring.',
    solution: 'Manage unlimited properties from a single login with separate dashboards for each location. Aggregate reports show combined revenue, occupancy, and expense across all properties. Staff, tenants, and financial data remain isolated per property while giving the owner a consolidated view.',
    benefits: [
      'Scale from one property to fifty without changing your management system',
      'Consolidated reports give you a bird\'s eye view of your entire PG business',
      'Property-level data isolation ensures accurate per-property profitability analysis',
    ],
    useCase: 'An owner with 8 properties across Bangalore, Mumbai, and Pune logs into one dashboard. They see that the Bangalore properties average 95% occupancy while Pune is at 65%. They reallocate marketing budget to Pune and adjust pricing to improve occupancy.',
  },
  {
    icon: MessageSquare,
    title: 'Notice Board',
    color: 'from-violet-500 to-violet-600',
    problem: 'Sending important announcements to all tenants - about maintenance schedules, guest policies, rent changes, or emergencies - is inefficient when done individually via phone calls or scattered WhatsApp groups.',
    solution: 'Send instant notices and announcements to all tenants or targeted groups (by property, floor, or room type). Support for emergency broadcasts with high-priority delivery, scheduled announcements for advance notices, and read receipts to track who has seen each notice.',
    benefits: [
      'Reach all tenants instantly instead of messaging one by one',
      'Read receipts ensure important announcements are actually seen',
      'Emergency broadcasts notify tenants within seconds about critical situations',
    ],
    useCase: 'The water supply department announces a 12-hour water cut for tomorrow. The PG owner creates an announcement in 30 seconds and sends it to all 40 tenants. Within 10 minutes, 35 tenants have read the notice. The owner calls the remaining 5 to ensure they are informed.',
  },
  {
    icon: Wallet,
    title: 'PG Billing Software',
    color: 'from-rose-500 to-rose-600',
    problem: 'Generating rent receipts manually is tedious, error-prone, and unprofessional. Tenants frequently lose paper receipts and request duplicates, creating administrative overhead.',
    solution: 'Generate professional digital rent receipts automatically upon payment confirmation. Receipts include property name, tenant name, payment amount, date, payment method, and a unique receipt number. Share instantly via WhatsApp or email as PDF. Bulk export receipts for tax filing. GST-ready invoices available for business tenants.',
    benefits: [
      'Auto-generated receipts eliminate manual receipt writing',
      'Digital receipts are never lost - tenants can access them anytime',
      'Bulk export saves hours during tax filing season',
    ],
    useCase: 'A tenant pays ₹8,500 rent via Google Pay at 8 AM. Within 30 seconds, they receive a WhatsApp message with their digital rent receipt. At the end of the financial year, the tenant downloads all 12 receipts from their tenant portal for tax filing.',
  },
  {
    icon: CalendarClock,
    title: 'Short Stay & Long Stay Management',
    color: 'from-amber-500 to-orange-600',
    problem: 'Many PGs serve both short-term and long-term tenants with different pricing, policies, and management needs. Handling both manually creates confusion and billing errors.',
    solution: 'Configure different pricing models for daily, weekly, monthly, and yearly stays within the same property. Automatic rate calculation based on stay duration. Manage separate check-in/check-out processes, deposit amounts, and cancellation policies per stay type. Revenue reports break down income by stay category.',
    benefits: [
      'Serve both short-term travelers and long-term tenants without complexity',
      'Automatic pricing ensures correct billing for every stay type',
      'Revenue breakdown by stay category helps optimize your rental strategy',
    ],
    useCase: 'A PG near a corporate hub has 10 beds for monthly tenants and 5 beds for daily/weekly travelers. A consultant books a room for 3 days through the app, pays the daily rate, checks in and out without paperwork. Meanwhile, a student books a room for 11 months at the monthly rate with a different deposit and cancellation policy.',
  },
]

export function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>PG Management Software Features - MY PG | Complete PG Owner Dashboard, Tenant Management & Rent Collection</title>
        <meta name="description" content="Explore all MY PG features: PG owner dashboard, tenant management system, rent collection software, PG billing software, occupancy management, bed management, multi-property management, and more. 1200+ PG owners trust MY PG." />
        <link rel="canonical" href="https://manageyourpg.com/features" />
        <meta property="og:title" content="PG Management Software Features - MY PG | Complete PG Owner Dashboard, Tenant Management & Rent Collection" />
        <meta property="og:description" content="Explore all MY PG features including PG owner dashboard, tenant management, rent collection software, occupancy management, multi-property management, and more." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
              <LayoutDashboard className="w-4 h-4" />
              Complete PG Management & Hostel ERP System
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                PG Management Software
              </span>{' '}
              Features
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Every feature in MY PG is built specifically for Indian PG owners who want to automate operations, reduce late payments, and grow their business. From real-time dashboards to multi-property management, here is everything our PG management software and app offers.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> 17 powerful features</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Trusted by 5000+ PG owners</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free 7-day trial</span>
            </div>
          </motion.div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                id={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="scroll-mt-24"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <Link to={`/features/${getSlug(feature.title)}`} className="group">
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#1a1a4e] transition-colors">{feature.title}</h2>
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {features.indexOf(feature) + 1} of {features.length}
                      </p>
                    </div>
                    <ShareButton
                      text={`MY PG ${feature.title} - PG management software feature`}
                      className="ml-auto"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-2">The Problem</h3>
                      <p className="text-gray-700 leading-relaxed">{feature.problem}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 mb-2">How MY PG Solves It</h3>
                      <p className="text-gray-700 leading-relaxed">{feature.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1a1a4e] mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${feature.color.includes('emerald') ? 'text-emerald-500' : feature.color.includes('green') ? 'text-green-500' : 'text-[#1a1a4e]'}`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Real-World Use Case</h3>
                      <p className="text-gray-700 leading-relaxed italic">"{feature.useCase}"</p>
                    </div>
                  </div>
                  <Link
                    to={`/features/${getSlug(feature.title)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a4e] hover:underline mt-4"
                  >
                    Read full feature <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Try These Features?
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                Start your 7-day free trial. No credit card required. Full access to every feature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1a4e] rounded-full font-medium hover:bg-blue-50 transition-all"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all border border-white/20"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
