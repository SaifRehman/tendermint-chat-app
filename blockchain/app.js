let lotion = require('lotion');
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
let lotionapp = lotion(opts)
lotionapp.use(function (state, tx) {
        if (tx.message !== '') {
            state.messages.push({
                sender: tx.sender,
                message: tx.message
            });
        }
  })

lotionapp.listen(lotionPort).then(genesis => {
    console.log(genesis);
}, err => {
    console.log(err);
})