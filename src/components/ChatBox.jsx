import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, X, Send, Bot, User, Minimize2, Loader2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const quickReplies = [
  { question: "What is MY PG?", answer: "MY PG is India's #1 PG management software, trusted by 5000+ PG owners. It helps automate rent collection, manage tenants, track room occupancy, generate reports & manage expenses across 25+ cities in India." },
  { question: "Pricing details?", answer: "We offer a 7-day FREE trial for PG owners - no credit card required! After that, Premium plans start at just ₹499/month (₹3,999/year) for unlimited features including multi-property support." },
  { question: "How to start?", answer: "Simply download our APK, create an account, and start your 7-day FREE trial - no credit card required! Our onboarding team provides free assistance to help you configure everything." },
  { question: "Manage multiple PGs?", answer: "Yes! MY PG supports multi-property management allowing you to manage unlimited PG buildings, hostels, or co-living spaces from a single dashboard. Track occupancy, revenue, and expenses across all properties in real-time." },
  { question: "How to automate rent?", answer: "MY PG automates rent collection by setting up automatic monthly reminders to tenants via app notification and WhatsApp, tracking payment status in real-time, generating digital rent receipts automatically. This reduces manual follow-ups by 80%!" },
  { question: "Available in my city?", answer: "MY PG is available across all major cities in India: Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Coimbatore, Vizag, and Indore. Supports multiple Indian languages and UPI payments." },
  { question: "Features included?", answer: "Key features: Tenant management with KYC storage, automated rent reminders & WhatsApp notifications, room/bed management, expense tracking, digital rent receipts, expense reports, multi-property support, CCTV integration, food & cleaning services management, police verification, short/long stay options." },
  { question: "Is it secure?", answer: "Yes! MY PG uses bank-grade encryption for all data storage. Tenant documents and KYC data are stored securely. Role-based access control, GDPR compliant, automatic backups - your data is always safe." },
  { question: "How long to set up?", answer: "MY PG can be set up in just 5 minutes! Download the APK, create your account, add your PG details, and start adding tenants. Our onboarding team provides free assistance to help you get started." },
  { question: "Digital rent receipts?", answer: "Yes! MY PG automatically generates professional digital rent receipts that can be shared via WhatsApp or email. These receipts include all payment details, property info, and can be exported to PDF for your records." },
  { question: "Reports & analytics?", answer: "MY PG provides comprehensive real-time reports: occupancy rate trends, revenue analytics, expense summaries, pending payment reports, tenant turnover rates. All reports can be exported to Excel or PDF." },
  { question: "Tenant app available?", answer: "Yes! MY PG includes a dedicated tenant app where residents can view rent details, make payments via UPI/WhatsApp, raise maintenance complaints, view notices, and communicate. This improves tenant satisfaction significantly." },
  { question: "Why not use Excel?", answer: "Excel sheets are prone to errors, difficult to backup, and don't support automation. MY PG eliminates human errors, provides automated reminders (reducing late payments by 80%), offers real-time dashboards, and enables remote access from anywhere." },
  { question: "How to contact support?", answer: "You can reach our support team 24/7 via the Contact form on this website, or email us at support@manageyourpg.com. Our team will get back to you within 24 hours." },
  { question: "Free trial details?", answer: "MY PG offers a 7-day FREE trial for all PG owners - no credit card required! Experience all premium features during the trial period before deciding on our paid plans at just ₹499/month." },
  { question: "Tenant not paying rent?", answer: "MY PG sends automatic WhatsApp reminders on rent due dates. You can track payment status in real-time, send follow-up notices, and generate pending payment reports. Most tenants pay within 2-3 days of reminders, reducing late payments by 80%!" },
  { question: "How to add new tenant?", answer: "Adding a tenant is easy! Go to Tenants > Add New, enter their details (name, phone, address), upload KYC documents (Aadhaar, photo), assign a room/bed, and set the rent amount. The tenant receives a welcome notification instantly." },
  { question: "Tenant leaving/relocating?", answer: "When a tenant wants to leave, go to Tenant Profile > Move Out. MY PG automatically calculates pending dues, generates final rent receipt, refunds security deposit tracking, and marks the bed as vacant for the next tenant." },
  { question: "Managing food mess?", answer: "MY PG helps manage food services: set meal plans (veg/non-veg), track monthly mess fees, generate food bills, manage dietary preferences, track mess attendance, and handle mess advance/refund calculations automatically." },
  { question: "Room allocation help?", answer: "Go to Rooms > Add Room, set capacity (single/double/triple sharing), define rent for each bed type. When a tenant moves in, MY PG automatically assigns an available bed, updates occupancy, and shows vacant beds instantly." },
  { question: "Expense tracking?", answer: "Record expenses under categories: Maintenance, Food, Staff Salary, Utilities, Repairs, etc. MY PG generates expense reports by category and date range, helping you understand where your money goes each month." },
  { question: "Generate reports for taxes?", answer: "MY PG provides tax-ready reports: annual rent income summary, expense deductions report, tenant payment history, digital receipts with GST details. Export to PDF or Excel for your accountant or tax filing." },
  { question: "CCTV camera setup?", answer: "MY PG integrates with CCTV cameras. Add camera details, view live feeds, access recorded footage remotely. Perfect for monitoring common areas, entry/exit points, and ensuring tenant safety." },
  { question: "Handle tenant complaints?", answer: "Tenants can raise complaints through the app. You'll receive instant notifications, track complaint status (open/in-progress/resolved), and maintain history. This improves tenant satisfaction and reduces conflicts." },
  { question: "Send notice to tenants?", answer: "Use MY PG's Notice Board to send announcements: rent increase notices, rule updates, festival greetings, emergency alerts. Messages reach tenants via app notification and WhatsApp instantly." },
  { question: "Security deposit tracking?", answer: "MY PG tracks security deposits for each tenant. Record deposit amount, generate receipt, track refund eligibility, and auto-calculate deductions for damages when tenant moves out. Never lose track of deposits again!" },
  { question: "Track occupancy rate?", answer: "Dashboard shows real-time occupancy: total beds vs occupied, vacant beds by room, occupancy percentage. Track trends over time to understand which months are high/low season for your PG." },
  { question: "Multiple PG buildings?", answer: "Add each building separately with its own rooms and tenants. Switch between properties from a single dashboard. Perfect for PG owners with properties in different locations or buildings in the same area." },
  { question: "UPI payment integration?", answer: "Tenants can pay rent via UPI, Google Pay, PhonePe, Paytm, or bank transfer. All payment confirmations are tracked automatically, and digital receipts are generated instantly." },
  { question: "WhatsApp notifications?", answer: "MY PG sends automated WhatsApp reminders to tenants for rent due dates, payment confirmations, notices, and important updates. This reduces manual follow-ups significantly!" },
  { question: "Police verification?", answer: "MY PG offers comprehensive tenant verification: police verification, address proof, identity check, and background screening for complete peace of mind and legal compliance." },
  { question: "Short stay options?", answer: "MY PG supports flexible rental plans for both short stays (daily/weekly) and long stays (monthly/yearly). Manage different pricing and terms effortlessly for students, travelers, and working professionals." },
  { question: "Cleaning services?", answer: "MY PG helps manage cleaning & maintenance: schedule room cleaning, common area maintenance, pest control, and hygiene management with complete service history tracking." },
  { question: "Data backup & security?", answer: "MY PG uses bank-grade encryption, automatic daily backups, role-based access control, and 99.9% uptime. Your data is always safe and accessible from anywhere." },
  { question: "How to export data?", answer: "MY PG allows exporting all data to Excel or PDF: tenant lists, payment history, expense reports, rent receipts, occupancy reports. Perfect for accounting and tax filing." },
]

const getAIResponse = (userMessage, conversationHistory) => {
  const msg = userMessage.toLowerCase().trim()
  const history = conversationHistory.map(m => m.text.toLowerCase()).join(' ')
  
  const patterns = [
    { 
      triggers: ['price', 'cost', '₹', 'rupee', 'charge', 'fee', 'subscription', 'plan'],
      response: "We offer a 7-day FREE trial - no credit card required! After that, Premium plans start at just ₹499/month or ₹3,999/year for unlimited features including multi-property support. This is the most affordable PG management software in India!"
    },
    { 
      triggers: ['free', 'trial', 'try', 'demo'],
      response: "MY PG offers a 7-day FREE trial for all PG owners - no credit card required! Experience all premium features during the trial period. After the trial, plans start at just ₹499/month."
    },
    { 
      triggers: ['download', 'apk', 'install', 'app', 'where to get', 'get the app'],
      response: "You can download our APK directly from this website - just click the 'Download APK' button in the hero section. Then create your account and start your 7-day FREE trial!"
    },
    { 
      triggers: ['rent', 'payment', 'collect', 'monthly', 'due'],
      response: "MY PG automates rent collection with automatic monthly reminders via app notifications and WhatsApp. It tracks payment status in real-time, generates digital receipts, and reduces late payments by 80%!"
    },
    { 
      triggers: ['late', 'overdue', 'pending', 'not paying', 'default'],
      response: "MY PG sends automatic WhatsApp reminders on rent due dates. You can track all pending payments in real-time, send follow-up notices, and generate detailed pending payment reports. Most tenants pay within 2-3 days of reminders!"
    },
    { 
      triggers: ['tenant', 'manage tenant', 'add tenant', 'tenant management', 'kyc', 'documents'],
      response: "MY PG offers complete tenant management with digital KYC storage, contact details, payment history, room allocation, and move-in/move-out tracking - all from one dashboard!"
    },
    { 
      triggers: ['new tenant', 'add new', 'onboard', 'join', 'move in'],
      response: "Adding a tenant is easy! Go to Tenants > Add New, enter details (name, phone, address), upload KYC documents, assign a room/bed, and set rent amount. The tenant receives a welcome notification via WhatsApp instantly!"
    },
    { 
      triggers: ['leaving', 'move out', 'relocating', 'vacate', 'checkout', 'move-out'],
      response: "When a tenant wants to leave, go to Tenant Profile > Move Out. MY PG automatically calculates pending dues, generates final rent receipt, tracks security deposit refund, and marks the bed as vacant for the next tenant."
    },
    { 
      triggers: ['city', 'available', 'bangalore', 'mumbai', 'delhi', 'chennai', 'hyderabad', 'pune', 'location'],
      response: "MY PG is available across all major cities in India: Bangalore, Mumbai, Delhi NCR, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Jaipur, Lucknow, Chandigarh, Coimbatore, Vizag, and Indore. The app supports multiple Indian languages and UPI payments."
    },
    { 
      triggers: ['feature', 'what can', 'what does', 'capabilities', 'functions', 'ability'],
      response: "MY PG includes: Tenant management, automated rent collection, room/bed management, expense tracking, digital receipts, WhatsApp notifications, multi-property support, CCTV integration, food services, cleaning services, police verification, short/long stay options, and detailed reports."
    },
    { 
      triggers: ['secure', 'safe', 'data', 'privacy', 'encryption', 'protection', 'hack'],
      response: "MY PG uses bank-grade encryption for all data. Tenant documents and KYC data are stored securely with role-based access control. GDPR compliant with automatic backups - your data is always protected!"
    },
    { 
      triggers: ['setup', 'start', 'begin', 'sign up', 'register', 'create account', 'getting started', 'how to use'],
      response: "MY PG can be set up in just 5 minutes! Download the APK, create your account, add your PG details, and start adding tenants. Our onboarding team provides free assistance to help you get started."
    },
    { 
      triggers: ['multi', 'multiple', 'property', 'different locations', 'several'],
      response: "Yes! MY PG supports multi-property management allowing you to manage unlimited PG buildings, hostels, or co-living spaces from a single dashboard. Track occupancy, revenue, and expenses across all properties in real-time."
    },
    { 
      triggers: ['receipt', 'invoice', 'bill', 'rent receipt'],
      response: "MY PG automatically generates professional digital rent receipts that can be shared via WhatsApp or email. These receipts include all payment details, property info, and can be exported to PDF."
    },
    { 
      triggers: ['report', 'analytics', 'track', 'statistics', 'dashboard', 'overview'],
      response: "MY PG provides real-time reports: occupancy trends, revenue analytics, expense summaries, pending payments, tenant turnover. All reports can be exported to Excel or PDF for your records."
    },
    { 
      triggers: ['occupancy', 'vacant', 'filled', 'beds', 'rooms available', 'empty'],
      response: "Dashboard shows real-time occupancy: total beds vs occupied, vacant beds by room, occupancy percentage. Track trends over time to understand which months are high/low season for your PG."
    },
    { 
      triggers: ['room', 'bed', 'allocation', 'sharing', 'triple', 'double', 'single'],
      response: "Manage rooms by adding capacity (single/double/triple sharing), rent for each bed type, and facilities. When a tenant moves in, MY PG assigns an available bed, updates occupancy, and shows vacant beds instantly."
    },
    { 
      triggers: ['expense', 'expenses', 'cost', 'maintenance cost', 'food cost'],
      response: "Record all PG expenses in MY PG: Maintenance, Food, Staff Salary, Utilities, Repairs, etc. Categories make it easy to generate expense reports and understand where your money goes each month."
    },
    { 
      triggers: ['tax', 'income', 'accountant', 'gst', 'balance sheet'],
      response: "MY PG provides tax-ready reports: annual rent income summary, expense deductions report, tenant payment history, digital receipts. Export to PDF or Excel for your accountant or tax filing purposes."
    },
    { 
      triggers: ['contact', 'support', 'help', 'email', 'phone', 'whatsapp support'],
      response: "You can reach our support team 24/7 via the Contact form on this website, or email us at support@manageyourpg.com. Our team will get back to you within 24 hours."
    },
    { 
      triggers: ['cctv', 'camera', 'security', 'surveillance', 'monitor'],
      response: "MY PG integrates with CCTV cameras across your PG properties. Monitor live feeds, store recordings, and access remotely for complete security of your property."
    },
    { 
      triggers: ['food', 'meal', 'mess', 'dinner', 'lunch', 'breakfast', 'veg', 'non-veg'],
      response: "MY PG helps manage food & meal services including meal plans, menus, dietary preferences, mess timings, and food expenses for breakfast, lunch, and dinner."
    },
    { 
      triggers: ['clean', 'housekeeping', 'maintenance', 'pest', 'hygiene'],
      response: "MY PG includes cleaning & maintenance services management: schedule room cleaning, common area maintenance, pest control, and hygiene management with complete service history tracking."
    },
    { 
      triggers: ['police', 'verification', 'background', 'criminal', 'screening'],
      response: "MY PG offers comprehensive tenant verification: police verification, address proof, identity check, and background screening for complete peace of mind and legal compliance."
    },
    { 
      triggers: ['short', 'long', 'stay', 'daily', 'weekly', 'monthly', 'yearly'],
      response: "MY PG supports flexible rental plans for both short stays (daily/weekly) and long stays (monthly/yearly). Manage different pricing and terms effortlessly for students, travelers, and working professionals."
    },
    { 
      triggers: ['whatsapp', 'notification', 'reminder', 'sms', 'message', 'alert'],
      response: "MY PG sends automated WhatsApp and SMS reminders to tenants for rent due dates, notices, and updates. This significantly reduces manual follow-ups and late payments!"
    },
    { 
      triggers: ['excel', 'spreadsheet', 'manual', 'paper', 'notebook', 'old way'],
      response: "Excel sheets are prone to errors and don't support automation. MY PG eliminates human errors, provides automated reminders (reducing late payments by 80%), offers real-time dashboards, and enables remote access from anywhere."
    },
    { 
      triggers: ['complaint', 'issue', 'problem', 'feedback', 'suggestion'],
      response: "Tenants can raise complaints through the MY PG app. You receive instant notifications, track complaint status (open/in-progress/resolved), and maintain complete history. This improves tenant satisfaction!"
    },
    { 
      triggers: ['notice', 'announcement', 'broadcast', 'message all', 'notify'],
      response: "Use MY PG's Notice Board to send announcements: rent increase notices, rule updates, festival greetings, emergency alerts. Messages reach all tenants via app notification and WhatsApp instantly."
    },
    { 
      triggers: ['deposit', 'security', 'refund', 'advance'],
      response: "MY PG tracks security deposits for each tenant: record amount, generate receipt, track refund eligibility, and auto-calculate deductions for damages when tenant moves out. Never lose track of deposits!"
    },
    { 
      triggers: ['upi', 'gpay', 'phonepe', 'paytm', 'google pay', 'payment gateway', 'online payment'],
      response: "Tenants can pay rent via UPI, Google Pay, PhonePe, Paytm, or bank transfer. All payments are tracked automatically, and digital rent receipts are generated and sent via WhatsApp instantly!"
    },
    { 
      triggers: ['thank', 'thanks', 'thankyou', 'appreciate'],
      response: "You're welcome! 😊 Is there anything else you'd like to know about MY PG? Feel free to ask!"
    },
    { 
      triggers: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'namaste'],
      response: "Hello! 👋 Welcome to MY PG! I'm your AI assistant here to help you with any questions about our PG management software. How can I assist you today?"
    },
    { 
      triggers: ['bye', 'goodbye', 'see you', 'take care'],
      response: "Thank you for chatting with MY PG! 😊 If you have any more questions in the future, don't hesitate to reach out. Have a great day!"
    },
    { 
      triggers: ['compare', 'vs', 'better than', 'alternative', 'other apps'],
      response: "MY PG stands out with: 5000+ active users, lowest pricing starting free, dedicated mobile apps, multi-language support, UPI payment integration, WhatsApp notifications, and dedicated 24/7 customer support. Rated 4.8 stars by users!"
    },
    { 
      triggers: ['user', 'users', 'people', 'who use', 'customers'],
      response: "MY PG is trusted by over 5000+ PG owners across 25+ cities in India. Our users include individual PG owners, property management companies, and hostel operators."
    },
    { 
      triggers: ['update', 'upgrade', 'new feature', 'latest'],
      response: "MY PG regularly updates with new features based on user feedback. Recent updates include enhanced reports, better UPI integration, and improved WhatsApp notifications."
    },
    { 
      triggers: ['offline', 'internet', 'online', 'connection'],
      response: "MY PG works primarily online for real-time sync. However, the mobile app has offline capabilities - you can view cached data and add entries that sync when connection is restored."
    },
    { 
      triggers: ['language', 'hindi', 'tamil', 'telugu', 'kannada', 'malayalam'],
      response: "MY PG supports multiple Indian languages including Hindi, English, and regional languages. Tenants and owners can use the app in their preferred language."
    },
  ]

  for (const pattern of patterns) {
    for (const trigger of pattern.triggers) {
      if (msg.includes(trigger)) {
        return pattern.response
      }
    }
  }

  if (msg.length < 5) {
    return "I'd love to help! Could you please provide more details about what you're looking for? You can also click on the quick reply buttons above for instant answers to common questions."
  }

  return "Thank you for your message! For detailed assistance, please use the Contact form on this page or email us at support@manageyourpg.com. Our team will get back to you within 24 hours. You can also click on the quick reply buttons above for instant answers!"
}

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 Welcome to MY PG. I'm your AI assistant here to help you with any questions about our PG management software. How can I assist you today?"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const handleQuickReply = (reply) => {
    setMessages(prev => [...prev, { type: 'user', text: reply.question }])
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: reply.answer }])
      setIsTyping(false)
    }, 800 + Math.random() * 400)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    const userMessage = inputValue
    setMessages(prev => [...prev, { type: 'user', text: userMessage }])
    setInputValue('')
    setIsTyping(true)
    
    const delay = 1000 + Math.random() * 1000
    setTimeout(() => {
      const response = getAIResponse(userMessage, messages)
      setMessages(prev => [...prev, { type: 'bot', text: response }])
      setIsTyping(false)
    }, delay)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-96 ${isMinimized ? 'h-16' : 'h-[500px]'} bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col`}
          >
            <div className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">MY PG AI Assistant</p>
                  <p className="text-xs text-white/70">Powered by Artificial Intelligence</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-[#1a1a4e]' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`}>
                          {msg.type === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`px-4 py-2.5 rounded-2xl ${msg.type === 'user' ? 'bg-[#1a1a4e] text-white' : 'bg-white text-gray-800 shadow-sm border border-gray-100'}`}>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end gap-2 max-w-[85%]">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-r from-emerald-500 to-teal-500">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="px-4 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                          <div className="flex gap-1">
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                            <motion.span
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-3 bg-white border-t border-gray-100">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quickReplies.slice(0, 8).map((reply) => (
                      <button
                        key={reply.question}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-[#1a1a4e] hover:text-white text-gray-700 rounded-full transition-all border border-gray-200 hover:border-[#1a1a4e]"
                      >
                        {reply.question}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ask me anything about MY PG..."
                      className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#1a1a4e]/20 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      className="w-10 h-10 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] hover:shadow-lg rounded-full flex items-center justify-center transition-all"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.div>
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </span>
      </motion.button>
    </>
  )
}