import { motion } from 'motion/react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
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
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
          aria-hidden="true"
        >
          <ChevronDown className="w-6 h-6 text-[#1a1a4e]" />
        </motion.div>
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
    </motion.div>
  )
}

export function FAQ() {
  const faqs = [
    {
      question: "What is the best PG management software in India?",
      answer: "MY PG is the #1 rated PG management software in India, trusted by over 5000+ PG owners across 25+ cities including Bangalore, Mumbai, Delhi, Chennai, Hyderabad, and Pune. It offers complete tenant management, automated rent collection with WhatsApp reminders, room occupancy tracking, expense management, CCTV integration, food & cleaning services, police verification, and detailed analytics. MY PG supports short stay and long stay options with flexible pricing. Try 7-day FREE trial today with no credit card required!"
    },
    {
      question: "How does PG management software help PG owners?",
      answer: "PG management software automates daily operations for PG owners: Automated rent collection reduces late payments by 80% with WhatsApp reminders on due dates. Tenant management includes digital KYC storage, police verification, and background screening. Room & bed management tracks occupancy in real-time. Expense tracking categorizes spending. Complaint management handles tenant issues. CCTV integration provides security surveillance. Multi-property support manages unlimited buildings from one dashboard. All accessible via mobile app and web dashboard."
    },
    {
      question: "How much does PG management software cost in India?",
      answer: "MY PG offers India's most affordable pricing: 7-day FREE trial with no credit card required. After trial, Premium plans start at just ₹499/month or ₹3,999/year (33% savings). Features include unlimited tenants, multi-property management, advanced reports, CCTV integration, food services, cleaning management, police verification, and priority 24/7 support. Other PG apps charge ₹1500-3000/month - MY PG is the best value choice."
    },
    {
      question: "How to automate rent collection for my PG?",
      answer: "Step 1: Download MY PG APK from this website. Step 2: Set up tenant profiles with contact numbers. Step 3: Configure rent amount and due date for each tenant. Step 4: Enable automatic WhatsApp reminders (3 days before, 1 day before, on due date). Step 5: Tenants receive reminders via WhatsApp and app notification. Step 6: Track payment status in real-time dashboard. Step 7: Digital rent receipts generate automatically upon payment. This reduces manual follow-ups by 80%."
    },
    {
      question: "Can I manage multiple PG properties from one account?",
      answer: "Yes, MY PG supports unlimited multi-property management. Add each PG building with its own rooms and tenants. Features: Switch between properties instantly from dashboard. Track occupancy per property. View revenue analytics per property. Manage expenses per property. Separate room configurations per building. Perfect for owners with properties across Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune and other cities. No additional cost for multiple properties."
    },
    {
      question: "Is there a free trial for PG management app?",
      answer: "Yes, MY PG offers a 7-day FREE trial for all PG owners with NO credit card required. During the trial: Full access to mobile app and web dashboard. Manage up to unlimited tenants. All premium features included (CCTV, food services, cleaning management). WhatsApp rent reminders enabled. Digital receipts and reports. Priority support assistance. After trial, choose Premium at ₹499/month or ₹3,999/year."
    },
    {
      question: "What features does PG management software need?",
      answer: "Essential PG management features: Tenant database with KYC storage and police verification. Automated rent collection with WhatsApp reminders. Room/bed management with real-time occupancy tracking. Expense categorization and reporting. Digital rent receipts shareable via WhatsApp. Complaint tracking system. Multi-property dashboard. CCTV camera integration. Food and mess management. Cleaning and maintenance scheduling. Short stay and long stay options. UPI/Google Pay payment integration. Tax-ready reports exportable to Excel/PDF."
    },
    {
      question: "How long does it take to set up MY PG?",
      answer: "MY PG sets up in just 5 minutes: Step 1: Download APK and install (1 minute). Step 2: Create account with phone number (1 minute). Step 3: Add PG property details and address (1 minute). Step 4: Configure rooms and beds with rent amounts (1 minute). Step 5: Start adding tenants (1 minute). Our free onboarding team helps configure everything. Support available 24/7 via chat, email, and WhatsApp."
    },
    {
      question: "What cities is PG management software available in?",
      answer: "MY PG available across India including Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Coimbatore, Vizag, Indore, Bhopal, Nagpur, and 500+ towns. Supported languages: Hindi, English, Tamil, Telugu, Kannada, Malayalam, Marathi. Payment methods: UPI, Google Pay, PhonePe, Paytm, bank transfer. Works on Android 5.0+ smartphones and all web browsers."
    },
    {
      question: "Is MY PG secure for storing tenant data?",
      answer: "MY PG uses bank-grade security: 256-bit encryption for all data storage. GDPR compliant data handling. Role-based access control for staff. Police verification and background screening for tenants. Secure KYC document storage. Automatic daily cloud backups. 99.9% uptime guarantee. Multi-layer authentication. Your tenant data never shared with third parties. All data stored on secure servers in India."
    },
    {
      question: "Can tenants use the PG management app?",
      answer: "Yes, tenants have their own app features: View rent details and payment history. Pay rent via UPI, Google Pay, PhonePe, Paytm. Raise maintenance complaints with photo upload. View notices and announcements from owner. Receive WhatsApp reminders for rent due. Access digital rent receipts for taxes. Update profile and contact details. Book room transfers. View assigned room and bed details. Tenant self-service improves satisfaction and reduces owner workload."
    },
    {
      question: "Does MY PG support digital rent receipts?",
      answer: "Yes, MY PG generates professional digital rent receipts: Auto-created upon rent payment confirmation. Includes property name, address, tenant name, amount, date. Shareable via WhatsApp directly to tenant. Email export available. PDF format for printing. GST-compliant receipts available. Accepted by tenants for tax purposes. Includes payment method details. All receipts stored in tenant profile. Export all receipts to Excel for annual summary."
    },
    {
      question: "Why use PG software over Excel or manual tracking?",
      answer: "Excel and manual tracking have major limitations: Human errors in calculations and entries. No automatic reminders - miss rent due dates. Difficult backup - risk of data loss. No WhatsApp integration - manual follow-ups. Can't track occupancy in real-time. No digital receipts or reports. No tenant app access. No CCTV integration. MY PG eliminates all these issues: 80% reduction in late payments. Real-time dashboards from anywhere. Automatic WhatsApp reminders. Digital receipts and tax reports. Secure cloud backup. Tenant self-service app."
    },
    {
      question: "What security features does MY PG offer?",
      answer: "MY PG provides complete security: CCTV camera integration for live monitoring. Police verification for tenant background checks. Encrypted data storage for KYC documents. Role-based access control for staff members. Automatic data backups with 99.9% uptime. Secure login with phone OTP verification. GDPR compliant data handling. All tenant information stored in India. Your PG data never compromised or shared."
    },
    {
      question: "Can I get reports on my PG occupancy and revenue?",
      answer: "MY PG provides comprehensive reports: Real-time occupancy dashboard showing filled vs vacant beds. Revenue analytics with monthly trends. Expense reports by category (maintenance, food, staff, utilities). Pending payment reports for overdue rents. Tenant turnover rates and move-in/move-out history. Annual income summary for tax filing. Export all reports to Excel or PDF. occupancy trends by month and year. Profit/loss analysis per property. Custom date range filtering available."
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