interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: 'completed' | 'in-progress' | 'upcoming';
  category: 'games' | 'tools' | 'plugins' | 'web';
  link: string;
  image?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const statusColors: Record<Project['status'], string> = {
    completed: '#00ff88',
    'in-progress': '#ffaa00',
    upcoming: '#ff0066',
  };
  const color = statusColors[project.status];

  return (
    <div className="group relative bg-[#000000]/20 border border-[#00ff88]/20 rounded-lg p-6 hover:bg-[#000000]/30 transition-all duration-500 hover:border-[#00ff88]/40 hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"></div>
      
      <div className="relative flex items-start mb-4">
        <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div>
        <div className="ml-3">
          <h3 className="font-semibold text-lg" style={{ color }}>{project.title}</h3>
          <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider group-hover:text-zinc-300 transition-colors duration-300">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </p>
        </div>
      </div>
      
      <p className="text-zinc-300 mb-4 line-clamp-3 group-hover:text-zinc-200 transition-colors duration-300">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-[#00ff88]/10 text-[#00ff88] text-xs px-2 py-1 rounded-full group-hover:bg-[#00ff88]/20 transition-all duration-300">
            {tech}
          </span>
        ))}
      </div>
      
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block px-4 py-2 bg-[#00ff88]/20 hover:bg-[#00ff88]/30 rounded-full border border-[#00ff88]/50 transition-all duration-300 text-sm font-medium hover:text-[#00ff88] hover:shadow-[0_0_10px_rgba(0,255,136,0.5)] group/link"
      >
        <span className="relative z-10">View Project</span>
        <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full"></div>
      </a>
    </div>
  );
}
