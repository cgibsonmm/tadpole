const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes')

app.get('/', (req, res) => res.send('hello'))
app.use('/api/sentences', routes)

app.listen(PORT, console.log(`Listening on port: ${PORT}`));