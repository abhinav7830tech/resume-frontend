'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  MessageSquare,
  Brain,
  ArrowRight,
  Play,
  X,
  Sparkles,
  Target,
  Zap
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Analysis",
    description: "Upload your resume and get instant AI-powered feedback on skills, formatting, and ATS compatibility.",
    color: "#8b5cf6"
  },
  {
    icon: MessageSquare,
    title: "AI Interview Practice",
    description: "Practice mock interviews with our AI interviewer. Get real-time feedback and improve your answers.",
    color: "#06b6d4"
  },
  {
    icon: Brain,
    title: "Smart Assistance",
    description: "Get instant help with any query. Our AI support is available 24/7 to assist you.",
    color: "#10b981"
  }
];

const stats = [
  { value: "Trusted", label: "by Job Seekers" },
  { value: "AI-Powered", label: "Interview Prep" },
  { value: "Real-time", label: "Feedback" },
  { value: "24/7", label: "Support" }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    text: "ResumeAI helped me land my dream job! The AI interview practice was incredibly helpful.",
    avatar: "SC"
  },
  {
    name: "Michael Park",
    role: "Product Manager at Meta",
    text: "The resume analysis gave me actionable insights that improved my application significantly.",
    avatar: "MP"
  },
  {
    name: "Emily Johnson",
    role: "Data Scientist at Netflix",
    text: "The AI support helped me with all my queries instantly. Best interview prep tool!",
    avatar: "EJ"
  }
];

export default function Home() {
  const router = useRouter();
  const [showDemo, setShowDemo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white" }}>
      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(139, 92, 246, 0.2)",
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} onClick={() => router.push("/")}>
            <div style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Sparkles size={20} color="white" />
            </div>
            <span style={{ fontSize: 22, fontWeight: 700 }}>ResumeAI</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} style={navLinkStyle}>Features</button>
            <button onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })} style={navLinkStyle}>Testimonials</button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} style={navLinkStyle}>About</button>
          </div>

          {/* Desktop Buttons */}
          <div className="desktop-buttons" style={{ display: "flex", gap: 12 }}>
            <button onClick={() => router.push("/auth/signin")} style={btnSecondary}>Sign In</button>
            <button onClick={() => router.push("/auth/signup")} style={btnPrimary}>Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
          >
            <div style={{ width: 24, height: 2, background: "white", marginBottom: 6 }}></div>
            <div style={{ width: 24, height: 2, background: "white", marginBottom: 6 }}></div>
            <div style={{ width: 24, height: 2, background: "white" }}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: "rgba(15, 23, 42, 0.98)",
            padding: "16px 24px",
            borderTop: "1px solid rgba(139, 92, 246, 0.2)",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button onClick={() => { document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }} style={mobileNavLink}>Features</button>
              <button onClick={() => { document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }} style={mobileNavLink}>Testimonials</button>
              <button onClick={() => { document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }} style={mobileNavLink}>About</button>
              <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                <button onClick={() => router.push("/auth/signup")} style={{ ...btnSecondary, flex: 1 }}>Sign In</button>
                <button onClick={() => { router.push("/auth/signup"); setMobileMenuOpen(false); }} style={{ ...btnPrimary, flex: 1 }}>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Effects */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />

        <div style={{ maxWidth: 900, textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "rgba(139, 92, 246, 0.15)",
            borderRadius: "50px",
            marginBottom: 24,
            border: "1px solid rgba(139, 92, 246, 0.3)"
          }}>
            <Zap size={14} color="#8b5cf6" />
            <span style={{ fontSize: 14, color: "#a78bfa" }}>AI-Powered Interview Prep</span>
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #a78bfa 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Ace Your Next Interview with AI
          </h1>

          <p style={{ fontSize: 20, color: "#94a3b8", marginBottom: 40, lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px" }}>
            Analyze your resume, practice with an AI interviewer, and get personalized feedback to land your dream job.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => router.push("/auth/signup")} style={{ ...btnPrimary, fontSize: 16, padding: "16px 32px" }}>
              Sign Up
              <ArrowRight size={18} />
            </button>
            <button onClick={() => setShowDemo(true)} style={{ ...btnSecondary, fontSize: 16, padding: "16px 32px" }}>
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", justifyContent: "center", gap: 48, marginTop: 60 }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>{stat.value}</div>
                <div style={{ fontSize: 14, color: "#64748b" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: "100px 40px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 16 }}>Everything You Need</h2>
            <p style={{ fontSize: 18, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
              Comprehensive tools to prepare you for your next big opportunity
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {features.map((feature, i) => (
              <div
                key={i}
                onClick={() => router.push("/auth/signup")}
                style={{
                  background: "linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))",
                  borderRadius: 20,
                  padding: 32,
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `${feature.color}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <feature.icon size={28} color={feature.color} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{feature.title}</h3>
                <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.6, marginBottom: 20 }}>{feature.description}</p>
                <button
                  onClick={() => router.push("/auth/signup")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: feature.color,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 600
                  }}
                >
                  Try now <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "100px 40px", background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 60 }}>How It Works</h2>

          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { num: "01", title: "Upload Resume", desc: "Upload your PDF resume", icon: FileText },
              { num: "02", title: "Get Analysis", desc: "AI analyzes your strengths", icon: Target },
              { num: "03", title: "Practice", desc: "Mock interview with AI", icon: MessageSquare },
            ].map((step, i) => (
              <div
                key={i}
                onClick={() => router.push("/auth/signup")}
                style={{
                  flex: "1 1 200px",
                  maxWidth: 240,
                  textAlign: "center",
                  cursor: "pointer",
                  padding: 24,
                  borderRadius: 16,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(139, 92, 246, 0.1)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 18,
                  fontWeight: 700
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: "100px 40px", background: "#0f172a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 16 }}>Loved by Job Seekers</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {testimonials.map((item, i) => (
              <div key={i} style={{
                background: "rgba(30, 41, 59, 0.5)",
                borderRadius: 16,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <div style={{ display: "flex", gap: 1, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: "#fbbf24" }}>★</span>)}
                </div>
                <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, marginBottom: 20 }}>"{item.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 600
                  }}>
                    {item.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Developer */}
      <section id="about" style={{ padding: "100px 40px", background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 16 }}>About the Developer</h2>
          <p style={{ fontSize: 18, color: "#64748b", marginBottom: 48 }}>Meet the mind behind ResumeAI</p>

          <div style={{ 
            background: "rgba(30, 41, 59, 0.5)", 
            borderRadius: 24, 
            padding: 48, 
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24
          }}>
            <div style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(139, 92, 246, 0.5)"
            }}>
              <img src="/abhi.jpg" alt="Abhinav Agnihotri" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: "white" }}>Abhinav Agnihotri</h3>
              <p style={{ fontSize: 16, color: "#8b5cf6", marginBottom: 16 }}>Full Stack Developer & AI Enthusiast</p>
              <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
                I am a passionate developer specializing in building AI-powered applications. 
                ResumeAI is designed to help job seekers prepare for interviews with the power of artificial intelligence.
                With expertise in Python, JavaScript, and modern web technologies, I aim to create 
                tools that make a real difference in people's careers.
              </p>
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
              <a href="https://github.com/abhinav7830tech" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/abhinav-agnihotri-96a21a2b8" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="mailto:agnihotriabhinav8@gmail.com" style={socialLinkStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 40px", background: "linear-gradient(135deg, #0e7490 0%, #155e75 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 16 }}>Ready to Land Your Dream Job?</h2>
          <p style={{ fontSize: 18, marginBottom: 32, opacity: 0.9 }}>Join thousands who got hired at top companies with AI-powered prep</p>
          <button onClick={() => router.push("/auth/signup")} style={{
            background: "white",
            color: "#155e75",
            padding: "18px 48px",
            borderRadius: 50,
            border: "none",
            fontSize: 18,
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "all 0.3s"
          }}>
            Sign Up Free <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "60px 40px 30px", background: "#0f172a", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Sparkles size={20} color="white" />
                </div>
                <span style={{ fontSize: 20, fontWeight: 700, color: "white" }}>ResumeAI</span>
              </div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>
                AI-powered interview preparation platform to help you land your dream job.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 16 }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 10 }}><a href="#features" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>Features</a></li>
                <li style={{ marginBottom: 10 }}><a href="#testimonials" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>Testimonials</a></li>
                <li style={{ marginBottom: 10 }}><a href="#about" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>About</a></li>
                <li style={{ marginBottom: 10 }}><a href="/auth/signup" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>Sign Up</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 16 }}>Features</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 10 }}><span style={{ color: "#64748b", fontSize: 14 }}>Resume Analysis</span></li>
                <li style={{ marginBottom: 10 }}><span style={{ color: "#64748b", fontSize: 14 }}>AI Interview Practice</span></li>
                <li style={{ marginBottom: 10 }}><span style={{ color: "#64748b", fontSize: 14 }}>Smart Assistance</span></li>
                <li style={{ marginBottom: 10 }}><span style={{ color: "#64748b", fontSize: 14 }}>24/7 Support</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: 16, fontWeight: 600, color: "white", marginBottom: 16 }}>Contact</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 10 }}><a href="mailto:agnihotriabhinav8@gmail.com" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>agnihotriabhinav8@gmail.com</a></li>
                <li style={{ marginBottom: 10 }}><a href="https://github.com/abhinav7830tech" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>GitHub</a></li>
                <li style={{ marginBottom: 10 }}><a href="https://www.linkedin.com/in/abhinav-agnihotri-96a21a2b8" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div style={{ paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontSize: 14, color: "#64748b" }}>© 2026 ResumeAI. All rights reserved.</p>
            <div style={{ display: "flex", gap: 20 }}>
              <a href="#" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>Privacy Policy</a>
              <a href="#" style={{ color: "#64748b", textDecoration: "none", fontSize: 14 }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemo && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 200,
          padding: 20
        }} onClick={() => setShowDemo(false)}>
          <div style={{
            background: "#1e293b",
            borderRadius: 20,
            padding: 32,
            maxWidth: 600,
            width: "100%",
            position: "relative"
          }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowDemo(false)} style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer"
            }}>
              <X size={24} />
            </button>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>How ResumeAI Works</h3>
            <div style={{ aspectRatio: "16/9", background: "rgba(139, 92, 246, 0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <Play size={48} color="#8b5cf6" />
            </div>
            <button onClick={() => { setShowDemo(false); router.push("/auth/signup"); }} style={{ ...btnPrimary, width: "100%" }}>
              Sign Up Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const navLinkStyle = {
  background: "none",
  border: "none",
  color: "#cbd5e1",
  fontSize: 15,
  fontWeight: 500,
  cursor: "pointer",
  transition: "color 0.2s"
};

const btnPrimary = {
  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  color: "white",
  padding: "12px 24px",
  borderRadius: 12,
  border: "none",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.2s"
};

const btnSecondary = {
  background: "transparent",
  color: "white",
  padding: "12px 24px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.2)",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  transition: "all 0.2s"
};

const mobileNavLink = {
  background: "none",
  border: "none",
  color: "#cbd5e1",
  fontSize: 16,
  fontWeight: 500,
  cursor: "pointer",
  padding: "12px 0",
  textAlign: "left",
};

const socialLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 24px",
  background: "rgba(139, 92, 246, 0.15)",
  border: "1px solid rgba(139, 92, 246, 0.3)",
  borderRadius: 10,
  color: "white",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.2s"
};
