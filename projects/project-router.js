const router = require("express").Router();

const Project = require("./project-model.js");

router.get("/", (req, res) => {
	Project.getProjects()
		.then(projects => {

            // !projects.completed :   :
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to get list of projects" });
		});
});

router.post("/", (req, res) => {
    const projectData = req.body;

    Project.newProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log("Error inserting project:", err);
            res.status(500).json({ message: "Failed to create new project" });
        });
});



router.get("/:id/tasks", (req, res) => {
    const id = req.params.id
    Project.getTasks(id)
		.then(projects => {

            // !projects.completed :   :
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to get list of projects" });
		});
});



router.post("/:id/tasks", (req, res) => {
	const id = parseInt(req.params.id);
    const taskData = { project_id: id, ...req.body}

    Project.newTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            console.log("Error inserting project:", err);
            res.status(500).json({ message: "Failed to create new task"  });
        });
});


module.exports = router;