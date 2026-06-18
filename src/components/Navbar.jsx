import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#136088] to-[#008A5C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap size={20} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-[#0D1925]">Tegbar</span>
              <span className="block text-xs font-medium text-[#136088] -mt-1">Digital Solution</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#136088] bg-blue-50'
                    : 'text-[#0D1925] hover:text-[#136088] hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#0D1925] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-[#136088] bg-blue-50'
                  : 'text-[#0D1925] hover:text-[#136088] hover:bg-blue-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#136088] to-[#008A5C] text-white text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
