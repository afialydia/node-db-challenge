exports.up = function(knex) {
	return knex.schema
		.createTable("resources", t => {
			t.increments("id");

			t.string("name")
				.notNullable()
				.unique();

			t.string("description");
		})

		.createTable("project", t => {
			t.increments("id");

			t.string("name")
				.notNullable();

			t.string("description").notNullable();

			t.string("notes");

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

            t.string("task").notNullable();

            t.boolean("completed").defaultTo(false);

		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("task")
		.dropTableIfExists("project")
		.dropTableIfExists("resources");
};
