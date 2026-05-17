import Link from "next/link";

const categories = [
  { name: 'Retro Consoles', icon: '🕹️', count: 45, href: '#consoles' },
  { name: 'Games', icon: '🎮', count: 320, href: '#games' },
  { name: 'Accessories', icon: '🎧', count: 180, href: '#accessories' },
  { name: 'Developer Gear', icon: '⌨️', count: 65, href: '#gear' },
  { name: 'Collectibles', icon: '🏆', count: 90, href: '#collectibles' },
  { name: 'Xelforo Merch', icon: '👕', count: 12, href: '#merch' },
];

const featuredProducts = [
  { name: 'Nintendo NES Classic Edition', price: 89.99, originalPrice: 129.99, image: '🎮', badge: 'Best Seller', rating: 4.8 },
  { name: 'Super Nintendo SNES Classic', price: 79.99, originalPrice: 99.99, image: '🕹️', badge: 'Sale', rating: 4.7 },
  { name: 'Sega Genesis Mini 2', price: 69.99, originalPrice: null, image: '🎯', badge: null, rating: 4.6 },
  { name: 'PlayStation 1 Classic', price: 59.99, originalPrice: 79.99, image: '💿', badge: 'Sale', rating: 4.5 },
  { name: 'Nintendo 64 Console (Refurbished)', price: 149.99, originalPrice: null, image: '🎲', badge: 'Rare', rating: 4.9 },
  { name: 'Mechanical Keyboard — Retro Edition', price: 129.99, originalPrice: 159.99, image: '⌨️', badge: 'Popular', rating: 4.8 },
  { name: 'Gaming Mouse — Pixel Art Series', price: 49.99, originalPrice: null, image: '🖱️', badge: null, rating: 4.4 },
  { name: 'Xelforo Beta T-Shirt', price: 24.99, originalPrice: null, image: '👕', badge: 'New', rating: 5.0 },
];

export default function Shop() {
  return (
    <div className="relative flex flex-col bg-black">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,255,136,0.06)_0%,_transparent_60%)]"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Xelforo <span className="text-[#00ff88]">Shop</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Retro gaming consoles, popular titles, accessories, developer gear, and exclusive Xelforo merchandise. All products ship directly to you.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group bg-[#111] border border-[#00ff88]/10 rounded-xl p-5 text-center hover:border-[#00ff88]/30 hover:bg-[#00ff88]/5 transition-all duration-500">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-sm font-medium text-white group-hover:text-[#00ff88] transition-colors">{cat.name}</div>
                <div className="text-xs text-zinc-500 mt-1">{cat.count} items</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Products</h2>
            <Link href="#" className="text-sm text-[#00ff88] hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.name} className="group bg-[#111] border border-[#00ff88]/10 rounded-xl overflow-hidden hover:border-[#00ff88]/30 transition-all duration-500 hover:-translate-y-1">
                {/* Image placeholder */}
                <div className="h-40 bg-[#0a0a0a] flex items-center justify-center text-5xl relative">
                  {product.image}
                  {product.badge && (
                    <span className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full ${
                      product.badge === 'Sale' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                      product.badge === 'New' ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30' :
                      product.badge === 'Rare' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      'bg-white/10 text-white border border-white/20'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-white mb-2 group-hover:text-[#00ff88] transition-colors line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00ff88] font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-zinc-500 text-sm line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-xs text-zinc-400">{product.rating}</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-[#00ff88]/10 hover:bg-[#00ff88]/20 border border-[#00ff88]/20 hover:border-[#00ff88]/40 text-[#00ff88] text-sm font-medium rounded-lg transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-16 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111] border border-[#00ff88]/15 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">How Our Shop Works</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              We partner with trusted suppliers worldwide. When you place an order, we source the product from the best available price and ship it directly to you — no middlemen, no inventory overhead. You get great prices, and we earn a fair margin.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-2xl mb-2">🔍</div>
                <h4 className="text-sm font-semibold text-white mb-1">Best Prices</h4>
                <p className="text-xs text-zinc-500">We compare prices across multiple suppliers to get you the best deal.</p>
              </div>
              <div>
                <div className="text-2xl mb-2">📦</div>
                <h4 className="text-sm font-semibold text-white mb-1">Direct Shipping</h4>
                <p className="text-xs text-zinc-500">Products ship directly from the supplier to your door.</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🛡️</div>
                <h4 className="text-sm font-semibold text-white mb-1">Buyer Protection</h4>
                <p className="text-xs text-zinc-500">Full refund if your item doesn't arrive or isn't as described.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
