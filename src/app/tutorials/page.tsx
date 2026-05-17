import Link from "next/link";

const tutorials = [
  {
    id: "creating-a-java-game-window",
    title: "Creating a Java Game Window from Scratch",
    description: "Set up a basic game window using Java and LWJGL, the foundation for any Java-based game.",
    category: "Java",
    difficulty: "Beginner",
    duration: "45 minutes",
    tags: ["Java", "LWJGL", "Game Development"],
    slug: "creating-a-java-game-window",
  },
  {
    id: "building-a-simple-game-server",
    title: "Building a Simple Game Server in Java",
    description: "Explore networking basics by creating a multiplayer game server that handles multiple client connections.",
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
    tags: ["C++", "Game Loop", "SDL2"],
    slug: "first-cpp-game-loop",
  },
  {
    id: "minecraft-plugin-development",
    title: "Minecraft Plugin Development: Getting Started",
    description: "Create your first Minecraft plugin using the Spigot API. Covers events, commands, configuration, and best practices.",
    category: "Java",
    difficulty: "Intermediate",
    duration: "1 hour",
    tags: ["Java", "Spigot", "Minecraft", "Plugins"],
    slug: "minecraft-plugin-development",
  },
  {
    id: "decompilation-101",
    title: "Decompilation 101: How Xelzip Works",
    description: "Learn the fundamentals of reverse engineering and how tools like Xelzip decompile game archives.",
    category: "C++",
    difficulty: "Advanced",
    duration: "1.5 hours",
    tags: ["C++", "Reverse Engineering", "Decompilation"],
    slug: "decompilation-101",
  },
];

export default function TutorialsHub() {
  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-[#1a1a1a] mb-3">Tutorials</h1>
          <p className="text-[#6b7280] max-w-xl">In-depth, step-by-step guides for game developers. Written from real-world experience.</p>
        </div>

        <div className="space-y-3">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={`/tutorials/${tutorial.slug}`}
              className="group block bg-[#f8f9fa] border border-[#e5e7eb] rounded-lg p-5 hover:border-[#d1d5db] transition-colors duration-150"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#2563eb]/8 text-[#2563eb] text-xs font-medium rounded">{tutorial.difficulty}</span>
                    <span className="text-xs text-[#9ca3af]">{tutorial.duration}</span>
                    <span className="text-xs text-[#9ca3af]">•</span>
                    <span className="text-xs text-[#9ca3af]">{tutorial.category}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#1a1a1a] group-hover:text-[#2563eb] transition-colors mb-1">{tutorial.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{tutorial.description}</p>
                </div>
                <svg className="w-5 h-5 text-[#d1d5db] group-hover:text-[#2563eb] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
