import React from 'react';
import { Box, Button } from '@mantine/core';

export function ChatContacts({ handleContactClick, contacts }) {
  return (
    <div>
      <Box bg="grey" radius="lg" style={{ padding: '1rem', borderRadius: '10px', fontWeight: 'bold', fontSize: '25px', textAlign: 'center' }}>
        Contacts
      </Box>
      {contacts.map((contact) => (
        <Button key={contact} onClick={() => handleContactClick(contact)}>
          {contact}
        </Button>
      ))}
    </div>
  );
}