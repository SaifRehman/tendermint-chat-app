let shea = require('shea')
let lotion = require('lotion')
let app = lotion({
  genesis: './genesis.json',
  tendermintPort: 46657,
  initialState: { messages: [] },
  p2pPort: 46660,
  logTendermint: true,
  keys: 'privkey0.json',
  peers: ['localhost:46661','localhost:46662','localhost:46663']
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.useBlock(function (state, chainInfo) {
  // do something once per block here
})
app.use(shea('public'))
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})