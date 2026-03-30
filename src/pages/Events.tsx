import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, MapPin, Filter, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Women in Tech Summit 2024",
    date: "May 15, 2024",
    location: "Kennedy Auditorium, AMU",
    category: "Networking",
    description: "A flagship conference featuring keynote speakers from top tech companies and panel discussions on career growth.",
    image: "https://picsum.photos/seed/summit/600/400",
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Python for Data Science Workshop",
    date: "April 10, 2024",
    location: "Computer Lab, ZHCET",
    category: "Technical Workshops",
    description: "Hands-on workshop covering the basics of Python, NumPy, and Pandas for aspiring data scientists.",
    image: "https://picsum.photos/seed/python/600/400",
    status: "Upcoming"
  },
  {
    id: 3,
    title: "School Outreach Program",
    date: "March 20, 2024",
    location: "Local High Schools",
    category: "Outreach",
    description: "Interacting with school girls to encourage them to pursue STEM education through fun experiments.",
    image: "https://picsum.photos/seed/outreach/600/400",
    status: "Past"
  },
  {
    id: 4,
    title: "Code-A-Thon 2023",
    date: "December 05, 2023",
    location: "ZHCET Campus",
    category: "Competitions",
    description: "A 24-hour hackathon focused on solving real-world problems using technology.",
    image: "https://picsum.photos/seed/code/600/400",
    status: "Past"
  },
  {
    id: 5,
    title: "Career Mentorship Session",
    date: "November 12, 2023",
    location: "Online (Zoom)",
    category: "Networking",
    description: "One-on-one mentorship session with AMU alumni working in global tech firms.",
    image: "https://picsum.photos/seed/mentor/600/400",
    status: "Past"
  }
];

const categories = ["All", "Technical Workshops", "Outreach", "Networking", "Competitions"];

export default function Events() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(e => e.category === filter);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-wie-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Events & Initiatives</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our journey through workshops, conferences, and outreach programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-wie-dark font-bold uppercase tracking-widest text-sm">
              <Filter size={18} className="text-wie-gold" />
              Filter Events
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    filter === cat 
                      ? "bg-wie-purple text-white shadow-lg" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Layout */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-wie-lavender/30 hidden md:block"></div>

          <div className="space-y-24">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-wie-gold border-4 border-white rounded-full shadow-lg z-10 hidden md:block"></div>

                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-3xl shadow-xl aspect-video">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        event.status === "Upcoming" ? "bg-wie-gold text-wie-dark" : "bg-gray-800 text-white"
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-wie-purple font-bold uppercase tracking-widest text-xs mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-wie-dark mb-4">{event.title}</h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-500 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-wie-gold" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-wie-gold" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {event.description}
                    </p>
                    <button className="flex items-center gap-2 text-wie-purple font-bold hover:text-wie-gold transition-colors group">
                      Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl font-serif italic">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
