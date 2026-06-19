import { Link } from 'react-router-dom';
import {
  Globe, Palette, TrendingUp, Award, Share2, ShoppingCart,
  ArrowRight, Check, ChevronRight, Zap, Clock, Shield
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    shortDesc: 'Modern, responsive websites built for performance and results.',
    fullDesc: 'We design and develop high-quality websites that are not just visually stunning but also optimized for speed, SEO, and conversions. From landing pages to complex web applications, we craft digital experiences that work.',
    features: [
      'Responsive design for all devices',
      'SEO-optimized structure',
      'Fast loading performance',
      'CMS integration (WordPress, Headless)',
      'Custom web applications',
      'Website maintenance & support',
    ],
    color: 'from-[#136088] to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-[#136088]',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    shortDesc: 'Visual designs that communicate and captivate your audience.',
    fullDesc: 'Our creative design team crafts visuals that tell your brand story with impact. From logos to marketing materials, we produce designs that are both beautiful and strategically effective.',
    features: [
      'Logo design & brand identity',
      'Print & digital marketing materials',
      'Social media graphics',
      'Packaging design',
      'UI/UX design',
      'Infographics & illustrations',
    ],
    color: 'from-[#008A5C] to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-[#008A5C]',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    shortDesc: 'Data-driven campaigns that grow your audience and revenue.',
    fullDesc: 'We develop and execute digital marketing strategies tailored to your business goals. From SEO to paid advertising, we help you reach your target audience and convert them into loyal customers.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click advertising (Google Ads)',
      'Email marketing campaigns',
      'Content marketing strategy',
      'Analytics & performance reporting',
      'Conversion rate optimization',
    ],
    color: 'from-purple-500 to-[#136088]',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: Award,
    title: 'Branding',
    shortDesc: 'Strategic brand identities that make lasting impressions.',
    fullDesc: "Your brand is more than a logo — it's your promise to your customers. We build comprehensive brand identities that communicate your values, differentiate you from competitors, and build lasting trust.",
    features: [
      'Brand strategy & positioning',
      'Logo & visual identity design',
      'Brand guidelines & style guide',
      'Brand voice & messaging',
      'Brand audit & refresh',
      'Stationery & collateral design',
    ],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    shortDesc: 'Consistent, engaging social media presence that builds community.',
    fullDesc: 'We manage your social media channels so you can focus on running your business. Our team creates engaging content, grows your following, and builds authentic connections with your audience.',
    features: [
      'Content creation & scheduling',
      'Community management',
      'Social media strategy',
      'Paid social advertising',
      'Influencer collaboration',
      'Monthly performance reports',
    ],
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    shortDesc: 'Powerful online stores that drive sales around the clock.',
    fullDesc: 'We build feature-rich e-commerce platforms that provide seamless shopping experiences and drive revenue. From product catalog setup to payment integration, we handle it all.',
    features: [
      'Custom e-commerce website',
      'Payment gateway integration',
      'Product catalog management',
      'Order & inventory management',
      'Mobile-optimized shopping',
      'E-commerce SEO & marketing',
    ],
    color: 'from-[#008A5C] to-[#136088]',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and target audience to align our strategy.' },
  { step: '02', title: 'Strategy', desc: 'We create a tailored plan with clear milestones, timelines, and deliverables.' },
  { step: '03', title: 'Design & Build', desc: 'Our team executes the plan with precision, creativity, and attention to detail.' },
  { step: '04', title: 'Review & Launch', desc: 'We review, test, refine, and then launch your project with full support.' },
];

export default function Services() {
  return (
    <div>
      {/* ── Page Hero + Process integrated ──────────────────────────────────── */}
      <section className="relative bg-[#0D1925] pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#136088]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#008A5C]/15 rounded-full blur-3xl"></div>
        </div>

        {/* Hero text */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-5">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to help your business grow, connect, and succeed in today's competitive landscape.
          </p>
        </div>

        {/* Process steps — integrated inside hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl px-8 py-10">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/30 border border-[#136088]/40 text-[#008A5C] text-xs font-semibold uppercase tracking-wider">How We Work</span>
              <h2 className="text-2xl font-black text-white mt-3">Our Process</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map(({ step, title, desc }, i) => (
                <div key={step} className="relative text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-black text-base">{step}</span>
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#136088]/50 to-transparent"></div>
                  )}
                  <h3 className="font-bold text-white text-base mb-1">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, shortDesc, fullDesc, features, color, bgColor, textColor }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 hover:border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0D1925] mb-1">{title}</h3>
                      <p className="text-gray-500 text-sm">{shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{fullDesc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check size={14} className="text-[#008A5C] mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${bgColor} ${textColor} text-sm font-semibold hover:opacity-80 transition-opacity duration-200`}
                  >
                    Get a Quote <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us Pillars ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0D1925]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: Zap, title: 'Fast Turnaround', desc: 'We deliver projects on time without compromising quality.' },
              { icon: Shield, title: 'Quality Guaranteed', desc: 'Every project undergoes rigorous quality checks before delivery.' },
              { icon: Clock, title: 'Ongoing Support', desc: '30-day post-launch support included with every project.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#136088]/20 border border-[#136088]/30 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#008A5C]" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#136088] to-[#008A5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and let's create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#136088] font-bold hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
