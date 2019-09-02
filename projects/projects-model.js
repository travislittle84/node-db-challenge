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
    return db('resources')
        .insert(resource_obj)
}

function addProject(project_obj) {
    return db('projects')
        .insert(project_obj)
}

function addTask(task_obj) {
    return db('tasks')
        .insert(task_obj)
}
