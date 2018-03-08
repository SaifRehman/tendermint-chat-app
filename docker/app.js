let shea = require('shea')

let app = require('../../../lotion')({
  initialState: { messages: [] },
})

app.use((state, tx) => {
  if (typeof tx.username === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.username, message: tx.message })
  }
})

app.use(shea('./www/index.html'))
app.listen(3000)