let app = require('lotion')({
  genesis: './genesis.json',
  initialState: { messages: [] },
  tendermintPort: 46657,
  logTendermint: true,
<<<<<<< HEAD
  peers: ['ws://159.122.175.154:30092','ws://184.173.1.108:30092'],
=======
  peers: ['ws://184.173.1.108:30090','ws://159.122.175.154:30090',"ws://168.1.149.33:30090"],
>>>>>>> e91a95a114fd966b690a7a84732fea34f6d5fbcc
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})