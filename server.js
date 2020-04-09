//Install express server
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/final-a2"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/final-a2/index.html"));
});


app.listen(process.env.PORT || 4000);