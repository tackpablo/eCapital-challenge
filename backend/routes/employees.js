const express = require("express");
const router = express.Router();

module.exports = (db) => {
    // GET: BROWSE --- RETRIEVE ALL EMPLOYEE
    router.get("/", async (req, res) => {
        const queryParams = [];
        const queryStr = `SELECT * FROM employees ORDER BY id ASC`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // GET: READ --- RETRIEVE SPECIFIC EMPLOYEE BY ID
    router.get("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `SELECT * FROM employees WHERE id = $1`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json(results.rows);
        });
    });

    // PUT/PATCH: EDIT --- UPDATE DATA FOR SPECIFIC EMPLOYEE ID
    router.put("/:id", async (req, res) => {
        const { id } = req.params;
        const employeeId = Number(id);
        const { first_name, last_name, salary } = req.body;
        const formatSalary = salary;
        const queryParams = [first_name, last_name, formatSalary, employeeId];
        const queryStr = `UPDATE employees SET first_name = $1, last_name = $2, salary = $3 WHERE id = $4 RETURNING *`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // POST: ADD --- ADD NEW EMPLOYEE
    router.post("/", async (req, res) => {
        const first_name = req.body.firstName;
        const last_name = req.body.lastName;
        const salary = req.body.salary;
        const formatSalary = salary;
        const queryParams = [first_name, last_name, formatSalary];
        const queryStr = `INSERT INTO employees (first_name, last_name, salary) VALUES ($1, $2, $3) RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    // DELETE: DELETE --- DELETE EMPLOYEE
    router.delete("/:id", async (req, res) => {
        const { id } = req.params;
        const queryParams = [id];
        const queryStr = `DELETE FROM employees WHERE id = $1 RETURNING *;`;

        await db.query(queryStr, queryParams, (error, results) => {
            if (error) {
                throw error;
            }
            return res.status(200).json({ results });
        });
    });

    return router;
};
