import Link from "next/link";

// Sample tutorial data - in a real app, this would come from a CMS or markdown files
const tutorials = [
  {
    id: "creating-a-java-game-window",
    title: "Creating a Java Game Window from Scratch",
    description: "Learn how to set up a basic game window using Java and LWJGL, the foundation for any Java-based game.",
    category: "Java",
    difficulty: "Beginner",
    duration: "45 minutes",
    tags: ["Java", "LWJGL", "Game Development", "Beginner"],
    slug: "creating-a-java-game-window",
    // In a real app, we might have a cover image or video
  },
  {
    id: "building-a-simple-game-server",
    title: "Building a Simple Game Server in Java",
    description: "Explore networking basics by creating a multiplayer game server that can handle multiple client connections.",
    category: "Java",
    difficulty: "Intermediate",
    duration: "1 hour",
    tags: ["Java", "Networking", "Sockets", "Multiplayer"],
    slug: "building-a-simple-game-server",
  },
  {
    id: "first-cpp-game-loop",
    title: "Your First C++ Game Loop",
    description: "Understand the core of game development with a simple C++ game loop that handles input, updates, and rendering.",
    category: "C++",
    difficulty: "Beginner",
    duration: "30 minutes",
    tags: ["C++", "Game Loop", "SDL2", "Beginner"],
    slug: "first-cpp-game-loop",
  },
  {
    id: "minecraft-plugin-development",
    title: "Minecraft Plugin Development: Getting Started",
    description: "Leverage past expertise to create your first Minecraft plugin using the Spigot API.",
    category: "Plugins",
    difficulty: "Intermediate",
    duration: "1 hour",
    tags: ["Java", "Spigot", "Minecraft", "Plugins"],
    slug: "minecraft-plugin-development",
  },
  {
    id: "decompilation-101",
    title: "Decompilation 101: How Xelzip Works",
    description: "Learn the fundamentals of reverse engineering and how tools like Xelzip decompile game archives.",
    category: "Tools",
    difficulty: "Advanced",
    duration: "1.5 hours",
    tags: ["Reverse Engineering", "C++", "Decompilation", "Advanced"],
    slug: "decompilation-101",
  },
];

export default function TutorialsHub() {
  return (
    <div className="relative flex flex-col bg-black font-sans overflow-hidden">
      {/* Subtle voxel background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(0,255,136,0.02)_0%,_transparent_30%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-12 px-6 py-24 max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold letter-wider tracking-widest text-[#00ff88] drop-shadow-lg animate-float">
          Developer Tutorials
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl max-w-md text-zinc-300">
          Learn game development, software engineering, and more through hands-on tutorials
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button 
            className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full hover:bg-[#00ff88]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">All</span>
            <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          {/* Categories */}
          {[...new Set(tutorials.map(t => t.category))].map((category) => (
            <button 
              key={category}
              className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full hover:bg-[#00ff88]/20 transition-all duration-500 text-sm font-medium group"
            >
              <span className="relative z-0">{category}</span>
              <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
            </button>
          ))}
          {/* Difficulty */}
          <button 
            className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full hover:bg-[#00ff88]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Beginner</span>
            <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          <button 
            className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full hover:bg-[#00ff88]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Intermediate</span>
            <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
          <button 
            className="px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-full hover:bg-[#00ff88]/20 transition-all duration-500 text-sm font-medium group"
          >
            <span className="relative z-0">Advanced</span>
            <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
          </button>
        </div>
        
        {/* Search (placeholder) */}
        <div className="relative w-full max-w-md mb-8">
          <input 
            type="text"
            placeholder="Search tutorials..."
            className="w-full px-4 py-3 bg-[#000000]/20 border border-[#00ff88]/20 rounded-lg text-zinc-200 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00ff88]/50"
          />
        </div>
        
        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {tutorials.map((tutorial) => (
            <Link 
              key={tutorial.id} 
              href={`/tutorials/${tutorial.slug}`} 
              className="group block"
            >
              <div className="bg-[#000000]/20 border border-[#00ff88]/20 rounded-lg p-6 hover:bg-[#000000]/30 transition-all duration-500 hover:border-[#00ff88]/40">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {tutorial.tags.map((tag, index) => (
                    <span key={index} className="bg-[#00ff88]/10 text-[#00ff88] text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="font-semibold text-xl mb-2">{tutorial.title}</h3>
                
                {/* Description */}
                <p className="text-zinc-300 mb-4 line-clamp-3">
                  {tutorial.description}
                </p>
                
                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                  <span>• {tutorial.category}</span>
                  <span>• {tutorial.difficulty}</span>
                  <span>• {tutorial.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View More Button (placeholder for pagination) */}
        <Link href="#" className="inline-block px-6 py-3 bg-[#00ff88]/20 hover:bg-[#00ff88]/30 rounded-full border border-[#00ff88]/50 transition-all duration-500 text-sm font-medium hover:text-[#00ff88] hover:shadow-[0_0_10px_rgba(0,255,136,0.5)] group">
          <span className="relative z-0">View All Tutorials</span>
          <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
        </Link>
      </div>
    </div>
  );
}