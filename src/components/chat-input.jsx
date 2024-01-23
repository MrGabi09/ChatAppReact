import React, { useState } from 'react';
import { TextInput, Button } from '@mantine/core';

export function ChatInput({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={{ background:"grey",position: 'fixed', bottom: 0, left:300, width: '100%', backgroundColor: '#ffffff', padding: '10px', borderTop: '1px solid #ccc' }}>
      <TextInput
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <Button style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)', margin: '10px', variant: 'outline', color: 'black' }} onClick={handleSendMessage}>Send</Button>
    </div>
  );
}
