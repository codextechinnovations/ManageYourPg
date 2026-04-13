import { motion } from 'motion/react';
import { Building2, Users, TrendingUp, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress === 1) clearInterval(timer);
          }, 20);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <div ref={ref}>{count}</div>;
}

export function TrustStats() {
  const stats = [
    {
      icon: Building2,
      value: 5000,
      suffix: '+',
      label: 'PGs Managed',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Tenants Served',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: TrendingUp,
      value: 80,
      suffix: '%',
      label: 'Less Follow-ups',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      value: 25,
      suffix: '+',
      label: 'Cities in India',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a4e] to-[#1e3a8a] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trusted by 5000+ PG Owners Across India
          </motion.h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied PG owners in Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Pune 
            and other cities who streamlined their operations with MY PG
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05, rotate: 2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all group"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5,
                }}
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </motion.div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center">
                  <AnimatedCounter end={stat.value} />
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.suffix}
                  </motion.span>
                </div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}