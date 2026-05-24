import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'
import {
  LayoutDashboard, UserPlus, UserCheck, CreditCard, Receipt, FileText,
  BedDouble, BellRing, Shield, ShieldCheck, Wallet, MessageSquare,
  Building, BarChart3, CalendarClock, Soup, Sparkles, Video,
  CheckCircle2, ArrowLeft, ArrowRight, Star,
} from 'lucide-react'
import { ShareButton } from '../components/ShareButton'

const features = [
  {
    slug: 'pg-owner-dashboard',
    icon: LayoutDashboard,
    title: 'PG Owner Dashboard',
    color: 'from-blue-500 to-blue-600',
    shortDesc: 'Complete real-time PG owner dashboard showing occupancy rates, rent collection status, pending payments, and revenue analytics at a glance.',
    problem: 'PG owners struggle with fragmented data across spreadsheets, paper records, and multiple apps. There is no single place to see occupancy, payments, pending dues, and revenue at a glance, leading to missed insights and delayed decisions.',
    solution: 'MY PG provides a real-time PG owner dashboard that consolidates every metric that matters. View current occupancy rates across all properties, track collected versus pending rent, monitor monthly and daily revenue trends, and identify overdue payments instantly. The dashboard updates automatically as tenants check in, pay rent, or move out.',
    benefits: [
      'Complete visibility into your entire PG business from one screen',
      'Real-time data eliminates manual spreadsheet updates and calculation errors',
      'Identify underperforming properties or rooms instantly and take corrective action',
    ],
    useCase: 'A PG owner with 3 properties in Bangalore logs into the dashboard every morning to see overnight check-ins, today\'s expected payments, and occupancy trends across all locations. They spot that one property has 3 vacant beds and immediately adjusts pricing.',
  },
  {
    slug: 'tenant-management-system',
    icon: UserPlus,
    title: 'Tenant Management System',
    color: 'from-emerald-500 to-emerald-600',
    shortDesc: 'Comprehensive tenant management system with digital KYC storage, contact details, payment history, and document management.',
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
    slug: 'digital-check-in-for-pg',
    icon: UserCheck,
    title: 'Digital Check-In for PG',
    color: 'from-purple-500 to-purple-600',
    shortDesc: 'Tenants can submit digital check-in requests via your PG management app. Approve with one click - no paperwork needed.',
    problem: 'Manual check-in processes require in-person meetings, paper forms, and physical document collection. This creates delays, frustrates tenants who expect instant service, and increases administrative workload for PG staff.',
    solution: 'Tenants submit digital check-in requests through their mobile app or a web link shared by the owner. The system captures personal details, uploads ID proofs and photographs, collects emergency contact information, and records the agreed rent amount and deposit. Owners review and approve with a single tap, and the system automatically updates room occupancy status.',
    benefits: [
      'Paperless check-in reduces administrative time by 80%',
      'Tenants can check in from anywhere without visiting the office',
      'All required documents are captured digitally before the tenant arrives',
    ],
    useCase: 'A working professional moving to Pune for a new job finds a PG listing on GetYourStay. They complete the digital check-in from their hometown, upload all documents, and arrive to find their room ready and keys waiting.',
  },
  {
    slug: 'rent-collection-software',
    icon: CreditCard,
    title: 'Rent Collection Software',
    color: 'from-orange-500 to-orange-600',
    shortDesc: 'Automated rent collection software that sends reminders via WhatsApp and SMS, tracks payments in real-time, and generates digital receipts.',
    problem: 'Late rent payments are the biggest pain point for PG owners. Manual follow-ups via phone calls and WhatsApp messages are time-consuming, awkward, and often ineffective. Tracking who has paid becomes impossible across multiple properties.',
    solution: 'The automated rent collection software sends WhatsApp reminders 3 days before the due date, 1 day before, and on the due date itself. Tenants receive a direct payment link and can pay via UPI, Google Pay, PhonePe, debit card, or credit card. Payments are confirmed instantly and digital receipts are auto-generated. Overdue tenants receive escalating reminders until payment is made.',
    benefits: [
      'Reduce late payments by up to 80% with automated multi-channel reminders',
      'Accept payments via UPI, Google Pay, PhonePe, cards, and net banking',
      'Digital receipts eliminate receipt book costs and disputes about payment proof',
    ],
    useCase: 'A PG owner in Mumbai with 40 tenants used to spend 3 hours every month chasing payments. After switching to MY PG, the automated system handles all reminders and collections. Late payments dropped from 60% to 8% in the first month.',
  },
  {
    slug: 'pg-accounting-software',
    icon: Receipt,
    title: 'PG Accounting Software',
    color: 'from-pink-500 to-pink-600',
    shortDesc: 'Record and categorize PG expenses - maintenance, food, staff salary, utilities. Track spending patterns and generate tax-ready reports.',
    problem: 'PG owners struggle to track expenses across multiple categories like maintenance, food, staff salaries, utilities, and cleaning supplies. Without proper expense tracking, they cannot determine actual profitability per property.',
    solution: 'Record every expense with category tags, upload receipt images for documentation, and track spending against budgets. The system auto-categorizes recurring expenses, generates monthly spending reports, and calculates profit and loss per property. All data is exportable to Excel for CA or accountant review.',
    benefits: [
      'Know exactly how much each property earns and costs each month',
      'Tax-ready expense reports save thousands in CA fees during filing season',
      'Receipt images provide audit trail for every expense entry',
    ],
    useCase: 'A PG owner with properties in Chennai and Coimbatore uses the accounting software to track monthly expenses across both properties. They discover that electricity costs at one property are 40% higher, investigate, and find an AC unit that needs servicing.',
  },
  {
    slug: 'occupancy-management-software',
    icon: FileText,
    title: 'Occupancy Management Software',
    color: 'from-cyan-500 to-cyan-600',
    shortDesc: 'Generate detailed reports on occupancy rates, payments, revenue, and expenses. Make data-driven decisions with our occupancy management software.',
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
    slug: 'bed-management-system',
    icon: BedDouble,
    title: 'Bed Management System',
    color: 'from-indigo-500 to-indigo-600',
    shortDesc: 'Track room occupancy, bed availability, and pricing with our bed management system. Know vacant beds instantly across multi-floor PGs.',
    problem: 'Managing room and bed allocation manually across multiple floors and properties leads to double bookings, confusion about which beds are available, and inefficient space utilization.',
    solution: 'Visual floor-wise and room-wise bed layout showing exactly which beds are occupied, vacant, reserved, or under maintenance. Each bed has a complete history including current tenant, previous occupants, rent amount, and maintenance status. Assign tenants to specific beds with a single click.',
    benefits: [
      'Eliminate double bookings and allocation errors completely',
      'Visual bed map shows real-time availability across all properties',
      'Complete bed history helps with maintenance planning and tenant management',
    ],
    useCase: 'A PG with 50 beds across 4 floors uses the bed management system to track availability. A walk-in tenant asks for a bed, and the receptionist checks the app, finds 3 vacant beds, and shows exactly which rooms and beds are available.',
  },
  {
    slug: 'online-rent-collection-app',
    icon: BellRing,
    title: 'Online Rent Collection App',
    color: 'from-yellow-500 to-yellow-600',
    shortDesc: 'Automated WhatsApp and SMS reminders for rent due dates via our online rent collection app. Reduce follow-ups and late payments.',
    problem: 'Tenants often forget rent due dates, and manual reminders strain the owner-tenant relationship. Without an organized reminder system, owners must personally message each tenant individually.',
    solution: 'Send automated WhatsApp and SMS reminders on a customizable schedule. Tenants receive personalized messages with their name, due amount, due date, and a direct payment link. Escalation reminders automatically trigger for overdue payments. All communication history is stored for reference.',
    benefits: [
      'Fully automated reminder system requires zero manual effort',
      'Personalized messages maintain professional owner-tenant relationships',
      'Complete communication trail for dispute resolution',
    ],
    useCase: 'A PG owner sets reminders to go out 5 days, 3 days, and 1 day before rent is due. On the due date, unpaid tenants receive a gentle reminder at 10 AM. Late payers get an escalation at 6 PM. The owner never sends a single rent reminder manually.',
  },
  {
    slug: 'secure-data-and-documents',
    icon: Shield,
    title: 'Secure Data & Documents',
    color: 'from-red-500 to-red-600',
    shortDesc: 'Bank-grade security for tenant documents, rent records, and KYC data. GDPR compliant data storage with automatic backups.',
    problem: 'Storing tenant documents, rent records, and business data on personal phones or paper files poses serious security and compliance risks. Data loss, theft, or unauthorized access can lead to legal issues.',
    solution: 'Bank-grade 256-bit AES encryption protects all data at rest and in transit. Role-based access control ensures staff can only see information relevant to their role. Automatic daily backups to secure cloud servers prevent data loss. GDPR-compliant data handling with India-based server storage.',
    benefits: [
      'Enterprise-grade security protects sensitive tenant and business data',
      'Role-based access prevents unauthorized staff from viewing confidential information',
      'Automatic daily backups eliminate the risk of permanent data loss',
    ],
    useCase: 'A PG chain with 10 properties gives limited dashboard access to property managers so they can see only their assigned property\'s data. The owner retains full access. Staff cannot download or share tenant documents without authorization.',
  },
  {
    slug: 'tenant-tracking-and-verification',
    icon: ShieldCheck,
    title: 'Tenant Tracking & Verification',
    color: 'from-green-500 to-emerald-600',
    shortDesc: 'Comprehensive tenant verification including police verification, address proof, identity check, and background screening.',
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
    slug: 'food-management-for-pg',
    icon: Soup,
    title: 'Food Management for PG',
    color: 'from-yellow-500 to-amber-600',
    shortDesc: 'Manage meal plans, food menus, dietary preferences, mess timings, and food expenses. Track breakfast, lunch, and dinner services.',
    problem: 'Managing food services for PG tenants is complex - tracking meal preferences, dietary restrictions, meal counts, and food expenses manually leads to waste, unhappy tenants, and uncontrolled costs.',
    solution: 'Tenants set their meal preferences and dietary restrictions in the app. Owners plan weekly menus, track meal attendance, and manage food inventory. Daily meal counts help prepare the right quantity and reduce food waste. Mess staff get clear instructions on dietary requirements for each tenant.',
    benefits: [
      'Reduce food waste by up to 30% with accurate daily meal counts',
      'Tenants with special dietary needs are automatically flagged',
      'Track food expenses per tenant and include in monthly billing',
    ],
    useCase: 'Every evening at 8 PM, tenants mark their meal preferences for the next day in the app. The kitchen sees 28 tenants want breakfast, 35 want lunch, and 22 want dinner. They prepare exact quantities, eliminating guesswork.',
  },
  {
    slug: 'complaint-and-maintenance-management',
    icon: Sparkles,
    title: 'Complaint & Maintenance Management',
    color: 'from-sky-500 to-cyan-600',
    shortDesc: 'Schedule room cleaning, common area maintenance, pest control, and hygiene management with our complaint management system.',
    problem: 'Tenant complaints about room maintenance, cleaning issues, or facility problems get lost in WhatsApp messages or phone calls. There is no systematic way to track, assign, and resolve issues.',
    solution: 'Tenants raise complaints through the app with category selection and photo uploads. Complaints are automatically assigned to the relevant staff member with priority levels. Owners track resolution time, response rate, and recurring issues. Automatic escalation if complaints remain unresolved beyond the SLA.',
    benefits: [
      'Never lose a tenant complaint with centralized digital tracking',
      'Automatic assignment and escalation ensures timely resolution',
      'Complaint analytics help identify recurring problems across properties',
    ],
    useCase: 'A tenant reports a leaking faucet through the app at 9 AM with a photo. The system assigns it to maintenance with High priority. By 11 AM, the plumber confirms the fix. The tenant receives an automated satisfaction survey.',
  },
  {
    slug: 'cctv-camera-integration',
    icon: Video,
    title: 'CCTV Camera Integration',
    color: 'from-slate-500 to-gray-600',
    shortDesc: 'Integrate and monitor CCTV cameras across your PG properties. Live surveillance, recording storage, and remote access.',
    problem: 'PG security requires continuous monitoring, but checking CCTV footage from multiple cameras across properties is impractical without an integrated system.',
    solution: 'Connect existing CCTV cameras to the MY PG dashboard for live remote monitoring from anywhere. View multiple camera feeds simultaneously, access recorded footage with date and time filters, and receive motion detection alerts. Secure access ensures only authorized personnel can view feeds.',
    benefits: [
      'Monitor all properties from one dashboard without a separate CCTV app',
      'Motion detection alerts notify you of unusual activity in real-time',
      'Footage storage and easy playback helps resolve security incidents quickly',
    ],
    useCase: 'A PG owner on vacation in Goa checks their CCTV feed at 10 PM and notices an unknown person at the entrance of their Bangalore property. They call the caretaker immediately, who finds a former tenant attempting to enter without permission.',
  },
  {
    slug: 'multi-property-management-software',
    icon: Building,
    title: 'Multi Property Management Software',
    color: 'from-teal-500 to-teal-600',
    shortDesc: 'Manage multiple PG properties from one dashboard with our multi property management software. Track occupancy and revenue across all locations.',
    problem: 'As PG owners expand to multiple properties, managing them separately becomes impossible. Each property needs its own tenant records, expense tracking, staff management, and occupancy monitoring.',
    solution: 'Manage unlimited properties from a single login with separate dashboards for each location. Aggregate reports show combined revenue, occupancy, and expense across all properties. Staff, tenants, and financial data remain isolated per property while giving the owner a consolidated view.',
    benefits: [
      'Scale from one property to fifty without changing your management system',
      'Consolidated reports give you a bird\'s eye view of your entire PG business',
      'Property-level data isolation ensures accurate per-property profitability analysis',
    ],
    useCase: 'An owner with 8 properties across Bangalore, Mumbai, and Pune logs into one dashboard. They see Bangalore properties average 95% occupancy while Pune is at 65%. They reallocate marketing budget to Pune and adjust pricing.',
  },
  {
    slug: 'notice-board',
    icon: MessageSquare,
    title: 'Notice Board',
    color: 'from-violet-500 to-violet-600',
    shortDesc: 'Send notices and announcements to all tenants instantly. Emergency broadcasts, monthly updates, and targeted communications.',
    problem: 'Sending important announcements to all tenants about maintenance schedules, guest policies, rent changes, or emergencies is inefficient when done individually via phone calls or scattered WhatsApp groups.',
    solution: 'Send instant notices and announcements to all tenants or targeted groups (by property, floor, or room type). Support for emergency broadcasts with high-priority delivery, scheduled announcements for advance notices, and read receipts to track who has seen each notice.',
    benefits: [
      'Reach all tenants instantly instead of messaging one by one',
      'Read receipts ensure important announcements are actually seen',
      'Emergency broadcasts notify tenants within seconds about critical situations',
    ],
    useCase: 'The water supply department announces a 12-hour water cut for tomorrow. The PG owner creates an announcement in 30 seconds and sends it to all 40 tenants. Within 10 minutes, 35 tenants have read the notice. The owner calls the remaining 5.',
  },
  {
    slug: 'pg-billing-software',
    icon: Wallet,
    title: 'PG Billing Software',
    color: 'from-rose-500 to-rose-600',
    shortDesc: 'Generate professional digital rent receipts and bills instantly with our PG billing software. Share via WhatsApp or email.',
    problem: 'Generating rent receipts manually is tedious, error-prone, and unprofessional. Tenants frequently lose paper receipts and request duplicates, creating administrative overhead.',
    solution: 'Generate professional digital rent receipts automatically upon payment confirmation. Receipts include property name, tenant name, payment amount, date, payment method, and a unique receipt number. Share instantly via WhatsApp or email as PDF. Bulk export receipts for tax filing. GST-ready invoices available for business tenants.',
    benefits: [
      'Auto-generated receipts eliminate manual receipt writing',
      'Digital receipts are never lost - tenants can access them anytime',
      'Bulk export saves hours during tax filing season',
    ],
    useCase: 'A tenant pays Rs 8,500 rent via Google Pay at 8 AM. Within 30 seconds, they receive a WhatsApp message with their digital rent receipt. At year end, the tenant downloads all 12 receipts from their tenant portal for tax filing.',
  },
  {
    slug: 'short-stay-and-long-stay-management',
    icon: CalendarClock,
    title: 'Short Stay & Long Stay Management',
    color: 'from-amber-500 to-orange-600',
    shortDesc: 'Flexible rental plans for both short stays and long stays. Manage different pricing and terms effortlessly.',
    problem: 'Many PGs serve both short-term and long-term tenants with different pricing, policies, and management needs. Handling both manually creates confusion and billing errors.',
    solution: 'Configure different pricing models for daily, weekly, monthly, and yearly stays within the same property. Automatic rate calculation based on stay duration. Manage separate check-in and check-out processes, deposit amounts, and cancellation policies per stay type. Revenue reports break down income by stay category.',
    benefits: [
      'Serve both short-term travelers and long-term tenants without complexity',
      'Automatic pricing ensures correct billing for every stay type',
      'Revenue breakdown by stay category helps optimize your rental strategy',
    ],
    useCase: 'A PG near a corporate hub has 10 beds for monthly tenants and 5 beds for daily or weekly travelers. A consultant books a room for 3 days through the app, pays the daily rate, checks in and out without paperwork. Meanwhile, a student books a room for 11 months with a different deposit.',
  },
]

export function FeatureDetail() {
  const { slug } = useParams()
  const feature = features.find((f) => f.slug === slug)

  if (!feature) {
    return <Navigate to="/features" replace />
  }

  const currentIndex = features.indexOf(feature)
  const prevFeature = currentIndex > 0 ? features[currentIndex - 1] : null
  const nextFeature = currentIndex < features.length - 1 ? features[currentIndex + 1] : null

  return (
    <>
      <Helmet>
        <title>{feature.title} - MY PG | PG Management Software Feature</title>
        <meta name="description" content={`Learn how MY PG's ${feature.title.toLowerCase()} helps PG owners. ${feature.shortDesc}`} />
        <link rel="canonical" href={`https://manageyourpg.com/features/${feature.slug}`} />
        <meta property="og:title" content={`${feature.title} - MY PG | PG Management Software Feature`} />
        <meta property="og:description" content={feature.shortDesc} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'Features', path: '/features' }, { label: feature.title, path: '#' }]))}</script>
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a1a4e] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all features
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-5 mb-8">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Feature {currentIndex + 1} of {features.length}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1 text-xs text-yellow-500">
                    <Star className="w-3 h-3 fill-current" /> 4.8/5
                  </span>
                </div>
                <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Features', path: '/features' }, { label: feature.title, path: '#' }]} />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{feature.title}</h1>
                <p className="text-gray-600 mt-2">{feature.shortDesc}</p>
              </div>
              <ShareButton
                text={`MY PG ${feature.title} - ${feature.shortDesc}`}
                url={`https://manageyourpg.com/features/${feature.slug}`}
                className="ml-auto"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h2 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-3">The Problem PG Owners Face</h2>
                <p className="text-gray-800 leading-relaxed">{feature.problem}</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h2 className="text-sm font-bold uppercase tracking-wider text-green-700 mb-3">How MY PG Solves It</h2>
                <p className="text-gray-800 leading-relaxed">{feature.solution}</p>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#1a1a4e] mb-4">Key Benefits</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 text-[#1a1a4e]`} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-3">Real-World Use Case</h2>
                <p className="text-white leading-relaxed italic">&ldquo;{feature.useCase}&rdquo;</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center mt-8"
          >
            {prevFeature ? (
              <Link
                to={`/features/${prevFeature.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all text-sm font-medium text-gray-700"
              >
                <ArrowLeft className="w-4 h-4" />
                {prevFeature.title}
              </Link>
            ) : (
              <div />
            )}
            {nextFeature ? (
              <Link
                to={`/features/${nextFeature.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a4e] text-white rounded-full shadow-md hover:shadow-lg transition-all text-sm font-medium"
              >
                {nextFeature.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-2xl transition-all font-medium"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
