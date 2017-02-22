const express = require('express');

// We create our own server named app
// Express server handling requests and responses
const app = express();
app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<p>Welcome Ironhacker. :)</p>');
});

app.get('/hello', (request, response, next) => {
  response.send(`
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
