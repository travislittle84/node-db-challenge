### Business Rules

- a `project` can have multiple `tasks`.
- a `task` belongs to only one `project`.
- a `project` can use multiple `resources`.
- the same `resource` can be used in multiple `projects`.
- when adding `projects` the client must provide a name, the description is optional.
- when adding `resources` the client must provide a name, the description is optional.
- when adding a `task` the client must provide a description, the notes are optional.
- when adding a `task` the client must provide the `id` of an existing project.
- for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.

## PROJECT
A `project` is what needs to be done. We want to store the following data about a `project`:

- [ ] a unique Id.
- [ ] a name. This column is required.
- [ ] a description.
- [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

## RESOURCE
A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] a unique Id.
- [ ] a name. This column is required.
- [ ] a description.

The database should not allow resources with duplicate names.

## TASK
An `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] a unique id.
- [ ] a description of what needs to be done. This column is required.
- [ ] a notes column to add additional information.
- [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

------------------------------------------------------------------

## Table structure

## projects
-project_id
-project_name (required)
-project_description
-project_completed (boolean, default false)

## resources
-resource_id
-resource_name (unique)
-resource_description

## tasks
-task_id
-project_id *foreign id*
-task_description (required)
-task_notes
-task_completed (boolean - default false)

## project_resources
-project_resource_id
-project_id *foreign id*
-resource_id *foreign id*

