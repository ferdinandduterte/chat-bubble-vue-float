
import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full w-14 h-14 shadow-lg",
        "transition-all duration-300 ease-in-out",
        isOpen 
          ? "bg-white text-support-primary rotate-90" 
          : "bg-gradient-to-r from-support-primary to-support-secondary text-white hover:shadow-xl"
      )}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
    </button>
  );
};

export default ChatButton;
