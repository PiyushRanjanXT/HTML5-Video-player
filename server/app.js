/**
* Global modules
*/
var express = require('express');
var bodyParser = require('body-parser');
var app = express()
const MongoClient = require('mongodb').MongoClient;
var db

//Using body parser to parse request body
app.use(bodyParser.json({ type: '' }));


//CORS middleware
var allowCrossDomain = function(req, res, next) {
    //res.header('Access-Control-Allow-Origin', 'example.com');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next();
}

app.use(allowCrossDomain); 

/*
*connecting to database
*/
MongoClient.connect('mongodb://videolabuser:videolabuser@ds147069.mlab.com:47069/video-lab', (err, database) => {
  if (err) return console.log(err)
  db = database
  
  /*
  *Start Server
  */
  app.listen(3000, () => {
	  console.log('Server started: http://localhost:3000');
  })
});


/*
* post request to save video Object
*/
app.post('/video', (req, res) => {
    console.log(req.body);
  db.collection('video').save(req.body, (err, result) => {
      
    if (err) return console.log(err)
     res.send(JSON.stringify({ status: 'saved to database' }));
  })
});

/*
* Get request to fetch video Object
*/
app.get('/video', (req, res) => {
  db.collection('video').find().toArray(function(err, results) {
     
      res.send(JSON.stringify(results));
  });
});