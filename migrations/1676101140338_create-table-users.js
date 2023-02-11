/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('users',{
    id: {

      type: 'VARCHAR(50)',
      primaryKey: true,
    },
})
};

exports.down = pgm => {
  pgm.dropTable('users');
};
