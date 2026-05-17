import Link from "next/link";

const forumCategories = [
  { name: 'General Discussion', icon: '💬', description: 'Chat about anything related to game development and Xelforo.', threads: 128, posts: 1024 },
  { name: 'Game Development', icon: '🎮', description: 'Share your projects, ask for help, and discuss game dev topics.', threads: 256, posts: 2340 },
  { name: 'Xelforo', icon: '🌍', description: 'Discuss the Xelforo game, report bugs, and suggest features.', threads: 89, posts: 756 },
  { name: 'BunkerRun', icon: '🔫', description: 'Talk about BunkerRun, share strategies, and report issues.', threads: 45, posts: 312 },
  { name: 'Show & Tell', icon: '🎨', description: 'Show off your projects, games, art, and creations.', threads: 167, posts: 1450 },
  { name: 'Code Review', icon: '🔍', description: 'Get feedback on your code from fellow developers.', threads: 92, posts: 680 },
  { name: 'Collaboration', icon: '🤝', description: 'Find team members for your next project.', threads: 34, posts: 245 },
  { name: 'Tutorials & Resources', icon: '📚', description: 'Share and discover helpful tutorials and resources.', threads: 78, posts: 520 },
];

const recentThreads = [
  { title: 'How I built a voxel engine from scratch in C++', author: 'Andrew Groves', category: 'Game Development', replies: 24, views: 456, time: '2 hours ago' },
  { title: 'Xelforo Beta Build 0.4.2 — Patch Notes', author: 'Andrew Groves', category: 'Xelforo', replies: 18, views: 312, time: '5 hours ago' },
  { title: 'Show off your game dev setup!', author: 'DevMaster42', category: 'Show & Tell', replies: 45, views: 890, time: '1 day ago' },
  { title: 'Need help with LWJGL texture loading', author: 'CodeNewbie', category: 'Code Review', replies: 8, views: 124, time: '1 day ago' },
  { title: 'Looking for a pixel artist for my RPG project', author: 'PixelPusher', category: 'Collaboration', replies: 12, views: 234, time: '2 days ago' },
];

export default function Community() {
  return (
    <div className="relative flex flex-col bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,255,136,0.06)_0%,_transparent_60%)]"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Developer <span className="text-[#4a9eff]">Community</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto mb-8">
            Connect with fellow developers. Share projects, get feedback, find collaborators, and grow together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://discord.gg/xelforo" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#4a9eff]/15 hover:bg-[#4a9eff]/25 border border-[#4a9eff]/40 hover:border-[#4a9eff]/70 text-[#4a9eff] font-semibold rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]">
              💬 Join Discord
            </a>
            <Link href="#forums" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-500">
              🌐 Browse Forums
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-[#08080c]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Members', value: '2,400+' },
            { label: 'Threads', value: '890+' },
            { label: 'Posts', value: '7,300+' },
            { label: 'Online Now', value: '142' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#4a9eff]">{stat.value}</div>
              <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Forum Categories */}
      <section id="forums" className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Forum Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {forumCategories.map((cat) => (
              <Link key={cat.name} href="#" className="group bg-[#111] border border-[#4a9eff]/10 rounded-xl p-5 hover:border-[#4a9eff]/30 hover:bg-[#4a9eff]/5 transition-all duration-500 flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{cat.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white group-hover:text-[#4a9eff] transition-colors mb-1">{cat.name}</h3>
                  <p className="text-xs text-zinc-400 mb-2">{cat.description}</p>
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span>{cat.threads} threads</span>
                    <span>•</span>
                    <span>{cat.posts} posts</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Threads */}
      <section className="py-16 px-6 bg-[#08080c]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Recent Discussions</h2>
            <Link href="#" className="text-sm text-[#4a9eff] hover:underline">View All →</Link>
          </div>
          <div className="space-y-3">
            {recentThreads.map((thread) => (
              <Link key={thread.title} href="#" className="group block bg-[#111] border border-[#4a9eff]/10 rounded-xl p-5 hover:border-[#4a9eff]/25 hover:bg-[#4a9eff]/5 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#4a9eff] transition-colors mb-1 truncate">{thread.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                      <span className="text-[#4a9eff]">{thread.author}</span>
                      <span>•</span>
                      <span>{thread.category}</span>
                      <span>•</span>
                      <span>{thread.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-zinc-500 flex-shrink-0">
                    <span>{thread.replies} replies</span>
                    <span>{thread.views} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
          <p className="text-zinc-400 mb-8">
            Create an account to post in forums, comment on tutorials, and connect with other developers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3.5 bg-[#4a9eff]/15 hover:bg-[#4a9eff]/25 border border-[#4a9eff]/40 hover:border-[#4a9eff]/70 text-[#4a9eff] font-semibold rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,136,0.15)]">
              Create Account
            </button>
            <button className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-500">
              Sign In
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
