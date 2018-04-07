let { connect } = require('lotion')
async function main() {
  let { send } = await connect(null, { genesis: require('./genesis.json'),
   nodes: ['ws://159.122.175.154:30090','ws://184.173.1.108:30090'] })
  console.log(await send({ sender: 'sendername', message: 'message' }))
  process.exit();
}
main()