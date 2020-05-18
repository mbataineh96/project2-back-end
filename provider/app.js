const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3443;

let i = 0;

app.get('/tick', (request, response) => {
    i += 1;
    response.send({number: i});
});

app.listen(port, () => {
    console.log(`live on port ${port}!`);
});