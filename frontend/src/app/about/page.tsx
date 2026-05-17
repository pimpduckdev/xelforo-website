import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black font-sans overflow-hidden">
      {/* Voxel Background - we can reuse the same background or a lighter version */}
      <div className="absolute inset-0">
        {/* We'll use a simpler background for the About page to not distract from content */}
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(0,255,136,0.05)_0%,_transparent_40%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-white space-y-12 px-6 py-24 max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold letter-wider tracking-widest text-[#00ff88] drop-shadow-lg animate-float">
          About Andrew Groves
        </h1>
        
        {/* Biography */}
        <section className="text-left w-full space-y-8">
          <h2 className="text-2xl font-semibold text-[#00ff88]">Professional Biography</h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            Andrew Groves is a 27-year-old software engineer and game developer with over a decade of hands-on experience. 
            Beginning his journey in 2012 with HTML, he progressed through Java and C++, ultimately specializing in game 
            engineering, plugin development, and full-stack architecture. From 2015–2020, Andrew developed custom plugins 
            and mods for the DiamCraft Minecraft server network under Hunter Shenep, producing production-grade paid plugins 
            and managing server-side infrastructure. He later operated his own Minecraft server and contributed to the 
            BukkitDev community under the alias PimpDuck / PimpDuck12.
          </p>
          <p className="text-lg leading-relaxed text-zinc-300">
            Today, Andrew is the founder of Xelforo.io, where he develops original game IPs (including the upcoming voxel-based 
            title *Xelforo*), utility software (Xelzip), and educational content for aspiring game developers. His expertise 
            spans game engineering, web design, backend server management, graphics/art, business operations, sales analytics, 
            and technical education. Andrew is a passionate, authentic developer who believes in craftsmanship, clarity, and 
            community.
          </p>
        </section>
        
        {/* Timeline */}
        <section className="text-left w-full space-y-8">
          <h2 className="text-2xl font-semibold text-[#00ff88]">Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-zinc-100">2012</h3>
                <p className="text-zinc-300">Started with HTML and basic web development</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-zinc-100">2014-2015</h3>
                <p className="text-zinc-300">Learned Java and began Minecraft plugin development</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-zinc-100">2015-2020</h3>
                <p className="text-zinc-300">Developed custom plugins for DiamCraft Minecraft server network</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full mt-1 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-zinc-100">2020-Present</h3>
                <p className="text-zinc-300">Full-stack development, game engine creation, and founding Xelforo.io</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Grid */}
        <section className="text-left w-full space-y-8">
          <h2 className="text-2xl font-semibold text-[#00ff88]">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#00ff88] mb-2">Languages</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• HTML/CSS</li>
                <li>• JavaScript/TypeScript</li>
                <li>• Java</li>
                <li>• C++</li>
                <li>• Python</li>
              </ul>
            </div>
            <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#00ff88] mb-2">Game Development</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• Game Engine Architecture</li>
                <li>• Voxel Rendering</li>
                <li>• Physics Systems</li>
                <li>• Multiplayer Networking</li>
                <li>• Procedural Generation</li>
              </ul>
            </div>
            <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#00ff88] mb-2">Web Development</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• Full-Stack (Next.js, Node.js)</li>
                <li>• RESTful APIs</li>
                <li>• Database Design (PostgreSQL)</li>
                <li>• WebSockets</li>
                <li>• DevOps (Docker, CI/CD)</li>
              </ul>
            </div>
            <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#00ff88] mb-2">Tools & Platforms</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• Git & GitHub</li>
                <li>• Docker</li>
                <li>• AWS/DigitalOcean</li>
                <li>• Blender/GIMP</li>
                <li>• IntelliJ/VS Code</li>
              </ul>
            </div>
            <div className="bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg p-4">
              <h3 className="font-semibold text-[#00ff88] mb-2">Other Expertise</h3>
              <ul className="text-zinc-300 space-y-1 text-sm">
                <li>• Technical Writing</li>
                <li>• Community Building</li>
                <li>• Project Management</li>
                <li>• UI/UX Design</li>
                <li>• Audio Programming</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Resume & Contact */}
        <section className="text-left w-full space-y-8">
          <h2 className="text-2xl font-semibold text-[#00ff88]">Connect & Resume</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            {/* Resume Download */}
            <div className="flex-1 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg p-6">
              <h3 className="font-semibold text-[#00ff88] mb-4">Resume/CV</h3>
              <p className="text-zinc-300 mb-4">
                Download my detailed resume to learn more about my professional experience and projects.
              </p>
              <a 
                href="#"
                className="inline-block px-6 py-3 bg-[#00ff88]/20 hover:bg-[#00ff88]/30 rounded-full border border-[#00ff88]/50 transition-all duration-500 text-sm font-medium hover:text-[#00ff88] hover:shadow-[0_0_10px_rgba(0,255,136,0.5)] group"
              >
                <span className="relative z-0">Download PDF</span>
                <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex-1 space-y-4">
              <h3 className="font-semibold text-[#00ff88] mb-4">Let's Connect</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/andrewgroves" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg hover:bg-[#00ff88]/20 transition-all duration-500 group"
                >
                  <span className="relative z-0 text-[#00ff88]">GitHub</span>
                  <span className="relative z-0 text-zinc-300 ml-2">andrewgroves</span>
                  <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
                </a>
                <a 
                  href="https://linkedin.com/in/andrewgroves" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg hover:bg-[#00ff88]/20 transition-all duration-500 group"
                >
                  <span className="relative z-0 text-[#00ff88]">LinkedIn</span>
                  <span className="relative z-0 text-zinc-300 ml-2">andrewgroves</span>
                  <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
                </a>
                <a 
                  href="https://discord.gg/xelforo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg hover:bg-[#00ff88]/20 transition-all duration-500 group"
                >
                  <span className="relative z-0 text-[#00ff88]">Discord</span>
                  <span className="relative z-0 text-zinc-300 ml-2">Xelforo Community</span>
                  <div className="absolute inset-0 bg-[#00ff88]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-full"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}