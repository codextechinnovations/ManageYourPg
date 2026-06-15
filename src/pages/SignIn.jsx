import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Breadcrumb, buildBreadcrumbSchema } from '../components/Breadcrumb'

const breadcrumbItems = [
  { label: 'Home', path: '/' },
  { label: 'Sign In', path: '/signin' },
]

export function SignIn() {
  useEffect(() => {
    window.location.href = 'https://owner.manageyourpg.com/login'
  }, [])

  return (
    <>
      <Helmet>
        <title>Sign In | MY PG - PG Management Software</title>
        <meta
          name="description"
          content="Sign in to your MY PG owner dashboard to manage properties, tenants, rent collection, and reports."
        />
        <link rel="canonical" href="https://manageyourpg.com/signin" />
      </Helmet>
      <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>

      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 md:py-28">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <Breadcrumb items={breadcrumbItems} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Redirecting to login...</h1>
            <p className="text-gray-600 mb-6">
              If you are not redirected automatically, click the button below.
            </p>
            <a
              href="https://owner.manageyourpg.com/login"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Go to Login
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
