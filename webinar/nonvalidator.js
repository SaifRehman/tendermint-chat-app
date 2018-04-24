require('dotenv').config({path:'.env-node3'})
let lotion = require ('lotion')
let app = lotion({
    genesis:'./genesis.json',
    tendermintPort:46657,
    initialState:{message:[]},
    logTendermint: true,
    peers:['ws://localhost:30091','ws://localhost:30093']
})

app.use((state,tx,chainInfo) => {
    if(typeof tx.sender === 'string' && typeof tx.message === 'string'){
        state.message.push({sender:tx.sender,message:tx.message})
    }
})
app.listen(3002).then(({GCI}) =>{
    console.log(GCI);
})