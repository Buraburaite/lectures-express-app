const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app            = express();
const expressLayouts = require('express-ejs-layouts');
const engine         = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.set('layout', 'layouts/main-layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// our first Route
app.get('/', (req, res, next) => {
  let data = {
      name: "Ironhacker",
      age: 5,
      country: "US",
      citiesTraveled: ["Miami", "Madrid", "Barcelona"],
      users: ["Bob", "Mary", "Ted"]
    };
  // send views/index.ejs for displaying in the browser
  res.render('index', data);
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  let email    = req.body.email;
  let password = req.body.password;

  res.send(`Email: ${email}, Password: ${password}`);
});

app.get('/get-user-info', (req, res) => {
  res.render('user-info-form');
});

app.get('/display-user-info', (req, res) => {
  let name      = req.query.name;
  let age       = req.query.age;
  let superhero = req.query.superhero;

  res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  `);
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
