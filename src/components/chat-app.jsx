import React, { useState } from 'react';
import {
  MantineProvider,
  AppShell,
  Modal,
  Button,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ChatControls } from './chat-controls';
import { ChatContacts } from './chat-contacts';
import { ChatDiscussions } from './chat-discussions';
import { ChatInput } from './chat-input';
import { ChatMessages } from './chat-messages';

import { theme } from '../theme';
import '@mantine/core/styles.css';

export function ChatApp() {
  const [modalIsVisible, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [newContactName, setNewContactName] = useState('');
  const [contacts, setContacts] = useState(['contact1', 'contact2', 'contact3']);
  const [messages, setMessages] = useState([]);

  const handleContactClick = (username) => {
    setSelectedContact(username);
  };

  const handleAddContact = () => {
    if (newContactName.trim() !== '') {
      setContacts((prevContacts) => [...prevContacts, newContactName.trim()]);
      setNewContactName('');
    }
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { content: message, sender: 'current user' }]);
  };

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 100 }}
        navbar={{
          width: 300,
        }}
        padding="md"
      >
        <AppShell.Header className='bg-red'>
          <ChatControls openModal={openModal} />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <ChatDiscussions
            selectedContact={selectedContact}
            handleContactClick={handleContactClick}
            contacts={contacts}
            newContactName={newContactName}
            setNewContactName={setNewContactName}
            handleAddContact={handleAddContact}
          />
        </AppShell.Navbar>

        <AppShell.Main>
          <ChatMessages messages={messages} />
          {selectedContact && (
            <div>
              <Textarea
                label={`Message to ${selectedContact}`}
                placeholder="Type a message"
                value={''}  // Reset this to an empty string or some default value after sending a message
                onChange={(e) => {/* Handle textarea change if needed */}}
              />
              <Button onClick={() => handleSendMessage('Sample message')}>Send</Button>
            </div>
          )}
        </AppShell.Main>
      </AppShell>

      <div className="text-red-900">
        <ChatContacts handleContactClick={handleContactClick} contacts={contacts} />
        <ChatInput sendMessage={handleSendMessage} />
      </div>

      <Modal opened={modalIsVisible} onClose={closeModal} title="Authentication">
        Authentication modal content
      </Modal>
    </MantineProvider>
  );
}