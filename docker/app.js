let app = require('lotion')({
  genesis: './genesis.json',
  tendermintPort: 46657,
  initialState: { messages: [] },
  p2pPort: 46660,
  logTendermint: true,
  keys: 'privkey1.json',
  devMode: true,
  peers: ['localhost:46660']
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})