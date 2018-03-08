var  connect  = require('lotion')
let GCI = '91d61db1dce394931297b59d584eb723b8009c40d72bb8ec8aeccf4a9ba008b1'
async function send(){
    return (await connect(GCI))
}

send().then(function(state){
    var txs = async function(){
        let result = await send ({ nonce: 0 }).then(function(data){
            console.log(data)
        })
    }();
})
  
// send().then(function(state){
//     var txs = async function(){
//         let result = await send
//     }();
// })
// send().then(function(state){
//     var txs = async function(){
//     //    console.log(await state.count
//     }();
// })
  
// var myCallback = function(data) {
//     console.log('got data: '+data);
//   };
// var  state, send  = await connect(GCI)

// let count =  state.count
// console.log(count) // 0

// let result =  send({ nonce: 0 })
// console.log(result) // { height: 42, ok: true }

// count = await state.count
// console.log(count) // 1