const db = require('../data/db-config.js')

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResource,
    addProject,
    addTask

}

function getResources() {
    return db('resources')
}

function getProjects() {
     return db('projects')
}

function getTasks() {
    return db('tasks')
}

function addResource(resource_obj) {

}

function addProject(project_obj) {

}

function addTask(project_id, task_obj) {

}
