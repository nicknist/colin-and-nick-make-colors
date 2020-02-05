
exports.up = function(knex) {
  return knex.schema
    .createTable('palettes', table => {
      table.increments('id').primary();
      table.string('title');
      table.string('color1');
      table.string('color2');
      table.string('color3');
      table.string('color4');
      table.string('color5');
      table.timestamps(true, true);
    })
    .createTable('projects', table => {
      table.increments('id').primary();
      table.string('title');
      table.integer('palette1_id').unsigned();
      table.foreign('palette1_id').references('palettes.id');
      table.integer('palette2_id').unsigned();
      table.foreign('palette2_id').references('palettes.id');
      table.integer('palette3_id').unsigned();
      table.foreign('palette3_id').references('palettes.id');
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('projects')
    .dropTable('palettes')
};
