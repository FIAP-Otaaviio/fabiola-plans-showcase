import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/img/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Camada escura por cima */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Vídeo - Mobile primeiro, Desktop direita */}
          <div className="w-full lg:w-1/2 order-first lg:order-last flex justify-center">
            <div className="w-full max-w-sm">
              <div
                className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qGpy2I7hoFg?autoplay=0&modestbranding=1"
                  title="Demo Realizadora"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Conteúdo (Texto e Botões) - Mobile segundo, Desktop esquerda */}
          <div className="w-full lg:w-1/2 order-last lg:order-first">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-7 animate-fade-in leading-tight">
                Realizadora Assessoria de Negócios
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in-delay-1 leading-relaxed">
                Seu cuidado com a saúde é nossa prioridade. Encontre o plano
                ideal para você e sua família com assessoria especializada e
                humanizada.
              </p>
              <div className="flex flex-wrap gap-6 animate-fade-in-delay-2">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold text-lg px-8 py-6 hover:scale-105 transition-transform"
                  onClick={() => scrollToSection("contato")}
                >
                  Solicitar Contato
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-8 py-6 hover:scale-105 transition-all"
                  onClick={() => scrollToSection("servicos")}
                >
                  Conheça os Planos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
