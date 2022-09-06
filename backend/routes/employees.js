const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL EMPLOYEE
    router.get("/", (req, res) => {
        res.send("ALL EMPLOYEES");
    });

    // GET: READ --- RETRIEVE SPECIFIC EMPLOYEE BY ID
    router.get("/:id", (req, res) => {
        res.send("EMPLOYEE BY ID");
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC EMPLOYEE ID
    router.put("/:id", (req, res) => {
        res.send("EDIT EMPLOYEE");
    });

    // POST: ADD --- ADD NEW EMPLOYEE
    router.post("/:id", (req, res) => {
        res.send("ADD NEW EMPLOYEE");
    });

    // DELETE: DELETE --- DELETE EMPLOYEE
    router.delete("/:id", (req, res) => {
        res.send("DELETE EMPLOYEE");
    });

    return router;
};
