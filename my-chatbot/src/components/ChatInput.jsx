import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  padding: 15px;
  background: #1e1e1e;
  border-top: 1px solid #444;
`;

const InputField = styled.input`
  flex: 1;
  padding: 15px; /* Increased padding */
  border: none;
  font-size: 18px; /* Increased font size */
  outline: none;
  border-radius: 12px;
  background: #333;
  color: white;
`;

const SendButton = styled.button`
  margin-left: 15px; /* Increased margin */
  padding: 15px 20px; /* Increased padding */
  background: #007bff;
  color: white;
  border: none;
  font-size: 18px; /* Increased font size */
  cursor: pointer;
  border-radius: 12px;
  transition: 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <SendButton onClick={handleSend}>Send</SendButton>
    </InputContainer>
  );
};

export default ChatInput;
