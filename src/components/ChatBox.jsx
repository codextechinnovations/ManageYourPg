import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const quickReplies = [
  { question: "How to start?", answer: "Simply download our APK, create an account, and start your 7-day FREE trial - no credit card required! After the trial, choose our Premium plan at just ₹499/month." },
  { question: "Pricing details?", answer: "We offer a 7-day FREE trial for PG owners - no credit card required. After that, Premium plans start at just ₹499/month (₹3,999/year) for unlimited features including multi-property support." },
  { question: "Is it secure?", answer: "Yes! We use bank-grade encryption for all data. Tenant documents and KYC data are stored securely. Your data is automatically backed up." },
  { question: "How to contact support?", answer: "You can reach our support team 24/7 via the Contact form on this website, or email us at support@manageyourpg.com" },
]

export function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 Welcome to MY PG. I'm here to help you with any questions about our PG management software. How can I assist you today?"
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const handleQuickReply = (reply) => {
    setMessages(prev => [...prev, { type: 'user', text: reply.question }])
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: reply.answer }])
    }, 800)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    setMessages(prev => [...prev, { type: 'user', text: inputValue }])
    setInputValue('')
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Thank you for your message! For detailed assistance, please use the Contact form on this page or email us at support@manageyourpg.com. Our team will get back to you within 24 hours."
      }])
    }, 1000)
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
                  <p className="font-semibold text-sm">MY PG Assistant</p>
                  <p className="text-xs text-white/70">We typically reply in minutes</p>
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
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-[#1a1a4e]' : 'bg-emerald-500'}`}>
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
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-3 bg-white border-t border-gray-100">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply.question}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors"
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
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-[#1a1a4e]/20 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      className="w-10 h-10 bg-[#1a1a4e] hover:bg-[#1e3a8a] rounded-full flex items-center justify-center transition-colors"
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
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </span>
      </motion.button>
    </>
  )
}