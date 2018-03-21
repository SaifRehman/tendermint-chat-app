let app = require('lotion')({
    genesis: './genesis.json',
    tendermintPort: 46659,
    initialState: { messages: [] },
    p2pPort: 46662,
    devMode: true,
    peers: ['localhost:46660','localhost:46661']
  })
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })
  app.listen(3003).then(({ GCI }) => {
    console.log(GCI)
  })