import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, ArrowRight, CheckCircle2, Lightbulb, Handshake, Rocket, Star } from 'lucide-react';

const coreValues = [
  { icon: Heart, title: 'Integrity', description: 'We operate with full transparency and honesty in every client relationship and project we undertake.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We constantly explore new ideas and technologies to deliver cutting-edge solutions for our clients.' },
  { icon: Rocket, title: 'Excellence', description: 'We set the bar high and strive to exceed expectations in the quality of every deliverable.' },
  { icon: Handshake, title: 'Partnership', description: 'We treat every client as a long-term partner, invested in their success as much as our own.' },
  { icon: Users, title: 'Collaboration', description: 'Great results come from great teamwork. We foster a culture of open communication and shared vision.' },
  { icon: Star, title: 'Impact', description: 'Every project we take on is an opportunity to create meaningful impact for our clients and community.' },
];



export default function About() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0D1925] py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#136088]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#008A5C]/15 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#136088]/20 border border-[#136088]/30 text-[#008A5C] text-sm font-semibold mb-5">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Who We Are
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are a passionate team of digital experts committed to helping businesses grow and succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* ── Company Introduction ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-5">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-5">
                Building Digital Excellence
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Tegbar Digital Solution is a digital agency based in Addis Ababa, Ethiopia, dedicated to helping businesses and organizations establish a strong online presence through innovative digital solutions.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                We specialize in website development, graphic design, digital marketing, branding, social media management, and e-commerce solutions. Our team combines creativity with technology to deliver results that matter.
              </p>
              <div className="space-y-3">
                {[
                  'Based in Addis Ababa, Ethiopia',
                  'Full-service digital agency',
                  'Serving businesses and organizations',
                  'Focused on innovation and quality',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-[#008A5C] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Tegbar Digital Solution team"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#136088] to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#0D1925] mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To empower businesses and organizations across Ethiopia and beyond with innovative, accessible, and results-driven digital solutions that accelerate growth, strengthen brand identity, and create lasting competitive advantages in the digital economy.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#008A5C] to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                <Eye size={26} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#0D1925] mb-3">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To become the most trusted and impactful digital agency in East Africa — recognized for transforming businesses through technology, creativity, and strategy, while nurturing local digital talent and contributing to Ethiopia's thriving tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[#008A5C] text-sm font-semibold mb-4">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              These principles guide every decision we make and every project we take on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-[#136088]/30 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-[#0D1925] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#136088] text-sm font-semibold mb-4">The People Behind The Work</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1925] mb-6">Our Team</h2>
          </div>
          <div className="bg-gradient-to-br from-[#0D1925] to-[#136088]/80 rounded-3xl p-10 sm:p-14 text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users size={28} className="text-white" />
            </div>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
              Our team consists of dedicated digital professionals committed to helping businesses and organizations build a strong online presence through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-[#136088] to-[#008A5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#136088] font-bold hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
