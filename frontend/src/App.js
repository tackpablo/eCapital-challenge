import React, { useContext } from "react";
import { employeesContext } from "./Providers/EmployeesProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/Employees/EmployeeList";

function App() {
    const { employees, setEmployees } = useContext(employeesContext);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <EmployeeList
                            employees={employees}
                            setEmployees={setEmployees}
                            // isOpen={isOpen}
                            // onOpen={onOpen}
                            // onClose={onClose}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
