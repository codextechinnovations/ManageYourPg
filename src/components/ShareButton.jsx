import { Share2, Check } from 'lucide-react'
import { useState } from 'react'

export function ShareButton({ text, url, className = '' }) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: 'MY PG - PG Management Software', text, url: shareUrl })
    } else {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-all ${copied ? 'text-green-600' : 'text-gray-400 hover:text-[#1a1a4e]'} ${className}`}
      aria-label={copied ? 'Link copied' : 'Share this'}
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
      {copied ? 'Copied!' : 'Share'}
    </button>
  )
}
