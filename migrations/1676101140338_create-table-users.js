/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users',{
        id: {

         },
    })
};

exports.down = pgm => {
    pgm.dropTable('users');
};
