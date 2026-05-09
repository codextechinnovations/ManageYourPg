import { motion } from 'motion/react'
import { ArrowLeft, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing or using MY PG ("the Software"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the Software. Your continued use of the Software constitutes your acceptance of any updated terms.'
  },
  {
    title: '2. Description of Service',
    content: 'MY PG provides a PG management platform that enables PG owners to manage tenants, track rent payments, handle expenses, and perform related property management tasks. The Software is available as a mobile application for Android devices and a web dashboard accessible through modern web browsers. MY PG is developed and operated by MY PG Solutions, Bangalore, India.'
  },
  {
    title: '3. User Registration',
    content: 'To use the Software, you must register for an account using your phone number and email address. You agree to provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.'
  },
  {
    title: '4. Subscription and Payments',
    content: 'MY PG offers a 7-day free trial with full access to all features and no credit card required. After the trial period, you must subscribe to a paid plan to continue using the Software. Subscription fees are billed monthly at ₹499 per month or annually at ₹3,999 per year, representing a 33% savings over monthly billing. All fees are non-refundable unless otherwise specified by applicable law. We reserve the right to change our pricing with 30 days notice sent via email.'
  },
  {
    title: '5. Use of Software',
    content: 'You agree to use the Software only for lawful purposes and in accordance with these Terms. You must not: (a) use the Software for any illegal purpose or in violation of any applicable laws, (b) attempt to gain unauthorized access to any part of the Software or its systems, (c) interfere with the proper functioning of the Software or disrupt services for other users, (d) reproduce, distribute, or create derivative works without prior written authorization from MY PG Solutions.'
  },
  {
    title: '6. Data Privacy',
    content: 'We collect and process personal data in accordance with our Privacy Policy. By using the Software, you consent to such processing. You are responsible for ensuring that you have the necessary consents from your tenants before uploading their personal data, KYC documents, and other information to the platform. We implement bank-grade encryption and security measures to protect all data stored on our servers.'
  },
  {
    title: '7. Intellectual Property',
    content: 'The Software, including all content, features, source code, design elements, and functionality, is owned by MY PG Solutions and is protected by applicable Indian and international intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Software for your PG management business purposes only.'
  },
  {
    title: '8. Limitation of Liability',
    content: 'MY PG Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Software. In no event shall our total liability exceed the amount paid by you for the Software in the past 12 months. This limitation applies to the fullest extent permitted by applicable law in India.'
  },
  {
    title: '9. Termination',
    content: 'We reserve the right to suspend or terminate your access to the Software at any time for violation of these Terms, non-payment of subscription fees, or conduct that we determine may harm other users or our business. Upon termination, your right to use the Software will immediately cease. You may request data export within 30 days of termination.'
  },
  {
    title: '10. Changes to Terms',
    content: 'We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Software interface. Continued use of the Software after changes are posted constitutes your acceptance of the new Terms. We recommend reviewing these Terms periodically for any updates.'
  },
  {
    title: '11. Governing Law',
    content: 'These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the Software shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.'
  },
  {
    title: '12. Contact Information',
    content: 'For questions about these Terms, please contact us at support@manageyourpg.com or call +91 9741821179. Our office is located in Bangalore, Karnataka, India. We aim to respond to all inquiries within 24 hours during business days.'
  }
]

const faqs = [
  {
    question: 'What happens after my 7-day free trial ends?',
    answer: 'After the 7-day free trial, your account automatically converts to a paid subscription. You can choose Premium Monthly at ₹499 per month or Premium Yearly at ₹3,999 per year, saving 33% with annual billing. If you do not wish to continue, you can cancel before the trial ends with no charges incurred.'
  },
  {
    question: 'Can I cancel my MY PG subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. Upon cancellation, your access continues until the end of the current billing period. No partial refunds are provided for unused days. Your data remains available for export for 30 days after cancellation (Terms of Service, 2026).'
  },
  {
    question: 'How does MY PG protect my billing information?',
    answer: 'MY PG uses bank-grade 256-bit encryption for all payment transactions. Payment processing is handled by secure third-party payment gateways that comply with PCI DSS standards. We do not store your full card details on our servers. Supported payment methods include UPI, Google Pay, PhonePe, Paytm, and net banking.'
  },
  {
    question: 'Who owns the data I upload to MY PG?',
    answer: 'You retain full ownership of all data you upload to MY PG, including tenant information, property details, and financial records. MY PG Solutions does not claim any ownership over your data. We act as a data processor and provide the platform for you to manage your information securely.'
  }
]

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms and Conditions | MY PG - PG Management Software</title>
        <meta name="description" content="Terms and Conditions for MY PG - India's leading PG management software. Includes subscription terms, data privacy, user obligations, and legal agreements." />
        <link rel="canonical" href="https://manageyourpg.com/terms" />
      </Helmet>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <HelpCircle className="w-6 h-6 text-[#1a1a4e]" />
            <h2 className="text-2xl font-bold text-gray-900">Common Questions About Terms</h2>
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
