"use client"
import React, { useState, FC } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  MessageModel,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";

interface ChatMessage extends MessageModel {
  message: string;
  sentTime: string;
  sender: string;
  role?: string; // Update: Make 'role' optional
  content?: string; // Update: Make 'content' optional
}

const App: FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, I'm your medical assistant! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: 'incoming',
      position: 'single',
      role: 'system', // Update: Set 'role' explicitly
      content: 'Introduction', // Update: Set 'content' explicitly
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message: string) => {
    const newMessage: ChatMessage = {
      message,
      sentTime: 'outgoing',
      sender: 'user',
      direction: 'outgoing',
      position: 'single',
      role: 'user', // Update: Set 'role' explicitly
      content: message, // Update: Set 'content' explicitly
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages: ChatMessage[]) {
    let apiMessages = chatMessages.map((messageObject) => {
      return { role: messageObject.role, content: messageObject.content };
    });

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Introduction' },
        ...apiMessages,
      ],
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT',
            sentTime: 'now',
            direction: 'incoming',
            position: 'single',
            role: 'assistant', // Update: Set 'role' explicitly
            content: data.choices[0].message.content, // Update: Set 'content' explicitly
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="App">
      <div
        style={{
          display: 'block',
          position: 'relative',
          margin: 'auto',
          marginBottom: '10%',
          marginTop: '2%',
          height: '770px',
          width: '750px',
          padding: 0,
        }}
      >
        <MainContainer style={{ borderRadius: 23, borderWidth: 5 }}>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? <TypingIndicator content="Assistant is typing" /> : null
              }
            >
              {messages.map((message, i) => (
                <Message style={{ fontFamily: 'bold' }} key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default App;
