import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { name: 'Website Development', path: '/services' },
  { name: 'Graphic Design', path: '/services' },
  { name: 'Digital Marketing', path: '/services' },
  { name: 'Branding', path: '/services' },
  { name: 'Social Media Management', path: '/services' },
  { name: 'E-commerce Solutions', path: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1925] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-white">Tegbar</span>
                <span className="block text-xs text-[#008A5C] -mt-0.5">Digital Solution</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Your Digital Future. We build powerful digital solutions that transform your business and drive real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#008A5C] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#136088] group-hover:bg-[#008A5C] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#008A5C] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#136088] group-hover:bg-[#008A5C] transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#008A5C] mt-0.5 shrink-0" />
                <a href="tel:+251990344747" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +251 990 344 747
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#008A5C] mt-0.5 shrink-0" />
                <a
                  href="mailto:Tegabrdigitalsolution@gmail.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors break-all"
                >
                  Tegabrdigitalsolution@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#008A5C] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tegbar Digital Solution. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Empowering Your Digital Future — Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
}
