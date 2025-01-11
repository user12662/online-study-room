<script src="https://0b1f0254-48ae-4e90-868d-f7818675309c-00-31d707jg3bpcz.riker.replit.dev/"></script>
<script src="js/app.js"></script>


const socket = io(); // Connect to the WebSocket server

// Handle drawing event
socket.emit('draw', { x: 100, y: 150 }); // Sends drawing coordinates to the server

// Listen for drawing data from other users
socket.on('draw', (data) => {
  console.log('Drawing received:', data);
});
