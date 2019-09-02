const express = require('express')

const server = express()

server.use(express.json())

const Projects = require('./projects/projects-model.js')

server.get('/', (req, res) => {
    res.send(`<h2>Web DB Sprint Challenge - Travis Little</h2>`)
})


module.exports = server

