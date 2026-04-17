import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Teams", path: "/team" },
  { name: "Get Involved", path: "/involved" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-wie-gold shadow-sm">
              <img 
                src="/logo.png" 
                alt="IEEE WIE AMU Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/wie-amu-logo/200/200";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight ${scrolled ? "text-wie-dark" : "text-wie-dark"}`}>
                IEEE WIE AMU
              </span>
              <span className="text-[10px] uppercase tracking-widest text-wie-gold font-bold">
                Affinity Group
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-wie-gold ${
                  location.pathname === link.path ? "text-wie-gold" : "text-wie-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/involved"
              className="bg-wie-purple text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-wie-dark transition-all border border-wie-gold/30 shadow-lg"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-wie-dark p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-4 text-base font-medium border-b border-gray-50 flex justify-between items-center ${
                    location.pathname === link.path ? "text-wie-gold" : "text-wie-dark"
                  }`}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-wie-gold" />
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/involved"
                  className="block w-full text-center bg-wie-purple text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Join IEEE WIE
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
