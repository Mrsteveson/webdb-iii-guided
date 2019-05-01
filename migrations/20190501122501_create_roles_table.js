// implement changes to the schema
exports.up = function(knex, Promise) {
    return knex.schema.createTable('roles', tbl => {
        // each table needs a primary key
        tbl.increments();

        tbl
            .string('name', 128)
            .notNullable()
            .unique();

        tbl.timestamps(true, true); //create_at and updated_at
    })
};

//undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
