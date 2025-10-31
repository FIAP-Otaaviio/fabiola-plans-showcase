import { Card } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cases = [
  {
    icon: Users,
    title: "Família Silva",
    result: "Economia de 30%",
    description: "Conseguimos migrar a família Silva para um plano mais completo com 30% de economia mensal. Todos os membros agora têm acesso a uma rede credenciada ampliada.",
    metrics: "5 pessoas | Plano Familiar"
  },
  {
    icon: TrendingUp,
    title: "Empresa XYZ Tech",
    result: "100% de adesão",
    description: "Implementamos plano empresarial para 50 colaboradores com cobertura nacional. A satisfação da equipe aumentou significativamente.",
    metrics: "50 vidas | Plano Empresarial"
  },
  {
    icon: CheckCircle,
    title: "Maria Aposentada",
    result: "Cobertura completa",
    description: "Encontramos um plano sênior ideal com coparticipação reduzida e acesso aos melhores hospitais da região.",
    metrics: "Plano Individual Senior"
  }
];

export const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="depoimentos" className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay-1">
            Resultados reais que transformaram a saúde de nossos clientes
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card 
                key={index}
                className="p-8 glass-card hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm font-semibold rounded-full">
                    {caseItem.result}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {caseItem.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {caseItem.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary">
                    {caseItem.metrics}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
