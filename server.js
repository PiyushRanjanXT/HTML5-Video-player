var express = require('express'),
    app = express(),
    http = require('http').Server(app),
   


// New call to compress content
//app.use(express.compress());

app.get('/*', function(req, res, next) {
    next();

});

//Adding router to serve index html
app.get('/', function(req, res) {

    res.sendFile(__dirname + '/index.html');

});

//Adds the static middleware to serve static content like html/css/js/images etc
//app.use(express.static(__dirname, { maxAge: 86400000 }));
app.use(express.static(__dirname));


	




//In order to send an event to everyone
//io.emit('some event', { for: 'everyone' });

//The http server listens on port 8000
http.listen(8000, function() {
    console.log('listening on *:8000');
});