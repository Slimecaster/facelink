const express = require ('express')
const mongoose = require('mongoose')
const router = express.Router()
const port = 3000
const app = express()


app.listen(port, () => console.log(`http://localhost:${port}`))