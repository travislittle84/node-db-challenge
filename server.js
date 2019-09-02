const express = require('express')

const server = express()

server.use(express.json())

const Projects = require('./projects/projects-model.js')

server.get('/', (req, res) => {
    res.send(`<h2>Web DB Sprint Challenge - Travis Little</h2>`)
})

server.get('/api/projects/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting resources from server" })
        })
})

server.get('/api/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            const projectsCopy = projects.map(project => {
                if (project.project_completed === 1) {
                    project.project_completed = true
                } else {
                    project.project_completed = false
                }
                return project
            })
            res.status(200).json(projectsCopy)
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting projects from server" })
        })
})

server.get('/api/projects/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            const tasksCopy = tasks.map(task => {
                if  (task.task_completed ===1) {
                    task.task_completed = true
                } else {
                    task.task_completed = false
                }
                return task
            })
            res.status(200).json(tasksCopy)
        })
        .catch(error => {
            res.status(500).json({ message: "Error getting tasks from server" })
        })
})


module.exports = server

