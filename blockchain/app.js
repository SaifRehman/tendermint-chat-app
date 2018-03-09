let lotion = require('lotion');
let shea = require('shea')
let lotionPort = 3000;
let opts = {
    lotionPort: lotionPort,
    p2pPort: 46656,
    tendermintPort: 46657,
    abciPort:35597,
    initialState: {
        messages: []
    }
};
let app = lotion(opts)
app.use(function (state, tx) {
        if (tx.message !== '') {
            state.messages.push({
                sender: tx.sender,
                message: tx.message
            });
        }
  })
app.listen(lotionPort).then(genesis => {
    console.log(genesis);
    console.log(appInfo.GCI)
}, err => {
    console.log(err);
})