let shea = require('shea')
let genesis = require.resolve('./genesis.json');
let app = require('./lotion')({
  lotioPort:3000,
  initialState: { messages: [] },
  devMode: true
})
  app.use((state, tx) => {
    if (typeof tx.username === 'string' && typeof tx.message === 'string') {
      state.messages.push({ username: tx.username, message: tx.message })
    }
  })
  app.use(shea('./index.html'))
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
