<<<<<<< HEAD
let app = require('lotion')({
    // genesis: './genesis.json',
    tendermintPort: 46659,
    initialState: { messages: [] },
    p2pPort: 46662,
    devMode: true,
    // peers: ['localhost:46660','localhost:46661']
  })
  app.use((state, tx) => {
    if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
      state.messages.push({ sender: tx.sender, message: tx.message })
    }
  })
  app.listen(3003).then(({ GCI }) => {
    console.log(GCI)
  })


=======
let { connect } = require('lotion')
async function main() {
  let { send } = await connect(null, { genesis: require('./genesis.json'), nodes: ['ws://localhost:46659','ws://localhost:46657','ws://localhost:46658','ws://localhost:46655'] })
  console.log(await send({ sender: 'keppel', message: 'hey saif' }))
  console.log('exitttttttttttttttttttt')
  process.exit();
}
main()
>>>>>>> 90f0fcef1977b04052750ec71f2ec6f64b208386
