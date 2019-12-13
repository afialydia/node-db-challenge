const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	newProject,
	newTask,
	getTasks
	
};

function getProjects() {
	return db("project");
}

function findById(id) {
    return db("project")
        .where({ id })
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

function getTasks(id){
	return db("task")
	.where({project_id: id})
	
}
