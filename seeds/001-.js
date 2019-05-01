
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries (and reset the IDs, when using truncate)
  return knex('roles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {name: 'Web Student'},
        {name: 'Web TA'}
      ]);
    });
};
