const express = require('express');
const path = require('path');
const generateUniqueId = require('./helpers/idgen');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('*', (req, res) =>
    res.sendfile(path.join(__dirname, '/public/assets/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendfile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes')

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});