const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// our first Route
app.get('/', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('index');
});

// my second Route
app.get('/about', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('about');
});

app.get('/hello', (req, res, next) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="stylesheets/style.css">
      </head>
      <body>
        This is my second route
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
