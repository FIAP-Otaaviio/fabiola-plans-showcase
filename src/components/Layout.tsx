import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { WelcomeModal } from "@/components/WelcomeModal";

const saudeMenuItems = [
  { label: "Início", id: "inicio" },
  { label: "Sobre", id: "sobre" },
  { label: "Planos", id: "servicos" },
  { label: "Cases", id: "depoimentos" },
  { label: "Contato", id: "contato" },
];

interface LayoutProps {
  children: React.ReactNode;
  environment: "saude" | "imoveis";
}

export const Layout = ({ children, environment }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const scrollToSection = (id: string) => {
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
      {/* Top bar - floating */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6 pointer-events-none">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black text-foreground hover:opacity-80 transition-opacity pointer-events-auto"
        >
          REALIZADORA
        </Link>

        {/* Environment switcher */}
        <nav className="flex items-center gap-2 ml-12 pointer-events-auto">
          <Link
            to="/"
            className={`text-lg font-semibold transition-colors ${
              environment === "saude"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Saúde
          </Link>
          <span className="text-muted-foreground text-lg">|</span>
          <Link
            to="/imoveis"
            className={`text-lg font-semibold transition-colors ${
              environment === "imoveis"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Imóveis
          </Link>
        </nav>
      </header>

      {/* Sidebar menu - floating overlay */}
      <div className="fixed top-20 left-6 z-40 pointer-events-auto">
        <nav className="flex flex-col gap-1">
          {environment === "saude" ? (
            saudeMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors text-left px-2 py-1.5"
              >
                {item.label}
              </button>
            ))
          ) : (
            <p className="text-sm text-muted-foreground px-2 py-1.5">
              Em breve...
            </p>
          )}
        </nav>
      </div>

      {/* Content */}
      <main>
        {children}
      </main>

      <WelcomeModal open={showModal} onChoice={handleModalChoice} />
    </div>
  );
};