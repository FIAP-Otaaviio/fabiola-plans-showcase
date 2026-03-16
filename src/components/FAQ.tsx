import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo de carência tem o plano de saúde?",
    answer:
      "As carências variam por tipo de procedimento: consultas (24h emergencial), exames simples (30 dias), partos (300 dias), doenças preexistentes (24 meses CPT). Urgências e emergências têm atendimento após 24h de contratação.",
  },
  {
    question: "Posso migrar de operadora mantendo as carências cumpridas?",
    answer:
      "Sim! Com os quesitos cumpridos, tudo sob pré análise e direito de aceitação da operadora.",
  },
  {
    question: "O que é coparticipação?",
    answer:
      "É uma modalidade onde você paga uma mensalidade reduzida, mas gera um percentual a parte para determinados procedimento. Ideal para quem usa pouco o plano.",
  },
  {
    question: "Como funciona a rede credenciada?",
    answer:
      "É importante verificar conosco a rede que irá malhor atende-los, através de uma nálise técnica de hospitais credenciados antes de contratar.",
  },
  {
    question: "Posso incluir dependentes depois de contratar?",
    answer:
      "Sim, mas com algumas regras. Iremos orienta-los. Outros dependentes têm regras específicas. A inclusão pode alterar o valor da mensalidade.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas para as perguntas mais comuns sobre planos de saúde
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <a
            href="#contato"
            className="text-primary font-semibold hover:underline"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
};
