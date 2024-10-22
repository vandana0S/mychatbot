import React, { useState } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSend = () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: 'user' }];
    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    setUserInput(''); // Clear input after sending
  };

  const getBotResponse = (input) => {
    if (input.toLowerCase().includes('hello')) {
      return 'Hi there! How can I help?';
    } else if (input.toLowerCase().includes('Tell me about yourself!')) {
      return 'I am an AI-powered chatbot to help you!!';
    } else {
      return 'Sorry, I didn’t understand that. Can you please clarify?';
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
