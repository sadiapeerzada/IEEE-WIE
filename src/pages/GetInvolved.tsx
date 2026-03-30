import { motion } from "motion/react";
import { CheckCircle, Users, Heart, Share2, ArrowRight } from "lucide-react";

const benefits = [
  { title: "Professional Networking", desc: "Connect with industry leaders and successful AMU alumni globally.", icon: <Users className="text-wie-gold" /> },
  { title: "Skill Development", desc: "Access to exclusive technical workshops, leadership training, and seminars.", icon: <CheckCircle className="text-wie-gold" /> },
  { title: "Mentorship", desc: "Get guided by experienced faculty and professionals in your field of interest.", icon: <Heart className="text-wie-gold" /> },
  { title: "Global Recognition", desc: "Be part of the world's largest professional organization for engineering.", icon: <Share2 className="text-wie-gold" /> }
];

export default function GetInvolved() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wie-purple/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Get Involved</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join a community that empowers, supports, and inspires the next generation of women engineers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-wie-dark mb-4">Membership Benefits</h2>
            <div className="w-24 h-1 bg-wie-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-wie-dark mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-24 bg-wie-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animated-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ready to Join?</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Fill out the form to express your interest in joining IEEE WIE AMU. Our team will get back to you with the next steps for official IEEE membership and group enrollment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-wie-gold flex items-center justify-center text-wie-dark shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-serif font-bold text-wie-gold text-lg">Express Interest</h4>
                    <p className="text-gray-500 text-sm">Fill the form on this page.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-wie-gold flex items-center justify-center text-wie-dark shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-serif font-bold text-wie-gold text-lg">Orientation</h4>
                    <p className="text-gray-500 text-sm">Attend our next orientation session.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-wie-gold flex items-center justify-center text-wie-dark shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-serif font-bold text-wie-gold text-lg">Official Enrollment</h4>
                    <p className="text-gray-500 text-sm">Complete IEEE registration and start your journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-wie-dark"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-wie-purple transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-wie-purple transition-colors" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Department</label>
                    <input type="text" className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-wie-purple transition-colors" placeholder="Computer Engineering" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Year of Study</label>
                    <select className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-wie-purple transition-colors bg-transparent">
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                      <option>Postgraduate</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Why do you want to join WIE?</label>
                  <textarea rows={3} className="w-full border-b-2 border-gray-100 py-2 focus:outline-none focus:border-wie-purple transition-colors resize-none" placeholder="Tell us about your interests..."></textarea>
                </div>
                <button className="w-full bg-wie-purple text-white font-bold py-4 rounded-full hover:bg-wie-dark transition-all shadow-lg flex items-center justify-center gap-2">
                  Submit Interest <ArrowRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
