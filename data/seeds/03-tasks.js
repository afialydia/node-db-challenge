exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("task")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("task").insert([
				{ project_id: 1, task: "Go out and Vote" },
				{ project_id: 1, task: "Vote some more?" },
				{ project_id: 2, task: "Go to the Bronze." },
				{
					project_id: 2,
					task:
						"While at the Bronze creep on dates to see if vampires are about."
				},
				{
					project_id: 2,

					task: "Kill vampire and explain it away to their date."
				}
			]);
		});
};
