const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	newProject,
	newTask,
	getTasks
};

function getProjects() {
	const projects = db("project").select(
		"id",
		"name",
		"description",
		"completed"
	);
	const get = projects.map(project => ({
		...project,
		completed: project.completed ? true : false
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
    
    const tasks = db("task").select('t.id', 'p.name','t.task','t.completed')
    .from("task as t").join("project as p", "p.id", "t.project_id")
    .where({ project_id: id });

    const get = tasks.map(task => ({
		...task,
		completed: task.completed ? true : false
	}));
	return get;
}
