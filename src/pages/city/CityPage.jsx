import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { cities } from '../../data/cities'
import { Breadcrumb, buildBreadcrumbSchema } from '../../components/Breadcrumb'
import { CTAButton } from '../../components/CTAButton'
import { ENTITIES } from '../../data/entities'
import { CheckCircle2, MapPin, Users, Building2, Star, ChevronDown, ArrowRight, School, Briefcase, UtensilsCrossed, IndianRupee } from 'lucide-react'

function ChevronDownIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

const cityList = Object.values(cities)

const otherCities = cities
const cityNavLinks = cityList.filter(c => c.slug !== 'delhi-ncr' ? c : c.slug !== '')

export function CityPage() {
  const { citySlug } = useParams()
  const city = cities[citySlug]

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-gray-600 mb-8">We don't have a page for this city yet. Check out one of our available cities:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {cityList.map(c => (
              <Link key={c.slug} to={`/city/${c.slug}`} className="px-6 py-3 bg-[#1a1a4e] text-white rounded-full hover:bg-[#1e3a8a] transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: `${city.name}`, path: `/city/${city.slug}` },
  ]

  const otherCityLinks = cityList.filter(c => c.slug !== city.slug)

  const iconMap = {
    bangalore: Building2,
    mumbai: Building2,
    'delhi-ncr': Building2,
    pune: School,
    hyderabad: Briefcase,
    chennai: UtensilsCrossed,
  }

  const CityIcon = iconMap[city.slug] || Building2

  return (
    <>
      <Helmet>
        <title>{city.h1} | {ENTITIES.softwareName}</title>
        <meta name="description" content={city.metaDesc} />
        <link rel="canonical" href={`${ENTITIES.domain}/city/${city.slug}`} />
        <meta property="og:title" content={city.h1} />
        <meta property="og:description" content={city.metaDesc} />
        <meta property="og:url" content={`${ENTITIES.domain}/city/${city.slug}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: city.h1,
            description: city.metaDesc,
            about: {
              '@type': 'Place',
              name: city.name,
              address: { '@type': 'PostalAddress', addressLocality: city.name, addressRegion: city.state, addressCountry: 'IN' },
            },
            audience: { '@type': 'Audience', audienceType: 'PG Accommodation Owners and Managers' },
            provider: { '@type': 'Organization', name: ENTITIES.organization, url: ENTITIES.domain },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `${ENTITIES.softwareName} - ${city.name}`,
            description: `${ENTITIES.softwareType} serving ${city.name}, ${city.state}`,
            url: `${ENTITIES.domain}/city/${city.slug}`,
            areaServed: { '@type': 'City', name: city.name },
            parentOrganization: { '@type': 'Organization', name: ENTITIES.organization },
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: city.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          })}
        </script>
      </Helmet>

      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
              <MapPin className="w-4 h-4" />
              {city.name}, {city.state}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {city.h1.split('–')[0]}<span className="block text-xl md:text-2xl text-gray-600 font-normal mt-3">– {city.subtitle}</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {city.headerDesc}
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {city.stats.map(stat => (
                <div key={stat.label} className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-[#1a1a4e]">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
              <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-[#1a1a4e]">4.8/5</div>
                <div className="text-sm text-gray-500">User Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton variant="primary" href="/#contact">Start Free Trial in {city.name}</CTAButton>
              <CTAButton variant="secondary" href="/features">View Features</CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose {ENTITIES.softwareName} for Your {city.name} PG?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {city.headerDesc.split('. ').slice(0, 3).join('. ')}.
              </p>
              <div className="space-y-4">
                {city.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Key Local Insights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold mb-2">
                    <School className="w-4 h-4" /> Major Educational Institutions
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{city.colleges.slice(0, 5).join(', ')}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold mb-2">
                    <Briefcase className="w-4 h-4" /> Key Employment Hubs
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{city.techHubs.join(', ')}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-blue-200 text-sm font-semibold mb-2">
                    <MapPin className="w-4 h-4" /> Key Localities Served
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">{city.areas.slice(0, 8).join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Everything You Need to Manage PGs in {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Purpose-built features for {city.name}'s unique PG ecosystem — from {city.areas[0]} to {city.areas[2]}.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {city.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Localities We Serve in {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            {ENTITIES.softwareName} is trusted by PG owners across {city.areas.length}+ localities in {city.name}.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {city.areas.map(area => (
              <div key={area} className="bg-gray-50 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1a1a4e] transition-colors border border-gray-100">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            What {city.name} PG Owners Say
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Join 5,000+ PG owners who trust {ENTITIES.softwareName}.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {city.testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#1a1a4e] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}, {city.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Frequently Asked Questions About PG Management in {city.name}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Everything {city.name} PG owners ask about {ENTITIES.softwareName}.
          </p>
          <div className="space-y-4">
            {city.faqs.map(faq => (
              <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="px-6 py-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                  {faq.q}
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Explore Other Cities
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {otherCityLinks.map(c => (
              <Link
                key={c.slug}
                to={`/city/${c.slug}`}
                className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-[#1a1a4e] hover:shadow-lg transition-all text-center"
              >
                <div className="text-lg font-bold text-gray-900 group-hover:text-[#1a1a4e] transition-colors">{c.name}</div>
                <div className="text-sm text-gray-500">{c.state.split('/')[0].trim()}</div>
                <ArrowRight className="w-4 h-4 text-[#1a1a4e] mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your {city.name} PG Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto text-lg">
            Start your 7-day free trial today. No credit card required. Full access to every feature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="secondary" href="/#contact">Start Free Trial in {city.name}</CTAButton>
            <CTAButton variant="ghost" href="/features">Explore Features</CTAButton>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8 text-blue-200 text-sm">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 5,000+ Users</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 4.8/5 Rating</span>
            <span className="flex items-center gap-1"><IndianRupee className="w-4 h-4" /> Free Trial</span>
          </div>
        </div>
      </section>
    </>
  )
}
