const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET route
app.get('/get', (req, res) => {
    console.log("Success");
    console.log("dfuhbveriuvneijrhnvef);
    res.send("Success");
});

app.post('/post', (req, res) => {
    res.send("Insert api successfully fetched");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
