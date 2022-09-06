const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL EMPLOYEE
    router.get("/", (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM employees ORDER BY id ASC`;

        db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC EMPLOYEE BY ID
    router.get("/:id", (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM employees WHERE id = $1`;

        db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC EMPLOYEE ID
    router.put("/:id", (req, res) => {
        const { id } = req.params;
        const { first_name, last_name, salary } = req.body;
        const queryParams = [first_name, last_name, salary, id];
        const queryStr = `UPDATE employees SET first_name = $1, last_name = $2, salary = $3 WHERE id = $4`;

        db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Employee modified with ID: ${id}`);
        });
    });

    // POST: ADD --- ADD NEW EMPLOYEE
    router.post("/", (req, res) => {
        const { first_name, last_name, salary } = req.body;
        const queryParams = [first_name, last_name, salary];
        const queryStr = `INSERT INTO employees (first_name, last_name, salary) VALUES ($1, $2, $3) RETURNING *;`;

        db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(
                `Employee added with ID: ${results.rows[0].id}`
            );
        });
    });

    // DELETE: DELETE --- DELETE EMPLOYEE
    router.delete("/:id", (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM employees WHERE id = $1 RETURNING *;`;

        db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`Employee deleted with ID: ${id}`);
        });
    });

    return router;
};
