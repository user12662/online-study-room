<script src="/socket.io/socket.io.js"></script> //links the stupid soket file

<script src="js/app.js"></script>


const socket = io(); // Connect to the WebSocket server

// Handle drawing event
socket.emit('draw', { x: 100, y: 150 }); // Sends drawing coordinates to the server

// Listen for drawing data from other users
socket.on('draw', (data) => {
  console.log('Drawing received:', data);
});
