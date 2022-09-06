import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

function App() {
    const [employees, setEmployees] = useState();

    // Initialize employee list on load
    useEffect(() => {
        employeeList();
    }, []);

    // Fetch employee list
    async function employeeList() {
        const url = "/api/employees/";
        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log("DATA: ", data);
            setEmployees(data.returnedData);
            console.log("EMPLOYEES DATA RETURNED");
        } catch (err) {
            console.log("ERROR FETCHING EMPLOYEES DATA", err);
        }
    }

    return (
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<EmployeeList employees={employees} />}
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
