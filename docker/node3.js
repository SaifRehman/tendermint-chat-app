let app = require('lotion')({
    genesis: './genesis.json',
    initialState: { messages: [] },
    p2pPort: 46662,
    tendermintPort: 46659,
    logTendermint: true,
    peers: ['localhost:46661','localhost:46660','localhost:46663'],
    keys: 'privkey2.json',
    devMode: true
  })
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })
  app.listen(3002).then(({ GCI }) => {
    console.log(GCI)
  })