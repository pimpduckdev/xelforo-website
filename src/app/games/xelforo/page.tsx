import Link from "next/link";

export default function XelforoHub() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,158,255,0.06)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,158,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(74,158,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-sm font-medium rounded-full border border-amber-500/15">IN BETA</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            XELFORO
          </h1>
          <p className="text-xl md:text-2xl text-[#8b8fa3] mb-8 max-w-2xl mx-auto leading-relaxed">
            A futuristic voxel-based sandbox game. Procedural worlds. Multiplayer. Modding. Built from scratch with a custom C++ engine.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="#beta-access" className="px-8 py-3.5 bg-[#4a9eff] hover:bg-[#3d8bde] text-white font-semibold rounded-lg transition-all duration-200 text-base">
              Get Beta Access
            </Link>
            <Link href="#features" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all duration-200 text-base">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#08080c]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Key <span className="text-[#4a9eff]">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🌍', title: 'Procedural Worlds', desc: 'Infinite, procedurally generated voxel terrain with diverse biomes, caves, and structures.' },
              { icon: '👥', title: 'Multiplayer', desc: 'Real-time multiplayer with dedicated server support. Build and explore together.' },
              { icon: '🔧', title: 'Modding System', desc: 'Robust modding API. Create custom blocks, items, creatures, and game mechanics.' },
              { icon: '⚡', title: 'Custom Engine', desc: 'Built from scratch in C++ with OpenGL. Optimized for performance and extensibility.' },
              { icon: '🎨', title: 'Dynamic Lighting', desc: 'Real-time global illumination, shadows, and atmospheric effects.' },
              { icon: '🏗️', title: 'Building Tools', desc: 'Intuitive building system with copy/paste, templates, and blueprint sharing.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-[#111118] border border-white/5 rounded-xl p-6 hover:border-[#4a9eff]/20 transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[#8b8fa3] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dev Blog / Updates */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Development <span className="text-[#4a9eff]">Updates</span>
          </h2>
          <div className="space-y-4">
            {[
              { date: 'May 15, 2026', title: 'Chunk Loading Optimization', desc: 'Rewrote the chunk loading system for 3x faster world generation and reduced memory usage.' },
              { date: 'May 1, 2026', title: 'Multiplayer Networking Prototype', desc: 'Basic multiplayer is now working! Players can join servers and see each other in real-time.' },
              { date: 'April 20, 2026', title: 'Dynamic Lighting System', desc: 'Implemented real-time global illumination with smooth day/night cycles.' },
              { date: 'April 5, 2026', title: 'Beta Signups Open', desc: "We're opening beta access to the first wave of testers. Sign up below!" },
            ].map((update) => (
              <div key={update.title} className="bg-[#111118] border border-white/5 rounded-xl p-6 hover:border-[#4a9eff]/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs text-[#4a9eff] font-mono">{update.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{update.title}</h3>
                <p className="text-[#8b8fa3] text-sm leading-relaxed">{update.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Access */}
      <section id="beta-access" className="py-24 px-6 bg-[#08080c]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get <span className="text-[#4a9eff]">Beta Access</span>
          </h2>
          <p className="text-[#8b8fa3] mb-8">
            Be among the first to play Xelforo. Sign up for beta access and get notified when new builds are available.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-[#111118] border border-white/10 rounded-lg text-white placeholder-[#5a5e70] focus:outline-none focus:border-[#4a9eff]/40 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#4a9eff] hover:bg-[#3d8bde] text-white font-medium rounded-lg transition-all duration-200 whitespace-nowrap text-sm"
            >
              Request Access
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
