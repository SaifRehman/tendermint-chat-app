var http = require('http');
let app = require('lotion')({
  initialState: {
      messages: []
  }
})
app.use((state, tx) => {
  state.messages.push({
    sender: tx.sender,
    message: tx.message
});
})
app.listen(process.env.PORT)
