import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import quoteImage from "@/assets/img/services-image.jpeg";

const operators = [
  "Unimed",
  "Bradesco Saúde",
  "Amil",
  "SulAmérica",
  "NotreDame Intermédica",
  "Hapvida",
  "Outro",
];

export default function Quote() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hasCurrentPlan: false,
    currentOperator: "",
    currentPlanValue: "",
    age0to18: 0,
    age19to23: 0,
    age24to28: 0,
    age29to33: 0,
    age34to38: 0,
    age39to43: 0,
    age44to48: 0,
    age49to53: 0,
    age54to58: 0,
    age59plus: 0,
    acceptedPrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos obrigatórios
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Validar se tem pelo menos uma pessoa nas faixas etárias
    const totalPessoas =
      formData.age0to18 +
      formData.age19to23 +
      formData.age24to28 +
      formData.age29to33 +
      formData.age34to38 +
      formData.age39to43 +
      formData.age44to48 +
      formData.age49to53 +
      formData.age54to58 +
      formData.age59plus;

    if (totalPessoas === 0) {
      toast({
        title: "Atenção",
        description:
          "Por favor, adicione pelo menos uma pessoa nas faixas etárias.",
        variant: "destructive",
      });
      return;
    }

    if (formData.hasCurrentPlan && !formData.currentOperator) {
      toast({
        title: "Atenção",
        description: "Por favor, informe a operadora do seu plano atual.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.acceptedPrivacy) {
      toast({
        title: "Atenção",
        description: "Você precisa aceitar a Política de Privacidade.",
        variant: "destructive",
      });
      return;
    }

    // Formatar mensagem para WhatsApp
    const ageGroups = [
      { label: "00 a 18 anos", value: formData.age0to18 },
      { label: "19 a 23 anos", value: formData.age19to23 },
      { label: "24 a 28 anos", value: formData.age24to28 },
      { label: "29 a 33 anos", value: formData.age29to33 },
      { label: "34 a 38 anos", value: formData.age34to38 },
      { label: "39 a 43 anos", value: formData.age39to43 },
      { label: "44 a 48 anos", value: formData.age44to48 },
      { label: "49 a 53 anos", value: formData.age49to53 },
      { label: "54 a 58 anos", value: formData.age54to58 },
      { label: "59 ou mais", value: formData.age59plus },
    ];

    const ageGroupsText = ageGroups
      .filter((group) => group.value > 0)
      .map(
        (group) =>
          `${group.label}: ${group.value} ${group.value === 1 ? "pessoa" : "pessoas"}`,
      )
      .join("\n");

    const mensagem = `*Solicitação de Cotação - Realizadora*

*Dados do Cliente:*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

${
  formData.hasCurrentPlan
    ? `*Plano Atual:*
Operadora: ${formData.currentOperator}
Valor do último boleto: ${formData.currentPlanValue ? `R$ ${formData.currentPlanValue}` : "Não informado"}\n\n`
    : ""
}*Beneficiários por Faixa Etária:*
${ageGroupsText}

---
Enviado via Formulário de Cotação
Realizadora Assessoria de Negócios`;

    // Número do WhatsApp (sem caracteres especiais)
    const numeroWhatsApp = "5511947451553";

    // Criar link do WhatsApp com a mensagem codificada
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem,
    )}`;

    // Abrir WhatsApp em nova aba
    window.open(linkWhatsApp, "_blank");

    // Mostrar mensagem de sucesso
    toast({
      title: "Redirecionando para WhatsApp!",
      description: "Você será redirecionado para continuar a cotação.",
    });

    // Limpar formulário
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        hasCurrentPlan: false,
        currentOperator: "",
        currentPlanValue: "",
        age0to18: 0,
        age19to23: 0,
        age24to28: 0,
        age29to33: 0,
        age34to38: 0,
        age39to43: 0,
        age44to48: 0,
        age49to53: 0,
        age54to58: 0,
        age59plus: 0,
        acceptedPrivacy: false,
      });
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
          {/* Imagem - 2/3 da página */}
          <div
            className="lg:w-2/3 min-h-[40vh] lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${quoteImage})` }}
          >
            <div className="w-full h-full bg-primary/20 backdrop-blur-[2px] flex items-center justify-center p-8">
              <div className="text-center text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Solicite sua Cotação
                </h1>
                <p className="text-xl md:text-2xl text-white/90">
                  Preencha o formulário e encontraremos o melhor plano para você
                </p>
              </div>
            </div>
          </div>

          {/* Formulário - 1/3 da página */}
          <div className="lg:w-1/3 bg-card p-8 lg:p-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Seus Dados
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo / CNPJ</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Campo: Já possui plano */}
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <input
                    type="checkbox"
                    id="plan"
                    checked={formData.hasCurrentPlan}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hasCurrentPlan: e.target.checked,
                        currentOperator: "",
                        currentPlanValue: "",
                      })
                    }
                    className="w-4 h-4 text-primary cursor-pointer"
                  />
                  <Label htmlFor="plan" className="cursor-pointer text-sm">
                    Você já possui um plano de saúde?
                  </Label>
                </div>

                {/* Operadora - Condicional */}
                {formData.hasCurrentPlan && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="operator">Operadora Atual</Label>
                      <select
                        id="operator"
                        value={formData.currentOperator}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            currentOperator: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                        required={formData.hasCurrentPlan}
                      >
                        <option value="">Selecione a operadora</option>
                        {operators.map((op) => (
                          <option key={op} value={op}>
                            {op}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="planValue">Valor do último boleto</Label>
                      <Input
                        id="planValue"
                        type="text"
                        placeholder="Ex: R$ 250,00"
                        value={formData.currentPlanValue}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            currentPlanValue: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Faixas Etárias */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">
                    Quantas pessoas em cada faixa etária?
                  </Label>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: "age0to18", label: "00 a 18 anos" },
                      { key: "age19to23", label: "19 a 23 anos" },
                      { key: "age24to28", label: "24 a 28 anos" },
                      { key: "age29to33", label: "29 a 33 anos" },
                      { key: "age34to38", label: "34 a 38 anos" },
                      { key: "age39to43", label: "39 a 43 anos" },
                      { key: "age44to48", label: "44 a 48 anos" },
                      { key: "age49to53", label: "49 a 53 anos" },
                      { key: "age54to58", label: "54 a 58 anos" },
                      { key: "age59plus", label: "59 ou mais" },
                    ].map((item) => (
                      <div key={item.key}>
                        <Label htmlFor={item.key} className="text-sm">
                          {item.label}
                        </Label>
                        <Input
                          id={item.key}
                          type="number"
                          min="0"
                          value={String(formData[item.key as keyof typeof formData])}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [item.key]: parseInt(e.target.value) || 0,
                            })
                          }
                          className="text-center"
                        />
                      </div>
                    ))}
                  </div>

                  {formData.age0to18 +
                    formData.age19to23 +
                    formData.age24to28 +
                    formData.age29to33 +
                    formData.age34to38 +
                    formData.age39to43 +
                    formData.age44to48 +
                    formData.age49to53 +
                    formData.age54to58 +
                    formData.age59plus >
                    0 && (
                    <p className="text-sm text-primary font-semibold">
                      Total de pessoas:{" "}
                      {formData.age0to18 +
                        formData.age19to23 +
                        formData.age24to28 +
                        formData.age29to33 +
                        formData.age34to38 +
                        formData.age39to43 +
                        formData.age44to48 +
                        formData.age49to53 +
                        formData.age54to58 +
                        formData.age59plus}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.acceptedPrivacy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        acceptedPrivacy: e.target.checked,
                      })
                    }
                    required
                    className="mt-1 w-4 h-4 text-primary"
                  />
                  <Label htmlFor="privacy" className="text-sm cursor-pointer">
                    Li e aceito a{" "}
                    <a
                      href="/politica-privacidade"
                      target="_blank"
                      className="text-primary underline hover:text-primary/80"
                    >
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o uso dos meus dados para contato sobre planos de
                    saúde.
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Solicitação
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
