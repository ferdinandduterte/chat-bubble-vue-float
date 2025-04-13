
import React from 'react';
import { cn } from '@/lib/utils';

export interface MessageProps {
  content: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const ChatMessage: React.FC<MessageProps> = ({ content, sender, timestamp }) => {
  const isUser = sender === 'user';
  
  return (
    <div className={cn(
      "flex mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] py-2 px-4 rounded-lg",
        isUser 
          ? "bg-support-primary text-white rounded-tr-none" 
          : "bg-gray-100 text-gray-800 rounded-tl-none"
      )}>
        <p className="text-sm">{content}</p>
        <p className={cn(
          "text-xs mt-1",
          isUser ? "text-white/70" : "text-gray-500"
        )}>
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
