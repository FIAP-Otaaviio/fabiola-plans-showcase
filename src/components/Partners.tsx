import { Shield } from "lucide-react";

const partners = [
  { name: "Unimed", icon: "🏥" },
  { name: "Bradesco Saúde", icon: "🏦" },
  { name: "Amil", icon: "💙" },
  { name: "SulAmérica", icon: "🛡️" },
  { name: "NotreDame Intermédica", icon: "⚕️" },
  { name: "Hapvida", icon: "💚" },
];

export const Partners = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Operadoras Parceiras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores operadoras do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-3">
                {partner.icon}
              </div>
              <p className="text-sm font-semibold text-card-foreground text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
