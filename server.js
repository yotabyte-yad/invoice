var express = require('express');
var app = express();

var bodyParser = require('body-parser');

///DB Configuration
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./book.sqlite"
  }
});


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/createItem', function(req, res){
	console.log(req.body);
	knex.select().table('items')
  .then(function(rows) {
    console.log(rows);
    res.json(rows);
  })
   .catch(function(error) {
    console.error(error)
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

