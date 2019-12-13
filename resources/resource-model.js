const db = require("../data/db-config.js");

module.exports = {
	getResources,
	findById,
	newResource
	
};

function getResources() {
	return db("resources");
}

function findById(id) {
    return db("resources")
        .where({ id })
}

function newResource(resource) {
    return db("resources")
        .insert(resource, "id")
        .then(ids => {
            const [id] = ids;

            return findById(id);
        });
}