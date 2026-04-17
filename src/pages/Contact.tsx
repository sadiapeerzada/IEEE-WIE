import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Globe, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wie-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions or want to collaborate? Reach out to us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-wie-dark mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                We're here to help and answer any question you might have. We look forward to hearing from you!
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-wie-purple/10 rounded-2xl flex items-center justify-center text-wie-purple group-hover:bg-wie-purple group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wie-dark text-lg">Email Us</h4>
                    <p className="text-gray-500">amuieee.zhccet@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-wie-purple/10 rounded-2xl flex items-center justify-center text-wie-purple group-hover:bg-wie-purple group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wie-dark text-lg">Call Us</h4>
                    <p className="text-gray-500">+91 74648 89194, +91 81271 94823</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-wie-purple/10 rounded-2xl flex items-center justify-center text-wie-purple group-hover:bg-wie-purple group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-wie-dark text-lg">Our Location</h4>
                    <p className="text-gray-500">Z.H. College of Engineering & Technology, AMU, Aligarh, UP, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h4 className="font-serif font-bold text-wie-dark text-lg mb-6">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Instagram size={20} />, link: "https://www.instagram.com/ieee_wie_zhcetamu/" },
                    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/ieee-wie-zhcet-amu-aligarh/" },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.link} 
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-wie-gold hover:text-wie-dark hover:border-wie-gold transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Your Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-wie-purple transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-wie-purple transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-wie-purple transition-all" placeholder="Collaboration Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={5} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-wie-purple transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-wie-purple text-white font-bold py-5 rounded-2xl hover:bg-wie-dark transition-all shadow-lg flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative mt-16 px-4 max-w-7xl mx-auto mb-24">
        <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.8647468153493!2d78.07724217544093!3d27.906103676063688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4855669b6a1%3A0xc5468d601d2d0b5d!2sZakir%20Husain%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1713354000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ZHCET Location Map"
          />
        </div>
      </section>
    </div>
  );
}
