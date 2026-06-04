import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Users, Calendar, Award, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { label: "Members", value: 500, suffix: "+", icon: <Users className="text-wie-gold" /> },
  { label: "Events", value: 50, suffix: "+", icon: <Calendar className="text-wie-gold" /> },
  { label: "Years", value: 10, suffix: "+", icon: <Award className="text-wie-gold" /> },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end) > 10 ? (totalMiliseconds / end) : 10;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center animated-gradient">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute inset-0 laurel-bg opacity-20 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden flex items-center justify-center border-4 border-wie-gold shadow-2xl mx-auto">
                <img 
                  src="/logo.png" 
                  alt="IEEE WIE AMU Logo" 
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/wie-amu-logo/200/200";
                  }}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight">
              Empowering Women <br />
              <span className="text-wie-gold italic">in Engineering</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto text-white/90">
              IEEE WIE AMU Affinity Group — Leading, Learning, Inspiring.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/involved"
                className="w-full sm:w-auto bg-wie-gold text-wie-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Join Us <ArrowRight size={20} />
              </Link>
              <Link
                to="/events"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Our Events
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating elements for depth */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-12 h-12 bg-wie-gold/20 rounded-full blur-xl hidden lg:block"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-10 w-20 h-20 bg-wie-lavender/30 rounded-full blur-2xl hidden lg:block"
        ></motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-wie-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-5xl font-serif font-bold text-wie-dark mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-500 uppercase tracking-widest font-bold text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wie-purple/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-wie-dark">
                Our Mission & <br />
                <span className="text-wie-purple italic">Vision</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.
              </p>
              <div className="space-y-6">
                {[
                  "Promote STEM education among young girls",
                  "Foster inclusion and diversity in engineering",
                  "Develop leadership skills through workshops",
                  "Build a strong network of professional women"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-wie-gold flex items-center justify-center text-wie-dark shrink-0">
                      <ArrowRight size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/wie-mission/800/800" 
                  alt="WIE Mission" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-wie-purple text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block border-4 border-wie-gold">
                <Quote className="text-wie-gold mb-4" size={32} />
                <p className="italic font-serif text-lg">
                  "Leading, Learning, Inspiring. We are building the future of engineering together."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voices of WIE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-wie-dark mb-4">Voices of WIE</h2>
            <div className="w-24 h-1 bg-wie-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 text-wie-lavender opacity-30" size={64} />
              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "It has been a privilege to serve as the Faculty Advisor. I've witnessed our students initiate diverse and impactful programs—from technical workshops to inclusive outreach efforts. Their leadership and dedication have fostered a progressive environment."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-wie-purple/20 overflow-hidden border-2 border-wie-gold">
                  <img 
                    src="/safia.png" 
                    alt="Dr. Safia" 
                    referrerPolicy="no-referrer" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://picsum.photos/seed/advisor/100/100";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-wie-dark">Dr. Safia Akhtar Kazmi</h4>
                  <p className="text-xs text-wie-gold font-bold uppercase tracking-widest">Faculty Advisor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 text-wie-lavender opacity-30" size={64} />
              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "My tenure as Chairperson has been a journey of transformation, leadership, and growth. Leading such a passionate team helped me evolve both professionally and personally. Together, we achieved impactful milestones."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-wie-purple/20 overflow-hidden border-2 border-wie-gold">
                  <img src="https://picsum.photos/seed/sadia-aiman/100/100" alt="Sadia Aiman" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-wie-dark">Sadia Aiman</h4>
                  <p className="text-xs text-wie-gold font-bold uppercase tracking-widest">Chairperson</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
