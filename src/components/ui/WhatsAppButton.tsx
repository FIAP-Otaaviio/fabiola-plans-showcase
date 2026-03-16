import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    const mensagem =
      "Olá! Gostaria de saber mais sobre os planos de saúde da Realizadora.";
    window.open(
      `https://wa.me/5511947451553?text=${encodeURIComponent(mensagem)}`,
      "_blank",
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-10 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};
