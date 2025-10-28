import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fabíola Corretora</h3>
            <p className="text-primary-foreground/90">
              Sua parceira de confiança na escolha do plano de saúde ideal.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>(11) 98765-4321</li>
              <li>contato@fabiolacorretora.com.br</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/90 flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 fill-current" /> para cuidar da sua saúde
          </p>
          <p className="text-primary-foreground/70 text-sm mt-2">
            © 2024 Fabíola Corretora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
