var path = require('path');
var cors = require('cors')
var request = require('request');
var express = require('express'); 
var expressapp = express();
var bodyParser = require('body-parser');
expressapp.use(express.static(path.join(__dirname, 'www')));
expressapp.use(bodyParser.urlencoded({ extended: true }));
expressapp.use(bodyParser.json());
expressapp.use(cors())

require('dotenv').config({path: ".env-node1"});

var port = 8080;
expressapp.get('/abci_info', function (req, res) {
  request('http://127.0.0.1:46657/abci_info', function (error, response, body) {
    if (!error) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.get('/dump_consensus_state', function (req, res) {
  request('http://127.0.0.1:46657/dump_consensus_state', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.get('/genesis', function (req, res) {
  request('http://127.0.0.1:46657/genesis', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.get('/net_info', function (req, res) {
  request('http://127.0.0.1:46657/net_info', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.get('/num_unconfirmed_txs', function (req, res) {
  request('http://127.0.0.1:46657/num_unconfirmed_txs', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.get('/status', function (req, res) {
  request('http://127.0.0.1:46657/status', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.get('/unconfirmed_txs', function (req, res) {
  request('http://127.0.0.1:46657/unconfirmed_txs', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/abci_query', function (req, res) {
  var path = req.body.path;
  var data = req.body.data;
  var height = req.body.height;
  var prove = req.body.prove;
  var link = "http://127.0.0.1:46657/abci_query?"
  if(path !== undefined && path!==null){
    link = link + "&path=" + '"'+ path + '"'
  }
  if(data !== undefined && data!==null){
    link = link + "&data=" +  '"'+ data + '"'
  }
  if(height !== undefined && height!==null){
    link = link + "&height=" + height
  }
  if(prove !== undefined && prove!==null){
    link = link + "&prove=" + prove
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/block', function (req, res) {
  var height = req.body.height;
  var link = "http://127.0.0.1:46657/block?"
  if(height !== undefined && height!==null){
    link = link + "&height=" + height
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/block_results', function (req, res) {
  var height = req.body.height;
  var link = "http://127.0.0.1:46657/block_results?"
  if(height !== undefined && height!==null){
    link = link + "&height=" + height
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/blockchain', function (req, res) {
  var minHeight = req.body.minHeight;
  var maxHeight = req.body.maxHeight;
  var link = "http://127.0.0.1:46657/blockchain?"
  if(minHeight !== undefined && minHeight!==null){
    link = link + "&minHeight=" + minHeight
  }
  if(maxHeight !== undefined && maxHeight!==null){
    link = link + "&maxHeight=" + maxHeight
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});


expressapp.post('/broadcast_tx_async', function (req, res) {
  var tx = req.body.tx;
  var link = "http://127.0.0.1:46657/broadcast_tx_async?"
  if(tx !== undefined && tx!==null){
    link = link + "&tx=" + '"'+tx +'"'
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/broadcast_tx_commit', function (req, res) {
  var tx = req.body.tx;
  var link = "http://127.0.0.1:46657/broadcast_tx_commit?"
  if(tx !== undefined && tx!==null){
    link = link + "&tx=" + '"'+tx +'"'
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/broadcast_tx_sync', function (req, res) {
  var tx = req.body.tx;
  var link = "http://127.0.0.1:46657/broadcast_tx_sync?"
  if(tx !== undefined && tx!==null){
    link = link + "&tx=" + '"'+tx +'"'
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/commit', function (req, res) {
  var height = req.body.height;
  var link = "http://127.0.0.1:46657/commit?"
  if(height !== undefined && height!==null){
    link = link + "&height=" + height
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/subscribe', function (req, res) {
  var query = req.body.query;
  var link = "http://127.0.0.1:46657/subscribe?"
  if(query !== undefined && query!==null){
    link = link + "&query=" + '"'+query+'"'
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/tx', function (req, res) {
  var hash = req.body.hash;
  var prove = req.body.prove;
  var link = "http://127.0.0.1:46657/tx?"
  if(hash !== undefined && hash!==null){
    link = link + "&hash=" + '"'+hash+'"'
  }
  if(prove !== undefined && prove!==null){
    link = link + "&prove=" + '"'+prove+'"'
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/tx_search', function (req, res) {
  var query = req.body.query;
  var prove = req.body.prove;
  var link = "http://127.0.0.1:46657/tx_search?"
  if(query !== undefined && query!==null){
    link = link + "&query=" + '"'+query+'"'
  }
  if(prove !== undefined && prove!==null){
    link = link + "&prove=" + '"'+prove+'"'
  }
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});


expressapp.get('/state', function (req, res) {
  request('http://127.0.0.1:3000/state', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body));
    }
  })
});

expressapp.post('/txs', function (req, res) {
  var sender = req.body.sender;
  var message = req.body.message;
  var myJSONObject = { "sender": sender, "message": message };
  request({
    url: "http://127.0.0.1:3000/txs",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
  }, function (error, response, body) {
    res.json({ "success": "yes" });
  });
});
expressapp.listen(port)
let app = require('lotion')({
  initialState: { messages: [] },
  tendermintPort: 46657,
  logTendermint: true,
})
app.use((state, tx) => {
  if (typeof tx.sender === 'string' && typeof tx.message === 'string') {
    state.messages.push({ sender: tx.sender, message: tx.message })
  }
})
app.listen(3000).then(({ GCI }) => {
  console.log(GCI)
})