import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const API_URL = 'https://api.manageyourpg.com/api/pg-en/apply';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        ownerName: formData.fullName,
        pgName: formData.companyName,
        phone: formData.phone,
        email: formData.email,
        address: formData.message,
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast.success('Thank you! We will contact you soon.');
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            phone: '',
            email: '',
            companyName: '',
            message: '',
          });
        }, 3000);
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9741821179',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@manageyourpg.com',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Bangalore, Karnataka, India',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-white h-full relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.2),transparent)]"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's Connect
                </h3>
                  <p className="text-blue-100 mb-8">
                    Book a demo, ask about setup, get pricing details, or learn
                    about onboarding support for Manage Your PG. Available across India.
                  </p>

                {/* Contact Info Cards */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        <p className="text-blue-100">{info.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits List */}
                <div className="space-y-3 pt-8 border-t border-white/20">
                  <h4 className="font-medium mb-4">What You Get:</h4>
                  {[
                    'Free product demo',
                    'Setup assistance',
                    'Pricing consultation',
                    'Onboarding support',
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        duration: 0.5,
                      }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span className="text-blue-100">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Owner Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      PG Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent transition-all"
                      placeholder="Your PG name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Address / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a1a4e] focus:border-transparent transition-all resize-none"
                      placeholder="Enter your PG address..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Apply Now</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}