import VoxelBackground from "@/components/VoxelBackground";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden">
        <VoxelBackground className="absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center text-center text-white space-y-8 px-6 py-20 max-w-4xl">
          {/* Logo / Brand Name */}
          <div className="text-5xl md:text-6xl font-bold tracking-widest text-[#00ff88] drop-shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-float">
            XELFORO
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl max-w-lg text-zinc-300 font-light">
            Building Worlds. Shipping Code. Growing Community.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/games" className="px-6 py-3 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 text-base hover:text-[#00ff88] hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]">
              🎮 Games
            </Link>
            <Link href="/tutorials" className="px-6 py-3 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 text-base hover:text-[#00ff88] hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]">
              📚 Tutorials
            </Link>
            <Link href="/projects" className="px-6 py-3 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 text-base hover:text-[#00ff88] hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]">
              💼 Projects
            </Link>
            <Link href="/about" className="px-6 py-3 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/60 transition-all duration-500 text-base hover:text-[#00ff88] hover:shadow-[0_0_25px_rgba(0,255,136,0.2)]">
              👤 About
            </Link>
          </div>

          {/* Dev Status Badge */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 bg-[#00ff88]/5 px-4 py-2 rounded-full border border-[#00ff88]/10">
            <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
            <span>Currently working on: <span className="text-[#00ff88]">Xelforo Voxel Engine</span></span>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-[#00ff88]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== FEATURED GAMES SECTION ===== */}
      <section className="relative bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-[#00ff88]">Games</span>
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Explore my game development portfolio — from voxel sandbox worlds to fast-paced Java FPS action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Xelforo Card */}
            <div className="group relative bg-[#111] border border-[#00ff88]/15 rounded-2xl p-8 hover:border-[#00ff88]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.1)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-3xl group-hover:bg-[#00ff88]/10 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#ffaa00]/10 text-[#ffaa00] text-xs font-medium rounded-full border border-[#ffaa00]/20">IN BETA</span>
                  <span className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-xs font-medium rounded-full border border-[#00ff88]/20">UPCOMING</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors">Xelforo</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  A futuristic voxel-based sandbox game featuring procedural generation, multiplayer capabilities, and a robust modding system. Built with a custom C++ game engine and OpenGL.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['C++', 'OpenGL', 'Custom Engine', 'Voxel'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#00ff88]/5 text-[#00ff88]/70 text-xs rounded-full border border-[#00ff88]/10">{tag}</span>
                  ))}
                </div>
                <Link href="/games/xelforo" className="inline-flex items-center gap-2 text-[#00ff88] font-medium hover:gap-3 transition-all duration-300">
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>

            {/* BunkerRun Card */}
            <div className="group relative bg-[#111] border border-[#00ff88]/15 rounded-2xl p-8 hover:border-[#00ff88]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,136,0.1)] overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-full blur-3xl group-hover:bg-[#00ff88]/10 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-xs font-medium rounded-full border border-[#00ff88]/20">RELEASED</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00ff88] transition-colors">BunkerRun</h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  A fast-paced Java FPS game featuring procedural level generation, weapon customization, and intense arena combat. Built entirely from scratch using LWJGL and OpenGL — no game engines.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Java', 'LWJGL', 'OpenGL', 'FPS'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#00ff88]/5 text-[#00ff88]/70 text-xs rounded-full border border-[#00ff88]/10">{tag}</span>
                  ))}
                </div>
                <Link href="/games/bunkerrun" className="inline-flex items-center gap-2 text-[#00ff88] font-medium hover:gap-3 transition-all duration-300">
                  Play Now <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TUTORIALS SECTION ===== */}
      <section className="relative bg-[#080808] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Developer <span className="text-[#00ff88]">Tutorials</span>
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              In-depth, step-by-step tutorials authored by me — from creating a Java game window from scratch to building multiplayer game servers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Java Game Window from Scratch', desc: 'Set up a game window using Java and LWJGL — the foundation for any Java game.', level: 'Beginner', time: '45 min', href: '/tutorials/creating-a-java-game-window' },
              { title: 'Building a Game Server in Java', desc: 'Create a multiplayer game server that handles multiple client connections.', level: 'Intermediate', time: '1 hour', href: '/tutorials/building-a-simple-game-server' },
              { title: 'Your First C++ Game Loop', desc: 'Understand the core of game development with a simple C++ game loop.', level: 'Beginner', time: '30 min', href: '/tutorials/first-cpp-game-loop' },
            ].map((tutorial) => (
              <Link key={tutorial.title} href={tutorial.href} className="group bg-[#111] border border-[#00ff88]/10 rounded-xl p-6 hover:border-[#00ff88]/30 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#00ff88]/10 text-[#00ff88] text-xs rounded-full">{tutorial.level}</span>
                  <span className="text-xs text-zinc-500">{tutorial.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00ff88] transition-colors">{tutorial.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{tutorial.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/tutorials" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border border-[#00ff88]/30 hover:border-[#00ff88]/60 text-[#00ff88] font-medium rounded-full transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]">
              View All Tutorials <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="relative bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the <span className="text-[#00ff88]">Loop</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Get notified about Xelforo beta releases, new tutorials, development updates, and community events. No spam — just quality content.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-[#111] border border-[#00ff88]/20 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-[#00ff88]/50 focus:ring-2 focus:ring-[#00ff88]/20 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#00ff88]/15 hover:bg-[#00ff88]/25 border border-[#00ff88]/40 hover:border-[#00ff88]/70 text-[#00ff88] font-medium rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)] whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-zinc-600 mt-3">Join 200+ developers. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
