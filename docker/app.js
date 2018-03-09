let shea = require('shea')

let app = require('../../../lotion')({
  tendermintPort:46657,
  initialState: { messages: [] },
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