'use strict'

const express = require('express')

let app = express()

app.use(express.static('client/dist'))

app.listen(4000, function () {})
