require('dotenv').config({path:'.env-node1'})
let lotion = require ('lotion')
let app = lotion({
    genesis:'./genesis.json',
    tendermintPort:30090,
    p2pPort: 30091,
    initialState:{message:[]},
    logTendermint: true,
    keys: 'privkey0.json',
    peers: ['localhost:30093']
})

app.use((state,tx,chainInfo) => {
    if(typeof tx.sender === 'string' && typeof tx.message === 'string'){
        state.message.push({sender:tx.sender,message:tx.message})
    }
})
app.listen(3000).then(({GCI}) =>{
    console.log(GCI);
})