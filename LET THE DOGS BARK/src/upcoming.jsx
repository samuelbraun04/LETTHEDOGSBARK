import React, { useState, useEffect } from 'react';
import './upcoming.css';
import { PieChart } from 'react-minimal-pie-chart';

const mockMessages = [
  'Jacob: Everyone vote for the Hounded drop!',
  'Lucas: I hope Rabids wins....',
  'Sarah: K9-GHASTLY for the win!',
  'John: Can\'t wait for the Hounded drop!',
  'Emma: My vote goes to All Dogs Go To Heaven',
  'David: I am rooting for Rabids',
  'Sophia: K9-GHASTLY deserves the win!',
  'Josh: My money is on All Dogs Go To Heaven!',
  'Emily: Rabids will be a great drop!',
  'Liam: Definitely voting for Hounded!',
  'Noah: K9-GHASTLY seems really promising!',
  'Michael: Hounded is my favorite!',
  'Olivia: Rabids seems really unique',
  'Ethan: All Dogs Go To Heaven is so nostalgic',
  'Ava: K9-GHASTLY is a modern classic!',
  'William: Voting for Hounded without a doubt',
  'Sophia: I love the concept of Rabids',
  'James: All Dogs Go To Heaven deserves more recognition',
  'Isabella: K9-GHASTLY is really promising',
  'Benjamin: Hounded is my top choice',
  'Mia: Rabids has my vote',
  'Lucas: I hope All Dogs Go To Heaven wins',
  'Emma: K9-GHASTLY for the win!',
];

const initialOptions = [
  { title: 'Hounded', value: Math.floor(Math.random() * 10), color: '#660000' },
  { title: 'K9-GHASTLY', value: Math.floor(Math.random() * 10), color: '#663300' },
  { title: 'Rabids', value: Math.floor(Math.random() * 10), color: '#666600' },
  { title: 'All Dogs Go To Heaven', value: Math.floor(Math.random() * 10), color: '#333333' },
];

const VotingChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [options, setOptions] = useState(initialOptions);
  const [selectedVote, setSelectedVote] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prevState => [...prevState, mockMessages[Math.floor(Math.random() * mockMessages.length)]]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  }

  const handleUserMessageSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      setMessages(prevState => [...prevState, `User: ${userMessage.trim()}`]);
      setUserMessage('');
    }
  }

  const handleVote = (index) => {
    if (selectedVote === index) {
      return; // return early if the selected button is clicked again
    }

    setOptions((prevOptions) => {
        return prevOptions.map((option, idx) => {
            if (idx === selectedVote && selectedVote !== null) {
                // Subtract vote from previously selected option
                return { ...option, value: option.value - 1 };
            } else if (idx === index) {
                // Add vote to newly selected option
                return { ...option, value: option.value + 1 };
            }
            return option;
        });
    });
    setSelectedVote(index);
};



  return (
    <div className="voting-chat-page">
      <div className="voting-section">
        <h2>Vote for the next drop – August 23rd, 2023</h2>
        <div className="button-container">
        {options.map((option, index) => (
    <button 
      key={index}
      style={{ 
        backgroundColor: option.color,
        border: selectedVote === index ? '5px solid black' : '5px solid white',
        color: '#ffffff' // Text color
      }} 
      onClick={() => handleVote(index)}
    >
      {option.title}
    </button>
))}
        </div>
        <div className="chart-section">
          <PieChart data={options} />
        </div>
      </div>
      <div className="chat-section">
        <h2>Community Chat</h2>
        <div className="chat-box">
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <form onSubmit={handleUserMessageSubmit}>
          <input type="text" value={userMessage} onChange={handleUserMessageChange} placeholder="Type a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    
  );


};



export default VotingChatPage;
