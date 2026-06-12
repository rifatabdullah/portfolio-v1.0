import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github, Bot, Shield, Globe, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Autonomous Robot Navigation",
    description:
      "Worked on autonomous navigation systems at the BRACU Robotics Club using ROS, SLAM, and sensor fusion. Developed path-planning algorithms and obstacle avoidance routines.",
    tags: ["ROS", "SLAM", "Python", "Arduino", "OpenCV"],
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmt8ZW58MXx8fHwxNzgxMTk4NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: null,
    icon: <Cpu size={14} />,
    featured: true,
  },
  {
    id: 2,
    title: "AI Agentic Workflow System",
    description:
      "Designed and implemented an AI-powered agentic workflow pipeline capable of orchestrating multi-step automation tasks. Explores LLM-driven decision-making and tool use.",
    tags: ["Python", "AI Engineering", "API", "Automation"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmt8ZW58MXx8fHwxNzgxMTk4NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: null,
    icon: <Bot size={14} />,
    featured: true,
  },
  {
    id: 3,
    title: "Cyber Security Audit Tool",
    description:
      "Built a Python-based ethical hacking toolkit for educational purposes, covering network scanning, vulnerability detection, and security reporting. Informed by AI Cyber Security certification.",
    tags: ["Python", "Cyber Security", "Linux", "Networking"],
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmt8ZW58MXx8fHwxNzgxMTk4NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: null,
    icon: <Shield size={14} />,
    featured: false,
  },
  {
    id: 4,
    title: "Python REST API",
    description:
      "Developed a RESTful API with Python using FastAPI, covering authentication, CRUD operations, and data validation. Completed as part of the API Building with Python certification.",
    tags: ["Python", "FastAPI", "REST API", "JSON"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmt8ZW58MXx8fHwxNzgxMTk4NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: null,
    icon: <Globe size={14} />,
    featured: false,
  },
  {
    id: 5,
    title: "Bondhu Time — Platform Management",
    description:
      "As Project Manager at Bondhu Time since 2022, led product planning, coordinated cross-functional teams, and drove feature rollouts using agile project management tools.",
    tags: ["Project Management", "Agile", "Communication", "Leadership"],
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmt8ZW58MXx8fHwxNzgxMTk4NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: null,
    live: null,
    icon: <Globe size={14} />,
    featured: false,
  },
  {
    id: 6,
    title: "Responsive Portfolio Website",
    description:
      "Designed and built a personal portfolio using HTML, CSS, and JavaScript. Showcases projects, experience, and skills with clean UI and smooth animations.",
    tags: ["HTML", "CSS", "JavaScript", "Web Design"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGRhcmt8ZW58MXx8fHwxNzgxMTk4NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    github: "https://github.com",
    live: "https://linktr.ee/rifat.abdullah",
    icon: <Globe size={14} />,
    featured: false,
  },
];

export function Projects() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00ff88] mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.2em" }}>
            02. PROJECTS
          </p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
            Things I've Built
          </h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00ff88, #00ccff)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono transition-all duration-300 hover:scale-105"
            style={{
              background: "transparent",
              color: "#00ff88",
              fontWeight: 600,
              fontSize: "0.9rem",
              border: "1.5px solid #00ff88",
              textDecoration: "none",
            }}
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
      className="group rounded-2xl overflow-hidden border border-[#1a1a2e] hover:border-[#00ff88]/40 transition-all duration-300 flex flex-col"
      style={{ background: "#0d0d14" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-40 group-hover:brightness-60"
        />
        {project.featured && (
          <span
            className="absolute top-3 left-3 px-2 py-1 rounded font-mono"
            style={{
              background: "linear-gradient(135deg, #00ff88, #00ccff)",
              color: "#0a0a0f",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            FEATURED
          </span>
        )}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white hover:text-[#00ff88] transition-colors"
              style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white hover:text-[#00ff88] transition-colors"
              style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
              aria-label="Live demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white group-hover:text-[#00ff88] transition-colors duration-200 mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 flex-1" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded font-mono"
              style={{ background: "rgba(0,255,136,0.08)", color: "#00cc6a", fontSize: "0.7rem", border: "1px solid rgba(0,255,136,0.15)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
