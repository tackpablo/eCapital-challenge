import React, { useState, useContext } from "react";
import { employeesContext } from "./Providers/EmployeesProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/Employees/EmployeeList";

function App() {
    const { employees, setEmployees } = useContext(employeesContext);
    const [modalState, setModalState] = useState("None");

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <EmployeeList
                            employees={employees}
                            setEmployees={setEmployees}
                            modalState={modalState}
                            setModalState={setModalState}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
