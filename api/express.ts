const express = require("express");
const app = express();

app.get("/.index.js", (req, res) => res.send("Jithula Bhasitha"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
