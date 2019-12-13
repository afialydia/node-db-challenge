exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("task")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("task").insert([
				{ project_id: 1, step_number: 1, step: "Go out and Vote" },
				{ project_id: 1, step_number: 2, step: "Vote some more?" },
				{ project_id: 2, step_number: 1, step: "Go to the Bronze." },
				{
					project_id: 2,
					step_number: 2,
					step:
						"While at the Bronze creep on dates to see if vampires are about."
				},
				{
					project_id: 2,
					step_number: 3,
					step: "Kill vampire and explain it away to their date."
				}
			]);
		});
};
