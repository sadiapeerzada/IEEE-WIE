import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Linkedin, Mail, Twitter, ExternalLink, ArrowLeft } from "lucide-react";

const teamData: Record<string, any[]> = {
  "2023-2024": [
    {
      name: "Faizah Fatima Zaidi",
      role: "Chairperson (23-24)",
      bio: "Passionate about leadership and fostering a strong community of women in engineering.",
      image: "https://picsum.photos/seed/team-23-1/400/400",
      linkedin: "#",
      twitter: "#",
      email: "faizah@example.com"
    },
    {
      name: "Sarah Ahmed",
      role: "Vice Chairperson (23-24)",
      bio: "Dedicated to organizing technical workshops and skill-building sessions.",
      image: "https://picsum.photos/seed/team-23-2/400/400",
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com"
    }
  ],
  "2024-2025": [
    {
      name: "Zoya Siddiqui",
      role: "Chairperson (24-25)",
      bio: "Leading with vision and dedication to excellence.",
      image: "https://picsum.photos/seed/team-24-1/400/400",
      linkedin: "#",
      twitter: "#",
      email: "zoya@example.com"
    },
    {
      name: "Mariam Khan",
      role: "General Secretary (24-25)",
      bio: "Ensuring smooth operations and effective communication.",
      image: "https://picsum.photos/seed/team-24-2/400/400",
      linkedin: "#",
      twitter: "#",
      email: "mariam@example.com"
    }
  ],
  "2025-2026": [
    {
      name: "New Leader",
      role: "Incoming Chairperson",
      bio: "Ready to take IEEE WIE AMU to new heights in the upcoming session.",
      image: "https://picsum.photos/seed/team-25-1/400/400",
      linkedin: "#",
      twitter: "#",
      email: "leader@example.com"
    }
  ]
};

export default function TeamYear() {
  const { year } = useParams();
  const team = teamData[year || ""] || [];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wie-purple/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to="/team" className="inline-flex items-center gap-2 text-wie-purple hover:text-wie-dark transition-colors mb-8 font-bold">
            <ArrowLeft size={16} /> Back to Selection
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">
              Executive Team <span className="text-wie-gold italic">{year}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who led our group during the {year} session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4">
          {team.length > 0 ? (
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
                      <motion.div className="text-white">
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
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">Team data for this year is coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 bg-wie-lavender/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wie-dark mb-6">Want to be part of the team?</h2>
          <p className="text-gray-600 text-lg mb-10">
            We are always looking for passionate volunteers to join our executive committees and help us make a difference.
          </p>
          <Link 
            to="/involved" 
            className="bg-wie-purple text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-wie-dark transition-all shadow-xl inline-flex items-center gap-2 mx-auto"
          >
            Volunteer Now <ExternalLink size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
