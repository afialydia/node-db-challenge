const router = require("express").Router();

const Resource = require("./resource-model.js");

router.get("/", (req, res) => {
	Resource.getResources()
		.then(resources => {
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to get list of resources" });
		});
});

router.post("/", (req, res) => {
    const resourceData = req.body;

    Resource.newResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            console.log("Error inserting project:", err);
            res.status(500).json({ message: "Failed to create new resource" });
        });
});




module.exports = router;