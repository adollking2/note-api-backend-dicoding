/* eslint-disable camelcase */
const mapDBTOModel = ({
  id,
  title,
  body,
  tags,
  create_at,
  update_at,
}) => ({
  id,
  title,
  body,
  tags,
  createAt: create_at,
  updateAt: update_at,
});

module.exports = mapDBTOModel;
