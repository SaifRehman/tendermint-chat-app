let app = require('lotion')({
  genesis: './genesis.json',
  tendermintPort: 46657,
  initialState: { messages: [] },
  p2pPort: 46660,
  logTendermint: true,
  keys: 'privkey0.json',
  devMode: true,
  peers: ['localhost:46661','localhost:46662','localhost:46663']
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})