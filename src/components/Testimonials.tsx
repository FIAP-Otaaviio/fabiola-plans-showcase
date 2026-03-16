import { Card } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cases = [
  {
    icon: TrendingUp,
    title: "Empresarial | Rede de Oticas Mais de 40 lojas",
    result: "Atendimento Continuo",
    description:
      "Implementamos plano empresarial para os colaboradores com cobertura nacional. A satisfação da empresa e da equipe aumentou significativamente de acordo com seu perfil.",
    metrics: "Plano Empresarial",
  },
  {
    icon: TrendingUp,
    title: "Empresarial | Rede de Restaurantes Mais de 50 lojas",
    result: "Atendimento Continuo",
    description:
      "Implementamos plano empresarial para os colaboradores com cobertura regional. A satisfação da empresa e da equipe aumentou significativamente.",
    metrics: "Plano Empresarial",
  },
  {
    icon: Users,
    title: "Adesão",
    result: "Economia de aproximadamente 30%",
    description:
      "Conseguimos migrar a família para um plano mais completo com 30% de redução de custo. Todos os membros agora têm acesso a uma rede credenciada ampliada.",
    metrics: "Entidade de Classe",
  },
  {
    icon: CheckCircle,
    title: "Pessoa Física",
    result: "Cobertura completa",
    description:
      "Encontramos um plano sênior ideal com coparticipação e acesso aos melhores hospitais da região.",
    metrics: "Plano Individual / Familiar",
  },
];

export const Testimonials = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="depoimentos"
      className="py-32 bg-gradient-to-b from-background to-muted/30"
    >
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
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full strong">
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
