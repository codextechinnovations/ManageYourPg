import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly: name, email address, phone number, property details, tenant information, payment data, and KYC documents. We also automatically collect usage data, device information, and app interaction data.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the collected information to: provide and maintain the Software, process transactions, send notifications and updates, improve our services, comply with legal obligations, and communicate with you regarding your account.'
    },
    {
      title: '3. Data Storage and Security',
      content: 'Your data is stored on secure servers with bank-grade encryption. We implement industry-standard security measures including SSL/TLS encryption, regular security audits, and access controls. However, no method of transmission over the Internet is 100% secure.'
    },
    {
      title: '4. Data Sharing and Disclosure',
      content: 'We do not sell your personal information. We may share data with: service providers who assist in operating the Software, law enforcement when required by law, and business partners with your consent. Tenant data is only accessible to the respective PG owner.'
    },
    {
      title: '5. Your Rights',
      content: 'You have the right to: access your personal data, correct inaccurate data, request deletion of your data, restrict processing, data portability, and withdraw consent at any time. To exercise these rights, contact us at support@manageyourpg.com.'
    },
    {
      title: '6. Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve the Software. You can control cookie preferences through your browser settings.'
    },
    {
      title: '7. Third-Party Services',
      content: 'The Software may integrate with third-party services (payment gateways, cloud storage, analytics). These services have their own privacy policies, and we are not responsible for their practices.'
    },
    {
      title: '8. Children\'s Privacy',
      content: 'The Software is not intended for children under 18. We do not knowingly collect personal information from children. If we discover such data, we will delete it promptly.'
    },
    {
      title: '9. Changes to Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of material changes via email or through the Software. Your continued use after changes constitutes acceptance of the updated policy.'
    },
    {
      title: '10. Contact Us',
      content: 'For questions about this Privacy Policy, please contact us at:\nEmail: support@manageyourpg.com\nPhone: +91 9741821179\nAddress: Bangalore, Karnataka, India'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors font-medium mb-4">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
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
      </div>
    </div>
  )
}
