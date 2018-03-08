var  connect  = require('lotion')
let GCI = '25ad85c182dd6b06d5d6bdc8faa99b7a9894cb40ed27dd4542fd01535b4983dc'
var state = connect(GCI)
console.log(state);

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