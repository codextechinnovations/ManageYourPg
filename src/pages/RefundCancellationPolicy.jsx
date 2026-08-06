import { motion } from 'motion/react'
import { ArrowLeft, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'

const sections = [
  {
    title: '1. Cancellation Policy',
    content: 'Cancellations will only be considered if the request is made within 5 days of placing the order. However, cancellation requests may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.'
  },
  {
    title: '2. Perishable Items',
    content: 'sugam travels does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that the quality of the product delivered is not good.'
  },
  {
    title: '3. Damaged or Defective Items',
    content: 'In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within 5 days of receipt of products.'
  },
  {
    title: '4. Product Not As Shown',
    content: 'In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 5 days of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.'
  },
  {
    title: '5. Warranty Issues',
    content: 'In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.'
  },
  {
    title: '6. Refund Processing',
    content: 'In case of any refunds approved by sugam travels, it will take 5 days for the refund to be processed to you.'
  }
]

const faqs = [
  {
    question: 'How do I cancel my order?',
    answer: 'You can cancel your order within 5 days of placing it by contacting our customer service team. However, if the order has already been shipped or is out for delivery, cancellation may not be possible. In that case, you may reject the product at the doorstep.'
  },
  {
    question: 'What if I receive a damaged product?',
    answer: 'Please report any damaged or defective items to our customer service team within 5 days of receipt. Once the seller/merchant verifies the issue, your request for refund or replacement will be processed.'
  },
  {
    question: 'How long does a refund take?',
    answer: 'Once a refund is approved by sugam travels, it will take 5 business days for the refund to be processed and credited to your original payment method.'
  },
  {
    question: 'Can I get a refund for perishable items?',
    answer: 'Cancellation requests for perishable items like flowers and eatables are generally not accepted. However, if the quality of the delivered product is not satisfactory, you may be eligible for a refund or replacement.'
  }
]

export default function RefundCancellationPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Refund and Cancellation Policy | MY PG - PG Management Software</title>
        <meta name="description" content="Refund and Cancellation Policy for MY PG - Learn about our cancellation rules, refund processing times, and how to request a refund or replacement." />
        <link rel="canonical" href="https://manageyourpg.com/refund-cancellation" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'Refund & Cancellation', path: '/refund-cancellation' }]))}</script>
      </Helmet>
      <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Refund & Cancellation', path: '/refund-cancellation' }]} />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Refund & Cancellation Policy
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
            <h2 className="text-2xl font-bold text-gray-900">Common Questions About Refunds & Cancellations</h2>
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