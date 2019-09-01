const express = require('express')

const server = express()

server.use(express.json())

const Projects = require('./projects/projects-model.js')




module.exports = server

