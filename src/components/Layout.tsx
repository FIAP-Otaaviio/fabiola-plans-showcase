import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Info, HeartPulse, MessageSquareQuote, Phone, Building2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { WelcomeModal } from "@/components/WelcomeModal";

const saudeMenuItems = [
  { label: "Início", id: "inicio", icon: Home },
  { label: "Sobre", id: "sobre", icon: Info },
  { label: "Planos", id: "servicos", icon: HeartPulse },
  { label: "Cases", id: "depoimentos", icon: MessageSquareQuote },
  { label: "Contato", id: "contato", icon: Phone },
];

interface LayoutProps {
  children: React.ReactNode;
  environment: "saude" | "imoveis";
}

export const Layout = ({ children, environment }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleModalChoice = (choice: "saude" | "imoveis") => {
    setShowModal(false);
    if (choice === "imoveis") {
      navigate("/imoveis");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Sidebar */}
        <Sidebar collapsible="icon">
          <SidebarContent className="pt-16">
            <SidebarGroup>
              <SidebarGroupLabel>
                {environment === "saude" ? "Saúde" : "Imóveis"}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {environment === "saude" ? (
                    saudeMenuItems.map((item) => (
                      <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                          onClick={() => scrollToSection(item.id)}
                          className="cursor-pointer hover:bg-sidebar-accent"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))
                  ) : (
                    <SidebarMenuItem>
                      <SidebarMenuButton className="text-muted-foreground cursor-default">
                        <Building2 className="h-4 w-4" />
                        <span>Em breve...</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main area */}
        <div className="flex-1 flex flex-col">
          {/* Top bar */}
          <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-card/95 backdrop-blur-sm border-b border-border flex items-center px-4">
            <SidebarTrigger className="mr-3" />

            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-primary hover:opacity-80 transition-opacity mr-8"
            >
              REALIZADORA
            </Link>

            {/* Environment switcher */}
            <nav className="flex items-center gap-1 ml-auto">
              <Link
                to="/"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  environment === "saude"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Saúde
              </Link>
              <Link
                to="/imoveis"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  environment === "imoveis"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Imóveis
              </Link>
            </nav>
          </header>

          {/* Content */}
          <main className="flex-1 pt-14">
            {children}
          </main>
        </div>
      </div>

      <WelcomeModal open={showModal} onChoice={handleModalChoice} />
    </SidebarProvider>
  );
};
