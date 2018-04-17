require('dotenv').config({path: ".env-node2"});
let lotion = require('lotion')
let app = lotion({
  genesis: './genesis.json',
  tendermintPort: 30097,
  initialState: { messages: [] },
  p2pPort: 30098,
  logTendermint: true,
  keys: 'privkey1.json',
  peers: ['localhost:30092']
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3001).then(({ GCI }) => {
  console.log(GCI)
})