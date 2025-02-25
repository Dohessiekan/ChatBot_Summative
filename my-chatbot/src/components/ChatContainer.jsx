import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 500px; /* Increased height */
  overflow-y: auto;
  padding: 20px;
  background: #121212;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Message = styled.div`
  max-width: 75%; /* Slightly wider chat bubbles */
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  font-size: 18px; /* Increased font size */
  line-height: 1.6;
  word-wrap: break-word;
  color: #fff;
  ${({ sender }) =>
    sender === "user"
      ? `align-self: flex-end; background: #007bff;`
      : `align-self: flex-start; background: #444;`}
`;

const ChatContainer = ({ messages }) => {
  return (
    <Container>
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender}>
          {msg.text}
        </Message>
      ))}
    </Container>
  );
};

export default ChatContainer;
