let app = require('lotion')({
    genesis: './genesis.json',
    initialState: { messages: [] },
    p2pPort: 46660,
    tendermintPort: 46658,
    logTendermint: true,
    peers: ['localhost:46661'],
    keys: 'privkey2.json',
    devMode: true
  })
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })
  app.listen(3001).then(({ GCI }) => {
    console.log(GCI)
  })