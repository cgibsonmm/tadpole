const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes')


app.use(express.json())
const path = require('path')

app.get('/', (req, res) => res.send('hello'))
app.use('/api', routes)

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, console.log(`Listening on port: ${PORT}`));