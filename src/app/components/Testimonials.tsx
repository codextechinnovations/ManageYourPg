import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'PG Owner, Delhi',
      image:
        'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc3NDcyNzQ0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      content:
        'Manage Your PG made our daily operations simple and fast. We can now manage 3 properties from one dashboard. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Property Manager, Bangalore',
      image:
        'https://images.unsplash.com/photo-1656221009909-4f202547cd94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDg1NTEzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      content:
        'Rent and expense tracking became much easier with MY PG. The reports help us make better business decisions every month.',
      rating: 5,
    },
    {
      name: 'Anjali Verma',
      role: 'PG Owner, Mumbai',
      image:
        'https://images.unsplash.com/photo-1596441248825-45b1f60ce4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b3VuZyUyMG1hbmFnZXJ8ZW58MXx8fHwxNzc0ODU1MTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      content:
        'The check-in process is now more organized and digital. Tenants love the self-service features. Great product!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-64 h-64 text-[#1a1a4e]" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <Quote className="w-64 h-64 text-[#1e3a8a] rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#1a1a4e] rounded-full">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#1a1a4e] to-[#1e3a8a] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied PG owners who transformed their business
            with My PG
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#1a1a4e]/20 mb-4" />

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-200">
            <div className="flex -space-x-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white"
                >
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              Join 1000+ happy PG owners
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}