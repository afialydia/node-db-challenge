exports.up = function(knex) {
	return knex.schema
		.createTable("resources", t => {
			t.increments("id");

			t.text("name")
				.notNullable()
				.unique();

			t.text("description");
		})

		.createTable("project", t => {
			t.increments("id");

			t.text("name")
				.notNullable();

			t.text("description").notNullable();

            t.text("notes");
            
            t. t.specificType('stringarray')

			t.integer("resource_id")
				.unsigned()
                .references("id")
                .inTable("resources")
				.onUpdate("CASCADE")
				.onDelete("CASCADE")

			t.boolean("completed").defaultTo(false);
		})

		.createTable("task", t => {
			t.increments("id");

			t.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("project")
				.onUpdate("CASCADE")
				.onDelete("CASCADE");

			t.integer("step_number").notNullable();

            t.text("step").notNullable();

            t.boolean("completed").defaultTo(false);

		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("task")
		.dropTableIfExists("project")
		.dropTableIfExists("resources");
};
