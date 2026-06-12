import { Github, Heart, Linkedin, Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-[#1a1a2e] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-gray-600" style={{ fontSize: "0.8rem" }}>
          &lt;Rifat /&gt; © 2026 · Dhaka, Bangladesh
        </p>
        <p className="flex items-center gap-1.5 font-mono text-gray-600" style={{ fontSize: "0.8rem" }}>
          Built with <Heart size={12} className="text-red-500 fill-red-500" /> — Md. Rifat Abdullah Sarker
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#00ff88] transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/rabdullahs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#00ff88] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="https://linktr.ee/rifat.abdullah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#00ff88] transition-colors duration-200"
            aria-label="Linktree"
          >
            <Link size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
