let shea = require('shea')
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
let app = require('lotion')({
  lotionPort: 3000,
  p2pPort: 46656,
  tendermintPort: 46657,
  abciPort:35597,
  initialState: {
      messages: []
  }
})
app.use((state, tx) => {
  state.messages.push({
    sender: tx.sender,
    message: tx.message
});
})
app.use(shea('./public/index.html'))
app.listen(3000)

var serve = serveStatic("./");

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});

server.listen(8080);