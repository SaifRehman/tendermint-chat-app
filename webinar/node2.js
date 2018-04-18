require('dotenv').config({path: ".env-node2"});
let lotion = require('lotion')
let app = lotion({
  genesis: './genesis.json',
  tendermintPort: 30092,
  initialState: { messages: [] },
  p2pPort: 30093,
  logTendermint: true,
  keys: 'privkey1.json',
  peers: ['localhost:30091'],
  createEmptyBlocks: false
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3001).then(({ GCI }) => {
  console.log(GCI)
})