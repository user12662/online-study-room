const socket = io('https://4cd45031-00db-4296-b64a-341727b9db2d-00-1ut2a93ioco3z.janeway.replit.dev/'); // Update with your Replit URL

// Handle drawing event (this could be linked to a drawing tool, like mouse movements)
document.addEventListener('mousemove', (e) => {
  const data = { x: e.clientX, y: e.clientY };
  socket.emit('draw', data); // Emit drawing coordinates to the server
});

// Listen for drawing data from other users
socket.on('draw', (data) => {
  console.log('Drawing received:', data);
  // Here you would typically update the UI with the drawing data (e.g., on a canvas)
});

// Handle sticky note event
document.getElementById('create-room-btn').addEventListener('click', () => {
  const data = { message: 'New sticky note created!' };
  socket.emit('sticky-note', data);  // Emit sticky note data to the server
});

// Listen for sticky note data from other users
socket.on('sticky-note', (data) => {
  console.log('Sticky note received:', data);
  // Here you would update the UI with the sticky note data
});
