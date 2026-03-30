import { motion } from "motion/react";
import { Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Faizah Fatima Zaidi",
    role: "Chairperson",
    bio: "Passionate about leadership and fostering a strong community of women in engineering.",
    image: "https://picsum.photos/seed/team-1/400/400",
    linkedin: "#",
    twitter: "#",
    email: "faizah@example.com"
  },
  {
    name: "Sarah Ahmed",
    role: "Vice Chairperson",
    bio: "Dedicated to organizing technical workshops and skill-building sessions.",
    image: "https://picsum.photos/seed/team-2/400/400",
    linkedin: "#",
    twitter: "#",
    email: "sarah@example.com"
  },
  {
    name: "Mariam Khan",
    role: "General Secretary",
    bio: "Ensuring smooth operations and effective communication within the group.",
    image: "https://picsum.photos/seed/team-3/400/400",
    linkedin: "#",
    twitter: "#",
    email: "mariam@example.com"
  },
  {
    name: "Zoya Siddiqui",
    role: "Treasurer",
    bio: "Managing finances and resources for our impactful initiatives.",
    image: "https://picsum.photos/seed/team-4/400/400",
    linkedin: "#",
    twitter: "#",
    email: "zoya@example.com"
  },
  {
    name: "Alia Hasan",
    role: "Webmaster",
    bio: "Building and maintaining our digital presence to reach more people.",
    image: "https://picsum.photos/seed/team-5/400/400",
    linkedin: "#",
    twitter: "#",
    email: "alia@example.com"
  },
  {
    name: "Hiba Fatima",
    role: "Content Lead",
    bio: "Crafting stories and content that inspire and inform our community.",
    image: "https://picsum.photos/seed/team-6/400/400",
    linkedin: "#",
    twitter: "#",
    email: "hiba@example.com"
  }
];

export default function Team() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wie-purple/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Our Executive Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals working behind the scenes to lead, learn, and inspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl border-4 border-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-wie-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInHover={{ y: 0, opacity: 1 }}
                      className="text-white"
                    >
                      <p className="text-sm italic text-gray-300 mb-6 leading-relaxed">
                        "{member.bio}"
                      </p>
                      <div className="flex space-x-4">
                        <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold transition-colors">
                          <Linkedin size={18} />
                        </a>
                        <a href={member.twitter} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold transition-colors">
                          <Twitter size={18} />
                        </a>
                        <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold transition-colors">
                          <Mail size={18} />
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="mt-6 text-center group-hover:text-wie-purple transition-colors">
                  <h3 className="text-2xl font-serif font-bold text-wie-dark group-hover:text-wie-purple">{member.name}</h3>
                  <p className="text-wie-gold font-bold uppercase tracking-widest text-xs mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-wie-lavender/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wie-dark mb-6">Want to be part of the team?</h2>
          <p className="text-gray-600 text-lg mb-10">
            We are always looking for passionate volunteers to join our executive committees and help us make a difference.
          </p>
          <button className="bg-wie-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-wie-dark transition-all shadow-xl flex items-center justify-center gap-2 mx-auto">
            Volunteer Now <ExternalLink size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
