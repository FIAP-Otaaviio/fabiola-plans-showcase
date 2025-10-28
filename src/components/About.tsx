import { Heart, Award, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a Fabíola
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Corretora de planos de saúde com compromisso de encontrar a melhor solução para sua tranquilidade e bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card border-border"
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
