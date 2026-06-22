import { ChevronRight, MapPin, Phone, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router";

const MENU_ITEMS = [
  {
    name: "Rendang Sapi",
    desc: "Daging sapi empuk dimasak dengan rempah pilihan khas Padang",
    price: "Rp 28.000",
    tag: "Terlaris",
    img: "https://images.unsplash.com/photo-1606143704849-eb181ba1543a?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Ayam Bakar Madu",
    desc: "Ayam segar dipanggang dengan bumbu madu dan kecap manis",
    price: "Rp 25.000",
    tag: "Favorit",
    img: "https://images.unsplash.com/photo-1645066803665-d16a79a21566?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Gulai Kambing",
    desc: "Gulai kambing bertekstur lembut dalam kuah santan kaya rempah",
    price: "Rp 32.000",
    tag: null,
    img: "https://images.unsplash.com/photo-1681378128359-a5c2492a3535?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Nasi Padang Lengkap",
    desc: "Nasi putih pulen dengan lauk pilihan khas Minangkabau",
    price: "Rp 35.000",
    tag: "Paket",
    img: "https://images.unsplash.com/photo-1677921755291-c39158477b8e?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Ayam Goreng Rempah",
    desc: "Ayam goreng dengan bumbu rempah yang meresap sempurna",
    price: "Rp 22.000",
    tag: null,
    img: "https://images.unsplash.com/photo-1624957389019-0c814505746d?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Soto Ayam",
    desc: "Soto bening kunyit dengan potongan ayam kampung dan bihun",
    price: "Rp 18.000",
    tag: null,
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Sambal Ijo Hijau",
    desc: "Sambal cabe hijau segar dengan ikan asin dan tempe goreng",
    price: "Rp 20.000",
    tag: "Pedas",
    img: "https://images.unsplash.com/photo-1666239308347-4292ea2ff777?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Ikan Bakar Bumbu",
    desc: "Ikan segar pilihan dipanggang dengan bumbu khas Cikutra",
    price: "Rp 30.000",
    tag: null,
    img: "https://images.unsplash.com/photo-1630315500315-43112e2bfd88?w=600&h=500&fit=crop&auto=format",
  },
  {
    name: "Nasi Campur Spesial",
    desc: "Perpaduan nasi dengan beragam lauk pilihan terbaik dapur kami",
    price: "Rp 27.000",
    tag: "Spesial",
    img: "https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?w=600&h=500&fit=crop&auto=format",
  },
];

const TESTIMONIALS = [
  {
    name: "Dewi Rahayu",
    role: "Pelanggan Setia",
    text: "Rendangnya beneran kayak masakan ibu sendiri. Sudah 3 tahun langganan dan rasanya selalu konsisten. Tempat nyaman, pelayanan ramah!",
    rating: 5,
    avatar: "DR",
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Kantoran",
    text: "Tempat makan siang favorit saya dan rekan-rekan. Porsi besar, harga bersahabat. Gulai kambingnya juara banget!",
    rating: 5,
    avatar: "BS",
  },
  {
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga",
    text: "Masakannya fresh setiap hari, bisa dirasain dari aromanya yang harum. Anakku yang susah makan jadi doyan sini. Highly recommended!",
    rating: 5,
    avatar: "SA",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const goToMinuman = () => {
    navigate("/minuman");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <section id="beranda" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-stone-800">
          <img
            src="https://images.unsplash.com/photo-1658218615127-40b7068bbae5?w=1800&h=1200&fit=crop&auto=format"
            alt="Hidangan khas Rumah Makan Cikutra Raya"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a03]/85 via-[#1a0a03]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-xl">
            <span
              className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ letterSpacing: "0.15em" }}
            >
              ✦ Masakan Rumahan Sejak 1998 ✦
            </span>
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rumah Makan<br />
              <span className="text-accent italic">Cikutra Raya</span>
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-10">
              Cita rasa rumahan, hangat seperti di rumah sendiri.
              Dimasak segar setiap hari dengan rempah pilihan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-primary/90 transition-all hover:gap-3"
              >
                Lihat Menu <ChevronRight size={18} />
              </button>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-white/25 transition-all"
              >
                <WhatsAppIcon />
                Pesan via WhatsApp
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8 border-t border-white/20 pt-8">
              {[
                { num: "25+", label: "Tahun Berpengalaman" },
                { num: "50+", label: "Menu Pilihan" },
                { num: "1000+", label: "Pelanggan Puas" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-accent text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-stone-400 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-8 bg-white/40 mx-auto" />
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="tentang" className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase block mb-4" style={{ letterSpacing: "0.15em" }}>
                Tentang Kami
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Kehangatan Dapur Keluarga,<br />
                <span className="italic text-primary">Kini Hadir untuk Anda</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Berdiri sejak 1998, Rumah Makan Cikutra Raya hadir membawa cita rasa masakan
                rumahan yang otentik ke meja makan Anda. Didirikan oleh Keluarga Haji Sudirman,
                kami meneruskan tradisi memasak dengan rempah segar pilihan setiap harinya.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10 text-base">
                Semua menu kami dimasak fresh setiap hari sejak pagi. Kami bangga menjaga
                kepercayaan pelanggan dengan menyajikan hidangan halal, bersih, dan penuh
                kasih sayang — persis seperti masakan di rumah sendiri.
              </p>
              <div className="flex flex-wrap gap-3">
                {["✓ Halal Certified", "✓ Fresh Daily", "✓ No MSG", "✓ Keluarga Friendly"].map((b) => (
                  <span
                    key={b}
                    className="bg-card border border-border text-foreground text-sm px-4 py-1.5 rounded-full font-medium"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-2xl overflow-hidden bg-stone-200 h-56 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1682139710677-cb02f6bc4211?w=900&h=500&fit=crop&auto=format"
                  alt="Suasana makan di Rumah Makan Cikutra Raya"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-stone-200 h-44">
                <img
                  src="https://images.unsplash.com/photo-1588416820614-f8d6ac6cea56?w=500&h=400&fit=crop&auto=format"
                  alt="Dapur Rumah Makan Cikutra Raya"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-stone-200 h-44">
                <img
                  src="https://images.unsplash.com/photo-1622140739492-f82f386260b5?w=500&h=400&fit=crop&auto=format"
                  alt="Interior restoran"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Menu ─── */}
      <section id="menu" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase block mb-4" style={{ letterSpacing: "0.15em" }}>
              Menu Kami
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pilihan Masakan <span className="italic text-primary">Terbaik</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Dimasak segar setiap hari dengan bahan-bahan pilihan dan rempah asli nusantara
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item) => (
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
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}
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

          {/* Drinks CTA */}
          <div className="mt-10 p-6 bg-secondary rounded-2xl border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Cari minuman segar untuk menemani makan?
              </p>
              <p className="text-muted-foreground text-sm">Es teler, jus buah, es teh, dan masih banyak lagi.</p>
            </div>
            <button
              onClick={goToMinuman}
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Lihat Menu Minuman <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Promo ─── */}
      <section id="promo" className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1666239308345-c4c12ef3e177?w=1200&h=400&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-white/5" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <div className="inline-block bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
                🔥 Promo Mingguan
              </div>
              <h2
                className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Paket Hemat Makan Siang
              </h2>
              <p className="text-white/80 text-base max-w-md">
                Nasi + 2 Lauk + Sayur + Es Teh Manis hanya{" "}
                <span className="font-bold text-white text-lg">Rp 30.000</span>.
                Berlaku Senin–Jumat, pukul 11.00–14.00 WIB.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center min-w-[140px]">
                <div
                  className="text-white text-4xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  30K
                </div>
                <div className="text-white/70 text-xs mt-1">per paket</div>
                <div className="text-white/50 text-xs line-through mt-0.5">Rp 45.000</div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://wa.me/6281234567890?text=Halo, saya mau pesan Paket Hemat Makan Siang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-secondary transition-colors text-sm whitespace-nowrap"
                >
                  Klaim Promo Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase block mb-4" style={{ letterSpacing: "0.15em" }}>
              Testimoni
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kata Mereka tentang <span className="italic text-primary">Kami</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-2xl p-7 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="kontak" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase block mb-4" style={{ letterSpacing: "0.15em" }}>
                Lokasi & Kontak
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Temukan Kami,<br />
                <span className="italic text-primary">Makan Bersama Kami</span>
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Kami berlokasi di pusat Kota Bandung, mudah dijangkau dari mana saja.
                Datang langsung atau pesan via WhatsApp untuk layanan delivery dan takeaway.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin className="text-primary shrink-0" size={20} />,
                    label: "Alamat",
                    value: "Jl. Cikutra Raya No. 88, Cibeunying Kidul, Bandung 40124",
                  },
                  {
                    icon: <Phone className="text-primary shrink-0" size={20} />,
                    label: "Telepon / WhatsApp",
                    value: "+62 812-3456-7890",
                  },
                  {
                    icon: <Clock className="text-primary shrink-0" size={20} />,
                    label: "Jam Buka",
                    value: "Senin – Minggu: 07.00 – 21.00 WIB",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</div>
                      <div className="text-foreground text-sm font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md h-72 bg-stone-200 relative">
                <iframe
                  title="Lokasi Rumah Makan Cikutra Raya"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6!2d107.63!3d-6.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnMjAuMCJTIDEwN8KwMzcnNDguMCJF!5e0!3m2!1sen!2sid!4v1000000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <a
                href="https://wa.me/6281234567890?text=Halo Rumah Makan Cikutra Raya, saya ingin memesan makanan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl py-5 font-bold text-lg hover:bg-[#1da855] transition-colors shadow-lg shadow-green-200"
              >
                <WhatsAppIcon />
                Pesan via WhatsApp Sekarang
              </a>

              <p className="text-center text-muted-foreground text-sm">
                Kami biasanya membalas dalam <strong className="text-foreground">5 menit</strong> ✓
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
