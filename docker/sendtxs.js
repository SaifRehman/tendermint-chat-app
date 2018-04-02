let { connect } = require('lotion')
async function main() {
  let { send } = await connect(null, { genesis: require('./genesis.json'),
   nodes: [] })
  console.log(await send({ sender: 'sendername', message: 'message' }))
  process.exit();
}
main()
