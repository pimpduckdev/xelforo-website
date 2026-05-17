import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,158,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,158,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,158,255,0.06)_0%,transparent_70%)]"></div>

        <div className="relative z-10 text-center max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4a9eff]/8 border border-[#4a9eff]/15 rounded-full text-[#4a9eff] text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 bg-[#4a9eff] rounded-full animate-pulse"></span>
            Xelforo — Voxel Game in Beta
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Build. Ship.{" "}
            <span className="text-[#4a9eff]">Connect.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#8b8fa3] mb-10 max-w-xl mx-auto leading-relaxed">
            Game developer, engineer, and educator. Building voxel worlds, shipping code, and growing a community of developers.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/games" className="px-6 py-3 bg-[#4a9eff] hover:bg-[#3d8bde] text-white font-medium rounded-lg transition-all duration-200 text-sm">
              Explore Games
            </Link>
            <Link href="/tutorials" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-lg transition-all duration-200 text-sm">
              Read Tutorials
            </Link>
            <Link href="/about" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[#8b8fa3] hover:text-white font-medium rounded-lg transition-all duration-200 text-sm">
              About Me
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-[#4a9eff] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ===== GAMES ===== */}
      <section className="py-24 px-6 bg-[#08080c]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Games</h2>
            <p className="text-[#8b8fa3] max-w-md mx-auto">From voxel sandbox worlds to fast-paced Java FPS action.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Xelforo */}
            <div className="group bg-[#111118] border border-white/5 rounded-xl p-8 hover:border-[#4a9eff]/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/15">BETA</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4a9eff] transition-colors">Xelforo</h3>
              <p className="text-[#8b8fa3] text-sm mb-6 leading-relaxed">A futuristic voxel-based sandbox game with procedural generation, multiplayer, and modding. Built with a custom C++ engine.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['C++', 'OpenGL', 'Custom Engine'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 text-[#8b8fa3] text-xs rounded-md border border-white/5">{t}</span>
                ))}
              </div>
              <Link href="/games/xelforo" className="text-[#4a9eff] text-sm font-medium hover:underline">Learn more →</Link>
            </div>

            {/* BunkerRun */}
            <div className="group bg-[#111118] border border-white/5 rounded-xl p-8 hover:border-[#4a9eff]/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 bg-[#4a9eff]/10 text-[#4a9eff] text-xs font-medium rounded-full border border-[#4a9eff]/15">RELEASED</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4a9eff] transition-colors">BunkerRun</h3>
              <p className="text-[#8b8fa3] text-sm mb-6 leading-relaxed">A fast-paced Java FPS with procedural levels and weapon customization. Built from scratch — no game engines.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Java', 'LWJGL', 'OpenGL'].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 text-[#8b8fa3] text-xs rounded-md border border-white/5">{t}</span>
                ))}
              </div>
              <Link href="/games/bunkerrun" className="text-[#4a9eff] text-sm font-medium hover:underline">Play now →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TUTORIALS ===== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Tutorials</h2>
            <p className="text-[#8b8fa3] max-w-md mx-auto">In-depth, step-by-step guides for game developers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Java Game Window from Scratch', desc: 'Set up a game window using Java and LWJGL.', level: 'Beginner', time: '45 min', href: '/tutorials/creating-a-java-game-window' },
              { title: 'Building a Game Server', desc: 'Create a multiplayer game server in Java.', level: 'Intermediate', time: '1 hour', href: '/tutorials/building-a-simple-game-server' },
              { title: 'Your First C++ Game Loop', desc: 'The core of game development with C++.', level: 'Beginner', time: '30 min', href: '/tutorials/first-cpp-game-loop' },
            ].map((t) => (
              <Link key={t.title} href={t.href} className="group bg-[#111118] border border-white/5 rounded-xl p-6 hover:border-[#4a9eff]/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#4a9eff]/8 text-[#4a9eff] text-xs rounded-full">{t.level}</span>
                  <span className="text-xs text-[#5a5e70]">{t.time}</span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#4a9eff] transition-colors">{t.title}</h3>
                <p className="text-sm text-[#8b8fa3] leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/tutorials" className="text-[#4a9eff] text-sm font-medium hover:underline">View all tutorials →</Link>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="py-20 px-6 bg-[#08080c]">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-[#8b8fa3] text-sm mb-6">Beta releases, tutorials, and development updates. No spam.</p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-[#111118] border border-white/10 rounded-lg text-white placeholder-[#5a5e70] focus:outline-none focus:border-[#4a9eff]/40 text-sm" />
            <button type="submit" className="px-5 py-3 bg-[#4a9eff] hover:bg-[#3d8bde] text-white font-medium rounded-lg transition-all duration-200 text-sm whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
