import { Heart, Award, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado para cada cliente, entendendo suas necessidades específicas."
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description: "Anos de experiência no mercado de saúde, com centenas de famílias atendidas."
  },
  {
    icon: Users,
    title: "Parceria de Confiança",
    description: "Relacionamento duradouro com as principais operadoras do mercado."
  },
  {
    icon: Clock,
    title: "Suporte Contínuo",
    description: "Atendimento ágil e suporte completo em todas as etapas do seu plano."
  }
];

export const About = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Por que escolher a Realizadora?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay-1">
            Comprometimento com sua saúde e bem-estar
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 glass-card hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
