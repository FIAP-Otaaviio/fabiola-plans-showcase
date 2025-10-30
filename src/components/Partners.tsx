import { Shield, Heart, Cross, Activity, Plus, Stethoscope } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "Unimed", icon: Plus, color: "text-green-600" },
  { name: "Bradesco Saúde", icon: Shield, color: "text-red-600" },
  { name: "Amil", icon: Heart, color: "text-blue-600" },
  { name: "SulAmérica", icon: Activity, color: "text-orange-600" },
  { name: "NotreDame Intermédica", icon: Cross, color: "text-purple-600" },
  { name: "Hapvida", icon: Stethoscope, color: "text-emerald-600" },
];

export const Partners = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Operadoras Parceiras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores operadoras do mercado
          </p>
        </div>

        <div 
          ref={elementRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 glass-card rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`text-5xl mb-3 ${partner.color}`}>
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-card-foreground text-center">
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
