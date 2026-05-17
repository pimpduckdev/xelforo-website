import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight leading-[1.2] mb-6">
            Software engineer & game developer. I build tools, write code, and share what I learn.
          </h1>
          <p className="text-lg text-[#6b7280] mb-8 max-w-2xl leading-relaxed">
            Over a decade of experience in Java, C++, and full-stack development. From Minecraft plugins to game engines — I've been shipping code since 2012.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium rounded-lg transition-colors duration-150">
              View Projects
            </Link>
            <Link href="/tutorials" className="px-5 py-2.5 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors duration-150">
              Read Tutorials
            </Link>
            <Link href="/about" className="px-5 py-2.5 border border-[#e5e7eb] hover:border-[#d1d5db] text-[#6b7280] hover:text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors duration-150">
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-16 px-6 bg-[#f8f9fa] border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Selected Projects</h2>
            <Link href="/projects" className="text-sm text-[#2563eb] hover:text-[#1d4ed8] font-medium">View all →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Minecraft Plugins",
                desc: "Custom plugins developed for Minecraft servers starting at age 13. Economy systems, land protection, chat management, and minigame frameworks published on CurseForge.",
                tags: ["Java", "Spigot", "Bukkit"],
                link: "https://www.curseforge.com/members/pimpduck12/projects",
                external: true,
              },
              {
                title: "BunkerRun",
                desc: "A first-person shooter built entirely from scratch in Java. Procedural level generation, weapon customization, and arena combat — no game engines.",
                tags: ["Java", "LWJGL", "OpenGL"],
                link: "#",
                external: false,
              },
              {
                title: "Xelzip",
                desc: "A file decompiler and archive utility for game modding and reverse engineering. Supports multiple formats with CLI and GUI interfaces.",
                tags: ["C++", "Qt"],
                link: "/tools/xelzip",
                external: false,
              },
              {
                title: "Game Engine Development",
                desc: "Building a custom voxel-based game engine in C++ with OpenGL. Procedural generation, multiplayer networking, and a robust modding system.",
                tags: ["C++", "OpenGL", "Engine"],
                link: "#",
                external: false,
              },
            ].map((project) => (
              <Link
                key={project.title}
                href={project.link}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group bg-white border border-[#e5e7eb] rounded-lg p-5 hover:border-[#d1d5db] transition-colors duration-150"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#2563eb] transition-colors">{project.title}</h3>
                  {project.external && (
                    <svg className="w-4 h-4 text-[#9ca3af] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-[#6b7280] mb-3 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-[#f3f4f6] text-[#6b7280] text-xs rounded">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-16 px-6 border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Tutorials</h2>
            <Link href="/tutorials" className="text-sm text-[#2563eb] hover:text-[#1d4ed8] font-medium">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Creating a Java Game Window from Scratch", desc: "Set up a game window using Java and LWJGL — the foundation for any Java game.", level: "Beginner", time: "45 min", href: "/tutorials/creating-a-java-game-window" },
              { title: "Building a Game Server in Java", desc: "Create a multiplayer game server with sockets and multithreading.", level: "Intermediate", time: "1 hour", href: "/tutorials/building-a-simple-game-server" },
              { title: "Your First C++ Game Loop", desc: "The core of game development — input, update, render with SDL2.", level: "Beginner", time: "30 min", href: "/tutorials/first-cpp-game-loop" },
            ].map((t) => (
              <Link key={t.title} href={t.href} className="group bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg p-5 hover:border-[#d1d5db] transition-colors duration-150">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#2563eb]/8 text-[#2563eb] text-xs font-medium rounded">{t.level}</span>
                  <span className="text-xs text-[#9ca3af]">{t.time}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1.5 group-hover:text-[#2563eb] transition-colors">{t.title}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-[#f8f9fa] border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Languages</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Java', 'C++', 'JavaScript', 'TypeScript', 'Python', 'HTML/CSS'].map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-white border border-[#e5e7eb] text-[#6b7280] text-xs rounded">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'React', 'Node.js', 'LWJGL', 'OpenGL', 'SDL2', 'Spigot API', 'Qt'].map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-white border border-[#e5e7eb] text-[#6b7280] text-xs rounded">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3">Other</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Git', 'Docker', 'PostgreSQL', 'REST APIs', 'Multithreading', 'CMake'].map((s) => (
                  <span key={s} className="px-2.5 py-1 bg-white border border-[#e5e7eb] text-[#6b7280] text-xs rounded">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 border-t border-[#e5e7eb]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">Get in Touch</h2>
          <p className="text-[#6b7280] mb-6">Interested in collaborating or have a question? Feel free to reach out.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://github.com/pimpduckdev" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white text-sm font-medium rounded-lg transition-colors duration-150">
              GitHub
            </a>
            <a href="https://www.curseforge.com/members/pimpduck12/projects" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#e5e7eb] hover:border-[#d1d5db] text-[#6b7280] hover:text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors duration-150">
              CurseForge
            </a>
            <Link href="/about" className="px-5 py-2.5 border border-[#e5e7eb] hover:border-[#d1d5db] text-[#6b7280] hover:text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors duration-150">
              About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
