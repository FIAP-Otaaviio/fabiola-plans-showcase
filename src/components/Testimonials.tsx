import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente desde 2021",
    content: "A Fabíola me ajudou a encontrar o plano perfeito para minha família. O atendimento é sempre atencioso e ela está sempre disponível para esclarecer dúvidas.",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Empresário",
    content: "Contrarei um plano empresarial através da Fabíola e o processo foi extremamente simples. Ela cuidou de tudo e conseguiu um preço excelente para minha equipe.",
    rating: 5
  },
  {
    name: "Ana Rodrigues",
    role: "Aposentada",
    content: "Estava procurando um plano adequado para minha idade e a Fabíola me apresentou opções perfeitas. Hoje tenho tranquilidade com minha saúde.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação de quem confia no nosso trabalho é nossa maior conquista.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-shadow duration-300 bg-card border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
