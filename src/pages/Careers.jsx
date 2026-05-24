import { motion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight,
  ArrowLeft,
  Building2,
  DollarSign,
  Target,
  Phone,
  Mail,
  HelpCircle
} from 'lucide-react'

const jobDetails = {
  title: "Sales Executive",
  type: "Full-time",
  location: "Bangalore, Karnataka, India",
  experience: "1-3 Years",
  salary: "₹4,00,000 - ₹8,00,000 /year + Incentives",
  openings: 5,
  department: "Sales & Business Development"
}

const requirements = [
  "1-3 years of proven experience in B2B sales, preferably in real estate, SaaS, or fintech",
  "Strong communication and interpersonal skills",
  "Ability to meet weekly and monthly sales targets",
  "Experience with cold calling and lead generation",
  "Self-motivated with the ability to work independently",
  "Proficiency in Hindi and English (Kannada is a plus)",
  "Must have own transportation (bike preferred)"
]

const responsibilities = [
  "Generate new leads and convert them into paying customers for our PG management software",
  "Conduct product demonstrations to potential clients (PG owners, landlords, property managers)",
  "Understand client requirements and offer tailored solutions",
  "Maintain relationships with existing customers to ensure retention and upselling",
  "Achieve monthly and quarterly sales targets",
  "Coordinate with the marketing team to attend trade shows and events",
  "Maintain accurate records of all sales activities in CRM"
]

const benefits = [
  "Competitive base salary + performance incentives",
  "Health insurance coverage",
  "Flexible working hours",
  "Career growth opportunities",
  "Training and development programs",
  "Dynamic and collaborative work environment"
]

export default function Careers() {
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! Our HR team will contact you soon.')
    setShowApplicationForm(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Careers at MY PG | Sales Executive Jobs Bangalore</title>
        <meta name="description" content="Join MY PG - India's fastest-growing PG management software. Hiring Sales Executives in Bangalore. 5 openings, ₹4-8 LPA plus incentives. Apply now." />
        <link rel="canonical" href="https://manageyourpg.com/careers" />
        <meta property="og:title" content="Careers at MY PG | Job Openings in Bangalore" />
        <meta property="og:description" content="Join MY PG - India's fastest-growing PG management software. Hiring Sales Executives in Bangalore with ₹4-8 LPA plus incentives." />
        <meta property="og:url" content="https://manageyourpg.com/careers" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          "title": "Sales Executive",
          "description": "Join MY PG as a Sales Executive and help transform PG management across India.",
          "datePosted": "2026-04-26",
          "validThrough": "2026-06-30",
          "employmentType": "FULL_TIME",
          "hiringOrganization": { "@type": "Organization", "name": "MY PG Solutions", "sameAs": "https://manageyourpg.com/" },
          "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" } },
          "baseSalary": { "@type": "MonetaryAmount", "currency": "INR", "value": { "@type": "QuantitativeValue", "minValue": 400000, "maxValue": 800000, "unitText": "YEAR" } }
        })}</script>
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema([{ label: 'Home', path: '/' }, { label: 'Careers', path: '/careers' }]))}</script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-[#1a1a4e] hover:text-[#1e3a8a] transition-colors font-medium mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [180, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-40"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full">
              Join Our Growing Team
            </div>
            <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Careers', path: '/careers' }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Career{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                Opportunities
              </span>{' '}
              at MY PG
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join India's fastest-growing PG management software company. MY PG was founded in 2020 and has grown to serve 500+ PG owners managing 5,000+ tenants across 25+ Indian cities. Our team of 50+ professionals is transforming the way PG owners manage their properties across India. We are looking for motivated individuals to join our Sales team in Bangalore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{jobDetails.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        MY PG
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {jobDetails.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {jobDetails.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">{jobDetails.openings} Openings</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="font-semibold text-gray-900">{jobDetails.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-semibold text-gray-900">{jobDetails.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Department</p>
                      <p className="font-semibold text-gray-900">{jobDetails.department}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Key Responsibilities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {responsibilities.map((resp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    Requirements
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {requirements.map((req, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{req}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    What We Offer
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-xl"
                      >
                        <CheckIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {!showApplicationForm ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-xl font-medium flex items-center justify-center gap-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    Apply Now for {jobDetails.title}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-gray-50 p-6 rounded-xl space-y-4"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Application Form</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a4e] focus:ring-2 focus:ring-[#1a1a4e]/20 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a4e] focus:ring-2 focus:ring-[#1a1a4e]/20 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a4e] focus:ring-2 focus:ring-[#1e3a8a]/20 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium flex items-center justify-center gap-2"
                      >
                        <Mail className="w-5 h-5" />
                        Submit Application
                      </motion.button>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowApplicationForm(false)}
                        className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium"
                      >
                        Cancel
                      </motion.button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Or email your resume to: manageyourpg@gmail.com
                    </p>
                  </motion.form>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Don't see the right job?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <motion.a
                href="mailto:manageyourpg@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full font-medium"
              >
                <Mail className="w-5 h-5" />
                Send us your resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid md:grid-cols-4 gap-6"
          >
            {[
              { number: "10,000+", label: "PG Owners Served" },
              { number: "5,000+", label: "Tenants Managed" },
              { number: "50+", label: "Cities Covered" },
              { number: "4.8★", label: "App Rating" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-6 h-6 text-[#1a1a4e]" />
              <h2 className="text-2xl font-bold text-gray-900">Common Questions About Careers at MY PG</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: 'What is the work culture like at MY PG?',
                  a: 'MY PG offers a dynamic, fast-paced work environment with a team of 50+ professionals based in Bangalore. Founded in 2020, the company has grown to serve 500+ PG owners across India. Employees enjoy flexible working hours, health insurance coverage, performance incentives, and opportunities for career growth in India\'s growing proptech SaaS sector.'
                },
                {
                  q: 'What is the salary range for Sales Executive positions?',
                  a: 'Sales Executives at MY PG earn a competitive base salary of ₹4,00,000 to ₹8,00,000 per year plus performance-based incentives. The role includes health insurance, flexible working hours, training programs, and career growth opportunities. Candidates with 1-3 years of B2B sales experience in real estate, SaaS, or fintech are preferred.'
                },
                {
                  q: 'How do I apply for a job at MY PG?',
                  a: 'You can apply directly through the application form on the MY PG careers page, or email your resume to manageyourpg@gmail.com. Our HR team reviews applications on a rolling basis and will contact qualified candidates for interviews. We currently have 5 openings for Sales Executive positions in Bangalore.'
                },
                {
                  q: 'Does MY PG offer remote work options?',
                  a: 'Sales Executive positions are based in Bangalore, Karnataka, with flexible working hours. The role involves field sales visits to PG owners across Bangalore, so candidates with their own transportation (bike preferred) are preferred. The company provides all necessary sales tools, CRM access, and product training.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}
