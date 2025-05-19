const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

//manage require
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
    debug('listen on port' + chalk.green(":" + port))
})