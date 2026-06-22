import { useState } from "react";
import { ChevronRight, Star, Droplets, Leaf, Snowflake, Coffee } from "lucide-react";

const CATEGORIES = [
  { id: "semua", label: "Semua", icon: <Droplets size={15} /> },
  { id: "es-spesial", label: "Es Spesial", icon: <Snowflake size={15} /> },
  { id: "jus-buah", label: "Jus Buah", icon: <Leaf size={15} /> },
  { id: "minuman-dingin", label: "Minuman Dingin", icon: <Snowflake size={15} /> },
  { id: "minuman-panas", label: "Minuman Panas", icon: <Coffee size={15} /> },
];

const DRINKS = [
  {
    name: "Es Teler Spesial",
    desc: "Kelapa muda, alpukat, dan nangka dalam santan manis segar. Sajian legendaris rumah kami.",
    price: "Rp 15.000",
    tag: "Terlaris",
    category: "es-spesial",
    img: "https://images.unsplash.com/photo-1620752420341-4cd7642568dd?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Es Campur Cikutra",
    desc: "Campuran blewah, cincau, kolang-kaling, dan agar dalam sirup merah segar.",
    price: "Rp 12.000",
    tag: "Favorit",
    category: "es-spesial",
    img: "https://images.unsplash.com/photo-1676159434936-9c19c551d262?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Es Kelapa Muda",
    desc: "Kelapa muda segar langsung dari buahnya, manis alami dan menyegarkan.",
    price: "Rp 13.000",
    tag: null,
    category: "es-spesial",
    img: "https://images.unsplash.com/flagged/photo-1560505761-b46fb3d231bf?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Jus Alpukat",
    desc: "Alpukat matang pilihan diblender dengan susu dan cokelat. Creamy dan mengenyangkan.",
    price: "Rp 16.000",
    tag: "Favorit",
    category: "jus-buah",
    img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Jus Jeruk Segar",
    desc: "Perasan jeruk manis segar tanpa tambahan air — murni vitamin C untuk hari Anda.",
    price: "Rp 14.000",
    tag: null,
    category: "jus-buah",
    img: "https://images.unsplash.com/photo-1622597467821-df79dcb4f94d?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Jus Mix Tropis",
    desc: "Perpaduan mangga, nanas, dan jambu merah. Segar dan kaya antioksidan.",
    price: "Rp 15.000",
    tag: "Baru",
    category: "jus-buah",
    img: "https://images.unsplash.com/photo-1583577612013-4fecf7bf8f13?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Es Teh Manis",
    desc: "Teh hitam pekat diseduh panas, disajikan dingin dengan es batu. Klasik tak lekang waktu.",
    price: "Rp 5.000",
    tag: null,
    category: "minuman-dingin",
    img: "https://images.unsplash.com/photo-1470752354724-60a1d2b1907f?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Lemonade Mint Segar",
    desc: "Lemon segar, daun mint, dan sedikit madu. Menyegarkan di siang hari yang panas.",
    price: "Rp 13.000",
    tag: "Baru",
    category: "minuman-dingin",
    img: "https://images.unsplash.com/photo-1555949366-819808d99159?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Es Jeruk Peras",
    desc: "Jeruk nipis dan jeruk manis diperas langsung, es batu, dan sejumput garam.",
    price: "Rp 10.000",
    tag: null,
    category: "minuman-dingin",
    img: "https://images.unsplash.com/photo-1695490454828-f8df9109da43?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Kopi Tubruk",
    desc: "Kopi robusta Jawa diseduh langsung, aroma kuat dan rasa penuh. Teman makan pagi.",
    price: "Rp 8.000",
    tag: null,
    category: "minuman-panas",
    img: "https://images.unsplash.com/photo-1529173333429-fc38bc270da0?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Teh Hangat Jahe",
    desc: "Teh hitam hangat dengan irisan jahe bakar. Menghangatkan dan melegakan tenggorokan.",
    price: "Rp 7.000",
    tag: null,
    category: "minuman-panas",
    img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Bajigur Bandung",
    desc: "Minuman khas Sunda dari santan, gula aren, dan jahe. Hangat dan legendaris.",
    price: "Rp 10.000",
    tag: "Khas",
    category: "minuman-panas",
    img: "https://images.unsplash.com/photo-1676159434936-9c19c551d262?w=600&h=500&fit=crop&auto=format",
  },
];

const HIGHLIGHTS = [
  { icon: "🍃", label: "100% Fresh", desc: "Dibuat segar tiap hari" },
  { icon: "🧊", label: "Es Batu Bersih", desc: "Es higienis & tersaring" },
  { icon: "🚫", label: "Tanpa Pengawet", desc: "Alami & menyehatkan" },
  { icon: "🌿", label: "Buah Pilihan", desc: "Langsung dari pasar segar" },
];

export default function Minuman() {
  const [activeCategory, setActiveCategory] = useState("semua");

  const filtered =
    activeCategory === "semua"
      ? DRINKS
      : DRINKS.filter((d) => d.category === activeCategory);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-stone-800">
          <img
            src="https://images.unsplash.com/photo-1676159434936-9c19c551d262?w=1800&h=800&fit=crop&auto=format"
            alt="Berbagai minuman segar Rumah Makan Cikutra Raya"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a03]/80 via-[#1a0a03]/50 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span
            className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ letterSpacing: "0.15em" }}
          >
            ✦ Minuman Segar Pilihan ✦
          </span>
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Minuman &{" "}
            <span className="text-accent italic">Minuman Segar</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto leading-relaxed">
            Dari es teler legendaris hingga jus buah tropis segar —
            setiap tegukan dibuat dengan buah pilihan terbaik.
          </p>
        </div>
      </section>

      {/* ─── Highlights ─── */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <div className="font-semibold text-foreground text-sm">{h.label}</div>
                  <div className="text-muted-foreground text-xs">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Menu ─── */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase block mb-4" style={{ letterSpacing: "0.15em" }}>
              Menu Minuman
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pilih <span className="italic text-primary">Minuman Favorit</span> Anda
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {DRINKS.length} pilihan minuman segar — dari es spesial khas Cikutra hingga kopi dan minuman hangat
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-center text-muted-foreground text-sm mb-8">
            Menampilkan <strong className="text-foreground">{filtered.length}</strong> minuman
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.name}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 bg-stone-200 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span
                      className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-full ${
                        item.tag === "Baru" ? "bg-accent" : "bg-primary"
                      }`}
                    >
                      {item.tag}
                    </span>
                  )}
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full capitalize">
                    {CATEGORIES.find((c) => c.id === item.category)?.label}
                  </span>
                </div>
                <div className="p-5">
                  <h3
                    className="font-semibold text-foreground text-lg mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.price}
                    </span>
                    <a
                      href={`https://wa.me/6281234567890?text=Halo, saya ingin memesan ${item.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary border border-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      Pesan
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Promo Minuman ─── */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="h-64 lg:h-auto bg-stone-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583577612013-4fecf7bf8f13?w=800&h=600&fit=crop&auto=format"
                  alt="Paket minuman segar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block bg-accent/15 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-5 self-start">
                  🥤 Promo Minuman
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Beli 2 Jus, Gratis 1 Es Teh Manis!
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pesan 2 gelas jus buah pilihan apapun dan dapatkan 1 es teh manis gratis.
                  Berlaku setiap hari untuk pembelian di tempat maupun takeaway.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/6281234567890?text=Halo, saya mau klaim promo beli 2 jus gratis es teh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Klaim via WhatsApp <ChevronRight size={15} />
                  </a>
                  <span className="inline-flex items-center text-muted-foreground text-sm">
                    Berlaku setiap hari ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimoni Minuman ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Yang Pelanggan Bilang tentang{" "}
              <span className="italic text-primary">Minuman Kami</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rina Fitriani",
                avatar: "RF",
                rating: 5,
                text: "Es telernya enak banget! Porsinya besar, harganya terjangkau. Cocok banget diminum setelah makan rendang yang pedas.",
              },
              {
                name: "Hendra Kurniawan",
                avatar: "HK",
                rating: 5,
                text: "Jus alpukatnya kental dan manis pas, tidak terlalu manis. Jadi favorit saya tiap mampir ke sini. Recommended!",
              },
              {
                name: "Maya Sari",
                avatar: "MS",
                rating: 5,
                text: "Bajigur Bandungnya autentik banget! Jarang ada rumah makan yang masih jual bajigur. Wajib dicoba kalau kesini!",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-7 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-5 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-[#1a0a03]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-white text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Siap Pesan Minuman Segar?
          </h2>
          <p className="text-stone-400 mb-8">
            Hubungi kami via WhatsApp untuk pesan langsung atau tanyakan menu hari ini.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo, saya ingin memesan minuman dari Cikutra Raya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-base hover:bg-[#1da855] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
