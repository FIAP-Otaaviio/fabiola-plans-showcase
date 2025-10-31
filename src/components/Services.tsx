import { Shield, Users, Briefcase, Baby, Plus, Heart, Cross, Activity, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Unimed", icon: Plus, color: "text-green-600" },
  { name: "Bradesco Saúde", icon: Shield, color: "text-red-600" },
  { name: "Amil", icon: Heart, color: "text-blue-600" },
  { name: "SulAmérica", icon: Activity, color: "text-orange-600" },
  { name: "NotreDame Intermédica", icon: Cross, color: "text-purple-600" },
  { name: "Hapvida", icon: Stethoscope, color: "text-emerald-600" },
];

const PartnersScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const element = scrollRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrolled = (windowHeight - elementTop) / (windowHeight + elementHeight);
        const progress = Math.max(0, Math.min(1, scrolled));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateScrollButtons = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 300;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    setTimeout(updateScrollButtons, 300);
  };

  useEffect(() => {
    updateScrollButtons();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div ref={scrollRef} className="relative py-8">
      {/* Botões de navegação - visíveis apenas no mobile */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 md:hidden bg-background/80 backdrop-blur-sm"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 md:hidden bg-background/80 backdrop-blur-sm"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Desktop: scroll com movimento da página */}
      <div className="hidden md:block overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateX(-${scrollProgress * 50}%)`,
          }}
        >
          {duplicatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-48 flex flex-col items-center justify-center p-6 glass-card rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className={`text-5xl mb-3 ${partner.color} transition-transform duration-300 hover:scale-110`}>
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-card-foreground text-center">
                  {partner.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: scroll manual com setas */}
      <div 
        ref={containerRef}
        className="md:hidden overflow-x-auto scrollbar-hide px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6">
          {duplicatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-48 flex flex-col items-center justify-center p-6 glass-card rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className={`text-5xl mb-3 ${partner.color} transition-transform duration-300 hover:scale-110`}>
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-bold text-card-foreground text-center">
                  {partner.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    icon: Shield,
    title: "Plano Individual",
    description: "Cobertura completa personalizada para suas necessidades de saúde.",
    features: ["Rede credenciada ampla", "Atendimento nacional", "Telemedicina incluída"]
  },
  {
    icon: Users,
    title: "Plano Familiar",
    description: "Proteção para toda a família com condições especiais.",
    features: ["Até 8 beneficiários", "Cobertura pediátrica", "Desconto progressivo"]
  },
  {
    icon: Briefcase,
    title: "Plano Empresarial",
    description: "Soluções corporativas para cuidar da saúde dos seus colaboradores.",
    features: ["A partir de 2 vidas", "Gestão simplificada", "Preços competitivos"]
  },
  {
    icon: Baby,
    title: "Plano Sênior",
    description: "Cuidado especializado para a terceira idade.",
    features: ["Sem carência", "Rede gerontológica", "Atendimento domiciliar"]
  }
];

export const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Entenda mais sobre os planos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay-1">
            Encontre o plano ideal para suas necessidades
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="p-6 glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-secondary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <plan.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {plan.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {plan.description}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <span className="text-secondary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full"
                variant="outline"
                onClick={scrollToContact}
              >
                Solicitar Cotação
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-card-foreground mb-4 text-center">
              Operadoras Parceiras
            </h3>
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Trabalhamos com as principais operadoras de saúde do Brasil, garantindo que você tenha acesso à melhor rede credenciada e aos serviços mais completos do mercado.
            </p>
            <PartnersScroll />
            <div className="text-center mt-8">
              <Button onClick={scrollToContact} size="lg">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
