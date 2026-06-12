import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Link } from "lucide-react";

const roles = [
  "AI Automation Enthusiast",
  "Robotics Developer",
  "Cyber Security Learner",
  "CSE Student @ BRACU",
  "Front-End Developer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-mono text-[#00ff88] mb-4"
          style={{ fontSize: "0.9rem", letterSpacing: "0.15em" }}
        >
          Hello, World! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-white mb-4"
          style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Md. Rifat{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00ff88, #00ccff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Abdullah
          </span>
          <br />Sarker
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8 h-10 flex items-center justify-center"
        >
          <span className="font-mono text-gray-300" style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
            {displayed}
            <span className="text-[#00ff88] animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10"
          style={{ fontSize: "1rem", lineHeight: 1.8 }}
        >
          Enthusiastic CSE student at BRAC University with a passion for programming and robotics.
          I thrive on challenges and enjoy pushing my limits to learn, build, and grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg font-mono transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00ff88, #00ccff)",
              color: "#0a0a0f",
              fontWeight: 700,
              fontSize: "0.9rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(0,255,136,0.3)",
            }}
          >
            View My Work
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-lg font-mono transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "#00ff88",
              fontWeight: 600,
              fontSize: "0.9rem",
              border: "1.5px solid #00ff88",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rabdullahs", label: "LinkedIn" },
            { icon: <Link size={20} />, href: "https://linktr.ee/rifat.abdullah", label: "Linktree" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-500 hover:text-[#00ff88] transition-colors duration-200"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 cursor-pointer hover:text-[#00ff88] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        onClick={scrollToProjects}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
