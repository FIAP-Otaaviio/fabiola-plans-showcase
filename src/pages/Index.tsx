import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const Index = () => {
  return (
    <Layout environment="saude">
      <div id="inicio">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </Layout>
  );
};

export default Index;
