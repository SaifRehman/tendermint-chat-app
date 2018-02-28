let lotion = require('lotion');
let lotionPort = process.env.PORT || 8080;
var express = require("express"),
    app = express();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
let opts = {
    devMode: true,
    lotionPort: lotionPort,
    p2pPort: 46656,
    tendermintPort: 46657,
    initialState: {
        messages: []
    }
};
let lotionapp = lotion(opts)
let msgHandler = (state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
        if (tx.message !== '') {
            state.messages.push({
                sender: tx.sender,
                message: tx.message
            });
        }
    }
}
lotionapp.use(msgHandler);
lotionapp.listen(lotionPort).then(genesis => {
    console.log(genesis);
}, err => {
    console.log(err);
})
// app.get("/sayHello", function (request, response) {
//   var user_name = request.query.user_name;
//   response.end("Hello " + user_name + "!");
// });
// app.listen(port);
// console.log("Listening on port ", port);
// require("cf-deployment-tracker-client").track();