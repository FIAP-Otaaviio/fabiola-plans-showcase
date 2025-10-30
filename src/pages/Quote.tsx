import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import quoteImage from "@/assets/services-image.jpg";

export default function Quote() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cotação enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
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
