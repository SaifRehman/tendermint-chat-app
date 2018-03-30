let app = require('lotion')({
  genesis: './genesis.json',
  initialState: { messages: [] },
  tendermintPort: 46657,
  logTendermint: true,
  peers: ['ws://localhost:30091','ws://localhost:30092'],
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3003).then(({ GCI }) => {
  console.log(GCI)
})