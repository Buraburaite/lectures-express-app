const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// our first Route
app.get('/', (req, res, next) => {
  let data = {
      name: "Ironhacker",
      age: 5,
      country: "US",
      citiesTraveled: ["Miami", "Madrid", "Barcelona"]
    };
  // send views/index.ejs for displaying in the browser
  res.render('index', data);
});

// my second Route
app.get('/about', (req, res, next) => {
  // send views/index.ejs for displaying in the browser
  res.render('about');
});

app.get('/foods', (req, res, next) => {
  let data = {
    foods : ['Mac & Cheese', 'Sashimi', 'Pizza', 'Potato Salad', 'Pad Thai']
  };

  res.render('foods', data);
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
