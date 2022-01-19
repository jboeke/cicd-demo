var sqlite = require('better-sqlite3')
const path = require('path');
const db = new sqlite(path.resolve(__dirname, 'cicd.db'), {fileMustExist: true});

function querywithparams(sql, params) {
  return db.prepare(sql).all(params);
}

function query(sql) {
  return db.prepare(sql).all();
}

module.exports = {
  query,
  querywithparams
}