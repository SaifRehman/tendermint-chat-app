require('dotenv').config({path: ".env-node1"});
let lotion = require('lotion')
let app = lotion({
  genesis: './genesis.json',
  tendermintPort: 30090,
  initialState: { messages: [] },
  p2pPort: 30092,
  logTendermint: true,
  keys: 'privkey0.json',
  peers: ['159.122.175.154:30092']
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})