var  connect  = require('lotion')
let GCI = '40afa71f8bf8fef5fcde6caed82275381963ec328934a8e49cc8b5a2cce7ba07'
var state = await connect(GCI)
var send = connect(GCI)
let count =  state.message;
console.log(count) // 0

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