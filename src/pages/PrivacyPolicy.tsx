import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Coleta de Dados</h2>
              <p className="text-muted-foreground">
                A Realizadora Corretora coleta apenas os dados necessários para 
                prestação dos serviços de consultoria em planos de saúde, incluindo: 
                nome, e-mail, telefone e informações fornecidas voluntariamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Uso dos Dados</h2>
              <p className="text-muted-foreground">
                Seus dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Entrar em contato para apresentação de propostas</li>
                <li>Envio de informações sobre planos de saúde</li>
                <li>Atendimento de solicitações</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento</h2>
              <p className="text-muted-foreground">
                Seus dados podem ser compartilhados apenas com as operadoras de 
                saúde para análise de propostas, sempre com seu consentimento prévio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Seus Direitos</h2>
              <p className="text-muted-foreground">
                Você tem direito a acessar, corrigir ou solicitar a exclusão de 
                seus dados a qualquer momento através do e-mail: 
                privacidade@realizadora.com.br
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Segurança</h2>
              <p className="text-muted-foreground">
                Utilizamos medidas de segurança técnicas e organizacionais para 
                proteger seus dados contra acesso não autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
              <p className="text-muted-foreground">
                Para questões sobre privacidade: privacidade@realizadora.com.br
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}