import { Shield, Heart, Cross, Activity, Plus, Stethoscope } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Unimed", icon: Plus, color: "text-green-600" },
  { name: "Bradesco Saúde", icon: Shield, color: "text-red-600" },
  { name: "Amil", icon: Heart, color: "text-blue-600" },
  { name: "SulAmérica", icon: Activity, color: "text-orange-600" },
  { name: "NotreDame Intermédica", icon: Cross, color: "text-purple-600" },
  { name: "Hapvida", icon: Stethoscope, color: "text-emerald-600" },
];

export const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const element = scrollRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calcula o progresso quando o elemento está visível
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrolled = (windowHeight - elementTop) / (windowHeight + elementHeight);
        const progress = Math.max(0, Math.min(1, scrolled));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Duplica os parceiros para criar o efeito de loop infinito
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Operadoras Parceiras
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-1">
            Trabalhamos com as melhores operadoras do mercado
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="relative">
        <div 
          className="flex gap-8 transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateX(-${scrollProgress * 50}%)`,
          }}
        >
          {duplicatedPartners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-64 flex flex-col items-center justify-center p-8 glass-card rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <div className={`text-6xl mb-4 ${partner.color} transition-transform duration-300 hover:scale-110`}>
                  <Icon className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <p className="text-base font-bold text-card-foreground text-center">
                  {partner.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
