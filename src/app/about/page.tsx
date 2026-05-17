import Link from "next/link";

export default function About() {
  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-8">About</h1>

        <div className="space-y-6 text-[#6b7280] leading-relaxed">
          <p>
            I'm Andrew Groves — a software engineer and game developer with over a decade of hands-on experience.
            I started coding in 2012 with HTML, and by my early teens I was already building and publishing
            Minecraft plugins that thousands of players used daily.
          </p>
          <p>
            My primary expertise is in <strong className="text-[#1a1a1a]">Java</strong> and <strong className="text-[#1a1a1a]">C++</strong>,
            with deep experience in game engineering, plugin development, and full-stack architecture. I've built everything
            from multiplayer game servers to file decompilation tools — always from scratch, always learning.
          </p>
          <p>
            From 2015–2020, I developed custom paid plugins and managed server infrastructure for the DiamCraft
            Minecraft server network. My plugins handled economy systems, land protection, chat management, and
            minigame frameworks across a network of 5+ servers.
          </p>
          <p>
            Today, I'm focused on building original game IPs, creating educational content for aspiring developers,
            and shipping tools that make developers' lives easier. I believe in craftsmanship, clarity, and sharing
            knowledge with the community.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Experience Timeline</h2>
          <div className="space-y-4">
            {[
              { year: '2012', text: 'Started programming with HTML' },
              { year: '2013-2014', text: 'Learned Java, began Minecraft plugin development' },
              { year: '2015-2020', text: 'Developed custom plugins for DiamCraft server network (published as PimpDuck12)' },
              { year: '2020', text: 'Operated own Minecraft server, contributed to BukkitDev community' },
              { year: '2020-Present', text: 'Full-stack development, game engine work, and founding Xelforo.io' },
            ].map((item) => (
              <div key={item.year} className="flex gap-4">
                <span className="text-sm font-mono text-[#9ca3af] w-24 flex-shrink-0 pt-0.5">{item.year}</span>
                <p className="text-sm text-[#6b7280]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
          <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Connect</h2>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/pimpduckdev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors">GitHub</a>
            <a href="https://www.curseforge.com/members/pimpduck12/projects" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors">CurseForge</a>
            <a href="https://discord.gg/xelforo" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1a1a1a] text-sm font-medium rounded-lg transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}
