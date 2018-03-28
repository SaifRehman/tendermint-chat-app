require('dotenv').config({path: ".env-node1"});

let shea = require('shea')
let lotion = require('lotion')
let app = lotion({
  genesis: './genesis.json',
  tendermintPort: 46657,
  initialState: { messages: [] },
  p2pPort: 46660,
  logTendermint: true,
  keys: 'privkey0.json',
  peers: ['localhost:46661','localhost:46660']
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.useBlock(function (state, chainInfo) {
  // do something once per block here
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})