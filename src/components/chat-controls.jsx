import React from 'react';
import { Button } from '@mantine/core';


export function ChatControls() {
  const consStyle = {
    backgroundColor: '#6D6968',
    padding: '20px',
  };

  // const LogInStyle = {
  //   marginLeft: '10px', 
  //   padding: '20px',
  // };

  const ButStyle = {
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    margin: '10px',
    variant: 'outline',
    color: 'black',
  };

  return (
    // <div>
      <div style={consStyle}>
        <Button style={ButStyle}>Discussions</Button>
        <Button style={ButStyle}>New Chat</Button>
        <Button style={ButStyle}>Log In
        </Button>
      </div>
      // <div style={LogInStyle}>
      //   <Button style={ButStyle}>Log In</Button>
      // </div>
    // </div>
  );
}
