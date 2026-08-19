import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowRight, 
  Calendar,
  Palette,
  Megaphone,
  Globe,
  Cpu,
  ClipboardList,
  HeartHandshake,
  PenTool
} from "lucide-react";

const teamYears = [
  {
    year: "2022-2023",
    label: "Session 2022-23",
    description: "The visionary team that laid substantial groundwork for our STEM initiatives.",
    icon: <Calendar className="text-wie-gold" />
  },
  {
    year: "2023-2024",
    label: "Session 2023-24",
    description: "The team that pioneered new initiatives and strengthened our foundation.",
    icon: <Calendar className="text-wie-gold" />
  },
  {
    year: "2024-2025",
    label: "Session 2024-25",
    description: "The current leadership driving innovation and empowerment.",
    icon: <Users className="text-wie-gold" />
  },
  {
    year: "2025-2026",
    label: "Session 2025-26",
    description: "The dynamic executive committee leading current initiatives, workshops, and empowerment.",
    icon: <Users className="text-wie-gold" />
  }
];

const specializedTeams = [
  {
    name: "Design Team",
    description: "Crafting visually compelling graphics, posters, and digital assets that represent WIE's events and identity with elegant and modern aesthetic appeal.",
    icon: <Palette className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-purple/10 to-wie-lavender/5"
  },
  {
    name: "Social Media and PR",
    description: "Managing WIE's public presence, building connections, spreading word about our initiatives, and engaging with the community across global platforms.",
    icon: <Megaphone className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-lavender/10 to-wie-purple/5"
  },
  {
    name: "Webmaster",
    description: "Developing, maintaining, and continuously optimizing our official website and online portals, ensuring smooth performance and modern interactive elements.",
    icon: <Globe className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-purple/10 to-wie-gold/5"
  },
  {
    name: "Technical Team",
    description: "At the core of WIE's technical spirit, organizing coding bootcamps, hands-on hackathons, and research support for emerging technological advancements.",
    icon: <Cpu className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-gold/10 to-wie-purple/5"
  },
  {
    name: "Workshop and Project Management",
    description: "Handling the end-to-end planning, coordination, and logistics of educational workshops, seminars, and collaborative technical projects.",
    icon: <ClipboardList className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-purple/10 to-wie-lavender/10"
  },
  {
    name: "Outreach Team",
    description: "Spreading the benefits of STEM education to local schools and communities, driving support and social-impact programs.",
    icon: <HeartHandshake className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-lavender/15 to-wie-gold/5"
  },
  {
    name: "Editorial Team",
    description: "Giving voice to our group through blogs, newsletters, event reports, and magazine publications detailing the journey and achievements of our members.",
    icon: <PenTool className="text-wie-purple group-hover:text-wie-gold transition-colors" size={28} />,
    color: "from-wie-gold/10 to-wie-lavender/5"
  }
];

export default function Team() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wie-purple/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Our Teams</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore the specialized committees and the executive leadership who drive IEEE WIE AMU.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Sessions selection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-wie-dark mb-4">Executive Committee Archive</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Select a session to view the dedicated office bearers who served in our executive committees over the years.</p>
            <div className="w-24 h-1 bg-wie-gold mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamYears.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={`/team/${item.year}`}
                  className="group block h-full bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:bg-wie-purple hover:border-wie-purple transition-all duration-500 text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-wie-dark mb-4 group-hover:text-white transition-colors">
                    {item.year}
                  </h3>
                  <p className="text-gray-500 mb-8 group-hover:text-white/80 transition-colors leading-relaxed">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-wie-purple font-bold group-hover:text-wie-gold transition-colors">
                    View Team <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Teams / Departments Section */}
      <section className="py-24 bg-wie-lavender/5 border-t border-b border-wie-lavender/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-wie-dark mb-4">Our Departments</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our affinity group operates through specialized teams designed to give every member a channel to master and apply their talents.
            </p>
            <div className="w-24 h-1 bg-wie-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedTeams.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-wie-purple/20 transition-all duration-300 flex flex-col h-full bg-gradient-to-br"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-wie-lavender/10 rounded-2xl flex items-center justify-center group-hover:bg-wie-purple/10 group-hover:scale-110 transition-all duration-300">
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-wie-dark group-hover:text-wie-purple transition-colors">
                    {dept.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Legacy Quote */}
      <section className="py-20 bg-wie-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-serif italic text-gray-300">
            "Leadership is not just a position, it's an action and an example. Our teams are the heart of this legacy."
          </p>
        </div>
      </section>
    </div>
  );
}
