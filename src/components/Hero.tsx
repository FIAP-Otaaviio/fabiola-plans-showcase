import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-scale-in"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      {/* Camada escura por cima */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-7 animate-fade-in leading-tight">
            Realizadora Planos de Saúde
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 animate-fade-in-delay-1 leading-relaxed">
            Seu cuidado com a saúde é nossa prioridade. Encontre o plano ideal
            para você e sua família com assessoria especializada e humanizada.
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
    </section>
  );
};
