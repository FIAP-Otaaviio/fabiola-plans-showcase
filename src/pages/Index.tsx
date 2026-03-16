import { Navbar } from "@/components/Navbar";
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
    <div className="min-h-screen" id="inicio">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
