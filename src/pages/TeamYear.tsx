import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Linkedin, Mail, Twitter, ExternalLink, ArrowLeft, GraduationCap } from "lucide-react";

const teamData: Record<string, any[]> = {
  "2022-2023": [
    {
      name: "Rehma Manaal Rizvi",
      role: "Chairperson",
      branch: "Computer Engineering, Final Year",
      bio: "Led the group to new heights in STEM excellence, championing programming bootcamps and women empowerment.",
      linkedin: "#",
      twitter: "#",
      email: "rehma@example.com"
    },
    {
      name: "Nabila Hafeez",
      role: "Vice-Chairperson",
      branch: "Electrical Engineering, Final Year",
      bio: "Driven to foster community, mentoring dozens of female students in core and software research.",
      linkedin: "#",
      twitter: "#",
      email: "nabila@example.com"
    },
    {
      name: "Saumya Agarwal",
      role: "General Secretary",
      branch: "Electrical Engineering, 3rd Year",
      bio: "Fostered smooth executive coordination, planning major hands-on workshops and managing schedules beautifully.",
      linkedin: "#",
      twitter: "#",
      email: "saumya@example.com"
    },
    {
      name: "Faizah Fatima Zaidi",
      role: "Joint Secretary",
      branch: "Food Technology, 3rd Year",
      bio: "Enhanced cross-departmental operations, ensuring excellent internal workflow across active campaigns.",
      linkedin: "#",
      twitter: "#",
      email: "faizah@example.com"
    },
    {
      name: "Areesha Usmani",
      role: "Head of Operations",
      branch: "Food Technology, 3rd Year",
      bio: "The structural force behind major events, coordinating technical setups and logistics seamlessly.",
      linkedin: "#",
      twitter: "#",
      email: "areesha@example.com"
    },
    {
      name: "Sidra Suhail",
      role: "Editorial Head",
      branch: "Electrical Engineering, 2nd Year",
      bio: "Gave a poetic voice to our achievements, editing premium newsletters and blogging with passion.",
      linkedin: "#",
      twitter: "#",
      email: "sidra@example.com"
    },
    {
      name: "Agrita Ratnam",
      role: "Design Head",
      branch: "Electronics Engineering, 3rd Year",
      bio: "Transformed digital and print graphics, leading creative direction for events with elegant visuals.",
      linkedin: "#",
      twitter: "#",
      email: "agrita@example.com"
    },
    {
      name: "Ahmad Wali Siddiqui",
      role: "Technical Head",
      branch: "Computer Engineering, 3rd Year",
      bio: "Supervised high-impact hackathons, website updates, and modern developer mentorship sessions.",
      linkedin: "#",
      twitter: "#",
      email: "ahmad@example.com"
    },
    {
      name: "Fatima Wajih",
      role: "External Affairs & PR Head",
      branch: "Chemical Engineering, 1st Year",
      bio: "Cultivated strategic external collaborations, advancing our community's network with colleges.",
      linkedin: "#",
      twitter: "#",
      email: "fatima@example.com"
    },
    {
      name: "Saman Umera",
      role: "External Affairs & PR Head",
      branch: "Electronics Engineering, 2nd Year",
      bio: "Represented WIE to public programs, increasing brand equity across corporate and academic sectors.",
      linkedin: "#",
      twitter: "#",
      email: "saman@example.com"
    },
    {
      name: "Ritika Verma",
      role: "Volunteer",
      branch: "Electronics Engineering, 3rd Year",
      bio: "Mainstreamed voluntary student initiatives, aiding technical workshops and community programs.",
      linkedin: "#",
      twitter: "#",
      email: "ritika@example.com"
    },
    {
      name: "Nikita Kumari",
      role: "Volunteer",
      branch: "Chemical Engineering, 3rd Year",
      bio: "Supported project management, conducting operations for events and social awareness campaign activities.",
      linkedin: "#",
      twitter: "#",
      email: "nikita@example.com"
    }
  ],
  "2023-2024": [
    {
      name: "Faizah Fatima Zaidi",
      role: "Chairperson",
      branch: "Food Technology, Final Year",
      bio: "Steered the affinity group with powerful representation, extending WIE networks and expanding local impact.",
      linkedin: "#",
      twitter: "#",
      email: "faizah@example.com"
    },
    {
      name: "Sidra Suhail",
      role: "Vice-Chairperson",
      branch: "Electrical Engineering, 3rd Year",
      bio: "Coordinated active core committees, initiating modern STEM and professional career planning series.",
      linkedin: "#",
      twitter: "#",
      email: "sidra@example.com"
    },
    {
      name: "Syeda Fatima Jafri",
      role: "General Secretary",
      branch: "Food Technology, Final Year",
      bio: "Organized team workflows, ensuring flawless execution of documentation, meetings, and operational metrics.",
      linkedin: "#",
      twitter: "#",
      email: "syeda@example.com"
    },
    {
      name: "Fatima Wajih",
      role: "Joint Secretary",
      branch: "Chemical Engineering, 3rd Year",
      bio: "Contributed beautifully to high-level initiatives, maintaining dynamic interfaces with general body members.",
      linkedin: "#",
      twitter: "#",
      email: "fatima.w@example.com"
    },
    {
      name: "Mohammad Haris",
      role: "Head of Operations",
      branch: "Mechanical Engineering, Final Year",
      bio: "Directed physical logistics, volunteer allocation, and robust production aspects across college events.",
      linkedin: "#",
      twitter: "#",
      email: "haris@example.com"
    },
    {
      name: "Sadia Aiman",
      role: "Editorial Head",
      branch: "Electrical Engineering, 2nd Year",
      bio: "Crafted stellar content strategies, establishing WIE blogs and writing inspiring technical reports.",
      linkedin: "#",
      twitter: "#",
      email: "sadia@example.com"
    },
    {
      name: "Jauwad Jamal Khan",
      role: "Design Head",
      branch: "Civil Engineering, 2nd Year",
      bio: "Created spectacular graphic layouts, setting high benchmarks for WIE digital branding and poster design.",
      linkedin: "#",
      twitter: "#",
      email: "jauwad@example.com"
    },
    {
      name: "Sara Maryam",
      role: "Design Lead",
      branch: "Chemical Engineering, 2nd Year",
      bio: "Crafted interactive UI mockups and highly captivating social media art kits for all events.",
      linkedin: "#",
      twitter: "#",
      email: "sara@example.com"
    },
    {
      name: "Swaleha Khan",
      role: "Technical Head",
      branch: "B.E Electrical, 3rd Year",
      bio: "Nurtured coding interest, leading female technical classes, web developer bootcamps, and robotics labs.",
      linkedin: "#",
      twitter: "#",
      email: "swaleha@example.com"
    },
    {
      name: "Syed Faheem Ahmad",
      role: "External Affairs & PR Head",
      branch: "Electronics Engineering, 3rd Year",
      bio: "Promoted the organization globally, securing sponsorships and maintaining vibrant external university bonds.",
      linkedin: "#",
      twitter: "#",
      email: "faheem@example.com"
    },
    {
      name: "Abbas Safvi",
      role: "Volunteer",
      branch: "Computer Engineering, 2nd Year",
      bio: "Provided stellar developer and logistics support, enabling the organization of WIE events seamlessly.",
      linkedin: "#",
      twitter: "#",
      email: "abbas@example.com"
    }
  ],
  "2024-2025": [
    {
      name: "Sidra Suhail",
      role: "Chairperson",
      branch: "Electrical Engineering, Final Year",
      bio: "Fostering standard excellence and technical training platforms throughout the session with dedicated vision.",
      linkedin: "#",
      twitter: "#",
      email: "sidra@example.com"
    },
    {
      name: "Sadia Aiman",
      role: "Vice Chairperson",
      branch: "Electrical Engineering, 3rd Year",
      bio: "Empowering young developers and coordinating operational metrics between department heads seamlessly.",
      linkedin: "#",
      twitter: "#",
      email: "sadia@example.com"
    },
    {
      name: "Somya Saxena",
      role: "General Secretary",
      branch: "Electrical Engineering, 3rd Year",
      bio: "Developing unified tracking systems, keeping records, and handling active minutes for all programs.",
      linkedin: "#",
      twitter: "#",
      email: "somya@example.com"
    },
    {
      name: "Sara Maryam",
      role: "Joint Secretary",
      branch: "Electrical Engineering, 3rd Year",
      bio: "Streamlining student correspondence and coordinating dynamic initiatives with efficiency.",
      linkedin: "#",
      twitter: "#",
      email: "sara.m@example.com"
    },
    {
      name: "Asna Khan",
      role: "Joint Secretary",
      branch: "Food Technology, 3rd Year",
      bio: "Coordinating inter-department meetups and managing schedule registries for the administrative team.",
      linkedin: "#",
      twitter: "#",
      email: "asna.k@example.com"
    },
    {
      name: "Asna Fatimah",
      role: "Program Coordinator",
      branch: "Electrical Engineering, Final Year",
      bio: "Leading program curations, session timelines, and interactive technical seminars beautifully.",
      linkedin: "#",
      twitter: "#",
      email: "asna.f@example.com"
    },
    {
      name: "Needa Khan",
      role: "Head of Operations",
      branch: "Computer Engineering, 3rd Year",
      bio: "Supervising logistical arrangements and event hosting setups to ensure smooth physical execution.",
      linkedin: "#",
      twitter: "#",
      email: "needa@example.com"
    },
    {
      name: "Mohammad Farhan Baig",
      role: "Treasurer",
      branch: "Mechanical Engineering, 2nd Year",
      bio: "Overseeing project budgets, financial tracking, and sponsorship allocations meticulously.",
      linkedin: "#",
      twitter: "#",
      email: "farhan@example.com"
    },
    {
      name: "Mustafa Rais",
      role: "Coordinator - Management Team",
      branch: "Electrical Engineering, 3rd Year",
      bio: "Coordinating volunteer squads, managing event crowds, and steering overall operations on ground.",
      linkedin: "#",
      twitter: "#",
      email: "mustafa@example.com"
    },
    {
      name: "Vikas Kumar",
      role: "Co-Coordinator - Management Team",
      branch: "BE Electrical Engineering, 3rd Year",
      bio: "Supporting operations across various workshops, managing venue setups and assets.",
      linkedin: "#",
      twitter: "#",
      email: "vikas@example.com"
    },
    {
      name: "Afifa Khan",
      role: "Co-Coordinator - Management Team",
      branch: "Chemical Engineering, 2nd Year",
      bio: "Assisting administration logistics and active coordination for campus empowerment drives.",
      linkedin: "#",
      twitter: "#",
      email: "afifa@example.com"
    },
    {
      name: "Maryam Jaffri",
      role: "Coordinator - Editorial Team",
      branch: "Electrical Engineering, 2nd Year",
      bio: "Directing newsletter publication, writing blogs, event report summaries, and inspiring journals.",
      linkedin: "#",
      twitter: "#",
      email: "maryam@example.com"
    },
    {
      name: "Khadija Fatima Abbasi",
      role: "Co-Coordinator - Editorial Team",
      branch: "Petrochemical Engineering, 2nd Year",
      bio: "Creating magnificent editorial spreads and maintaining the highest standard for our written coverage.",
      linkedin: "#",
      twitter: "#",
      email: "khadija@example.com"
    },
    {
      name: "Riiya Gupta",
      role: "Coordinator - Design Team",
      branch: "Electronics Engineering, 2nd Year",
      bio: "Setting the paradigm for visual branding with custom vector artwork, color schemes and guides.",
      linkedin: "#",
      twitter: "#",
      email: "riiya@example.com"
    },
    {
      name: "Yukti Maheshwari",
      role: "Co-Coordinator - Design Team",
      branch: "Electronics Engineering, 2nd Year",
      bio: "Creating spectacular poster layouts and graphics for social handles and web promotions.",
      linkedin: "#",
      twitter: "#",
      email: "yukti@example.com"
    },
    {
      name: "Manasvi Kapoor",
      role: "Co-Coordinator - Design Team",
      branch: "Automobile Engineering, 2nd Year",
      bio: "Providing outstanding creative design assets and visual content for the branding department.",
      linkedin: "#",
      twitter: "#",
      email: "manasvi@example.com"
    },
    {
      name: "Sualeha Ahmad",
      role: "Coordinator - Technical Team",
      branch: "Electrical Engineering, 2nd Year",
      bio: "Nurturing coding excellence, organizing hands-on labs, hackathons and engineering tasks.",
      linkedin: "#",
      twitter: "#",
      email: "sualeha.a@example.com"
    },
    {
      name: "Saba Feroz Khan",
      role: "Coordinator - Social media and PR Team",
      branch: "Artificial Intelligence, 2nd Year",
      bio: "Broadcasting WIE events to the region and expanding our digital footprint across LinkedIn and Instagram.",
      linkedin: "#",
      twitter: "#",
      email: "saba@example.com"
    },
    {
      name: "Samar Fatma",
      role: "Co-Coordinator - Social media and PR Team",
      branch: "Chemical Engineering, 2nd Year",
      bio: "Enriching public engagements and amplifying outreach reach across multiple handles.",
      linkedin: "#",
      twitter: "#",
      email: "samar@example.com"
    },
    {
      name: "Madiha Irfan",
      role: "Coordinator - External Affairs",
      branch: "Electronics Engineering, 2nd Year",
      bio: "Fostering corporate partnerships, establishing industrial visits and external student networks.",
      linkedin: "#",
      twitter: "#",
      email: "madiha@example.com"
    },
    {
      name: "Ojal Maheshwari",
      role: "Volunteer",
      branch: "Electronics Engineering, 2nd Year",
      bio: "Providing dedicated assistance with absolute energy across all high-level workshops and campaigns.",
      linkedin: "#",
      twitter: "#",
      email: "ojal@example.com"
    }
  ],
  "2025-2026": [
    {
      name: "New Leader",
      role: "Incoming Chairperson",
      branch: "STEM Engineering, Final Year",
      bio: "Ready to take IEEE WIE AMU to new heights of innovation and tech empowerment in the upcoming session.",
      image: "https://picsum.photos/seed/team-25-1/400/400",
      linkedin: "#",
      twitter: "#",
      email: "leader@example.com"
    }
  ]
};

// Helper to extract initials
function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {team.map((member, idx) => {
                const hasImage = member.image && member.image.trim() !== "";
                const initials = getInitials(member.name);

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="group relative h-full"
                  >
                    {hasImage ? (
                      /* Classic Picture Layout (with real/avatar photos if available) */
                      <div className="flex flex-col h-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
                        <div className="relative overflow-hidden aspect-[4/5]">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-wie-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <p className="text-sm italic text-gray-300 mb-6 leading-relaxed">
                              "{member.bio}"
                            </p>
                            <div className="flex space-x-4">
                              <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold hover:text-wie-dark transition-colors">
                                <Linkedin size={18} />
                              </a>
                              <a href={member.twitter} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold hover:text-wie-dark transition-colors">
                                <Twitter size={18} />
                              </a>
                              <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-wie-gold hover:text-wie-dark transition-colors">
                                <Mail size={18} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 text-center mt-auto border-t border-gray-50 bg-gray-50/50">
                          <h3 className="text-xl font-serif font-bold text-wie-dark group-hover:text-wie-purple transition-colors duration-300">{member.name}</h3>
                          <p className="text-wie-gold font-bold uppercase tracking-widest text-[10px] mt-1.5">{member.role}</p>
                          {member.branch && (
                            <p className="text-xs text-gray-400 mt-1 font-medium font-sans">{member.branch}</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Fancy Typographic / Monogram Only Layout (Stunning image-less design) */
                      <div className="relative bg-gradient-to-br from-white to-wie-lavender/5 border border-gray-100 rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between hover:shadow-2xl hover:border-wie-purple/20 hover:-translate-y-2 transition-all duration-350 relative overflow-hidden h-full min-h-[340px]">
                        
                        {/* Huge stylish initial watermark in background */}
                        <div className="text-9xl font-serif font-black text-wie-purple/[0.04] select-none absolute -bottom-6 -right-6 group-hover:text-wie-purple/[0.08] transition-colors duration-500 pointer-events-none">
                          {initials}
                        </div>

                        {/* Top corner card brand marker */}
                        <div className="flex justify-between items-start mb-6 w-full">
                          {/* Monogram Badge */}
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wie-purple/10 to-wie-lavender/25 text-wie-purple flex items-center justify-center font-serif text-2xl font-bold border border-wie-purple/15 shadow-sm group-hover:scale-105 group-hover:bg-wie-purple group-hover:text-white group-hover:border-wie-purple transition-all duration-300">
                            {initials}
                          </div>
                          
                          {/* Fine details link index */}
                          <div className="flex space-x-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <a href={member.linkedin} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-wie-purple hover:text-white hover:border-wie-purple transition-colors">
                              <Linkedin size={14} />
                            </a>
                            <a href={`mailto:${member.email}`} className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-wie-purple hover:text-white hover:border-wie-purple transition-colors">
                              <Mail size={14} />
                            </a>
                          </div>
                        </div>

                        {/* Title, Role and Bio */}
                        <div className="flex flex-col flex-grow">
                          <h3 className="text-2xl font-serif font-bold text-wie-dark group-hover:text-wie-purple transition-colors duration-350 leading-tight mb-2">
                            {member.name}
                          </h3>
                          
                          {/* Role Badge */}
                          <div className="mb-4">
                            <span className="inline-flex px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-wie-purple/5 text-wie-purple border border-wie-purple/15 shadow-sm font-sans">
                              {member.role}
                            </span>
                          </div>

                          {member.bio && (
                            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-sans">
                              {member.bio}
                            </p>
                          )}
                        </div>

                        {/* Branch Stamp at the bottom */}
                        <div className="mt-auto">
                          <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase transition-colors group-hover:text-wie-purple bg-gradient-to-r from-gray-50 to-wie-lavender/5 border border-gray-100/80 px-4 py-2.5 rounded-xl w-full flex items-center justify-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)] font-sans">
                            <GraduationCap size={13} className="text-wie-gold shrink-0" />
                            <span className="truncate">{member.branch}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
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
