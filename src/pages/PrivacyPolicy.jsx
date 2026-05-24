import { motion } from 'motion/react'
import { ArrowLeft, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly: your name, email address, phone number, property details, tenant information, payment data, and KYC documents including Aadhaar cards and address proofs. We also automatically collect usage data such as app interaction patterns, device information including operating system version, IP address, and browser type. This data helps us improve the Software and provide better service to all PG owners using our platform.'
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the collected information to provide and maintain the Software, process transactions including rent payments through UPI, Google Pay, and PhonePe, send notifications and updates about rent dues and software changes, improve our services based on usage patterns, comply with legal obligations under Indian law, and communicate with you regarding your account and support requests.'
  },
  {
    title: '3. Data Storage and Security',
    content: 'Your data is stored on secure cloud servers located in India with bank-grade 256-bit encryption. We implement industry-standard security measures including SSL/TLS encryption for data in transit, regular security audits, role-based access controls, and automatic daily backups. However, no method of transmission over the Internet is 100% secure. We maintain 99.9% uptime guarantee for data availability.'
  },
  {
    title: '4. Data Sharing and Disclosure',
    content: 'We do not sell your personal information to third parties. We may share data with service providers who assist in operating the Software, such as cloud hosting providers and payment gateway partners. We may disclose information to law enforcement when required by applicable Indian law. Tenant data uploaded by PG owners is only accessible to the respective PG owner who uploaded it and is never shared with other users.'
  },
  {
    title: '5. Your Rights',
    content: 'You have the right to access your personal data stored on our platform, correct any inaccurate or incomplete data, request deletion of your data subject to legal retention requirements, restrict processing of your data, request data portability in a machine-readable format, and withdraw consent at any time. To exercise these rights, contact us at support@manageyourpg.com. We will respond to your request within 30 days as required by applicable data protection laws.'
  },
  {
    title: '6. Cookies and Tracking',
    content: 'We use cookies and similar tracking technologies to enhance your experience on our web dashboard, analyze usage patterns to improve the Software, remember your preferences and login status, and understand how PG owners interact with different features. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the web dashboard.'
  },
  {
    title: '7. Third-Party Services',
    content: 'The Software may integrate with third-party services including payment gateways (UPI, Razorpay, Paytm), cloud storage providers, analytics services, and communication platforms (WhatsApp Business API). These services have their own privacy policies and terms of use. We encourage you to review their policies. MY PG Solutions is not responsible for the privacy practices of these third-party services. We only work with partners who maintain adequate data protection standards.'
  },
  {
    title: '8. Children\'s Privacy',
    content: 'The Software is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected personal data from a child without verified parental consent, we will delete that information promptly. Parents or guardians who believe their child has provided us with data should contact us immediately.'
  },
  {
    title: '9. Changes to Privacy Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the features we offer. We will notify you of material changes via email or through the Software interface. Your continued use of the Software after changes are posted constitutes acceptance of the updated policy. We encourage you to review this page periodically. The last update date is displayed at the top of this page.'
  },
  {
    title: '10. Contact Us',
    content: 'For questions about this Privacy Policy or to exercise your data rights, please contact us at:\nEmail: support@manageyourpg.com\nPhone: +91 9741821179\nAddress: Bangalore, Karnataka, India\nWe aim to respond to all privacy-related inquiries within 24 hours during business days.'
  }
]

const faqs = [
  {
    question: 'How long does MY PG keep my personal data?',
    answer: 'MY PG retains your personal data for as long as your account is active or as needed to provide the Software services. After account deletion or termination, we retain your data for 30 days to allow for data export, after which it is permanently deleted from our servers. Certain data may be retained longer if required by applicable Indian laws for legal or tax purposes.'
  },
  {
    question: 'Is my tenant data shared with other PG owners?',
    answer: 'No. Tenant data uploaded by a PG owner is strictly confidential and accessible only to that PG owner and their authorized staff members. MY PG does not share tenant information between different PG owners or with any third parties for marketing purposes. Tenant data is isolated on a per-account basis using role-based access controls.'
  },
  {
    question: 'Does MY PG comply with Indian data protection laws?',
    answer: 'Yes, MY PG complies with applicable Indian data protection laws including the Information Technology Act, 2000 and the upcoming Digital Personal Data Protection Act, 2023. All data is stored on servers located in India. We implement reasonable security practices and procedures as required by Indian law and maintain GDPR-compliant data handling standards.'
  },
  {
    question: 'Can I download a copy of my data from MY PG?',
    answer: 'Yes, you can request a complete export of your data at any time by contacting support@manageyourpg.com. We will provide your data in a commonly used, machine-readable format within 30 days of your request. This includes tenant information, payment records, expense data, and property details you have uploaded to the platform.'
  }
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | MY PG - PG Management Software</title>
        <meta name="description" content="Privacy Policy for MY PG - India's leading PG management software. Learn how we collect, use, and protect your personal and tenant data." />
        <link rel="canonical" href="https://manageyourpg.com/privacy" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'Privacy Policy', path: '/privacy' }]))}</script>
      </Helmet>
      <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy', path: '/privacy' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-blue-200 text-lg"
          >
            Last updated: April 2026
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="w-6 h-6 text-[#1a1a4e]" />
            <h2 className="text-2xl font-bold text-gray-900">Common Questions About Privacy</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
