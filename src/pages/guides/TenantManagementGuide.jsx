import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { CheckCircle2, BookOpen, Users, Shield, FileText, Search, Smartphone, Clock, Building2, ArrowRight } from 'lucide-react'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Guides', path: '/guides' },
  { label: 'Tenant Management Guide', path: '/guides/tenant-management-guide' },
]

const features = [
  { icon: Users, title: 'Digital KYC Verification', desc: 'Upload Aadhaar, PAN, address proof, and police verification certificates. All documents stored securely in the cloud.', slug: 'tenant-management-system' },
  { icon: Shield, title: 'Automated Lease Agreements', desc: 'Generate and store lease agreements digitally. Set automatic renewal reminders and track lease end dates.', slug: 'digital-check-in-for-pg' },
  { icon: Search, title: 'Centralized Tenant Database', desc: 'Searchable directory of all current and past tenants with complete history including payments, complaints, and documents.', slug: 'tenant-tracking-and-verification' },
  { icon: FileText, title: 'Payment History Tracking', desc: 'Complete transaction history for each tenant — rent payments, deposits, deductions, and refunds — all in one place.', slug: 'online-rent-collection-app' },
  { icon: Clock, title: 'Move-in/Move-out Management', desc: 'Track check-in and check-out dates. Automate security deposit calculations and room status updates.', slug: 'short-stay-and-long-stay-management' },
  { icon: Smartphone, title: 'Tenant Self-Service Portal', desc: 'Tenants view payment history, download receipts, raise complaints, and receive announcements through the app.', slug: 'digital-check-in-for-pg' },
]

const faqs = [
  { q: 'What information should I collect from PG tenants?', a: 'At minimum, collect full name, phone number, email, emergency contact, Aadhaar number, PAN card, address proof, and a photograph. MY PG provides a digital KYC template that captures all required information and stores documents securely.' },
  { q: 'How does digital KYC work for PG tenants?', a: 'Tenants submit documents through the MY PG app or a web link shared by the owner. They take photos of their Aadhaar card, PAN card, and address proof. The system stores these documents securely in the cloud, linked to the tenant\'s profile. Owners can access them anytime, anywhere.' },
  { q: 'Can I track security deposits digitally?', a: 'Yes, MY PG tracks security deposits for each tenant including amount paid, date collected, and deductions at move-out. The system automatically calculates the refundable amount based on configured deductions.' },
  { q: 'How do I handle police verification for tenants?', a: 'MY PG stores police verification certificates digitally as part of the tenant profile. You can upload completed certificates and set reminders for renewals. Some cities require quarterly police verification submission.' },
  { q: 'What happens to tenant data after they move out?', a: 'Tenant data remains in your MY PG account as historical records. You can access past tenant information anytime for reference or legal purposes. The system keeps the complete checkout history including final rent calculation and deposit refund status.' },
  { q: 'Can tenants access their own information?', a: 'Yes, tenants get access to a self-service portal where they can view their payment history, download digital receipts, submit maintenance requests, and update their contact information. This reduces owner phone calls by up to 70%.' },
]

export function TenantManagementGuide() {
  return (
    <>
      <Helmet>
        <title>Tenant Management System for PG Accommodation: The Ultimate Guide | MY PG</title>
        <meta name="description" content="Ultimate guide to tenant management for PG owners in India. Learn digital KYC, lease agreements, payment tracking, and move-in/move-out management. Free trial available." />
        <link rel="canonical" href="https://manageyourpg.com/guides/tenant-management-guide" />
        <meta property="og:title" content="Tenant Management System for PG Accommodation: The Ultimate Guide" />
        <meta property="og:description" content="Ultimate guide to tenant management for PG owners. Digital KYC, lease agreements, payment tracking, and more." />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Tenant Management System for PG Accommodation: The Ultimate Guide', description: 'Ultimate guide to tenant management for PG owners in India.', author: { '@type': 'Organization', name: 'MY PG Solutions' }, publisher: { '@type': 'Organization', name: 'MY PG Solutions', logo: { '@type': 'ImageObject', url: 'https://manageyourpg.com/favicon.png' } }, datePublished: '2026-05-10', dateModified: '2026-05-10' })}</script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full">
              <BookOpen className="w-4 h-4" /> Ultimate Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tenant Management System for{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                PG Accommodation
              </span>
              : The Ultimate Guide
            </h1>
            <p className="text-lg text-gray-600 mb-8">Complete guide to managing PG tenants in India — from digital KYC and lease agreements to rent tracking and move-out management. Learn how to streamline tenant operations with management software.</p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 md:p-8 text-white mb-12">
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">In This Guide</p>
            <ul className="space-y-2">
              <li><a href="#why-digital" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Why Digital Tenant Management?</a></li>
              <li><a href="#features" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> 6 Essential Tenant Management Features</a></li>
              <li><a href="#kyc" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Digital KYC Process</a></li>
              <li><a href="#lifecycle" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> Complete Tenant Lifecycle</a></li>
              <li><a href="#faq" className="text-white hover:text-blue-200 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-300" /> FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-12">
            <section id="why-digital" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Digital Tenant Management?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Managing PG tenant information manually using paper files, spreadsheets, and phone notes is risky and inefficient. Documents get lost, critical contact information is misplaced, and tracking payment history for each tenant becomes impossible as your PG grows.</p>
              <p className="text-gray-700 leading-relaxed">Digital tenant management through MY PG solves these problems by providing a centralized, searchable, secure repository for all tenant information. Every document is stored in the cloud with 256-bit encryption, accessible from any device within seconds.</p>
            </section>

            <section id="features" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">6 Essential Tenant Management Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map(f => (
                  <Link key={f.title} to={`/features/${f.slug}`} className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <f.icon className="w-5 h-5 text-[#1a1a4e] mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-[#1a1a4e]">{f.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="kyc" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Digital KYC Process for PG Tenants</h2>
              <div className="grid md:grid-cols-4 gap-3 mb-6">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">1</div>
                  <p className="text-sm text-gray-700">Tenant submits documents via app or web link</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">2</div>
                  <p className="text-sm text-gray-700">Documents stored securely in cloud</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">3</div>
                  <p className="text-sm text-gray-700">Owner verifies and approves digitally</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">4</div>
                  <p className="text-sm text-gray-700">Room status updates automatically</p>
                </div>
              </div>
            </section>

            <section id="lifecycle" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Complete Tenant Lifecycle</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1a1a4e] flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div><h3 className="font-bold text-gray-900">Inquiry & Screening</h3><p className="text-sm text-gray-600">Receive tenant inquiries, review preferences, and screen potential tenants through digital profiles before they visit.</p></div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1a1a4e] flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div><h3 className="font-bold text-gray-900">Digital Check-in</h3><p className="text-sm text-gray-600">Tenant submits KYC documents, signs agreement digitally, and gets assigned to a room — all without paperwork.</p></div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1a1a4e] flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div><h3 className="font-bold text-gray-900">Ongoing Management</h3><p className="text-sm text-gray-600">Track rent payments, raise maintenance requests, send announcements, and communicate through the platform.</p></div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1a1a4e] flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div><h3 className="font-bold text-gray-900">Check-out & Deposit</h3><p className="text-sm text-gray-600">Process move-out, calculate final rent, deduct any damages, and process security deposit refund automatically.</p></div>
                </div>
              </div>
            </section>
          </div>

          <section id="faq" className="scroll-mt-24 mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                    {faq.q}
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Streamline Your Tenant Management Today</h2>
              <p className="text-emerald-100 mb-6 max-w-lg mx-auto">Free 7-day trial. No credit card. Full access to all tenant management features.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="secondary" href="/#contact">Start Free Trial</CTAButton>
                <CTAButton variant="ghost" href="/features/tenant-management-system">View Features</CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
