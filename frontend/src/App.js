import React, { useState, useContext } from "react";
import { employeesContext } from "./Providers/EmployeesProvider";
import { useDisclosure } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/Employees/EmployeeList";

function App() {
    const { employees, setEmployees } = useContext(employeesContext);
    const [modalState, setModalState] = useState("None");
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
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
