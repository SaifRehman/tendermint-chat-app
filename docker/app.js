let lotion = require('lotion');
let lotionPort = 3000;
let opts = {
    lotionPort: lotionPort,
    p2pPort: 46656,
    tendermintPort: 46657,
    abciPort:35597,
    initialState: []
};
let lotionapp = lotion(opts)
lotionapp.listen(lotionPort).then(genesis => {
    console.log(genesis);
}, err => {
    console.log(err);
})