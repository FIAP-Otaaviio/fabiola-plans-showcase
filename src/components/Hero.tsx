import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})` 
        }}
      />
      {/* Camada escura por cima */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Fabíola Corretora
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 animate-fade-in-delay-1">
            Seu cuidado com a saúde é nossa prioridade. Encontre o plano ideal para você e sua família com assessoria especializada e humanizada.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Button 
              size="lg" 
              variant="secondary"
              className="font-semibold"
              onClick={() => scrollToSection("contato")}
            >
              Solicitar Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold"
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
