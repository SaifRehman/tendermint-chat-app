require('dotenv').config({path: ".env-node3"});
let shea = require('shea')
let lotion = require('lotion')
let app = lotion({
  tendermintPort: 30090,
  initialState: { messages: [] },
  p2pPort: 30092
})
app.use((state, tx,chainInfo) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.use(shea('www/'))
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})