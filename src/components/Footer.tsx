import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wie-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-wie-gold shadow-lg">
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
                <span className="font-serif font-bold text-xl leading-tight">IEEE WIE AMU</span>
                <span className="text-xs uppercase tracking-widest text-wie-gold font-bold">Affinity Group</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading, Learning, Inspiring. Empowering women in engineering and technology at Aligarh Muslim University.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ieee_wie_zhcetamu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/ieee-wie-zhcet-amu-aligarh/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h3 className="font-serif text-xl mb-6 text-wie-gold">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Teams</Link></li>
              <li><Link to="/involved" className="hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:ml-auto">
            <h3 className="font-serif text-xl mb-6 text-wie-gold">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-wie-gold shrink-0" />
                <span>Z.H. College of Engineering & Technology, AMU, Aligarh, UP, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-wie-gold shrink-0" />
                <span>amuieee.zhccet@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-wie-gold shrink-0" />
                <span>+91 74648 89194, +91 81271 94823</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} IEEE WIE AMU Affinity Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
