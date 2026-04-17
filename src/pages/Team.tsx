import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Users, ArrowRight, Calendar } from "lucide-react";

const teamYears = [
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
    description: "The incoming visionaries preparing for the next chapter.",
    icon: <ArrowRight className="text-wie-gold" />
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
              Explore the dedicated leaders and members who have shaped IEEE WIE AMU over the years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selection Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
