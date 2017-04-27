'use strict'

const express = require('express')

let app = express();

app.use(express.static('client/dist'));

let listener = app.listen(4000, function () {});
