// src/components/ChatControls.tsx
import React, { useState } from 'react';
import { Button, Modal, TextInput } from '@mantine/core';

export function ChatControls({ openModal }) {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openLoginModal = () => {
    setLoginModalVisible(true);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  const handleLogin = () => {
    // Implement your actual login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);

    // Close the modal after handling login
    closeLoginModal();
  };

  return (
    <div style={{ backgroundColor: '#6D6968', padding: '20px' }}>
      <Button style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)', margin: '10px', variant: 'outline', color: 'black' }}>
        Discussions
      </Button>
      <Button style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)', margin: '10px', variant: 'outline', color: 'black' }}>
        New Chat
      </Button>
      <Button onClick={openLoginModal} style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)', margin: '10px', variant: 'outline', color: 'black' }}>
        Log In
      </Button>

      <Modal opened={loginModalVisible} onClose={closeLoginModal} title="Log In">
        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={handleLogin}>Log In</Button>
      </Modal>
    </div>
  );
}
