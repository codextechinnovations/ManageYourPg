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
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-[#1a1a4e]" />
        </motion.div>
      </button>
      <motion.div
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
      answer: "MY PG is the #1 rated PG management software in India, trusted by over 5000+ PG owners across 25+ cities including Bangalore, Mumbai, Delhi, Chennai, Hyderabad, and Pune. It offers complete tenant management, automated rent collection with reminders, room occupancy tracking, expense management, and detailed analytics. Free to start with up to 10 tenants."
    },
    {
      question: "How does PG management software help PG owners?",
      answer: "PG management software helps owners automate daily operations including rent collection with automatic reminders (reducing late payments by 80%), tenant onboarding with digital KYC storage, room and bed allocation tracking, expense categorization and reporting, complaint management, and communication with tenants - all from one centralized dashboard accessible on mobile and web."
    },
    {
      question: "Can I manage multiple PG properties from one account?",
      answer: "Yes, MY PG supports multi-property management allowing you to manage unlimited PG buildings, hostels, or co-living spaces from a single dashboard. Track occupancy, revenue, and expenses across all properties in real-time."
    },
    {
      question: "Is there a free trial for PG management app?",
      answer: "Yes, MY PG offers a free forever plan where you can manage up to 10 tenants absolutely free with no credit card required. Upgrade to premium plans for unlimited tenants, priority support, and advanced analytics."
    },
    {
      question: "How much does PG management software cost in India?",
      answer: "MY PG offers the most competitive pricing in India: Free forever for up to 10 tenants, Premium at just ₹499/month for full features. Compared to other PG apps charging ₹1500-3000/month, MY PG provides better value with more features including automated rent collection, multi-property support, and mobile apps for both iOS and Android."
    },
    {
      question: "How to automate rent collection for my PG?",
      answer: "MY PG automates rent collection by setting up automatic monthly reminders to tenants via app notification and WhatsApp, tracking payment status in real-time, generating digital rent receipts automatically, and providing clear reports on pending dues. This reduces manual follow-ups by 80%."
    },
    {
      question: "What cities is PG management software available in?",
      answer: "MY PG is available across all major cities in India including Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Coimbatore, Vizag, and Indore. The app supports multiple Indian languages and local payment methods including UPI."
    },
    {
      question: "Can tenants use the PG management app?",
      answer: "Yes, MY PG includes a dedicated tenant app where residents can view their rent details, make payments via UPI/WhatsApp, raise maintenance complaints, view notices from owners, and communicate. This improves tenant satisfaction and reduces owner's workload significantly."
    },
    {
      question: "What features does PG management software need?",
      answer: "Essential features include: complete tenant database with document storage, automated rent reminders and tracking, room/bed management with occupancy status, expense categorization, digital payment receipts, occupancy reports, complaint tracking system, and multi-property support. MY PG includes all these features and more."
    },
    {
      question: "Why use PG software over Excel or manual tracking?",
      answer: "PG software eliminates human errors in rent tracking, provides automated reminders reducing late payments by 80%, offers real-time occupancy dashboards, generates professional digital receipts accepted by tenants, and enables remote access from anywhere. Excel sheets are prone to errors, difficult to backup, and don't support automation. MY PG offers these advanced features at affordable pricing."
    },
    {
      question: "Is MY PG secure for storing tenant data?",
      answer: "Yes, MY PG uses bank-grade encryption for all data storage, provides role-based access control for team members, stores all tenant documents and KYC data securely in compliance with Indian data protection standards. Your data is backed up automatically and accessible only to authorized users."
    },
    {
      question: "How does MY PG compare with other PG apps in India?",
      answer: "MY PG stands out with: 5000+ active users, lowest pricing starting free, dedicated mobile apps for iOS and Android, multi-language support, UPI payment integration, WhatsApp notification, and dedicated customer support. Rated 4.8 stars by 2500+ users."
    },
    {
      question: "How long does it take to set up MY PG?",
      answer: "MY PG can be set up in just 5 minutes. Simply download the app, create your account, add your PG details, and start adding tenants. Our onboarding team provides free assistance to help you get started with all features configured according to your requirements."
    },
    {
      question: "Does MY PG support digital rent receipts?",
      answer: "Yes, MY PG automatically generates professional digital rent receipts that can be shared via WhatsApp or email. These receipts are accepted by tenants and can be used for tax and documentation purposes. receipts include all payment details, property information, and can be exported to PDF."
    },
    {
      question: "Can I get reports on my PG occupancy and revenue?",
      answer: "MY PG provides comprehensive real-time reports including occupancy rate trends, revenue analytics, expense summaries, payment pending reports, tenant turnover rates, and more. All reports can be exported to Excel or PDF for your records and tax submissions."
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            PG Management{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about PG management software in India
          </p>
        </motion.div>

        <div className="space-y-4">
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