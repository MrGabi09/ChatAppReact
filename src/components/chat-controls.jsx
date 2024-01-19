import { Button } from '@mantine/core'

export function ChatControls() {
  const consStyle={
    backgroundColor: '#6D6968',
    padding: '20px',
  };
  const ButStyle={
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    margin: '10px',
  };
  return (
    <div style={consStyle}>
      <Button variant="outline" color="#EBCD1B" style={ButStyle}>
        Discussions
      </Button>
      <Button variant="outline" color="#EBCD1B" style={ButStyle}>New Chat</Button>
    </div>
  );
}
