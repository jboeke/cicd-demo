const express = require("express");
var cors = require('cors');
const db = require("./database.js")

const PORT = 3009;
const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Hello");
  //var sql = "select * from slide;"
  //var rows = db.query(sql, null)
  //res.json(rows)
});

app.get("/:id", (req, res, next) => {
  var sql = "select * from slide where sortorder = ?"
  var params = [req.params.id]
  var rows = db.querywithparams(sql, params)
  if (!rows.length) {
    res.send(404)
  } else {
    res.json(rows[0])
  }
});

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = server;