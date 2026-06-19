import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Globe, Palette, TrendingUp,
  Award, Users, Target, Briefcase, Star, ChevronRight,
  Code2, ShoppingCart, Share2, Megaphone, Shield, Zap, Clock, HeartHandshake
} from 'lucide-react';

// ─── Why Choose Us Data ───────────────────────────────────────────────────────
const whyChooseUs = [
  {
    icon: Shield,
    title: 'Professional Solutions',
    description: 'We deliver well-crafted digital solutions built to a high standard for every client we work with.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Focused Approach',
    description: 'Your goals drive our work. We listen carefully and tailor every solution to your specific needs.',
  },
  {
    icon: Zap,
    title: 'Innovative Digital Services',
    description: 'We apply current technologies and creative thinking to build digital products that stand out.',
  },
  {
    icon: Clock,
    title: 'Reliable Support',
    description: 'We are committed to being available and responsive throughout every stage of your project.',
  },
];

// ─── Services Preview ─────────────────────────────────────────────────────────
const servicesPreview = [
  { icon: Globe, title: 'Website Development', desc: 'Modern, fast, and responsive websites that convert visitors into customers.', color: 'from-blue-500 to-[#136088]' },
  { icon: Palette, title: 'Graphic Design', desc: 'Stunning visual designs that communicate your brand\'s identity powerfully.', color: 'from-[#008A5C] to-emerald-500' },
  { icon: TrendingUp, title: 'Digital Marketing', desc: 'Data-driven campaigns that grow your audience and maximize your ROI.', color: 'from-purple-500 to-[#136088]' },
  { icon: Award, title: 'Branding', desc: 'Strategic brand identities that make your business unforgettable.', color: 'from-orange-500 to-red-500' },
  { icon: Share2, title: 'Social Media Management', desc: 'Engaging content and growth strategies for your social media presence.', color: 'from-pink-500 to-purple-500' },
  { icon: ShoppingCart, title: 'E-commerce Solutions', desc: 'Powerful online stores that drive sales and deliver seamless shopping.', color: 'from-[#008A5C] to-[#136088]' },
];

// ─── Portfolio Preview ────────────────────────────────────────────────────────
const portfolioPreview = [
  { title: 'Restaurant Website', category: 'Web Development', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { title: 'Fashion Brand', category: 'Branding & Web', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80' },
  { title: 'Corporate Branding', category: 'Branding', img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&q=80' },
  { title: 'Social Media Campaign', category: 'Digital Marketing', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80' },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-[#0D1925] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#136088]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#008A5C]/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#136088]/5 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(19,96,136,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(19,96,136,0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#008A5C] animate-pulse"></span>
              Digital Agency in Ethiopia
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Empowering Your{' '}
              <span className="block bg-gradient-to-r from-[#136088] to-[#008A5C] bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              We build powerful digital solutions — from stunning websites to comprehensive marketing strategies — that transform your business and drive real results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-900/30"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {['Professional Team', 'Digital Services', 'Local Expertise'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-400 text-sm">
                  <CheckCircle2 size={16} className="text-[#008A5C]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Floating Cards Visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-80 h-80">
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center shadow-2xl animate-float">
                  <Zap size={56} className="text-white" />
                </div>
              </div>
              {/* Orbiting items */}
              {[
                { icon: Globe, label: 'Web Dev', pos: 'top-0 left-1/2 -translate-x-1/2' },
                { icon: Palette, label: 'Design', pos: 'right-0 top-1/2 -translate-y-1/2' },
                { icon: TrendingUp, label: 'Marketing', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
                { icon: Award, label: 'Branding', pos: 'left-0 top-1/2 -translate-y-1/2' },
              ].map(({ icon: Icon, label, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} flex flex-col items-center gap-1`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-white/60 text-xs">{label}</span>
                </div>
              ))}
              {/* Orbit ring */}
              <div className="absolute inset-0 border-2 border-dashed border-[#136088]/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs">Scroll down</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#136088] animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-4">
              Your Trusted Digital Partner
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We combine technical expertise with creative thinking to deliver digital solutions that truly make a difference for your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-[#136088]/30 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0D1925] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#008A5C] text-sm font-semibold mb-4">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From concept to launch, we provide end-to-end digital services to help your business thrive online.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0D1925] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-[#136088] text-sm font-semibold hover:gap-2 transition-all duration-200"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0D1925] text-white font-semibold hover:bg-[#136088] transition-colors duration-200"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-4">Sample Work</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-4">
              Project Examples
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A selection of sample projects that illustrate the types of digital work we are capable of delivering.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioPreview.map(({ title, category, img }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1925]/90 via-[#0D1925]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[#008A5C] text-xs font-semibold uppercase tracking-wider">{category}</span>
                  <h3 className="text-white font-bold mt-1">{title}</h3>
                </div>
                {/* Always-visible label at bottom */}
                <div className="p-4 bg-white">
                  <span className="text-[#136088] text-xs font-medium">{category}</span>
                  <h3 className="text-[#0D1925] font-bold text-sm mt-0.5">{title}</h3>
                </div>
                {/* Sample badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                  Sample
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#136088] text-[#136088] font-semibold hover:bg-[#136088] hover:text-white transition-all duration-200"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-[#0D1925] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#136088]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008A5C]/15 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-6">
            Ready to Get Started?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#136088] to-[#008A5C] bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
