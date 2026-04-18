import { motion } from 'motion/react';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';
import { useState } from 'react';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const plans = [
    {
      name: 'Basic',
      icon: Zap,
      monthlyPrice: 499,
      yearlyPrice: 3999,
      description: 'Perfect for small PG owners getting started',
      badge: null,
      popular: false,
      features: [
        'Full access to mobile app',
        'Full access to web dashboard',
        'Up to 50 tenants',
        'Payment tracking',
        'Expense management',
        'Basic reports',
        'Email support',
        'Regular updates',
      ],
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Customizable',
      icon: Sparkles,
      monthlyPrice: 999,
      yearlyPrice: 9999,
      description: 'Most popular choice for growing PG businesses',
      badge: 'Most Popular',
      popular: true,
      features: [
        'Everything in Starter',
        'Unlimited tenants',
        'Advanced reports & analytics',
        'Room & bed management',
        'Automated notifications',
        'Custom branding',
        'Priority support',
        'Data backup & security',
        'Multiple property management',
      ],
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-300',
    },
   
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            Affordable PG Management Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Value{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              PG Management App
            </span>{' '}
            Pricing in India
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Start free up to 10 tenants. Upgrade when you grow. Most affordable PG software in India - less than ₹17/day!
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg border border-gray-200"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                Save 33%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              <div
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${
                  plan.popular ? 'border-purple-300 ring-4 ring-purple-100' : plan.borderColor
                } h-full flex flex-col`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-8">
                    <div className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-b-xl flex items-center gap-2 shadow-lg`}>
                      <Sparkles className="w-4 h-4" />
                      <span className="font-medium text-sm">{plan.badge}</span>
                    </div>
                  </div>
                )}

                <div className="p-8 flex-grow">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}
                  >
                    <plan.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Header */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <motion.div
                      key={billingCycle}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-baseline gap-2"
                    >
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        ₹{billingCycle === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.yearlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-600">
                        / {billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </motion.div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-gray-500 mt-2">
                        Just ₹{Math.round(plan.yearlyPrice / 12)}/month when billed annually
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className={`w-full px-6 py-3 rounded-full transition-all font-medium ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl`
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>No hidden fees</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Money-back guarantee</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
