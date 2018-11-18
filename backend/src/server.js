const app = require('./app');
const http = require('http');

const port = process.env.PORT || 5000;

// API Calls
app.get('/api/title', (req, res) => {
    res.send({ title: 'Meal Prep Application!' });
});

http.createServer(app).listen(port);

console.log(`Server is listening at port ${port}`);