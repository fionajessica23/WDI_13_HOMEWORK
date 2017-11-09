var express = require('express');
var app = express(); // server maker

var logger = require('./logger');
const PORT = 8888;

var pagesController = require('./home')


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(logger);

app.use(express.static('public'));


// app.get('/:name?', function(request, response) {
//   response.render('index', { name: request.params.name });
// });

app.get('/', pagesController.home);
app.get('/:name', pagesController.home);



app.listen(PORT);
