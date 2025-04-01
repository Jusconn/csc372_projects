const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '../dist')));

// Serve static files from the "src/data" directory
app.use('/data', express.static(path.join(__dirname, 'data')));

// Serve the React app for all routes except those starting with "/data"
app.get(/^\/(?!data).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});