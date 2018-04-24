require('dotenv').config({path: ".env-node1"});
let lotion = require('lotion')
// Your blockchain configuration
let app = lotion({
  genesis: './genesis.json',
  tendermintPort: 30090,
  initialState: { messages: [] },
  p2pPort: 30091,
  logTendermint: true, // Enable tendermint logs
  keys: 'privkey0.json', // Your key that has private and public key
  peers: ['localhost:30093'], // Pears/Validator to connect with  
  createEmptyBlocks: false
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})