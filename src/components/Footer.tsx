import { Heart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const mensagem =
      "Olá! Gostaria de saber mais sobre os planos de saúde da Realizadora.";
    window.open(
      `https://wa.me/5511947451553?text=${encodeURIComponent(mensagem)}`,
      "_blank",
    );
  };
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Realizadora</h3>
            <p className="text-primary-foreground/90 text-sm">
              Corretora especializada em planos de saúde com atendimento
              humanizado e personalizado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("sobre")}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("servicos")}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Nossos Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("depoimentos")}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Cases de Sucesso
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("faq")}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Dúvidas Frequentes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contato")}
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/90 text-sm">
              <li className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors cursor-pointer"
                >
                  (11) 94745-1553
                </button>
              </li>
              <li>realizadora01@gmail.com</li>
              <li className="pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors cursor-pointer"
                >
                  WhatsApp
                </button>
              </li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informações Legais</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/politica-privacidade"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li className="text-primary-foreground/70 text-xs">
                CNPJ: 28377003000168
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center space-y-3">
            <p className="text-primary-foreground/90 flex items-center justify-center gap-2 text-sm">
              Feito com <Heart className="h-4 w-4 fill-current" /> para cuidar
              da sua saúde
            </p>

            <div className="text-xs text-primary-foreground/70 space-y-1">
              <p>Realizadora Assesssoria de Negócios LTDA</p>
            </div>

            <p className="text-primary-foreground/60 text-xs pt-2">
              © {new Date().getFullYear()} Realizadora. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
