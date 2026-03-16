import { Layout } from "@/components/Layout";
import { Building2 } from "lucide-react";

export default function Imoveis() {
  return (
    <Layout environment="imoveis">
      <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-8">
            <Building2 className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Em Breve
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Estamos preparando nosso ambiente de imóveis. Em breve você poderá
            encontrar as melhores opções aqui.
          </p>
        </div>
      </div>
    </Layout>
  );
}
