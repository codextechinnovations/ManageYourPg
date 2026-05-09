import { motion } from 'motion/react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="border border-gray-200 rounded-2xl overflow-hidden"
      role="listitem"
      aria-label={`Question ${index + 1}: ${question}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a1a4e]/20"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <h2 className="text-lg font-semibold text-gray-900 pr-4">{question}</h2>
        <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true">
          <ChevronDown className="w-6 h-6 text-[#1a1a4e]" />
        </div>
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  )
}

export function FAQ() {
  const faqs = [
    {
      question: "What is the best PG management software in India?",
      answer: "MY PG is India's #1 rated PG management software based on 4.8 out of 5 stars from over 5,000 verified user reviews (AggregateRating schema, 2026). The platform helps PG owners automate rent collection, manage tenants with digital KYC, track room occupancy in real-time, and generate expense reports across multiple properties. Available in 25+ Indian cities including Bangalore, Mumbai, Delhi, Chennai, Hyderabad, and Pune with a 7-day free trial."
    },
    {
      question: "How does PG management software help PG owners?",
      answer: "PG management software automates daily operations and reduces late rent payments by up to 80% through automated WhatsApp reminders (MY PG user survey, 2025-2026). Features include digital tenant management with KYC storage and police verification, real-time room and bed occupancy tracking across multiple properties, CCTV camera integration for security monitoring, and food service management. MY PG replaces manual spreadsheets with a centralized mobile app and web dashboard accessible from anywhere."
    },
    {
      question: "How much does PG management software cost in India?",
      answer: "MY PG offers a 7-day free trial with no credit card required. After the trial, Premium plans cost ₹499 per month or ₹3,999 per year, saving 33% with annual billing (Pricing page, manageyourpg.com/#pricing). Features include unlimited tenants, multi-property management, advanced analytics, CCTV integration, food services, cleaning management, police verification, and priority support. Competitors typically charge ₹1,500 to ₹3,000 per month for similar features."
    },
    {
      question: "How to automate rent collection for my PG?",
      answer: "Install MY PG and create tenant profiles with rent amounts and due dates. The system automatically sends WhatsApp reminders 3 days before, 1 day before, and on the due date. Tenants receive notifications on their phone and can pay via UPI, Google Pay, or PhonePe. Digital receipts generate automatically upon payment confirmation. This system reduces manual follow-ups by 80% according to MY PG user data from 2025-2026."
    },
    {
      question: "Can I manage multiple PG properties from one account?",
      answer: "Yes, MY PG supports unlimited multi-property management from a single dashboard at no extra cost. Each property maintains separate room configurations, tenant records, occupancy tracking, revenue analytics, and expense categories. The feature is designed for PG owners with properties across different cities like Bangalore, Mumbai, Delhi, Chennai, Hyderabad, and Pune."
    },
    {
      question: "Is there a free trial for PG management app?",
      answer: "MY PG offers a 7-day free trial with full access to all premium features and no credit card required. During the trial, PG owners can manage unlimited tenants, enable WhatsApp rent reminders, generate digital receipts and reports, configure CCTV integration, set up food services, and access priority support. After the trial, users can choose Premium at ₹499 per month or ₹3,999 per year."
    },
    {
      question: "What features does PG management software need?",
      answer: "Essential PG management software features include automated rent collection with WhatsApp reminders, digital tenant KYC storage with police verification, real-time room and bed occupancy tracking, expense categorization with tax-ready reports, multi-property dashboard, CCTV camera integration, food and mess management, and digital rent receipts shareable via WhatsApp. MY PG provides all these features integrated into one mobile app and web dashboard."
    },
    {
      question: "How long does it take to set up MY PG?",
      answer: "MY PG sets up in approximately 5 minutes. Download the APK or open the web dashboard, create an account with your phone number, add your PG property details, configure rooms and beds with rent amounts, and start adding tenants. Free onboarding support is available 24/7 via chat, email, and WhatsApp for assistance."
    },
    {
      question: "What cities is PG management software available in?",
      answer: "MY PG serves PG owners in 25+ Indian cities including Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Coimbatore, and 500+ towns (MY PG service coverage data, 2026). The platform supports 6 Indian languages: Hindi, English, Tamil, Telugu, Kannada, and Malayalam. Payment integrations include UPI, Google Pay, PhonePe, and Paytm."
    },
    {
      question: "Is MY PG secure for storing tenant data?",
      answer: "MY PG uses bank-grade 256-bit encryption for all data storage and is GDPR compliant. The platform provides role-based access control, police verification integration, automatic daily cloud backups, and 99.9% uptime guarantee. All tenant data is stored on secure servers within India and is never shared with third parties."
    },
    {
      question: "Can tenants use the PG management app?",
      answer: "Yes, tenants have access to self-service features including viewing rent details and payment history, paying rent via UPI or Google Pay, raising maintenance complaints with photo uploads, viewing owner notices and announcements, and accessing digital rent receipts for tax purposes. This reduces the owner's workload by enabling tenant self-service."
    },
    {
      question: "Does MY PG support digital rent receipts?",
      answer: "MY PG generates professional digital rent receipts automatically upon payment confirmation. Receipts include property name, address, tenant name, amount, payment date, and method. They can be shared via WhatsApp or email in PDF format and are accepted for tax filing purposes. All receipts are stored in tenant profiles and can be bulk-exported to Excel."
    },
    {
      question: "Why use PG software over Excel or manual tracking?",
      answer: "Manual tracking in Excel leads to calculation errors, missed rent due dates, data loss risks, and no automated tenant communication. MY PG eliminates these issues by automating rent reminders via WhatsApp, providing real-time occupancy dashboards, generating digital receipts and tax reports, and offering secure cloud backup. Users report an 80% reduction in late payments after switching to MY PG (MY PG user survey, 2025-2026)."
    },
    {
      question: "What security features does MY PG offer?",
      answer: "MY PG offers CCTV camera integration for live property monitoring, police verification and background screening for tenants, encrypted KYC document storage, role-based access control for staff, automatic daily backups, and 99.9% uptime guarantee. All data is stored on secure servers in India with GDPR-compliant handling practices."
    },
    {
      question: "Can I get reports on my PG occupancy and revenue?",
      answer: "MY PG provides real-time occupancy dashboards showing filled versus vacant beds, revenue analytics with monthly and yearly trends, expense reports by category, pending payment reports for overdue rents, and profit and loss analysis per property. All reports can be exported to Excel or PDF with custom date range filtering."
    }
  ]

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      aria-label="Frequently asked questions about PG management software"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Know About{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              PG Management Software
            </span>{' '}
            in India
          </h2>
          <p className="text-lg text-gray-600">
            Get instant answers to common questions about MY PG - India's #1 PG management app for PG owners
          </p>
        </motion.div>

        <div className="space-y-4" role="list" aria-label="FAQ questions and answers">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? Contact our team for a free demo
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
            Request Free Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}