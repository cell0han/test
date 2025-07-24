import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, User, LogOut, Mail, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { useToast } from '@/components/ui/use-toast.jsx';

const Header = ({ openContactDialog, openAboutUsDialog, openAuthDialog }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    toast({ title: 'Амжилттай гарлаа.' });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { href: "/", label: "Нүүр" },
    { href: "#products", label: "Бүтээгдэхүүн", onClick: (e) => scrollToSection(e, 'products') },
    { href: "#", label: "Компани - Бидний тухай", onClick: (e) => { e.preventDefault(); openAboutUsDialog(); } },
    { href: "#", label: "Холбоо барих", onClick: (e) => { e.preventDefault(); openContactDialog(); } },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-50 py-1 px-4 sm:px-6 lg:px-8 text-gray-700 text-xs sm:text-sm flex flex-col sm:flex-row justify-start items-start sm:items-center border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <a href="mailto:info@getblessedsoft.com" className="hover:text-blue-600 flex items-center py-0.5">
            <Mail className="w-3 h-3 mr-1 text-blue-500" /> <span className="font-semibold">info@getblessedsoft.com</span>
          </a>
          <a href="tel:+97676769800" className="hover:text-blue-600 flex items-center py-0.5">
            <Phone className="w-3 h-3 mr-1 text-blue-500" /> <span className="font-semibold">7676-9800</span>
          </a>
          <a href="tel:+97690305105" className="hover:text-blue-600 flex items-center py-0.5">
            <Phone className="w-3 h-3 mr-1 text-blue-500" /> <span className="font-semibold">90-305-105</span>
          </a>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/47d4c7dc-84b3-4814-b1cd-aa1b50b7eaca/2ba96545b6377dd76a764b39f695d41c.jpg" alt="BlessedSoftware Logo" className="h-7 sm:h-10 w-auto" />
            <span className="text-base sm:text-xl font-bold text-gradient">BlessedSoftware</span>
          </motion.a>

          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm lg:text-base text-gray-700 hover:text-blue-600 transition-colors"
                onClick={link.onClick}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {isAuthenticated ? (
              <>
                <span className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  {user.email}
                </span>
                <Button variant="ghost" size="sm" onClick={handleLogout} aria-label="Гарах">
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={openAuthDialog}>Нэвтрэх</Button>
                <Button size="sm" onClick={openAuthDialog} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Бүртгүүлэх
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Цэс нээх/хаах"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  if (link.onClick) link.onClick(e);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-200">
              {isAuthenticated ? (
                <>
                  <span className="flex items-center w-full justify-start py-2 text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    {user.email}
                  </span>
                  <Button variant="ghost" size="sm" className="w-full justify-start" onClick={handleLogout}>Гарах</Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="w-full justify-start" onClick={openAuthDialog}>Нэвтрэх</Button>
                  <Button size="sm" className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600" onClick={openAuthDialog}>
                    Бүртгүүлэх
                  </Button>
                </>
              )}
            </div>
            {/* Mobile Contact Info */}
            <div className="pt-2 border-t border-gray-200 mt-2">
              <span className="block py-2 text-sm text-gray-700 font-bold">Холбоо барих:</span>
              <a href="mailto:info@getblessedsoft.com" className="block py-1 text-sm text-gray-700 hover:text-blue-600 flex items-center">
                <Mail className="w-3 h-3 mr-2 text-blue-500" /> info@getblessedsoft.com
              </a>
              <a href="tel:+97676769800" className="block py-1 text-sm text-gray-700 hover:text-blue-600 flex items-center">
                <Phone className="w-3 h-3 mr-2 text-blue-500" /> 7676-9800
              </a>
              <a href="tel:+97690305105" className="block py-1 text-sm text-gray-700 hover:text-blue-600 flex items-center">
                <Phone className="w-3 h-3 mr-2 text-blue-500" /> 90-305-105
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;