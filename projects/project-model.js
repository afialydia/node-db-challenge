const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	newProject,
	newTask,
	getTasks
};

function getProjects() {
	const projects = db("project")
	
		.select(
			"p.id",
			"p.name",
			"p.description",
			"r.name as resource used",
			"p.notes",
			"p.completed"
		)
		.from("project as p")
		.join("resources as r", "p.resource_id", "r.id");

	const get = projects.map(project => ({
		...project,
		completed: project.completed ? true : false
		// resources: project.null ? "none listed" : ""
    }));
    
	return get;
}

function findById(id) {
	return db("project").where({ id });
}

function newProject(project) {
	return db("project")
		.insert(project, "id")
		.then(ids => {
			const [id] = ids;

			return findById(id);
		});
}

function newTask(task) {
	return db("task")
		.insert(task, "id")
		.then(ids => {
			const [id] = ids;

			return findById(id);
		});
}

function getTasks(id) {
	const tasks = db("task")
		.select(
			"t.task",
			"t.completed",
			"p.name as Project Name",
			"p.description as Project Description",
			"t.id"
		)
		.from("task as t")
		.join("project as p", "p.id", "t.project_id")
		.where({ project_id: id });

	const get = tasks.map(task => ({
		...task,
		completed: task.completed ? true : false
	}));
	return get;
}
