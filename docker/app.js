var https = require('https');
var fs = require('fs');
var sslOptions = {
  key: fs.readFileSync('key.pem', 'utf8'),
  cert: fs.readFileSync('cert.pem', 'utf8'),
  passphrase: '12345'
};
let shea = require('shea')
var cors = require('cors')
let genesis = require.resolve('./genesis.json');
let app = require('lotion')({
  lotioPort:3000,
  tendermintPort:46657,
  initialState: { messages: [] },
  devMode: true
})
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })
  app.listen(3000).then(function(data){
    console.log('data iss',data)
  })
  var http = require('http');
  var finalhandler = require('finalhandler');
  var serveStatic = require('serve-static');
  var serve = serveStatic("./");
  var server = http.createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
  });
  server.listen(8000);

var express    = require('express');        // call express
var expressapp        = express();                 // define our app using express
var bodyParser = require('body-parser');
expressapp.use(bodyParser.urlencoded({ extended: true }));
expressapp.use(bodyParser.json());
var port =  8888;       
var router = express.Router();              // get an instance of the express Router
var request = require('request');
router.get('/get', function(req, res) {
  
request('http://localhost:3000/state', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
        res.json(JSON.parse(body));   
     }
})
});

router.post('/post', function(req, res) {
  var sender = req.body.sender;
  var message = req.body.message;

  var myJSONObject = {"sender":sender,"message":message};
  console.log(myJSONObject);
  request({
      url: "http://localhost:3000/txs",
      method: "POST",
      json: true,   // <--Very important!!!
      body: myJSONObject
  }, function (error, response, body){
    console.log(body);
    res.json({"success":"yes"});   
  });

});
expressapp.use('/api', router);
expressapp.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://51.15.142.59:8888');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
expressapp.use(cors({credentials: true, origin: true}))
https.createServer(sslOptions, expressapp).listen(port)
console.log('Magic happens on port ' + port);
