let { connect } = require('lotion')
async function main() {
  let { send } = await connect(null, { genesis: require('./genesis.json'),
   nodes: ['ws://184.173.1.108:30090','ws://159.122.175.154:30090'] })
  console.log(await send({ sender: 'keppel', message: 'hey saif' }))
  process.exit();
}
main()
