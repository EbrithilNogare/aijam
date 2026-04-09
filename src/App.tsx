import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="font-body selection:bg-secondary/30">
      {/* WebGL Simulation Overlay */}
      <div className="webgl-sim">
        <div className="particle-glow top-0 -left-1/4" />
        <div
          className="particle-glow bottom-0 -right-1/4"
          style={{
            animationDelay: "-5s",
            background:
              "radial-gradient(circle, rgba(100, 116, 139, 0.02) 0%, rgba(14, 14, 14, 0) 70%)",
          }}
        />
        <div
          className="particle-glow top-1/2 left-1/2"
          style={{ animationDelay: "-10s", width: "80vw", height: "80vw" }}
        />
        <div className="interactive-glow" ref={glowRef} />
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 h-24 bg-[#0e0e0e]/60 backdrop-blur-lg flex justify-between items-center px-8 md:px-16">
        <div className="font-headline font-bold text-2xl tracking-tight text-neutral-100">
          NOCTURNAL
        </div>
        <div className="hidden md:flex items-center gap-12 font-headline tracking-tighter text-lg md:text-xl text-neutral-300">
          <a className="text-neutral-100 border-b border-neutral-300/30 pb-1" href="#">
            Work
          </a>
          <a className="text-neutral-500 hover:text-neutral-300 transition-colors duration-500" href="#">
            About
          </a>
          <a className="text-neutral-500 hover:text-neutral-300 transition-colors duration-500" href="#">
            Contact
          </a>
        </div>
        <button className="md:hidden text-neutral-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-16">
          <div className="max-w-screen-xl">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-8 block">
              Selected Practice &amp; Design
            </span>
            <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-primary mb-12">
              Crafting <br />
              <span className="italic font-light opacity-80">Digital</span> <br />
              Experiences
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="max-w-md text-on-surface-variant font-body leading-relaxed text-lg">
                A boutique approach to digital craftsmanship, merging technical
                precision with high-end editorial aesthetics.
              </p>
              <button className="satin-button text-on-primary px-10 py-5 font-label uppercase tracking-widest text-xs flex items-center gap-4 group">
                Inquire Project
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Selected Work (Asymmetric Grid) */}
        <section className="py-32 px-8 md:px-16 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-baseline mb-24">
              <h2 className="font-headline text-4xl md:text-6xl text-primary tracking-tight">
                Selected Work
              </h2>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                01 — 04
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
              {/* Project 01 */}
              <div className="md:col-span-7 group">
                <div className="glass-card overflow-hidden mb-8 aspect-[16/10]">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf9BpdglpRntisnYfiH4N8IXjAIceQxFfXdLSocT3qmrztk8c6cchuarw2eBfGwx_32qzNZwnZbn-nDhq0hUzcJ__ICkjoQI4X6i_TyDYzjDreHJf5pXsZbx_04pPEqd2wsT_4jIGlCCNQBIiVQ7ZIcQA_XvXL8uRnAIrkpwp2-k0DuBYxNX2kkIopKZyZp3EL0Rir7BLoMQyQu71StTk2ic12uKWdHwyRzjJwksAVU8nnsHbv69d9pLuPwJhJzLhOjaui5oLGRIs"
                    alt="Monochromatic minimal website interface for a luxury fashion house"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                    WebGL Exploration / UI Design
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary">
                    Aura Kinetic Identity
                  </h3>
                </div>
              </div>

              {/* Project 02 */}
              <div className="md:col-span-5 md:mt-48 group">
                <div className="glass-card overflow-hidden mb-8 aspect-[4/5]">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhZ0e_0Y8BOy2l3Yu8Fxx_WA2hByv6M_CHxI-pqjzQq9tkV2I5ak3oiKElHveVQEy3FcA1t49KQtb1WrohqOXTRXXGbPYRyGbNLnAo5RLUHfBSFuec4_24BvCy7YDZlFoO81GmYobqP2vFAjMDqhLKqJtI0ghBnQd4S4_xIzA6i35uZTCqSJGpRvf3VYjSKFIEx8PhS9SzdYF6hFvfmoezs6jCkjwYsc--2908We3gbXZjGjcG6A_MP6WnA84M5G2PuLak-CiYJ-w"
                    alt="3D abstract silver spheres floating in a dark liquid void"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                    Visual Research / 3D Art
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary">
                    Liquid Mercury
                  </h3>
                </div>
              </div>

              {/* Project 03 */}
              <div className="md:col-span-5 group">
                <div className="glass-card overflow-hidden mb-8 aspect-[4/5]">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjsMuPK2x5UjEayK_t0d7GWYv-e_iwS_pmr5jI8h29GXvt4ZhTrC4t0SZA2Ix59Q61cjQZ3KHzsPwWvXvBAOjgG4tqtpcIP4NIPrHV8dzJ1zLXkMgeRJst9Zmhm-0B4PXf59MgrI81rHx9v4T9Fb42NQ1593NRoVURuk0uvgt934Q4OI-mqI-UaFBxIOdxBbv25VNaK9hJMYMxu1B9F3KGWjH3ZxXL6X2iHcmUhcPWgo6HhkNigXQAF89FGSlyXpUM9Cb4oCyKTUI"
                    alt="Editorial layout of a digital magazine with monochromatic imagery of architecture"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                    UX Design / Branding
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary">
                    The Monolith Journal
                  </h3>
                </div>
              </div>

              {/* Project 04 */}
              <div className="md:col-span-7 md:-mt-24 group">
                <div className="glass-card overflow-hidden mb-8 aspect-[16/10]">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBGNUqWld8auXJ7MFE95pEZrroGphe7LTHLbDwUWs-asoowCwrYxAbqr4j4TuNHIlsA9003D9ZVgjv3ge8Ecg-cPFuHInoqRzkrRtGWu6eN85EcGtyeprRPRU0ifJ5OV1ZTE4omudpzlugwn7DD6lu0LPOa0xvkJpC3Ww5MDRLsLvx89erVEjOQ1PykhgWwrg2-zfbqsSiXh_k-6pgiexHqAO96aSt6rqYQ1Z3pM_Tr_B02UZNtrfh3g2qe9Te9J0tA4FCD92PjR8"
                    alt="Abstract gradient mesh background in deep charcoals and muted silvers"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                    Creative Development
                  </span>
                  <h3 className="font-headline text-2xl md:text-3xl text-primary">
                    Shader Poetics
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-48 px-8 md:px-16 flex flex-col items-center text-center">
          <div className="max-w-3xl">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-12 block">
              Philosophy
            </span>
            <p className="font-headline text-3xl md:text-5xl text-primary-dim leading-snug tracking-tight">
              Design is the silence between the noise. We prioritize the{" "}
              <span className="italic text-primary">unseen rhythm</span> over
              the obvious, crafting interfaces that feel as much as they
              function.
            </p>
            <div className="mt-16 h-px w-24 bg-outline-variant/30 mx-auto" />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0e0e0e] w-full py-16 px-8 md:px-16 border-t border-neutral-800/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-400">
              © 2024 Nocturnal Gallery. All rights reserved.
            </p>
            <div className="flex gap-12">
              <a
                className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-600 hover:text-neutral-200 transition-all duration-700 opacity-80 hover:opacity-100"
                href="#"
              >
                Instagram
              </a>
              <a
                className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-600 hover:text-neutral-200 transition-all duration-700 opacity-80 hover:opacity-100"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-600 hover:text-neutral-200 transition-all duration-700 opacity-80 hover:opacity-100"
                href="#"
              >
                Dribbble
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
