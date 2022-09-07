import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/Employees/EmployeeList";

function App() {
    const [modalState, setModalState] = useState("None");

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <EmployeeList
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
