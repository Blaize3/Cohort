// Importing dependencies
import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

// import router
import router from './routes/index';

// creating app application
const app = express();
const port = parseInt(process.env.PORT, 10) || 8080;
let server = null;

// logging to console
app.use(logger('dev'));

// Parsing form data (request body input)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// All routes will be handled here!!!
//  00000000000000000000000000000000000000000000000000000000000000000000000
router(app);
//  00000000000000000000000000000000000000000000000000000000000000000000000

// routes exception handler
app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Sorry, API Service not found!'
  });
});

app.post('*', (req, res) => {
  res.status(404).json({
    message: 'Sorry, API Service not found!'
  });
});

app.put('*', (req, res) => {
  res.status(404).json({
    message: 'Sorry, API Service not found!'
  });
});

app.delete('*', (req, res) => {
  res.status(404).json({
    message: 'Sorry, API Service not found!'
  });
});

// setting application port
app.set('port', port);

// Creating http server
server = http.createServer(app);

// Running server
server.listen(port, () => {
  console.log(`Cohort Server is running on localhost:${port}`);
});

export default app;
