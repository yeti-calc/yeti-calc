const path = require('path');
const express = require('express');
const apiRouter = require('./apiRouter.js');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // any frontend JSON responses or URL encoded string gets converted into something JS can read


app.use(express.static(path.resolve(__dirname, '../frontend'))); // any req to frontend will be displayed on browser bc of this

/**
 * define route handlers
 */
app.use('/api', apiRouter);

// catch-all
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// error handling needs to be finished
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });