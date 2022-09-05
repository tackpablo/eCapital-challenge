// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const db = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Separated Routes for each Resource
const employeeRoute = require("./routes/employees");

// Mount all resource routes
app.use("/employees", employeeRoute(db));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
