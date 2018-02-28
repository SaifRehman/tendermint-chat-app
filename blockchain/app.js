let lotion = require('lotion');
let lotionPort = 3000;
let opts = {
    lotionPort: lotionPort,
    p2pPort: 46656,
    tendermintPort: 46657,
    abciPort: 35597,
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