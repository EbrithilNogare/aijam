import { useEffect, useRef } from "react";
import "./App.css";

const projects = [
  {
    name: "PraK",
    category: "Full-Stack / Research Tool",
    description: "Frontend and backend for the NAKI cultural heritage project at Charles University (MFF)",
    url: "http://quest.ms.mff.cuni.cz/prak",
    image: "https://nogare.cz/static/img/prak.png",
    span: 7,
  },
  {
    name: "Charles Translator",
    category: "Frontend / NLP Interface",
    description: "Translation interface frontend for the LINDAT linguistic data infrastructure",
    url: "http://translator.cuni.cz/",
    image: "https://nogare.cz/static/img/translator.png",
    span: 5,
    offset: true,
  },
  {
    name: "Ember of Change",
    category: "Game / Game Jam 2024",
    description: "Game from game jam 2024 — built under time pressure, shipped",
    url: "https://ebrithilnogare.itch.io/ember-of-change",
    image: "https://nogare.cz/static/img/emberOfChange.jpg",
    span: 5,
  },
  {
    name: "Mars Broadcast",
    category: "Game / Game Jam 2023",
    description: "Game jam entry 2023. Awarded 2nd place.",
    url: "https://ebrithilnogare.itch.io/mars-broadcast",
    image: "https://nogare.cz/static/img/MarsBroadcast.jpg",
    span: 7,
    negativeOffset: true,
  },
];

const games = [
  {
    name: "SpiderClean s.r.o",
    category: "Game Jam 2025",
    url: "https://ebrithilnogare.itch.io/spiderclean",
    image: "https://nogare.cz/static/img/spiderClean.png",
  },
  {
    name: "Mine Flowers",
    category: "3D Game",
    url: "https://ebrithilnogare.github.io/MineFlowers/",
    image: "https://nogare.cz/programsFolder/.screenshots/mineFlowers.jpg",
  },
  {
    name: "Mole Intoxication",
    category: "Game Jam 2024",
    url: "https://ebrithilnogare.github.io/MoleIntoxication/",
    image: "https://nogare.cz/programsFolder/.screenshots/moleIntoxication.jpg",
  },
  {
    name: "SHUTR",
    category: "RPG 3D",
    url: "https://nogare.cz/programsFolder/shutr/index.html",
    image: "https://nogare.cz/programsFolder/.screenshots/shutr.jpg",
  },
];

const experiments = [
  { name: "Ray Marching", desc: "WebGL ray-marcher", url: "https://ebrithilnogare.github.io/RayMarching" },
  { name: "Ray Tracing (WGSL)", desc: "WGSL triangle & sphere ray tracer", url: "https://ebrithilnogare.github.io/WebGPURaytracing/index.html" },
  { name: "Ray Tracing (GLSL)", desc: "GLSL sphere realtime ray tracer", url: "https://ebrithilnogare.github.io/WebGLRaytracing/index.html" },
  { name: "Wolfenstein 3D WebGL", desc: "ThreeJS raycasting", url: "https://nogare.cz/programsFolder/wolfenstein_webGL/index.html" },
  { name: "Mandelbrot Set", desc: "GPU-rendered, realtime zoom", url: "https://nogare.cz/programsFolder/mandelbrotova%20mnozina%20webgl%20zoom/index.html" },
  { name: "Virtual Gallery", desc: "Krkonoše origins — 3D exhibition", url: "https://quest.ms.mff.cuni.cz/prak/modules/virtualGallery/" },
  { name: "Assembler Emulator", desc: "Run assembler code, inspect memory", url: "https://nogare.cz/programsFolder/assembler/index.html" },
  { name: "Deferred Rendering", desc: "Scene with multiple dynamic lights", url: "https://nogare.cz/programsFolder/deferedRendering/index.html" },
];

const skills = [
  { domain: "Frontend", items: "JS · TS · PHP · React · Next.js" },
  { domain: "Backend", items: "C# · Java · Python · Prolog" },
  { domain: "Graphics", items: "GLSL · WGSL · Three.js · Babylon.js · Unity" },
  { domain: "Low-Level", items: "C · C++ · RPi · Arduino" },
  { domain: "Creative", items: "Blender · Photoshop · Illustrator · Premiere · After Effects" },
];

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
      {/* WebGL Background */}
      <div className="webgl-sim">
        <div className="particle-glow top-0 -left-1/4" />
        <div
          className="particle-glow bottom-0 -right-1/4"
          style={{
            animationDelay: "-5s",
            background: "radial-gradient(circle, rgba(100, 116, 139, 0.02) 0%, rgba(14, 14, 14, 0) 70%)",
          }}
        />
        <div
          className="particle-glow top-1/2 left-1/2"
          style={{ animationDelay: "-10s", width: "80vw", height: "80vw" }}
        />
        <div className="interactive-glow" ref={glowRef} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 h-24 bg-[#0e0e0e]/60 backdrop-blur-lg flex justify-between items-center px-8 md:px-16">
        <div className="font-headline font-bold text-2xl tracking-tight text-neutral-100">
          NOGARE
        </div>
        <div className="hidden md:flex items-center gap-12 font-headline tracking-tighter text-lg text-neutral-300">
          <a className="text-neutral-100 border-b border-neutral-300/30 pb-1" href="#work">
            Work
          </a>
          <a className="text-neutral-500 hover:text-neutral-300 transition-colors duration-500" href="#programs">
            Programs
          </a>
          <a
            className="text-neutral-500 hover:text-neutral-300 transition-colors duration-500"
            href="https://github.com/EbrithilNogare"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <button className="md:hidden text-neutral-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-32 pb-16">
          <div className="max-w-screen-xl">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-8 block">
              Frontend Developer &amp; Digital Craftsman
            </span>
            <h1 className="font-headline text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-primary mb-12">
              David <br />
              <span className="italic font-light opacity-80">Nápravník</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="max-w-md text-on-surface-variant font-body leading-relaxed text-lg">
                Studying for a Master's at the Faculty of Mathematics and Physics,
                Charles University. I build for the web, render on the GPU, and
                ship games in 48 hours.
              </p>
              <a
                href="https://github.com/EbrithilNogare"
                target="_blank"
                rel="noopener noreferrer"
                className="satin-button text-on-primary px-10 py-5 font-label uppercase tracking-widest text-xs flex items-center gap-4 group w-fit"
              >
                View GitHub
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-32 px-8 md:px-16 bg-surface-container-low">
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
              {projects.map((project) => (
                <div
                  key={project.name}
                  className={[
                    `md:col-span-${project.span} group`,
                    project.offset ? "md:mt-48" : "",
                    project.negativeOffset ? "md:-mt-24" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div
                      className={`glass-card overflow-hidden mb-8 ${
                        project.span === 7 ? "aspect-[16/10]" : "aspect-[4/5]"
                      }`}
                    >
                      <img
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                        src={project.image}
                        alt={project.name}
                      />
                    </div>
                  </a>
                  <div className="flex flex-col gap-2">
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                      {project.category}
                    </span>
                    <h3 className="font-headline text-2xl md:text-3xl text-primary">
                      {project.name}
                    </h3>
                    <p className="text-on-surface-variant text-sm font-body leading-relaxed mt-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-48 px-8 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-24 md:gap-0">
              <div className="md:w-1/3">
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-secondary mb-8 block">
                  Expertise
                </span>
                <p className="font-headline text-3xl md:text-4xl text-primary-dim leading-snug tracking-tight">
                  From pixels <br />
                  to{" "}
                  <span className="italic text-primary">shaders</span>.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                {skills.map((skill) => (
                  <div key={skill.domain}>
                    <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary block mb-3">
                      {skill.domain}
                    </span>
                    <p className="font-body text-on-surface-variant text-base leading-relaxed">
                      {skill.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Games */}
        <section className="py-32 px-8 md:px-16 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-baseline mb-24">
              <h2 className="font-headline text-4xl md:text-6xl text-primary tracking-tight">
                Games
              </h2>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                Game Jams &amp; Experiments
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {games.map((game) => (
                <a
                  key={game.name}
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="glass-card overflow-hidden mb-5 aspect-[4/3]">
                    <img
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                      src={game.image}
                      alt={game.name}
                    />
                  </div>
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-1">
                    {game.category}
                  </span>
                  <h3 className="font-headline text-lg text-primary">{game.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Programs / Experiments */}
        <section id="programs" className="py-32 px-8 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-baseline mb-24">
              <h2 className="font-headline text-4xl md:text-6xl text-primary tracking-tight">
                Programs
              </h2>
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">
                WebGL &amp; Experiments
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {experiments.map((exp) => (
                <a
                  key={exp.name}
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between py-7 border-b border-outline-variant/20 hover:pl-4 transition-all duration-500"
                >
                  <div>
                    <h3 className="font-headline text-xl text-primary group-hover:text-primary-fixed transition-colors duration-300">
                      {exp.name}
                    </h3>
                    <p className="font-body text-[11px] text-on-surface-variant uppercase tracking-widest mt-1">
                      {exp.desc}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-1">
                    arrow_outward
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0e0e0e] w-full py-16 px-8 md:px-16 border-t border-neutral-800/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-400">
              © 2025 David Nápravník — nogare.cz
            </p>
            <div className="flex gap-12">
              <a
                href="https://github.com/EbrithilNogare"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-600 hover:text-neutral-200 transition-all duration-700 opacity-80 hover:opacity-100"
              >
                GitHub
              </a>
              <a
                href="https://ebrithilnogare.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[10px] uppercase tracking-[0.2em] font-light text-neutral-600 hover:text-neutral-200 transition-all duration-700 opacity-80 hover:opacity-100"
              >
                Itch.io
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
