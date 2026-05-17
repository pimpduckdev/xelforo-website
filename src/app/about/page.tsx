import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0f] font-sans">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(74,158,255,0.03)_0%,_transparent_40%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-white space-y-12 px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4a9eff]">About Andrew Groves</h1>

        <section className="text-left w-full space-y-6">
          <h2 className="text-2xl font-semibold text-[#4a9eff]">Professional Biography</h2>
          <p className="text-base leading-relaxed text-[#8b8fa3]">
            Andrew Groves is a 27-year-old software engineer and game developer with over a decade of hands-on experience.
            Beginning his journey in 2012 with HTML, he progressed through Java and C++, ultimately specializing in game
            engineering, plugin development, and full-stack architecture. From 2015–2020, Andrew developed custom plugins
            and mods for the DiamCraft Minecraft server network under Hunter Shenep, producing production-grade paid plugins
            and managing server-side infrastructure. He later operated his own Minecraft server and contributed to the
            BukkitDev community under the alias PimpDuck / PimpDuck12.
          </p>
          <p className="text-base leading-relaxed text-[#8b8fa3]">
            Today, Andrew is the founder of Xelforo.io, where he develops original game IPs (including the upcoming futuristic
            voxel-based title Xelforo, currently in beta), utility software (Xelzip), and educational content for aspiring
            game developers. His expertise spans game engineering, web design, backend server management, graphics/art,
            business operations, sales analytics, and technical education. Andrew is a passionate, authentic developer who
            believes in craftsmanship, clarity, and community.
          </p>
        </section>

        <section className="text-left w-full space-y-6">
          <h2 className="text-2xl font-semibold text-[#4a9eff]">Timeline</h2>
          <div className="space-y-5">
            {[
              { year: '2012', text: 'Started with HTML and basic web development' },
              { year: '2014-2015', text: 'Learned Java and began Minecraft plugin development' },
              { year: '2015-2020', text: 'Developed custom plugins for DiamCraft Minecraft server network' },
              { year: '2020-Present', text: 'Full-stack development, game engine creation, and founding Xelforo.io' },
            ].map((item) => (
              <div key={item.year} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#4a9eff] rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-white">{item.year}</h3>
                  <p className="text-[#8b8fa3] text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-left w-full space-y-6">
          <h2 className="text-2xl font-semibold text-[#4a9eff]">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Languages', items: ['HTML/CSS', 'JavaScript/TypeScript', 'Java', 'C++', 'Python'] },
              { title: 'Game Development', items: ['Game Engine Architecture', 'Voxel Rendering', 'Physics Systems', 'Multiplayer Networking', 'Procedural Generation'] },
              { title: 'Web Development', items: ['Full-Stack (Next.js, Node.js)', 'RESTful APIs', 'Database Design', 'WebSockets', 'DevOps (Docker, CI/CD)'] },
              { title: 'Tools & Platforms', items: ['Git & GitHub', 'Docker', 'AWS/DigitalOcean', 'Blender/GIMP', 'IntelliJ/VS Code'] },
              { title: 'Other Expertise', items: ['Technical Writing', 'Community Building', 'Project Management', 'UI/UX Design', 'Audio Programming'] },
            ].map((skill) => (
              <div key={skill.title} className="bg-[#111118] border border-white/5 rounded-lg p-4">
                <h3 className="font-semibold text-[#4a9eff] mb-2">{skill.title}</h3>
                <ul className="text-[#8b8fa3] space-y-1 text-sm">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="text-left w-full space-y-6">
          <h2 className="text-2xl font-semibold text-[#4a9eff]">Connect & Resume</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <div className="flex-1 bg-[#111118] border border-white/5 rounded-lg p-6">
              <h3 className="font-semibold text-[#4a9eff] mb-4">Resume/CV</h3>
              <p className="text-[#8b8fa3] mb-4 text-sm">
                Download my detailed resume to learn more about my professional experience and projects.
              </p>
              <a href="#" className="inline-block px-5 py-2.5 bg-[#4a9eff]/10 hover:bg-[#4a9eff]/20 border border-[#4a9eff]/25 text-[#4a9eff] text-sm font-medium rounded-lg transition-all duration-200">
                Download PDF
              </a>
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="font-semibold text-[#4a9eff] mb-3">Let's Connect</h3>
              <div className="space-y-2">
                <a href="https://github.com/pimpduckdev" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-4 py-3 bg-[#111118] border border-white/5 rounded-lg hover:border-[#4a9eff]/20 transition-all duration-200">
                  <span className="text-[#4a9eff] text-sm font-medium">GitHub</span>
                  <span className="text-[#8b8fa3] text-sm">pimpduckdev</span>
                </a>
                <a href="https://discord.gg/xelforo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-4 py-3 bg-[#111118] border border-white/5 rounded-lg hover:border-[#4a9eff]/20 transition-all duration-200">
                  <span className="text-[#4a9eff] text-sm font-medium">Discord</span>
                  <span className="text-[#8b8fa3] text-sm">Xelforo Community</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
