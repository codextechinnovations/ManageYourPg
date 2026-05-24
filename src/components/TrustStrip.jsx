import { Shield, IndianRupee, Clock, Headphones } from 'lucide-react'

const defaultItems = [
  { icon: Shield, text: '256-bit Encryption' },
  { icon: IndianRupee, text: 'No Credit Card Required' },
  { icon: Clock, text: '7-Day Free Trial' },
  { icon: Headphones, text: '24/7 Support' },
]

export function TrustStrip({ items = defaultItems }) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4">
          {items.map(item => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
              <item.icon className="w-4 h-4 text-[#1a1a4e]" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
