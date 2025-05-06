require('dotenv').config();
const express = require('express');

const { limiter } = require('./middlewares/rateLimiter.middleware');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(limiter);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
