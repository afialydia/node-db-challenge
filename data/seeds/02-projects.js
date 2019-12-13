exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("project")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("project").insert([
				{
					name: "Dismantle Monarch",
					description: " Someone's gotta do it",
					notes: null,
					resource_id: null,
					completed: false
				},
				{
					name: "Slay all Day",
					description: " Buffy died twice, heres hoping you don't ",
					notes: "use caution",
					resource_id: 2,
					completed: false
				}
			]);
		});
};
