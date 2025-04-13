
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import ChatMessage, { MessageProps } from './ChatMessage';
import { cn } from '@/lib/utils';

interface ChatWindowProps {
  isOpen: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      content: 'Hello! How can I help you today?',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message
    const userMessage: MessageProps = {
      content: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setMessage('');
    
    // Simulate response after 1 second
    setTimeout(() => {
      const supportMessage: MessageProps = {
        content: 'Thanks for your message. Our team will get back to you soon!',
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className={cn(
      "fixed bottom-24 right-6 z-40 w-80 md:w-96 bg-white rounded-lg shadow-xl flex flex-col",
      "transition-all duration-300 ease-in-out",
      "border border-gray-200",
      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    )}
    style={{ height: "500px", maxHeight: "70vh" }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-support-primary to-support-secondary text-white p-4 rounded-t-lg">
        <h3 className="font-semibold">Customer Support</h3>
        <p className="text-sm opacity-90">We typically reply within minutes</p>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index} 
            content={msg.content} 
            sender={msg.sender} 
            timestamp={msg.timestamp} 
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-support-primary"
          />
          <button
            onClick={handleSendMessage}
            className="bg-support-primary text-white p-2 rounded-r-md hover:bg-support-secondary"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
