const socket = io('https://4cd45031-00db-4296-b64a-341727b9db2d-00-1ut2a93ioco3z.janeway.replit.dev/'); // Connect to the WebSocket server using the Replit URL

// Handle drawing event
document.addEventListener('mousemove', (e) => {
  const data = { x: e.clientX, y: e.clientY };
  socket.emit('draw', data); // Emit drawing coordinates
});

// Listen for drawing data from other users
socket.on('draw', (data) => {
  console.log('Drawing received:', data);
});
