import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5564992418765?text=Olá! Gostaria de mais informações sobre os serviços da Emersol."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative group">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            {/* Button */}
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer">
              <MessageCircle className="w-7 h-7" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Fale conosco!</p>
        </TooltipContent>
      </Tooltip>
    </motion.a>
  );
};

export default WhatsAppButton;
