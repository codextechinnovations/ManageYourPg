import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { CheckCircle2, XCircle, ShieldCheck, Wallet, Clock, Languages, Building2, Smartphone } from 'lucide-react'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { ComparisonTable, ComparisonRow } from '../../components/ComparisonTable'
import { competitors } from '../../data/comparisons'

export function ComparePage({ competitor }) {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Compare', path: '/compare' },
    { label: `MY PG vs ${competitor.name}`, path: `/compare/my-pg-vs-${competitor.slug}` },
  ]

  const rows = competitor.rows.map(r =>
    ComparisonRow({
      label: r.feature,
      ours: r.mypg,
      theirs: r.competitor,
    })
  )

  return (
    <>
      <Helmet>
        <title>MY PG vs {competitor.name}: Best PG Management Software in India (2026)</title>
        <meta
          name="description"
          content={`Compare MY PG vs ${competitor.name} for Indian PG owners. Pricing, features, support, and free trial. See why 500+ PG owners choose MY PG.`}
        />
        <link rel="canonical" href={`https://manageyourpg.com/compare/my-pg-vs-${competitor.slug}`} />
        <meta property="og:title" content={`MY PG vs ${competitor.name}: Best PG Management Software India`} />
        <meta
          property="og:description"
          content={`Side-by-side comparison of MY PG and ${competitor.name}. Pricing, automation, support, and more.`}
        />
        <meta property="og:url" content={`https://manageyourpg.com/compare/my-pg-vs-${competitor.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `MY PG vs ${competitor.name}: Best PG Management Software in India (2026)`,
            description: `Side-by-side comparison of MY PG and ${competitor.name} for PG owners.`,
            author: { '@type': 'Organization', name: 'MY PG Solutions' },
            publisher: {
              '@type': 'Organization',
              name: 'MY PG Solutions',
              logo: { '@type': 'ImageObject', url: 'https://manageyourpg.com/favicon.png' },
            },
            datePublished: '2026-06-15',
            dateModified: '2026-06-15',
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full text-sm font-semibold">
              Software Comparison
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MY PG vs{' '}
              <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
                {competitor.name}
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">{competitor.summary}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Wallet className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Pricing</h3>
              <p className="text-sm text-gray-600">{competitor.pricing}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Free Trial</h3>
              <p className="text-sm text-gray-600">{competitor.freeTrial}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <Building2 className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-1">Best For</h3>
              <p className="text-sm text-gray-600">{competitor.target}</p>
            </div>
          </div>

          <ComparisonTable
            caption={`Comparison of MY PG and ${competitor.name}`}
            headers={['Feature', 'MY PG', `${competitor.name}`]}
            rows={rows}
          />

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Why MY PG Wins
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-green-900">
                  <ShieldCheck className="w-4 h-4 mt-1 flex-shrink-0" /> Lower price at ₹499/month with no setup fee
                </li>
                <li className="flex items-start gap-2 text-green-900">
                  <Smartphone className="w-4 h-4 mt-1 flex-shrink-0" /> Built-in WhatsApp payment reminders
                </li>
                <li className="flex items-start gap-2 text-green-900">
                  <Languages className="w-4 h-4 mt-1 flex-shrink-0" /> Indian language support
                </li>
                <li className="flex items-start gap-2 text-green-900">
                  <Building2 className="w-4 h-4 mt-1 flex-shrink-0" /> Unlimited multi-property dashboard
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> {competitor.name} Limitations
              </h3>
              <ul className="space-y-3">
                {competitor.cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-900">
                    <XCircle className="w-4 h-4 mt-1 flex-shrink-0" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-white text-center my-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">See the Difference Yourself</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ PG owners who switched to MY PG for automated rent collection, faster onboarding, and better
              support.
            </p>
            <CTAButton variant="green" href="/#contact">
              Start Your Free 7-Day Trial
            </CTAButton>
          </div>

          <div className="my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {competitor.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {Object.values(competitors).map(c => (
              <Link
                key={c.slug}
                to={`/compare/my-pg-vs-${c.slug}`}
                className="text-sm text-[#1a1a4e] hover:underline"
              >
                MY PG vs {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
