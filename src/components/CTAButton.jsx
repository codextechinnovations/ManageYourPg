import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-[#1a1a4e] text-white hover:bg-[#1e3a8a] shadow-lg hover:shadow-xl',
  secondary: 'bg-white text-[#1a1a4e] border-2 border-[#1a1a4e] hover:bg-[#1a1a4e] hover:text-white',
  ghost: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
  green: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-2xl',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function CTAButton({ variant = 'primary', size = 'lg', href = '/#contact', children, className = '', showArrow = true }) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href.startsWith('http') || href.startsWith('#')) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    )
  }

  return (
    <Link to={href} className={baseClasses}>
      {content}
    </Link>
  )
}
