var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port =  8888;       
var router = express.Router();              // get an instance of the express Router

router.get('/get', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
