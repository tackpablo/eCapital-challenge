import { createContext, useState, useEffect } from "react";

export const employeesContext = createContext();

export default function EmployeesProvider(props) {
    const [employees, setEmployees] = useState();

    useEffect(() => {
        employeeList();
    }, []);

    // Fetch employee list
    async function employeeList() {
        const url = "/api/employees/";

        try {
            const response = await fetch(url);
            const data = await response.json();

            // console.log("DATA: ", data);
            setEmployees(data);
            // console.log("EMPLOYEES DATA RETURNED");
        } catch (err) {
            console.log("ERROR FETCHING EMPLOYEES DATA", err);
        }
    }

    const employeeData = { employees, setEmployees };

    return (
        <employeesContext.Provider value={employeeData}>
            {props.children}
        </employeesContext.Provider>
    );
}
