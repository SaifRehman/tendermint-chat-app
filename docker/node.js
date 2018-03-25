let { connect } = require('lotion')
async function main() {
  let { send } = await connect(null, { genesis: require('./genesis.json'), nodes: ['ws://localhost:46659','ws://localhost:46657','ws://localhost:46658','ws://localhost:46655'] })
  console.log(await send({ sender: 'keppel', message: 'hey saif' }))
  console.log('exitttttttttttttttttttt')
  process.exit();
}
main()