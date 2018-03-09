let { connect } = require('lotion')


// async function main() {
//     var GCI = "f71dab7d6ca3226ebfdc6be1b4b62dbd3a8ec872a2f91cd5035620fc42e67226";
//     let { state, send } = await connect(GCI)

//     // let count = await state.messages
//     // console.log(count) // 0
    
//     // let result = await send({ nonce: 0 })
//     // console.log(result) // { height: 42, ok: true }
    
//     // count = await state.messages
//     // console.log(count) // 1
// }

// main()
//     var GCI = "f71dab7d6ca3226ebfdc6be1b4b62dbd3a8ec872a2f91cd5035620fc42e67226";
let GCI = 'f71dab7d6ca3226ebfdc6be1b4b62dbd3a8ec872a2f91cd5035620fc42e67226'
async function send(){
    return (await connect(GCI))
}

send().then(function(state){
    console.log(state.state.GCI)
    // var txs = async function(){
    //     let result = await send ({ nonce: 0 }).then(function(data){
    //         console.log(data);
    //     })
    // }();
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