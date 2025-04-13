
import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <ChatWindow isOpen={isOpen} />
      <ChatButton isOpen={isOpen} onClick={toggleChat} />
    </>
  );
};

export default ChatWidget;
