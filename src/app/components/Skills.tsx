import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Award } from "lucide-react";

const skillGroups = [
  {
    category: "Programming",
    color: "#00ff88",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "HTML & CSS", level: 80 },
      { name: "Java", level: 65 },
      { name: "C (Arduino)", level: 70 },
    ],
  },
  {
    category: "Robotics & AI",
    color: "#00ccff",
    skills: [
      { name: "ROS", level: 72 },
      { name: "OpenCV", level: 68 },
      { name: "SLAM Systems", level: 65 },
      { name: "Agentic Workflow", level: 75 },
      { name: "Arduino / Sensors", level: 80 },
    ],
  },
  {
    category: "Tech & Tools",
    color: "#a78bfa",
    skills: [
      { name: "Cyber Security", level: 70 },
      { name: "Linux", level: 72 },
      { name: "Web Design", level: 78 },
      { name: "Project Management", level: 82 },
      { name: "API Building", level: 74 },
    ],
  },
];

const certifications = [
  { name: "AI Cyber Security & Ethical Hacking", issuer: "Certified" },
  { name: "Intermediate Python Developer", issuer: "Certified" },
  { name: "AI Engineering Level 1", issuer: "Certified" },
  { name: "API Building with Python", issuer: "Certified" },
  { name: "Apprenticeship Certification", issuer: "Certified" },
];

const softSkills = [
  "Problem-Solving", "Strong Communication", "Computer Literacy",
  "Front End Coding", "Autonomous Systems", "Research & Development",
  "Team Leadership", "Agile / PM Tools", "Teaching & Mentoring",
  "English", "Bangla", "German (Beginner)",
];

export function Skills() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00ff88] mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.2em" }}>
            03. SKILLS
          </p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
            My Tech Stack
          </h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00ff88, #00ccff)" }} />
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.15 }}
              className="rounded-2xl p-6 border border-[#1a1a2e]"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <h3
                className="font-mono mb-6"
                style={{ fontSize: "0.82rem", fontWeight: 700, color: group.color, letterSpacing: "0.1em" }}
              >
                {group.category.toUpperCase()}
              </h3>
              <div className="flex flex-col gap-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300" style={{ fontSize: "0.875rem" }}>
                        {skill.name}
                      </span>
                      <span className="font-mono" style={{ fontSize: "0.75rem", color: group.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#1a1a2e] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${group.color}, ${group.color}88)` }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 + gi * 0.15 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-gray-500 font-mono mb-6 text-center" style={{ fontSize: "0.8rem", letterSpacing: "0.15em" }}>
            CERTIFICATIONS
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#1a1a2e] hover:border-[#00ff88]/30 transition-all duration-200"
                style={{ background: "rgba(0,255,136,0.04)" }}
              >
                <Award size={16} className="text-[#00ff88] flex-shrink-0" />
                <span className="text-gray-300" style={{ fontSize: "0.85rem" }}>
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft skills & languages tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500 font-mono mb-6" style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            SOFT SKILLS & LANGUAGES
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.04 }}
                className="px-4 py-2 rounded-lg font-mono hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-200 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "#9ca3af",
                  fontSize: "0.8rem",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
