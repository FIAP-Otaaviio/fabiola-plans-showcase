import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511987654321", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:contato@fabiolacorretora.com.br";
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511987654321";
  };

  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ficou curioso ?
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Venha saber mais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a melhor forma de falar conosco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsApp}
            className="h-auto py-8 flex flex-col items-center gap-4 hover:border-primary hover:bg-primary/5"
          >
            <MessageCircle className="h-12 w-12 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">(11) 98765-4321</p>
            </div>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handlePhone}
            className="h-auto py-8 flex flex-col items-center gap-4 hover:border-primary hover:bg-primary/5"
          >
            <Phone className="h-12 w-12 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Telefone</h3>
              <p className="text-sm text-muted-foreground">(11) 98765-4321</p>
            </div>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleEmail}
            className="h-auto py-8 flex flex-col items-center gap-4 hover:border-primary hover:bg-primary/5"
          >
            <Mail className="h-12 w-12 text-primary" />
            <div>
              <h3 className="text-xl font-semibold mb-1">E-mail</h3>
              <p className="text-sm text-muted-foreground">contato@fabiolacorretora.com.br</p>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
