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
//app.route('/').post((req, res) => res.send(req.body))

/** USANDO O PUT*/
let author = 'Gualter Santos'

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})