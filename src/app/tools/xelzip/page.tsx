import Link from "next/link";

export default function XelzipPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,136,0.06)_0%,_transparent_70%)]"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#4a9eff]/10 text-[#4a9eff] text-sm font-medium rounded-full border border-[#4a9eff]/20">AVAILABLE NOW</span>
            <span className="px-3 py-1 bg-white/5 text-zinc-300 text-sm font-medium rounded-full border border-white/10">DEVELOPER TOOL</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            XELZIP
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A powerful file decompiler and archive utility for game modding and reverse engineering. Supports multiple archive formats with CLI and GUI interfaces.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#download" className="px-8 py-4 bg-[#4a9eff]/15 hover:bg-[#4a9eff]/25 border border-[#4a9eff]/40 hover:border-[#4a9eff]/70 text-[#4a9eff] font-semibold rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] text-lg">
              ⬇ Download
            </Link>
            <Link href="/tutorials/decompilation-101" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-500 text-lg">
              📚 How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-[#08080c]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Key <span className="text-[#4a9eff]">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📦', title: 'Multi-Format Support', desc: 'Supports ZIP, RAR, TAR, GZ, 7Z, and many game-specific archive formats.' },
              { icon: '🔍', title: 'Deep Analysis', desc: 'Analyze file headers, compression methods, and embedded metadata.' },
              { icon: '⚡', title: 'Fast Extraction', desc: 'Multi-threaded extraction engine for maximum performance.' },
              { icon: '🖥️', title: 'CLI & GUI', desc: 'Use from the command line or with the built-in graphical interface.' },
              { icon: '🔧', title: 'Plugin System', desc: 'Extend support for custom formats with the plugin API.' },
              { icon: '📝', title: 'Detailed Reports', desc: 'Generate comprehensive reports of archive contents and structure.' },
            ].map((feature) => (
              <div key={feature.title} className="bg-[#111] border border-[#4a9eff]/10 rounded-xl p-6 hover:border-[#4a9eff]/30 transition-all duration-500">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI Documentation */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Command Line <span className="text-[#4a9eff]">Interface</span>
          </h2>
          <div className="space-y-4">
            {[
              { cmd: 'xelzip extract <archive>', desc: 'Extract all files from an archive' },
              { cmd: 'xelzip list <archive>', desc: 'List contents without extracting' },
              { cmd: 'xelzip analyze <archive>', desc: 'Show detailed archive analysis' },
              { cmd: 'xelzip create <output> <files...>', desc: 'Create a new archive' },
              { cmd: 'xelzip --help', desc: 'Show all available commands' },
            ].map((item) => (
              <div key={item.cmd} className="bg-[#111] border border-[#4a9eff]/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                <code className="text-[#4a9eff] font-mono text-sm bg-[#0a0a0a] px-3 py-2 rounded-lg flex-shrink-0">{item.cmd}</code>
                <span className="text-zinc-400 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 px-6 bg-[#08080c]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Download <span className="text-[#4a9eff]">Xelzip</span>
          </h2>
          <p className="text-zinc-400 mb-8">
            Free for personal and commercial use. Open source.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { platform: 'Windows', icon: '🪟', file: 'xelzip-windows.exe' },
              { platform: 'Mac', icon: '🍎', file: 'xelzip-macos.dmg' },
              { platform: 'Linux', icon: '🐧', file: 'xelzip-linux.AppImage' },
            ].map((dl) => (
              <button key={dl.platform} className="px-4 py-4 bg-[#111] border border-[#4a9eff]/15 rounded-xl hover:border-[#4a9eff]/40 hover:bg-[#4a9eff]/5 transition-all duration-300 group">
                <div className="text-2xl mb-1">{dl.icon}</div>
                <div className="text-sm font-medium text-white group-hover:text-[#4a9eff] transition-colors">{dl.platform}</div>
                <div className="text-xs text-zinc-500 mt-1">{dl.file.split('.').pop()}</div>
              </button>
            ))}
          </div>
          <p className="text-xs text-zinc-600 mt-6">
            Source code on <a href="https://github.com/xelforo/xelzip" target="_blank" rel="noopener noreferrer" className="text-[#4a9eff] hover:underline">GitHub</a>
          </p>
        </div>
      </section>
    </div>
  );
}
