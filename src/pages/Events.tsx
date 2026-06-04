import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { Calendar, Globe, MapPin, Filter, ArrowUpDown, Search } from "lucide-react";

// Individual Event Card (Text-Only, optimized layout)
function EventCard({ event, idx }: { event: any; idx: number; key?: string | number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-wie-purple/20 transition-all duration-300 flex flex-col h-full overflow-hidden p-8 lg:p-10"
    >
      {/* Top Meta Tags / Session / Mode */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 font-sans ${
          event.mode === "Online" 
            ? "bg-blue-50 text-blue-600 border border-blue-100" 
            : "bg-wie-gold/10 text-wie-dark border border-wie-gold/20"
        }`}>
          {event.mode === "Online" ? <Globe size={10} /> : <MapPin size={10} />}
          {event.mode}
        </span>
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-wie-purple/5 text-wie-purple border border-wie-purple/10 font-sans">
          {event.type}
        </span>
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-wie-lavender/40 text-wie-purple border border-wie-lavender/30 font-sans">
          {event.session}
        </span>
      </div>

      {/* Title & Date Section */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-wie-purple font-bold text-xs uppercase tracking-widest mb-3 font-sans">
          <Calendar size={14} className="text-wie-gold" />
          {event.displayDate}
        </div>
        <h3 className="text-xl lg:text-2xl font-serif font-bold text-wie-dark mb-4 leading-tight group-hover:text-wie-purple transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
          {event.description}
        </p>
      </div>
      
      {/* Footer Location Info */}
      <div className="flex items-center gap-3 pt-6 border-t border-gray-50 mt-auto">
        <div className="w-8 h-8 rounded-full bg-wie-lavender/20 flex items-center justify-center text-wie-purple shrink-0">
          {event.mode === "Online" ? <Globe size={14} /> : <MapPin size={14} />}
        </div>
        <span className="text-xs text-gray-500 font-medium truncate font-sans">
          {event.location}
        </span>
      </div>
    </motion.div>
  );
}

const events = [
  // Session 2023-2024
  {
    id: 1,
    title: "Plantation drive",
    date: "2023-09-05",
    displayDate: "5.09.2023",
    type: "Offline",
    mode: "Offline",
    location: "Campus Grounds",
    category: "Social",
    session: "2023–2024",
    description: "A green initiative dedicated to environmental sustainability and student engagement."
  },
  {
    id: 2,
    title: "Mounting Challenges before Women Professionals",
    date: "2023-09-05",
    displayDate: "5.09.2023",
    type: "Offline",
    mode: "Offline",
    location: "ZHCET Seminar Hall",
    category: "Talk",
    session: "2023–2024",
    description: "An insightful session discussing the hurdles and triumphs of women in professional spheres."
  },
  {
    id: 3,
    title: "Code-o-Fiesta 2.0",
    date: "2023-09-09",
    displayDate: "9.09.2023",
    type: "Offline",
    mode: "Offline",
    location: "Coding Lab, AMU",
    category: "Competition",
    session: "2023–2024",
    description: "The second edition of our premier coding competition, challenging logic and syntax."
  },
  {
    id: 4,
    title: "Poster Making and Presentation competition",
    date: "2023-10-09",
    displayDate: "9.10.2023",
    type: "Offline",
    mode: "Offline",
    location: "Drawing Hall, ZHCET",
    category: "Competition",
    session: "2023–2024",
    description: "Merging art and science to communicate complex engineering concepts visually."
  },
  {
    id: 5,
    title: "Panel Discussion: Emerging Technologies, Innovation and Women Engineers",
    date: "2023-10-09",
    displayDate: "9.10.2023",
    type: "Online",
    mode: "Online",
    location: "Google Meet",
    category: "Webinar",
    session: "2023–2024",
    description: "Global experts discuss the role of women in the rapidly evolving tech landscape."
  },
  {
    id: 6,
    title: "The-Reel-Deal: A Cinematic Showdown",
    date: "2023-10-20",
    displayDate: "20.10.2023",
    type: "Online",
    mode: "Online",
    location: "Instagram / Virtual",
    category: "Competition",
    session: "2023–2024",
    description: "A creative reel-making competition showcasing the intersection of technology and creativity."
  },
  {
    id: 7,
    title: "Podcast Event: Tech Talk",
    date: "2023-11-18",
    displayDate: "18.11.2023",
    type: "Offline",
    mode: "Offline",
    location: "Audio Studio, AMU",
    category: "Talk",
    session: "2023–2024",
    description: "An engaging podcast session featuring live discussions with tech student leaders."
  },
  {
    id: 8,
    title: "Webinar on Data Privacy Day",
    date: "2024-01-28",
    displayDate: "28.01.2024",
    type: "Online",
    mode: "Online",
    location: "Webex",
    category: "Webinar",
    session: "2023–2024",
    description: "Understanding the importance of digital security and privacy in the modern age."
  },
  {
    id: 9,
    title: "Smart Contract Solidity Workshop",
    date: "2024-02-05",
    displayDate: "5th–7th Feb 2024",
    type: "Offline",
    mode: "Offline",
    location: "Blockchain Lab",
    category: "Workshop",
    session: "2023–2024",
    description: "A deep dive into Ethereum and Solidity for building decentralized applications."
  },
  {
    id: 10,
    title: "CaptureMania 2.0: The Ultimate Treasure Hunt",
    date: "2024-02-28",
    displayDate: "28.02.2024",
    type: "Offline",
    mode: "Offline",
    location: "ZHCET Lawns",
    category: "Competition",
    session: "2023–2024",
    description: "A high-energy technical treasure hunt testing speed and problem-solving skills."
  },
  {
    id: 11,
    title: "Orientation Ceremony of IEEE ZHCET, AMU",
    date: "2024-03-06",
    displayDate: "6.03.2024",
    type: "Offline",
    mode: "Offline",
    location: "Kennedy Auditorium",
    category: "Ceremony",
    session: "2023–2024",
    description: "Welcoming the new session members with inspiration and community spirit."
  },
  {
    id: 12,
    title: "Panel Discussion: Unleashing Potential",
    date: "2024-03-09",
    displayDate: "9.03.2024",
    type: "Offline",
    mode: "Offline",
    location: "Main Seminar Hall",
    category: "Talk",
    session: "2023–2024",
    description: "Commemorating Women's Day with power-packed discussions on unleashing human potential."
  },
  {
    id: 13,
    title: "Webinar: Empowering the Next Generation",
    date: "2024-06-25",
    displayDate: "25.06.2024",
    type: "Online",
    mode: "Online",
    location: "Microsoft Teams",
    category: "Webinar",
    session: "2023–2024",
    description: "Strategic insights for the next generation of engineers to excel in their careers."
  },

  // Session 2024-2025
  {
    id: 14,
    title: "Webinar: Break the Silence, Stop the Violence, No to Ragging",
    date: "2024-08-18",
    displayDate: "18.08.2024",
    type: "Webinar",
    mode: "Online",
    location: "Online",
    category: "Webinar",
    session: "2024–2025",
    description: "An essential webinar focused on creating a safe academic environment and awareness about anti-ragging policies."
  },
  {
    id: 42,
    title: "Taiwan Session – Emerging Trends in Power Electronics",
    date: "2024-11-15",
    displayDate: "15.11.2024",
    type: "Technical Session",
    mode: "Offline",
    location: "ZHCET Seminar Hall",
    category: "Technical",
    session: "2024–2025",
    description: "An intensive technical session exploring emerging trends in power electronics. Focused on electric vehicle (EV) dynamics, propulsion converters, and sustainable energy integration, featuring international experts from Taiwan's leading research institutions."
  },
  {
    id: 15,
    title: "Webinar: Engineering Success: Pathways to Innovation and Achievement",
    date: "2024-09-22",
    displayDate: "22.09.2024",
    type: "Webinar",
    mode: "Online",
    location: "Online",
    category: "Webinar",
    session: "2024–2025",
    description: "Exploring the diverse career paths and innovation strategies for aspiring engineering professionals."
  },
  {
    id: 16,
    title: "Plantation Drive",
    date: "2024-09-26",
    displayDate: "26.09.2024",
    type: "Social/Environmental Activity",
    mode: "Offline",
    location: "Campus Grounds",
    category: "Social",
    session: "2024–2025",
    description: "A green initiative dedicated to environmental sustainability and student collective action."
  },
  {
    id: 17,
    title: "MS Series 2.0: Episode 1",
    date: "2024-10-06",
    displayDate: "6.10.2024",
    type: "Webinar/Talk",
    mode: "Online",
    location: "Online",
    category: "Talk",
    session: "2024–2025",
    description: "The first episode of our Member Spotlight series, focusing on technical excellence and career growth."
  },
  {
    id: 18,
    title: "Code-o-Fiesta 3.0",
    date: "2024-10-08",
    displayDate: "8.10.2024",
    type: "Competition",
    mode: "Offline",
    location: "ZHCET Labs",
    category: "Competition",
    session: "2024–2025",
    description: "A flagship coding contest challenging logic and programming skills across a variety of languages."
  },
  {
    id: 19,
    title: "Orientation Ceremony of IEEE ZHCET, AMU",
    date: "2024-10-10",
    displayDate: "10.10.2024",
    type: "Ceremony",
    mode: "Offline",
    location: "Kennedy Auditorium",
    category: "Ceremony",
    session: "2024–2025",
    description: "Welcome event for the new academic session, introducing freshmen to the world of IEEE."
  },
  {
    id: 20,
    title: "Reel It In: The Ultimate Challenge",
    date: "2024-10-20",
    displayDate: "20.10.2024",
    type: "Competition",
    mode: "Offline",
    location: "Campus",
    category: "Competition",
    session: "2024–2025",
    description: "A creative reel-making competition highlighting storytelling through modern digital media."
  },
  {
    id: 21,
    title: "School Workshop: Breaking Barriers",
    date: "2024-11-07",
    displayDate: "7.11.2024",
    type: "Workshop",
    mode: "Offline",
    location: "Local Schools",
    category: "Workshop",
    session: "2024–2025",
    description: "Outreach program inspiring younger students with STEM concepts and career possibilities."
  },
  {
    id: 22,
    title: "Workshop on Green and Clean Energy",
    date: "2024-11-13",
    displayDate: "13.11.2024",
    type: "Technical",
    mode: "Offline",
    location: "Seminar Hall",
    category: "Technical",
    session: "2024–2025",
    description: "Focusing on sustainable energy technologies and the future of clean power generation."
  },
  {
    id: 23,
    title: "MS Series 2.0: Episode 02",
    date: "2024-11-22",
    displayDate: "22.11.2024",
    type: "Webinar/Talk",
    mode: "Online",
    location: "Online",
    category: "Talk",
    session: "2024–2025",
    description: "In-depth discussion on professional ethics and technical leadership."
  },
  {
    id: 24,
    title: "MS Series 2.0: Episode 03",
    date: "2025-02-01",
    displayDate: "1.02.2025",
    type: "Webinar/Talk",
    mode: "Online",
    location: "Online",
    category: "Webinar/Talk",
    session: "2024–2025",
    description: "Episode 3 of our series focusing on internship strategies and technical resume building."
  },
  {
    id: 25,
    title: "MS Series 2.0: Episode 04",
    date: "2025-02-15",
    displayDate: "15.02.2025",
    type: "Webinar/Talk",
    mode: "Online",
    location: "Online",
    category: "Webinar/Talk",
    session: "2024–2025",
    description: "Final episode covering emerging trends in AI and modern engineering."
  },
  {
    id: 26,
    title: "International Women’s Day Webinar",
    date: "2025-03-08",
    displayDate: "8.03.2025",
    type: "Webinar",
    mode: "Online",
    location: "Online",
    category: "Webinar",
    session: "2024–2025",
    description: "Commemorating Women's Day with global perspectives on women leading in tech."
  },
  {
    id: 27,
    title: "Student Research & Innovation Contest",
    date: "2025-04-23",
    displayDate: "23.04.2025",
    type: "Technical Competition",
    mode: "Offline",
    location: "ZHCET Campus",
    category: "Technical",
    session: "2024–2025",
    description: "A multi-day contest showcasing student research papers and innovative project prototypes."
  },
  {
    id: 28,
    title: "IEEE WIE Day 2025 Webinar",
    date: "2025-07-03",
    displayDate: "3.07.2025",
    type: "Webinar",
    mode: "Online",
    location: "Online",
    category: "Webinar",
    session: "2024–2025",
    description: "Celebrating WIE Day with a focus on empowering women in engineering leadership."
  },

  // Session 2025-2026
  {
    id: 29,
    title: "IEEE WIE-AG 2025 Felicitation Ceremony",
    date: "2025-09-13",
    displayDate: "13.09.2025",
    type: "Felicitation",
    mode: "Offline",
    location: "Kennedy Auditorium",
    category: "Felicitation",
    session: "2025–2026",
    description: "Honoring the dedication and achievements of our exceptional members and volunteers."
  },
  {
    id: 30,
    title: "Ozone Day – Poster Making Competition",
    date: "2025-09-16",
    displayDate: "16.09.2025",
    type: "Competition",
    mode: "Offline",
    location: "Drawing Hall, ZHCET",
    category: "Competition",
    session: "2025–2026",
    description: "Creative expressions focused on atmospheric protection and environmental awareness."
  },
  {
    id: 31,
    title: "IEEE Innovation Challenge",
    date: "2025-10-04",
    displayDate: "04.10.2025",
    type: "Technical Competition",
    mode: "Offline",
    location: "Project Lab, AMU",
    category: "Technical",
    session: "2025–2026",
    description: "Pitting the sharpest minds against real-world engineering hurdles."
  },
  {
    id: 32,
    title: "IEEE Week Special Talk",
    date: "2025-10-07",
    displayDate: "07.10.2025",
    type: "Talk",
    mode: "Offline",
    location: "Main Seminar Hall",
    category: "Talk",
    session: "2025–2026",
    description: "Insights from industry veterans to celebrate the spirit of IEEE week."
  },
  {
    id: 33,
    title: "Hands-on Training on MATLAB/Simulink",
    date: "2025-10-11",
    displayDate: "11.10.2025",
    type: "Technical Training",
    mode: "Offline",
    location: "Computational Lab",
    category: "Technical",
    session: "2025–2026",
    description: "Deep dive into system modeling and simulation using industry-standard tools."
  },
  {
    id: 34,
    title: "Swasth Nari, Sashakt Parivar Abhiyan",
    date: "2025-10-14",
    displayDate: "14.10.2025",
    type: "Seminar",
    mode: "Offline",
    location: "AMU Campus",
    category: "Seminar",
    session: "2025–2026",
    description: "Focusing on women's health as a pillar for community strength and empowerment."
  },
  {
    id: 35,
    title: "Mastering Interview Skills for Engineering Graduates",
    date: "2025-10-15",
    displayDate: "15.10.2025",
    type: "Career Development Talk",
    mode: "Offline",
    location: "Placement Cell",
    category: "Talk",
    session: "2025–2026",
    description: "Bridging the gap between academic knowledge and professional recruitment success."
  },
  {
    id: 36,
    title: "INQUEST – An IEEE Quiz Competition",
    date: "2025-10-16",
    displayDate: "16.10.2025",
    type: "Quiz Competition",
    mode: "Offline",
    location: "ZHCET",
    category: "Competition",
    session: "2025–2026",
    description: "Testing technical knowledge across diverse engineering domains in a high-stakes quiz."
  },
  {
    id: 37,
    title: "HerIEEEtage Walk",
    date: "2025-10-16",
    displayDate: "16.10.2025",
    type: "Outreach/Heritage Activity",
    mode: "Offline",
    location: "AMU Historic Landmarks",
    category: "Outreach",
    session: "2025–2026",
    description: "Exploring the legacy of engineering and history that defines our institution."
  },
  {
    id: 38,
    title: "Plantation Drive",
    date: "2025-11-24",
    displayDate: "24.11.2025",
    type: "Social/Environmental Activity",
    mode: "Offline",
    location: "Campus Lawns",
    category: "Social",
    session: "2025–2026",
    description: "Continuing our commitment to a greener campus through collaborative action."
  },
  {
    id: 39,
    title: "WIE Elevate 2026: Empowering Women in Engineering & Technology",
    date: "2026-02-14",
    displayDate: "14.02.2026",
    type: "Seminar / Technical Event",
    mode: "Offline",
    location: "Administrative Block",
    category: "Seminar",
    session: "2025–2026",
    description: "A flagship event focusing on the next generation of women leaders in tech."
  },
  {
    id: 40,
    title: "Webinar: Breaking the Default",
    date: "2026-02-17",
    displayDate: "17.02.2026",
    type: "Webinar",
    mode: "Online",
    location: "Webex",
    category: "Webinar",
    session: "2025–2026",
    description: "Challenging conventional norms to drive inclusive innovation in engineering."
  },
  {
    id: 41,
    title: "International Women’s Day – Women in STEM",
    date: "2026-03-08",
    displayDate: "08.03.2026",
    type: "Webinar",
    mode: "Online",
    location: "Google Meet",
    category: "Webinar",
    session: "2025–2026",
    description: "Global dialogue featuring women who are revolutionizing STEM fields."
  },
  {
    id: 14,
    title: "Student Research & Innovation Contest",
    date: "2026-03-30",
    displayDate: "28–30.03.2026",
    type: "Technical Competition",
    mode: "Offline",
    location: "Tech Gallery",
    category: "Technical",
    session: "2025–2026",
    description: "Multi-day exhibition and contest for groundbreaking student projects."
  },
  {
    id: 15,
    title: "Expert Session by International Speakers",
    date: "2026-04-02",
    displayDate: "02.04.2026",
    type: "Expert Talk / Lecture",
    mode: "Online",
    location: "Zoom",
    category: "Talk",
    session: "2025–2026",
    description: "Bringing global expertise directly to our students through virtual lecture series."
  }
];

export default function Events() {
  const [sessionFilter, setSessionFilter] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");

  const sessions = ["All", "2023–2024", "2024–2025", "2025–2026"];
  const categories = ["All", "Felicitation", "Competition", "Technical", "Talk", "Webinar", "Seminar", "Outreach", "Social"];

  const filteredAndSortedEvents = useMemo(() => {
    let result = events.filter(event => {
      // Search logic
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (!matchesSearch) return false;

      // Session logic
      if (sessionFilter !== "All" && event.session !== sessionFilter) return false;

      // Category logic
      if (activeFilter === "All") return true;
      
      const filterLower = activeFilter.toLowerCase();
      
      // Matches mode? (Online/Offline)
      if (event.mode.toLowerCase() === filterLower) return true;
      
      // Matches category/type?
      if (event.category.toLowerCase().includes(filterLower)) return true;
      if (event.type.toLowerCase().includes(filterLower)) return true;

      return false;
    });

    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [sessionFilter, activeFilter, sortOrder, searchQuery]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wie-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Events Unified</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our journey through the years. From technical workshops to empowering webinars.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 bg-white sticky top-20 z-30 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-wie-purple/20 focus:border-wie-purple transition-all"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 flex-1">
                {/* Session Filter */}
                <div className="flex items-center gap-2 mr-4 bg-gray-50 p-1 rounded-2xl border border-gray-100">
                   <Filter size={14} className="ml-2 text-wie-purple" />
                   <div className="flex gap-1">
                    {sessions.map(s => (
                      <button
                        key={s}
                        onClick={() => setSessionFilter(s)}
                        className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          sessionFilter === s 
                            ? "bg-wie-purple text-white shadow-sm" 
                            : "text-gray-500 hover:text-wie-dark"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort Toggle */}
                <button 
                  onClick={() => setSortOrder(prev => prev === "latest" ? "oldest" : "latest")}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-200 transition-all border border-transparent whitespace-nowrap active:scale-95"
                >
                  <ArrowUpDown size={14} className="text-wie-gold" />
                  {sortOrder === "latest" ? "Latest" : "Oldest"}
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 border-t border-gray-50 pt-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                    activeFilter === cat 
                      ? "bg-wie-purple text-white border-wie-purple shadow-md" 
                      : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredAndSortedEvents.map((event, idx) => (
              <EventCard key={`${event.id}-${event.session}`} event={event} idx={idx} />
            ))}
          </div>

          {filteredAndSortedEvents.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-300" />
              </div>
              <p className="text-xl text-gray-500 font-serif italic">No events match your current criteria.</p>
              <button 
                onClick={() => { setSessionFilter("All"); setActiveFilter("All"); setSearchQuery(""); }}
                className="mt-6 text-wie-purple font-bold underline hover:text-wie-dark transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Unified Summary Statistics */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-wie-dark rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 animated-gradient opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-8">
              <div>
                <div className="text-4xl font-serif font-bold text-wie-gold mb-1">{events.length}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Total Events (2023-26)</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div>
                <div className="text-4xl font-serif font-bold text-wie-gold mb-1">{events.filter(e => e.mode === "Online").length}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">Virtual Sessions</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block"></div>
              <div>
                <div className="text-4xl font-serif font-bold text-wie-gold mb-1">{events.filter(e => e.mode === "Offline").length}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">In-Person Activities</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
