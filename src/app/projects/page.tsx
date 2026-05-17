import Link from "next/link";

const projects = [
  {
    title: "Minecraft Plugins",
    description: "Custom plugins developed for Minecraft servers starting at age 13. Economy systems, land protection, chat management, minigame frameworks, and more. Published on CurseForge under PimpDuck12.",
    tags: ["Java", "Spigot", "Bukkit", "Minecraft"],
    status: "Completed",
    link: "https://www.curseforge.com/members/pimpduck12/projects",
    external: true,
  },
  {
    title: "BunkerRun",
    description: "A fast-paced first-person shooter built entirely from scratch in Java. Procedural level generation, weapon customization, and arena combat. No game engines — just LWJGL and OpenGL.",
    tags: ["Java", "LWJGL", "OpenGL", "FPS"],
    status: "Completed",
    link: "#",
    external: false,
  },
  {
    title: "Xelzip",
    description: "A file decompiler and archive utility for game modding and reverse engineering. Supports multiple archive formats with both CLI and GUI interfaces.",
    tags: ["C++", "Qt", "Reverse Engineering"],
    status: "Completed",
    link: "/tools/xelzip",
    external: false,
  },
  {
    title: "Xelforo.io",
    description: "This website — a full-stack platform built with Next.js, TypeScript, and Tailwind CSS. Showcasing projects, tutorials, and tools for the developer community.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    link: "/",
    external: false,
  },
];

export default function Projects() {
  return (
    <div className="relative flex flex-col bg-[#0a0a0f] font-sans">
      <div className="relative z-10 flex flex-col px-6 py-24 max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Projects</h1>
          <p className="text-[#8b8fa3] max-w-lg">A collection of games, plugins, tools, and applications I've built over the years.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="group bg-[#111118] border border-white/5 rounded-xl p-6 hover:border-[#4a9eff]/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                  project.status === 'Completed'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/15'
                }`}>
                  {project.status}
                </span>
                {project.external && (
                  <svg className="w-4 h-4 text-[#5a5e70] group-hover:text-[#4a9eff] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4a9eff] transition-colors">{project.title}</h3>
              <p className="text-[#8b8fa3] text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white/5 text-[#8b8fa3] text-xs rounded-md border border-white/5">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
