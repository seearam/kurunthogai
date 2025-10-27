const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>About Us</h1><p>This is the about page.</p>');
});

app.use((req, res) => {
    res.status(200).type('text/plain').send('Hello, World!\n');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
