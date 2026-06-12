import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Bot, Shield, Code2, BookOpen } from "lucide-react";

const stats = [
  { label: "CGPA @ BRACU", value: "3.6" },
  { label: "Students Taught", value: "20+" },
  { label: "Certifications", value: "5" },
  { label: "Clubs & Orgs", value: "4" },
];

const highlights = [
  { icon: <Bot size={20} />, title: "Robotics", desc: "Director of Research Development at BRACU Robotics Club. Working with Arduino, ROS, SLAM, and autonomous systems." },
  { icon: <Shield size={20} />, title: "Cyber Security", desc: "Certified in AI Cyber Security & Ethical Hacking. Passionate about securing systems and understanding vulnerabilities." },
  { icon: <Code2 size={20} />, title: "AI & Automation", desc: "AI Engineering Level 1 certified. Exploring agentic workflows, OpenCV, and intelligent automation pipelines." },
  { icon: <BookOpen size={20} />, title: "Teaching", desc: "Private tutor since 2020 with 20+ students. Teaching mathematics, ICT, and coding to classes 1–12 and BRACU juniors." },
];

const experience = [
  {
    role: "Director of Research Development",
    org: "Robotics Club of BRAC University",
    period: "May 2024 – Present",
    color: "#00ff88",
  },
  {
    role: "Team Member (AI & Comms.)",
    org: "BracU Alter, BRAC University",
    period: "Sept 2025 – Present",
    color: "#00ccff",
  },
  {
    role: "Project Manager",
    org: "Bondhu Time",
    period: "May 2023 – Present",
    color: "#a78bfa",
  },
  {
    role: "General Member of Finance",
    org: "BRAC University Computer Club",
    period: "May 2024 – Present",
    color: "#f59e0b",
  },
  {
    role: "Social Media Marketing Intern",
    org: "Programming Hero",
    period: "Apr 2023 – Jun 2023",
    color: "#fb7185",
  },
];

export function About() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="about" className="py-24 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00ff88] mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.2em" }}>
            01. ABOUT ME
          </p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
            Who I Am
          </h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00ff88, #00ccff)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-5" style={{ fontSize: "1.05rem", lineHeight: 1.9 }}>
              Hey! I'm <span className="text-[#00ff88]">Rifat</span>, a Computer Science & Engineering student at{" "}
              <span className="text-white">BRAC University</span>, Dhaka, Bangladesh. I'm passionate about
              robotics, AI automation, and cyber security.
            </p>
            <p className="text-gray-400 mb-5" style={{ fontSize: "1rem", lineHeight: 1.9 }}>
              I thrive on challenges and enjoy pushing my limits to learn and grow. Whether it's building
              autonomous systems, exploring AI workflows, or writing clean front-end code — I'm always eager
              to apply my skills in a collaborative environment and contribute to innovative projects.
            </p>
            <p className="text-gray-400 mb-8" style={{ fontSize: "1rem", lineHeight: 1.9 }}>
              Beyond tech, I've been tutoring over 20 students since 2020 across mathematics, ICT, and
              programming. I speak English and Bangla fluently, and I'm learning German.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 text-center border border-[#1a1a2e] hover:border-[#00ff88]/40 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="mb-1"
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #00ff88, #00ccff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-mono" style={{ fontSize: "0.75rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-gray-500 font-mono mb-6" style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>
              EXPERIENCE & INVOLVEMENT
            </h3>
            <div className="flex flex-col gap-4">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex gap-4 items-start p-4 rounded-xl border border-[#1a1a2e] hover:border-[#1a1a2e]/60 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: item.color, boxShadow: `0 0 8px ${item.color}88` }}
                  />
                  <div>
                    <p className="text-white" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                      {item.role}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: item.color }}>{item.org}</p>
                    <p className="text-gray-600 font-mono" style={{ fontSize: "0.72rem" }}>
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="rounded-xl p-6 border border-[#1a1a2e] hover:border-[#00ff88]/30 transition-all duration-300 group"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="text-[#00ff88] mb-3 group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>
              <h3 className="text-white mb-2" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                {item.title}
              </h3>
              <p className="text-gray-500" style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
