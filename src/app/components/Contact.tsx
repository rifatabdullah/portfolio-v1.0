import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Link } from "lucide-react";

export function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-[#00ff88] mb-3" style={{ fontSize: "0.85rem", letterSpacing: "0.2em" }}>
            04. CONTACT
          </p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800 }}>
            Get In Touch
          </h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: "linear-gradient(90deg, #00ff88, #00ccff)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-8" style={{ fontSize: "1.05rem", lineHeight: 1.9 }}>
              I'm always open to connecting — whether you have a project idea, a collaboration opportunity,
              or just want to say hi. My inbox is always open!
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "rifat.abdullah.sarker@gmail.com", href: "mailto:rifat.abdullah.sarker@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+880 1308 464083", href: "tel:+8801308464083" },
                { icon: <MapPin size={18} />, label: "Location", value: "Dhaka, Bangladesh", href: null },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[#00ff88] flex-shrink-0"
                    style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>
                      {info.label.toUpperCase()}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="text-gray-200 hover:text-[#00ff88] transition-colors" style={{ fontSize: "0.9rem", textDecoration: "none" }}>
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-200" style={{ fontSize: "0.9rem" }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
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
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#00ff88] transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    textDecoration: "none",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[320px] rounded-2xl flex flex-col items-center justify-center border border-[#00ff88]/30 text-center p-10"
                style={{ background: "rgba(0,255,136,0.05)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,255,136,0.15)", border: "2px solid #00ff88" }}
                >
                  <Send size={24} className="text-[#00ff88]" />
                </div>
                <h3 className="text-white mb-2" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  Message Sent!
                </h3>
                <p className="text-gray-400" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-gray-400 font-mono mb-2"
                      style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                    >
                      {field.label.toUpperCase()}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as "name" | "email"]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-[#00ff88]/60"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-400 font-mono mb-2"
                    style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your idea or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 outline-none resize-none transition-all duration-200 focus:border-[#00ff88]/60"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: loading ? "rgba(0,255,136,0.5)" : "linear-gradient(135deg, #00ff88, #00ccff)",
                    color: "#0a0a0f",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: "0 0 20px rgba(0,255,136,0.25)",
                  }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
