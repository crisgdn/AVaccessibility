const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(1234);

//localhost:1234/