const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let currentLocation = { lat: 0, lng: 0 };

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/api/update-location', (req, res) => {
    currentLocation = req.body;
    res.sendStatus(200);
});

app.get('/api/get-location', (req, res) => {
    res.json(currentLocation);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
