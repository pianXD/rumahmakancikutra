import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Menu, X, Instagram, Facebook, UtensilsCrossed, GlassWater } from "lucide-react";

const NAV_LINKS = [
  { label: "Beranda", to: "/", section: "beranda" },
  { label: "Tentang", to: "/", section: "tentang" },
  { label: "Menu Makan", to: "/", section: "menu" },
  { label: "Minuman", to: "/minuman", section: null },
  { label: "Promo", to: "/", section: "promo" },
  { label: "Kontak", to: "/", section: "kontak" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (to: string, section: string | null) => {
    setMenuOpen(false);
    if (section) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ─── Navbar ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNav("/", "beranda")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>R</span>
            </div>
            <span
              className="text-foreground font-semibold text-sm hidden sm:block"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cikutra Raya
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === "/minuman"
                  ? location.pathname === "/minuman"
                  : location.pathname === "/" && !link.section
                    ? false
                    : true;
              const activePage = link.to === "/minuman" && location.pathname === "/minuman";
              return (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.to, link.section)}
                  className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    activePage
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label === "Minuman" && <GlassWater size={14} />}
                  {link.label === "Menu Makan" && <UtensilsCrossed size={14} />}
                  {link.label}
                </button>
              );
            })}
          </nav>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Pesan Sekarang
          </a>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.to, link.section)}
                className={`text-left text-sm font-medium flex items-center gap-2 transition-colors ${
                  (link.to === "/minuman" && location.pathname === "/minuman")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label === "Minuman" && <GlassWater size={14} />}
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-semibold"
            >
              Pesan via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* ─── Page content ─── */}
      <Outlet />

      {/* ─── Footer ─── */}
      <footer className="bg-[#1a0a03] text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3
                className="text-white text-xl font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Rumah Makan Cikutra Raya
              </h3>
              <p className="text-stone-500 text-sm">Cita rasa rumahan sejak 1998 · Halal · Fresh Daily</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.to, link.section)}
                  className="text-stone-500 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-stone-600 text-xs">
            © 2024 Rumah Makan Cikutra Raya. Hak cipta dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
