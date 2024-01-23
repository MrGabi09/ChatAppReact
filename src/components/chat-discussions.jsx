import React, { useState } from 'react';
import { Box, Button, TextInput } from '@mantine/core';
import { ChatInput } from './chat-input';

export function ChatDiscussions({
  selectedContact,
  handleContactClick,
  contacts,
  newContactName,
  setNewContactName,
  handleAddContact,
  handleSendMessage,
}) {
  const [message, setMessage] = useState('');

  const positionStyle = {
    padding: '20px',
  };

  const sendMessageStyle = {
    maxWidth: '400px', 
    margin: 'auto', 
    marginTop: '10px',
  };

  return (
    <div style={positionStyle}>
      <Box bg="grey" radius="lg" style={{ padding: '1rem', borderRadius: '10px', fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>
        Contacts
      </Box>

      {selectedContact ? (
        <div>
          <h1>Selected Contact: {selectedContact}</h1>
          <ChatInput sendMessage={handleSendMessage} style={sendMessageStyle} />
        </div>
      ) : (
        <div>
          {contacts.map((contact) => (
            <Button key={contact} onClick={() => handleContactClick(contact)}>
              {contact}
            </Button>
          ))}
          <div style={{ marginTop: '10px' }}>
            <TextInput
              placeholder="Enter new contact name"
              value={newContactName}
              onChange={(event) => setNewContactName(event.target.value)}
            />
            <Button onClick={handleAddContact}>Add New Contact</Button>
          </div>
        </div>
      )}
    </div>
  );
}
