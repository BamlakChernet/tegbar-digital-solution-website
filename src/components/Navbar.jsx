import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import logo from '../assets/logo-light.png';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { darkMode, setDarkMode, lang, setLang, t } = useApp();

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_portfolio'), path: '/portfolio' },
    { name: t('nav_blog'), path: '/blog' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-[#0f1f35] shadow-black/20' : 'bg-white shadow-blue-900/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo — dark background in light mode so white logo is always visible */}
          <Link to="/" className="flex items-center group">
            <div
              style={{
                background: darkMode ? 'transparent' : '#0D1925',
                borderRadius: '8px',
                padding: darkMode ? '0' : '4px 10px',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.2s',
              }}
            >
              <img
                src={logo}
                alt="Tegbar Digital Solution"
                style={{
                  height: '44px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
                className="group-hover:opacity-90 transition-opacity duration-200"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#136088] bg-blue-50'
                    : darkMode
                    ? 'text-gray-300 hover:text-[#136088] hover:bg-blue-900/30'
                    : 'text-[#0D1925] hover:text-[#136088] hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right controls: Lang + Dark + Contact */}
          <div className="hidden md:flex items-center gap-2">

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              title={lang === 'en' ? 'Switch to Amharic' : 'Switch to English'}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Languages size={15} />
              {lang === 'en' ? 'አማ' : 'EN'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 rounded-lg border transition-all duration-200 ${
                darkMode
                  ? 'border-gray-600 text-yellow-400 hover:bg-gray-700'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Contact Us — glowing rectangular button */}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                darkMode
                  ? 'bg-gradient-to-r from-[#136088] to-[#008A5C] text-white shadow-[0_0_16px_2px_rgba(19,96,136,0.5)] hover:shadow-[0_0_24px_4px_rgba(0,138,92,0.6)] hover:opacity-90'
                  : 'bg-gradient-to-r from-[#136088] to-[#008A5C] text-white shadow-[0_0_12px_2px_rgba(19,96,136,0.35)] hover:shadow-[0_0_20px_4px_rgba(0,138,92,0.45)] hover:opacity-90'
              }`}
            >
              {t('nav_contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-[#0D1925] hover:bg-gray-100'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`border-t px-4 py-4 space-y-1 shadow-xl ${darkMode ? 'bg-[#0f1f35] border-gray-700' : 'bg-white border-gray-100'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-[#136088] bg-blue-50'
                  : darkMode
                  ? 'text-gray-300 hover:text-[#136088] hover:bg-blue-900/30'
                  : 'text-[#0D1925] hover:text-[#136088] hover:bg-blue-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Contact button */}
          <Link
            to="/contact"
            className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-[#136088] to-[#008A5C] text-white text-sm font-semibold shadow-[0_0_14px_2px_rgba(19,96,136,0.4)]"
          >
            {t('nav_contact')}
          </Link>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 px-4 pt-3 border-t mt-2" style={{ borderColor: darkMode ? '#374151' : '#f3f4f6' }}>
            <button
              onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-200 text-gray-600'}`}
            >
              <Languages size={14} />
              {lang === 'en' ? 'አማርኛ' : 'English'}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all ${darkMode ? 'border-gray-600 text-yellow-400' : 'border-gray-200 text-gray-600'}`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
