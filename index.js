require("dotenv").config()

const cors =require('cors')

const express = require("express")
const router = require("./router/router")

const server = express()

server.use(cors())
server.use(express.json())
server.use(router)



require("./db/connection")

const port = 5003 || process.env.port;

server.listen(port, () => {
  console.log(`_______server started at the port number ${port}_______...`)
})

