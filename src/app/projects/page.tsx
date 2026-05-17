import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  category: 'games' | 'tools' | 'plugins' | 'web';
  link: string;
};

// Sample project data - in a real app, this would come from a CMS or database
const projects: Project[] = [
  {
    id: "xelforo",
    title: "Xelforo",
    description: "An upcoming voxel-based sandbox game featuring procedural generation, multiplayer capabilities, and a robust modding system. Built with a custom game engine in C++ and OpenGL.",
    techStack: ["C++", "OpenGL", "GLFW", "ImGui", "Entt"],
    status: "in-progress",
    category: "games",
    link: "/games/xelforo",
  },
  {
    id: "bunkerrun",
    title: "BunkerRun",
    description: "A fast-paced Java FPS game featuring procedural level generation, weapon customization, and intense arena combat. Created from scratch without external game engines.",
    techStack: ["Java", "LWJGL", "OpenGL", "Javaluator"],
    status: "completed",
    category: "games",
    link: "/games/bunkerrun",
  },
  {
    id: "xelzip",
    title: "Xelzip",
    description: "A powerful file decompiler and archive utility designed for game modding and reverse engineering. Supports multiple archive formats with CLI and GUI interfaces.",
    techStack: ["C++", "Qt", "Boost", "Capstone"],
    status: "completed",
    category: "tools",
    link: "/tools/xelzip",
  },
  {
    id: "diamcraft-plugin",
    title: "DiamCraft Essentials",
    description: "A comprehensive Minecraft server plugin suite featuring economy systems, land protection, chat management, and minigame framework. Used on a network of 5+ servers.",
    techStack: ["Java", "Spigot API", "Maven", "MySQL"],
    status: "completed",
    category: "plugins",
    link: "#",
  },
  {
    id: "portfolio-site",
    title: "Xelforo.io",
    description: "This very website - a full-stack platform showcasing developer portfolio, game ecosystem, tutorials, community features, and e-commerce storefront.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Node.js"],
    status: "in-progress",
    category: "web",
    link: "/",
  },
  {
    id: "xelchat",
    title: "XelChat",
    description: "A lightweight, self-hosted chat application with end-to-end encryption, file sharing, and cross-platform clients. Built for developer communities.",
    techStack: ["Node.js", "Socket.IO", "React", "Electron"],
    status: "upcoming",
    category: "web",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="relative flex flex-col bg-[#0a0a0f] font-sans overflow-hidden">
      {/* Subtle voxel background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(0,255,136,0.02)_0%,_transparent_30%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-12 px-6 py-24 max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold letter-wider tracking-widest text-[#4a9eff] drop-shadow-lg animate-float">
          Projects & Portfolio
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl max-w-md text-zinc-300">
          A showcase of my work in game development, software engineering, and open-source contributions
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button 
            className="px-4 py-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full hover:bg-[#4a9eff]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">All</span>
            <div className="absolute inset-0 bg-[#4a9eff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          <button 
            className="px-4 py-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full hover:bg-[#4a9eff]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Games</span>
            <div className="absolute inset-0 bg-[#4a9eff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          <button 
            className="px-4 py-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full hover:bg-[#4a9eff]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Tools</span>
            <div className="absolute inset-0 bg-[#4a9eff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          <button 
            className="px-4 py-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full hover:bg-[#4a9eff]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Plugins</span>
            <div className="absolute inset-0 bg-[#4a9eff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          <button 
            className="px-4 py-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full hover:bg-[#4a9eff]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Web</span>
            <div className="absolute inset-0 bg-[#4a9eff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View More Button (placeholder for pagination) */}
        <Link href="#" className="inline-block px-6 py-3 bg-[#4a9eff]/20 hover:bg-[#4a9eff]/30 rounded-full border border-[#4a9eff]/50 transition-all duration-500 text-sm font-medium hover:text-[#4a9eff] hover:shadow-[0_0_10px_rgba(0,255,136,0.5)] group">
          <span className="relative z-0">View All Projects</span>
          <div className="absolute inset-0 bg-[#4a9eff]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
        </Link>
      </div>
    </div>
  );
}
