
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128).notNullable()
        tbl.string('project_description', 255)
        tbl.boolean('project_completed').notNullable().defaultTo(0)
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128).notNullable().unique()
        tbl.string('resource_description', 255)
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('task_description', 128).notNullable()
        tbl.string('task_notes', 255)
        tbl.boolean('task_completed').notNullable().defaultTo(0)
    })
    .createTable('project_resources', tbl => {
        tbl.increments('project_resource_id')
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('project_id')
            .inTable('projects')
        tbl.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('resource_id')
            .inTable('resources')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
