import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Info, HeartPulse, MessageSquareQuote, Phone, Building2, Menu, X } from "lucide-react";
import { WelcomeModal } from "@/components/WelcomeModal";

const saudeMenuItems = [
  { label: "Início", id: "inicio", icon: Home },
  { label: "Sobre", id: "sobre", icon: Info },
  { label: "Planos", id: "servicos", icon: HeartPulse },
  { label: "Cases", id: "depoimentos", icon: MessageSquareQuote },
  { label: "Contato", id: "contato", icon: Phone },
];

interface LayoutProps {
  children: React.ReactNode;
  environment: "saude" | "imoveis";
}

export const Layout = ({ children, environment }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleModalChoice = (choice: "saude" | "imoveis") => {
    setShowModal(false);
    if (choice === "imoveis") {
      navigate("/imoveis");
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-card/95 backdrop-blur-sm border-b border-border flex items-center px-4">
        {/* Floating menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mr-3 p-2 rounded-md hover:bg-muted transition-colors text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          REALIZADORA
        </Link>

        {/* Environment switcher */}
        <nav className="flex items-center gap-1 ml-auto">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              environment === "saude"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            Saúde
          </Link>
          <Link
            to="/imoveis"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              environment === "imoveis"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            Imóveis
          </Link>
        </nav>
      </header>

      {/* Floating sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Floating sidebar menu */}
      <div
        className={`fixed top-16 left-4 z-50 w-56 bg-card/95 backdrop-blur-md rounded-xl shadow-xl border border-border transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }`}
      >
        <div className="p-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
            {environment === "saude" ? "Saúde" : "Imóveis"}
          </p>
          <nav className="flex flex-col gap-1">
            {environment === "saude" ? (
              saudeMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors text-left"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </button>
              ))
            ) : (
              <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Em breve...
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Content */}
      <main className="pt-14">
        {children}
      </main>

      <WelcomeModal open={showModal} onChoice={handleModalChoice} />
    </div>
  );
};
