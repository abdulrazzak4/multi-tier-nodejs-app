const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API route to return data
app.get('/api/data', (req, res) => {
    res.json(data.getData());
});

// Start the server
app.listen(PORT, () => {
    console.log(`Application server is running on port ${PORT}`);
});
