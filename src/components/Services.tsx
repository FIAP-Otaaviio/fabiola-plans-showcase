import { Shield, Users, Briefcase, Baby } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import servicesImage from "@/assets/services-image.jpg";

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
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos de Saúde
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as principais operadoras do mercado para oferecer o plano ideal para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
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
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-card-foreground mb-4">
                Operadoras Parceiras
              </h3>
              <p className="text-muted-foreground mb-6">
                Trabalhamos com as principais operadoras de saúde do Brasil, garantindo que você tenha acesso à melhor rede credenciada e aos serviços mais completos do mercado.
              </p>
              <ul className="space-y-3 mb-6">
                {["Amil", "Bradesco Saúde", "SulAmérica", "Unimed", "Porto Seguro", "Notre Dame Intermédica"].map((operadora, idx) => (
                  <li key={idx} className="flex items-center text-card-foreground font-medium">
                    <span className="text-primary mr-3">✓</span>
                    {operadora}
                  </li>
                ))}
              </ul>
              <Button onClick={scrollToContact} size="lg">
                Fale Conosco
              </Button>
            </div>
            <div 
              className="h-64 md:h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${servicesImage})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
