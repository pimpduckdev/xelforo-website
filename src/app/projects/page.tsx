import Link from "next/link";

const projects = [
  {
    title: "Minecraft Plugins",
    description: "Custom plugins developed for Minecraft servers starting at age 13. Economy systems, land protection, chat management, minigame frameworks, and more. Published on CurseForge under PimpDuck12 with thousands of downloads.",
    tags: ["Java", "Spigot", "Bukkit", "Minecraft"],
    status: "Completed",
    link: "https://www.curseforge.com/members/pimpduck12/projects",
    external: true,
  },
  {
    title: "BunkerRun",
    description: "A first-person shooter built entirely from scratch in Java. Procedural level generation, weapon customization, and arena combat. No game engines — just LWJGL and OpenGL.",
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
    title: "Game Engine Development",
    description: "Building a custom voxel-based game engine in C++ with OpenGL. Procedural generation, multiplayer networking, and a robust modding system.",
    tags: ["C++", "OpenGL", "Engine"],
    status: "In Progress",
    link: "#",
    external: false,
  },
];

export default function Projects() {
  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3">Projects</h1>
          <p className="text-[#6b7280] max-w-xl">A collection of games, plugins, tools, and applications I've built over the years.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="group bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg p-6 hover:border-[#d1d5db] transition-colors duration-150"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                  project.status === 'Completed'
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    : 'bg-amber-50 text-amber-600 border border-amber-200'
                }`}>
                  {project.status}
                </span>
                {project.external && (
                  <svg className="w-4 h-4 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#2563eb] transition-colors">{project.title}</h3>
              <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white border border-[#e5e7eb] text-[#6b7280] text-xs rounded">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
