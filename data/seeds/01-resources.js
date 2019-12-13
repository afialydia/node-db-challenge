
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'Garlic', description: "Fashion statement that wards off Vamps" },
        { name: 'Wooden Stake', description: "A good thrust will do" },
        { name: '5 Years of Gymastics', description:'Can be used to avoid baddies' },
      ]);
    });
};
