const express = require('express')

const app = express()

app.listen('3000')

/**USANDO O GET */
/*app.route('/').get((req, res) => res.send('Hello'))
app.route('/sobre').get((req, res) => res.send('Hello sobre'))*/


//middleware
app.use(express.json())

/** USANDO O POST*/
//app.route('/').post((req, res) => console.log(req.body))
app.route('/').post((req, res) => res.send(req.body))