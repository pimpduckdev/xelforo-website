import Link from "next/link";

export default function BunkerRunHub() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,136,0.06)_0%,_transparent_70%)]"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#00ff88]/10 text-[#00ff88] text-sm font-medium rounded-full border border-[#00ff88]/20">AVAILABLE NOW</span>
            <span className="px-3 py-1 bg-white/5 text-zinc-300 text-sm font-medium rounded-full border border-white/10">JAVA FPS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            BUNKERRUN
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A fast-paced first-person shooter built entirely from scratch in Java. Procedural levels. Weapon customization. Arena combat.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#download" className="px-8 py-4 bg-[#00ff88]/15 hover:bg-[#00ff88]/25 border border-[#00ff88]/40 hover:border-[#00ff88]/70 text-[#00ff88] font-semibold rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] text-lg">
              ⬇ Download
            </Link>
            <Link href="/tutorials" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-500 text-lg">
              📚 How I Built It
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Game <span className="text-[#00ff88]">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🔫', title: 'Weapon System', desc: 'Multiple weapon types with customizable attachments, recoil patterns, and damage models.' },
              { icon: '🗺️', title: 'Procedural Levels', desc: 'Every playthrough features uniquely generated arena layouts for endless replayability.' },
              { icon: '🎯', title: 'Arena Combat', desc: 'Fast-paced deathmatch and team-based game modes with score tracking.' },
              { icon: '⚙️', title: 'Built From Scratch', desc: 'No game engines. Pure Java with LWJGL and OpenGL. Full source code available.' },
              { icon: '🎮', title: 'Smooth Controls', desc: 'Responsive FPS controls with mouse look, sprinting, jumping, and crouching.' },
              { icon: '💻', title: 'Cross-Platform', desc: 'Runs on Windows, Mac, and Linux. Just needs Java 17+.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-[#111] border border-[#00ff88]/10 rounded-xl p-6 hover:border-[#00ff88]/30 transition-all duration-500">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Built It */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            How I Built <span className="text-[#00ff88]">BunkerRun</span>
          </h2>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            BunkerRun was built entirely from scratch using Java and LWJGL. No game engines, no frameworks — just raw OpenGL and a lot of coffee. Here's the full breakdown.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Creating the Game Window', desc: 'Setting up LWJGL, GLFW, and OpenGL context. The foundation of everything.', href: '/tutorials/creating-a-java-game-window' },
              { title: 'The Game Loop', desc: 'Delta time, fixed timestep, and keeping everything running at 60 FPS.' },
              { title: 'Rendering 3D Geometry', desc: 'From triangles to textured cubes — building the visual pipeline.' },
              { title: 'Player Movement & Camera', desc: 'First-person camera controls with mouse look and WASD movement.' },
              { title: 'Procedural Level Generation', desc: 'Algorithmically creating arena layouts for endless variety.' },
              { title: 'Weapon System & Combat', desc: 'Raycasting, hit detection, damage models, and weapon switching.' },
            ].map((step, i) => (
              <div key={step.title} className="bg-[#111] border border-[#00ff88]/10 rounded-xl p-6 hover:border-[#00ff88]/25 transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {step.href && (
                  <Link href={step.href} className="text-[#00ff88] text-sm font-medium hover:underline whitespace-nowrap flex-shrink-0">
                    Read Tutorial →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download <span className="text-[#00ff88]">BunkerRun</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Available for Windows, Mac, and Linux. Requires Java 17 or later.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
            {[
              { platform: 'Windows', icon: '🪟', file: 'bunkerrun-windows.zip' },
              { platform: 'Mac', icon: '🍎', file: 'bunkerrun-macos.zip' },
              { platform: 'Linux', icon: '🐧', file: 'bunkerrun-linux.zip' },
            ].map((dl) => (
              <button key={dl.platform} className="px-4 py-4 bg-[#111] border border-[#00ff88]/15 rounded-xl hover:border-[#00ff88]/40 hover:bg-[#00ff88]/5 transition-all duration-300 group">
                <div className="text-2xl mb-1">{dl.icon}</div>
                <div className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">{dl.platform}</div>
                <div className="text-xs text-zinc-500 mt-1">.zip</div>
              </button>
            ))}
          </div>
          <p className="text-xs text-zinc-600">
            Also available on <a href="https://github.com/xelforo/bunkerrun" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] hover:underline">GitHub</a> with full source code.
          </p>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">System Requirements</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#111] border border-[#00ff88]/10 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#00ff88] uppercase tracking-wider mb-4">Minimum</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• OS: Windows 10 / macOS 10.15 / Linux</li>
                <li>• CPU: Intel i3 or equivalent</li>
                <li>• RAM: 4 GB</li>
                <li>• GPU: OpenGL 3.3 compatible</li>
                <li>• Storage: 500 MB</li>
                <li>• Java: 17 or later</li>
              </ul>
            </div>
            <div className="bg-[#111] border border-[#00ff88]/10 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#00ff88] uppercase tracking-wider mb-4">Recommended</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• OS: Windows 11 / macOS 13 / Linux</li>
                <li>• CPU: Intel i5 or equivalent</li>
                <li>• RAM: 8 GB</li>
                <li>• GPU: OpenGL 4.5 compatible</li>
                <li>• Storage: 1 GB</li>
                <li>• Java: 21 or later</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
