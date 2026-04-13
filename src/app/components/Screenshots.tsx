import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  CheckCircle2, 
  Monitor, 
  Globe,
  Smartphone,
  Layers,
  CreditCard,
  Users,
  Home,
  Building2,
  BarChart3,
  Settings,
  ArrowRight,
  Play
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function Screenshots() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const screens = [
    { label: 'Dashboard', image: '/screenshots/dashboard-screen.jpg', feature: 'Real-time Analytics' },
    { label: 'Tenants', image: '/screenshots/tenants-screen.jpg', feature: 'Tenant Management' },
    { label: 'Payments', image: '/screenshots/payments-screen-1.jpg', feature: 'Payment Tracking' },
    { label: 'Rooms', image: '/screenshots/rooms-screen.jpg', feature: 'Room Management' },
    { label: 'Notices', image: '/screenshots/send-notice-screen.jpg', feature: 'Send Notices' },
    { label: 'Side Menu', image: '/screenshots/side-menu-screen.jpg', feature: 'Navigation' },
  ];

  const features = [
    { icon: Layers, title: 'Smart Dashboard', desc: 'All metrics at a glance' },
    { icon: CreditCard, title: 'Automated Payments', desc: 'Reduce late payments by 80%' },
    { icon: Users, title: 'Tenant Portal', desc: 'Self-service & KYC' },
    { icon: BarChart3, title: 'Real-time Reports', desc: 'Data-driven decisions' },
    { icon: Building2, title: 'Multi-Property', desc: 'Manage unlimited PGs' },
    { icon: Smartphone, title: 'Mobile First', desc: 'iOS & Android App' },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, screens.length]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % screens.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);

  return (
    <section
      ref={containerRef}
      id="screenshots"
      className="py-24 md:py-40 bg-[#030213] relative overflow-hidden"
    >
      {/* Premium Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030213] via-[#0a0a1f] to-[#030213]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/5 rounded-full border border-white/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Experience</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            See How{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MY PG
            </span>
            <br />
            <span className="text-white/90">Transforms Your PG</span>
          </h2>
          
          <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Experience the simplicity of professional PG management. 
            Every feature designed with precision for Indian PG owners.
          </p>
        </motion.div>

        {/* Premium Showcase */}
        <div className="relative mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Feature Pills - Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-col gap-3"
            >
              {features.slice(0, 3).map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer"
                >
                  <f.icon className="w-4 h-4 text-white/60" />
                  <span className="text-sm text-white/80">{f.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Phone Display */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Device Frame */}
              <div className="relative">
                {/* Glow Ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[3rem] blur-2xl" />
                
                {/* Phone */}
                <div className="relative bg-[#0a0a1f] rounded-[2.5rem] p-2 ring-1 ring-white/10 shadow-2xl">
                  <div className="relative rounded-[2rem] overflow-hidden bg-[#1a1a4e]">
                    <motion.img
                      key={screens[activeIndex].image}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      src={screens[activeIndex].image}
                      alt={screens[activeIndex].label}
                      className="w-[360px] md:w-[350px] h-[680px] object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4e]/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                  </div>
                  
                  {/* Home Bar */}
                  <div className="flex justify-center py-2">
                    <div className="w-20 h-1 bg-white/10 rounded-full" />
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs text-white/80">{screens[activeIndex].feature}</span>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button onClick={prevSlide} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                  <ChevronLeft className="w-5 h-5 text-white/60" />
                </button>
                <div className="flex gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className="relative"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'}`} />
                    </button>
                  ))}
                </div>
                <button onClick={nextSlide} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all">
                  <ChevronRight className="w-5 h-5 text-white/60" />
                </button>
              </div>
            </motion.div>

            {/* Feature Pills - Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:flex flex-col gap-3"
            >
              {features.slice(3, 6).map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer"
                >
                  <span className="text-sm text-white/80">{f.title}</span>
                  <f.icon className="w-4 h-4 text-white/60" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Web Dashboard Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/5 rounded-full border border-white/10">
              <Monitor className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Web Dashboard</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Full Power on{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Any Device
              </span>
            </h3>
            <p className="text-white/50 max-w-md mx-auto">
              Access your complete PG management from browser. 
              Desktop-optimized interface with advanced features.
            </p>
          </div>

          {/* Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-[#0a0a1f] rounded-t-2xl ring-1 ring-white/10">
              {/* Browser Bar */}
              <div className="flex items-center px-4 py-3 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-lg">
                    <Globe className="w-3.5 h-3.5 text-white/40" />
                    <span className="text-xs text-white/40">owner.manageyourpg.com</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-0.5">
                <img src="/screenshots/web-dashboard.png" alt="Web Dashboard" className="w-full rounded-b-xl" />
              </div>
            </div>
          </motion.div>

          {/* Web Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { title: 'Desktop Ready', desc: 'Full screen power' },
              { title: 'Data Export', desc: 'Excel & PDF' },
              { title: 'Team Access', desc: 'Add staff members' },
              { title: 'Real-time Sync', desc: 'Instant updates' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <div>
                  <p className="text-xs text-white/40">{item.title}</p>
                  <p className="text-sm text-white">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-sm text-white/40">
            Free for first 10 tenants • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}