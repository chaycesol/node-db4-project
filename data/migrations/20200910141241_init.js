
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('recipe_name', 255)
        .unique()
        .notNullable();
    })
    .createTable('shoppingList', tbl => {
        tbl.increments();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
    })
    .createTable('units', tbl =>{
        tbl.increments();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('measurements')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('shoppingList')
    .dropTableIfExists('units')
};
