const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET route
app.get('/', (req, res) => {
    console.log("Success");
    res.send("Success");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
