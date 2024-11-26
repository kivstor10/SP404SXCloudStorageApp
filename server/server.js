const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors()); 


// Middleware to parse JSON
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

