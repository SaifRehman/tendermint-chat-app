let connect = require('lotion-connect')
    async function main() {
      let { state, send } = await connect(null, { 
        genesis: require('./genesis.json'),
        nodes: [ 'ws://173.193.85.162:30090','ws://159.122.181.47:30090' ]
      })
      console.log(await send({ "sender": 'saif',"message":"himom" }))
    }
    main()