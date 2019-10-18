let express = require('express')
let app = express()
let reloadMagic = require('./reload-magic.js')
let Twit = require('twit')
let config = require('./config')

let T = new Twit(config)


reloadMagic(app)

app.use('/', express.static('build')); 
app.use('/', express.static('public')); 



app.get("/trump", function (req,res) {
    T.get('search/tweets', { q: 'Donald Trump', count: 5}, function(err, data, response) {
        res.send(JSON.stringify(data))
      })  
})

app.get("/clinton", function (req,res) {
    T.get('search/tweets', { q: 'Hilary Clinton', count: 5 }, function(err, data, response) {
        res.send(JSON.stringify(data))
      })  
})


app.all('/*', (req, res, next) => { // needed for react router
    res.sendFile(__dirname + '/build/index.html');
})


app.listen(4000, '0.0.0.0', () => { console.log("Server running on port 4000") })
