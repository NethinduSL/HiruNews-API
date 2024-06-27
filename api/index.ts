const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Working"));

app.listen(8000, () => console.log("Server ready on port 8000."));

module.exports = app;
