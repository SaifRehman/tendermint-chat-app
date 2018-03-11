var path = require('path');
var cors = require('cors')
var request = require('request');
var express    = require('express');        // call express
var expressapp        = express();                 // define our app using express
var bodyParser = require('body-parser');
expressapp.use(express.static(path.join(__dirname, 'public')));
expressapp.use(bodyParser.urlencoded({ extended: true }));
expressapp.use(bodyParser.json());
var port =  8080;       
expressapp.get('/api/get',cors(), function(req, res) {
request('http://127.0.0.1:3000/state', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
        res.json(JSON.parse(body));   
     }
})
});
expressapp.post('/api/post',cors(), function(req, res) {
  var sender = req.body.sender;
  var message = req.body.message;
  var myJSONObject = {"sender":sender,"message":message};
  console.log(myJSONObject);
  request({
      url: "http://127.0.0.1:3000/txs",
      method: "POST",
      json: true,   // <--Very important!!!
      body: myJSONObject
  }, function (error, response, body){
    console.log(body);
    res.json({"success":"yes"});   
  });
});
expressapp.listen(port)
console.log('Magic happens on port ' + port);
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