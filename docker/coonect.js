let { connect } = require('lotion')

async function main() {
  let { send, state } = await connect('0edc9b371a9011764e61913e452a99b6f5deccf64d07f79f80d22fce15efc60a', { nodes: ['http://tendermint-new.mybluemix.net:80'] })

  console.log(await send({ sender: 'keppel', message: 'hey saif' }))
  console.log(await state)
  process.exit()
}

main()