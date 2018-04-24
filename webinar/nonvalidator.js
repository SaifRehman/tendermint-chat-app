require('dotenv').config({path: ".env-node3"});
let app = require('lotion')({
  genesis: './genesis.json',
  initialState: { messages: [] },
  tendermintPort: 46657,
  logTendermint: true,
  peers: ['ws://159.122.181.47:30092','ws://173.193.85.162:30092']
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3002).then(({ GCI }) => {
  console.log(GCI)
})