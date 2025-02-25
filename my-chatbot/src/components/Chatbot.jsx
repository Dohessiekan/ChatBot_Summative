import React, { useState } from "react";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";
import styled from "styled-components";

const ChatbotWrapper = styled.div`
  width: 500px;
  max-height: 600px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  height: 100%;
`;

const Header = styled.div`
  background: #007bff;
  padding: 15px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Footer = styled.div`
  background: #121212;
  color: #aaa;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to the chatbot. How can I assist you today?", sender: "bot" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const newMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    const userMessage = text.toLowerCase();

    // Check for greetings
    const greetings = ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"];
    if (greetings.some(greet => userMessage.includes(greet))) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Hello! I am Shama, how can I help you today?", sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    // Check if the user wants to ask a question
    if (userMessage.includes("i want to ask some question")) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I am here to help you with all finance details.", sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    // Check for goodbyes
    const goodbyes = ["bye", "goodbye", "see you", "take care"];
    if (goodbyes.some(bye => userMessage.includes(bye))) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Goodbye! Have a great day!", sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    // Default behavior: Fetch response from the API
    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Oops! Something went wrong.", sender: "bot" }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <ChatbotWrapper>
      <Header>Chatbot</Header>
      <ChatContainer messages={messages} />
      {isTyping && <p style={{ color: "white", textAlign: "center" }}>Shama is typing...</p>}
      <ChatInput sendMessage={sendMessage} />
      <Footer>Made by Xavier - 2025</Footer>
    </ChatbotWrapper>
  );
};

export default Chatbot;
