import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HeartPulse, Building2 } from "lucide-react";

interface WelcomeModalProps {
  open: boolean;
  onChoice: (choice: "saude" | "imoveis") => void;
}

export const WelcomeModal = ({ open, onChoice }: WelcomeModalProps) => {
  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Bem-vindo à Realizadora
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground mt-2">
            Qual serviço você deseja acessar hoje?
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            size="lg"
            className="flex-1 h-24 flex flex-col gap-2 text-lg"
            onClick={() => onChoice("saude")}
          >
            <HeartPulse className="h-8 w-8" />
            Saúde
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="flex-1 h-24 flex flex-col gap-2 text-lg border-2 hover:bg-muted"
            onClick={() => onChoice("imoveis")}
          >
            <Building2 className="h-8 w-8" />
            Imóveis
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
