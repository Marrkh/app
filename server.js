const express = require('express');
const app = express();

PORT = 80;

app.get('/', function (req, res) {
    res.send('Hello, World!');
});

app.listen(80, function () {
    console.log(`Running on http://localhost:${PORT}`);
});