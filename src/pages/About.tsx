import { motion } from "motion/react";
import { Quote, History, Target, Users, Award, GraduationCap, Sparkles, School, UserCheck } from "lucide-react";

const leadership = [
  {
    name: "Dr. Safia Akhtar Kazmi",
    role: "Faculty Advisor",
    quote: "It has been a privilege to serve as the Faculty Advisor for the IEEE WIE Affinity Group. Over the past year, I've witnessed our students initiate diverse and impactful programs—from technical workshops to inclusive outreach efforts. Their leadership and dedication have fostered a progressive environment that truly embodies the spirit of WIE. I encourage all members to continue learning, leading, and inspiring. Wishing the WIE team continued success and good health. May your efforts in promoting STEM and inclusion reach even greater heights in the future.",
    image: "/safia.png"
  },
  {
    name: "Dr. Qurratulain",
    role: "Outreach Coordinator",
    quote: "Serving as the Outreach Coordinator has been a deeply rewarding journey. Working with such an energetic and purposeful team has been both inspiring and fulfilling. I've cherished mentoring students and witnessing their growth through meaningful community engagement. The passion they bring to each initiative is truly commendable. Wishing the entire WIE family continued enthusiasm, impactful outreach, and the best of health. May you keep shining and serving with purpose.",
    image: "/qurratulain.png"
  },
  {
    name: "Sidra Suhail",
    role: "Ex-Chairperson",
    quote: "My tenure as Chairperson has been a journey of transformation, leadership, and growth. Leading such a passionate team helped me evolve both professionally and personally. Together, we achieved impactful milestones and fostered a strong sense of community. I am deeply grateful for the trust and support I received throughout. Wishing the WIE team future success, lasting impact, and good health. May the legacy of empowerment and innovation continue to thrive.",
    image: ""
  }
];

// Placeholder for Founding Faculty Advisors & Mentors
const founderFaculty = [
  {
    name: "[Founding Faculty Advisor Name]",
    role: "Founding Faculty Advisor",
    department: "Department of Electrical Engineering, ZHCET, AMU",
    bio: "Pioneered the establishment of the IEEE WIE Affinity Group at AMU, providing strategic mentorship, institutional guidance, and championing women in STEM education.",
    image: ""
  },
  {
    name: "[Founding Faculty Mentor Name]",
    role: "Founding Faculty Mentor",
    department: "Department of Electronics / Computer Engineering, ZHCET, AMU",
    bio: "Co-founded early student engagement chapters, guided initial technical symposiums, and laid the groundwork for research-driven technical programs.",
    image: ""
  }
];

// Placeholder for Founding Student Leaders & Committee
const founderStudents = [
  {
    name: "[Founding Chairperson Name]",
    role: "Founding Chairperson",
    branch: "ZHCET, AMU (Inaugural Session)",
    contribution: "Spearheaded the initial charter registration, built the inaugural executive committee, and hosted the chapter's historic first workshop series.",
    image: ""
  },
  {
    name: "[Founding Vice Chairperson Name]",
    role: "Founding Vice Chairperson",
    branch: "ZHCET, AMU (Inaugural Session)",
    contribution: "Coordinated cross-department recruitment, structured early student chapters, and organized foundational skill-development camps.",
    image: ""
  },
  {
    name: "[Founding General Secretary Name]",
    role: "Founding General Secretary",
    branch: "ZHCET, AMU (Inaugural Session)",
    contribution: "Established the formal operational bylaws, archival records, and liaised with IEEE UP Section for regional activity recognition.",
    image: ""
  },
  {
    name: "[Founding Technical Lead Name]",
    role: "Founding Technical Head",
    branch: "ZHCET, AMU (Inaugural Session)",
    contribution: "Designed early coding bootcamps, technical problem-solving tracks, and hands-on laboratory workshops for young engineering students.",
    image: ""
  }
];

// Helper to extract initials
function getInitials(name: string) {
  const clean = name.replace(/[\[\]]/g, "").trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase() || "WIE";
}

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-wie-lavender/10 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-wie-dark mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the way for women in technology at Aligarh Muslim University since our inception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-wie-purple/10 rounded-xl flex items-center justify-center text-wie-purple">
                  <History size={24} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-wie-dark">Brief History</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                The IEEE WIE AMU Affinity Group was established at Zakir Husain College of Engineering and Technology (ZHCET), AMU, with a vision to bridge the gender gap in engineering and technology. Over the years, we have grown into a vibrant community of passionate individuals dedicated to excellence and inclusion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our first small workshop to hosting international conferences and large-scale outreach programs, our journey has been defined by the resilience, creativity, and steadfast commitment of our founding mentors and members.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-wie-lavender/20"
            >
              <img src="https://picsum.photos/seed/amu-history/800/600" alt="AMU History" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Promote STEM", desc: "Inspiring young girls to pursue academic interests in engineering and science.", icon: <Target className="text-wie-gold" /> },
              { title: "Foster Inclusion", desc: "Creating a supportive environment where every voice is heard and valued.", icon: <Users className="text-wie-gold" /> },
              { title: "Develop Leadership", desc: "Providing opportunities for members to lead initiatives and grow professionally.", icon: <Award className="text-wie-gold" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-wie-dark mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders & Pioneers Legacy Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wie-purple/10 text-wie-purple text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-wie-gold" />
              Founding Heritage
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-wie-dark mb-4">
              The Founders of IEEE WIE AMU
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Honoring the visionary faculty advisors and pioneering student leaders who founded and established the IEEE Women in Engineering Affinity Group at AMU.
            </p>
          </div>

          {/* Founder Faculty */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-wie-purple/10 flex items-center justify-center text-wie-purple">
                <School size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-wie-dark">Founder Faculty Advisors & Mentors</h3>
                <p className="text-sm text-gray-500">The guiding academic visionaries who sanctioned and supported the inaugural chapter</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founderFaculty.map((faculty, idx) => {
                const hasImage = Boolean(faculty.image && faculty.image.trim() !== "");
                const initials = getInitials(faculty.name);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-white border border-gray-200/80 hover:border-wie-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-wie-purple to-wie-dark text-wie-gold font-serif font-bold text-2xl flex items-center justify-center shrink-0 border-2 border-wie-gold/40 shadow-md overflow-hidden">
                        {hasImage ? (
                          <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                        ) : (
                          <span>{initials}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-wie-purple/10 text-wie-purple text-xs font-bold uppercase tracking-wider rounded-md mb-2">
                          {faculty.role}
                        </span>
                        <h4 className="text-xl font-serif font-bold text-wie-dark mb-1 group-hover:text-wie-purple transition-colors">
                          {faculty.name}
                        </h4>
                        <p className="text-xs text-wie-gold font-bold uppercase tracking-wider mb-3">
                          {faculty.department}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faculty.bio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Founder Students */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-wie-gold/15 flex items-center justify-center text-wie-dark">
                <GraduationCap size={20} className="text-wie-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-wie-dark">Founding Student Executive Committee</h3>
                <p className="text-sm text-gray-500">The inaugural student pioneers who built the community from the ground up</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {founderStudents.map((student, idx) => {
                const hasImage = Boolean(student.image && student.image.trim() !== "");
                const initials = getInitials(student.name);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-3xl bg-white border border-gray-200/80 hover:border-wie-purple/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wie-lavender/30 to-wie-purple/20 text-wie-purple font-serif font-bold text-lg flex items-center justify-center mb-5 border border-wie-purple/20 shadow-inner overflow-hidden">
                        {hasImage ? (
                          <img src={student.image} alt={student.name} className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                        ) : (
                          <span>{initials}</span>
                        )}
                      </div>
                      <span className="inline-block px-2.5 py-0.5 bg-wie-purple/10 text-wie-purple text-[11px] font-bold uppercase tracking-wider rounded mb-2">
                        {student.role}
                      </span>
                      <h4 className="text-lg font-serif font-bold text-wie-dark mb-1">
                        {student.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium mb-3">
                        {student.branch}
                      </p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {student.contribution}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-wie-gold">
                      <UserCheck size={13} />
                      <span>Founding Member</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-wie-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full animated-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">The visionaries leading our affinity group.</p>
          </div>

          <div className="space-y-24">
            {leadership.map((leader, idx) => {
              const hasImage = Boolean(leader.image && leader.image.trim() !== "");
              const initials = getInitials(leader.name);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="w-full md:w-1/3">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-wie-gold/20 rounded-3xl blur-xl group-hover:bg-wie-gold/30 transition-all"></div>
                      <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-wie-gold shadow-2xl bg-wie-purple/20 flex items-center justify-center">
                        {hasImage ? (
                          <img 
                            src={leader.image} 
                            alt={leader.name} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                            referrerPolicy="no-referrer" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${leader.name.replace(/\s+/g, '-').toLowerCase()}/400/400`;
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-wie-purple to-wie-dark flex items-center justify-center text-wie-gold font-serif font-bold text-5xl">
                            <span>{initials}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <Quote className="text-wie-gold mb-6 opacity-50" size={48} />
                    <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed text-gray-200">
                      "{leader.quote}"
                    </p>
                    <div>
                      <h4 className="text-2xl font-serif font-bold text-wie-gold">{leader.name}</h4>
                      <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">{leader.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
