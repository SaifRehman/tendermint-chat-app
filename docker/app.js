let shea = require('shea')
let genesis = require.resolve('./genesis.json');

let app = require('lotion')({
  devMode:true,
  lotionPort: 3000,
  p2pPort: 46656,
  tendermintPort: 46657,
  peers:['51.15.142.59:46656'],
  initialState: { messages: [] },
})


async function main() {
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

  process.on('unhandledRejection', function(reason, p){
    console.log('Please report the following error as a Github Issue on: ')
    console.log(
        ` 
        Please report the following error as a Github Issue on:
        https://github.com/devslopes/blockchat
        `
    )
    console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
    console.trace();
});
}

main()