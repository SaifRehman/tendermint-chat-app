let app = require('lotion')({
    genesis: './genesis.json',
    initialState: { messages: [] },
    p2pPort: 46663,
    tendermintPort: 46655,
    logTendermint: true,
    peers: ['localhost:46661','localhost:46662','localhost:46660'],
    keys: 'privkey3.json',
    devMode: true
  })
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })
  app.listen(3003).then(({ GCI }) => {
    console.log(GCI)
  })