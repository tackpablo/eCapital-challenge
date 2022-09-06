import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/Employees/EmployeeList";

function App() {
    const [employees, setEmployees] = useState();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            setEmployees(data);
            console.log("EMPLOYEES DATA RETURNED");
        } catch (err) {
            console.log("ERROR FETCHING EMPLOYEES DATA", err);
        }
    }

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <EmployeeList
                                employees={employees}
                                setEmployees={setEmployees}
                                isOpen={isOpen}
                                onOpen={onOpen}
                                onClose={onClose}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
