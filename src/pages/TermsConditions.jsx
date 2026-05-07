import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TermsConditions() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: 'By accessing or using MY PG ("the Software"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Software.'
    },
    {
      title: '2. Description of Service',
      content: 'MY PG provides a PG management platform that enables PG owners to manage tenants, track rent payments, handle expenses, and perform related property management tasks. The Software is available as a mobile application and web dashboard.'
    },
    {
      title: '3. User Registration',
      content: 'To use the Software, you must register for an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your account credentials and for all activities under your account.'
    },
    {
      title: '4. Subscription and Payments',
      content: 'MY PG offers a 7-day free trial. After the trial period, you must subscribe to a paid plan to continue using the Software. Subscription fees are billed monthly or annually as per the chosen plan. All fees are non-refundable unless otherwise specified. We reserve the right to change our pricing with 30 days notice.'
    },
    {
      title: '5. Use of Software',
      content: 'You agree to use the Software only for lawful purposes and in accordance with these Terms. You must not: (a) use the Software for any illegal purpose, (b) attempt to gain unauthorized access to any part of the Software, (c) interfere with the proper functioning of the Software, (d) reproduce, distribute, or create derivative works without authorization.'
    },
    {
      title: '6. Data Privacy',
      content: 'We collect and process personal data in accordance with our Privacy Policy. By using the Software, you consent to such processing. You are responsible for ensuring that you have the necessary consents to upload tenant data.'
    },
    {
      title: '7. Intellectual Property',
      content: 'The Software, including all content, features, and functionality, is owned by MY PG Solutions and is protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Software.'
    },
    {
      title: '8. Limitation of Liability',
      content: 'MY PG Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Software. In no event shall our total liability exceed the amount paid by you for the Software in the past 12 months.'
    },
    {
      title: '9. Termination',
      content: 'We reserve the right to suspend or terminate your access to the Software at any time for violation of these Terms. Upon termination, your right to use the Software will immediately cease.'
    },
    {
      title: '10. Changes to Terms',
      content: 'We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Software. Continued use after changes constitutes acceptance of the new Terms.'
    },
    {
      title: '11. Governing Law',
      content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.'
    },
    {
      title: '12. Contact Information',
      content: 'For questions about these Terms, please contact us at support@manageyourpg.com or call +91 9741821179.'
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
            Terms & Conditions
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
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
