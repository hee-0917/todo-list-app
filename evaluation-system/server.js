const express = require("express");
const sql = require("mssql");
const bodyParser = require("body-parser");
const path = require("path");
const dbConfig = require("./database/config");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
