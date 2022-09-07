export async function createEmployeeHandler(
    setEmployees,
    employees,
    setNewFormValues,
    newFormValues,
    defaultEmployeeObj
) {
    const newEmployee = newFormValues;

    try {
        const url = `/api/employees`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newEmployee),
        });
        const data = await response.json();
        const updatedEmployee = data.results.rows[0];

        const newEmployeeList = [...employees, updatedEmployee];

        setEmployees(newEmployeeList);
        setNewFormValues(defaultEmployeeObj);
    } catch (err) {
        console.log(err);
    }
}

export async function updateEmployeeHandler(
    employees,
    setEmployees,
    editFormValues,
    setModalState,
    id
) {
    const employeeId = id;
    const employeeData = editFormValues;

    try {
        const url = `/api/employees/${employeeId}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(employeeData),
        });
        const data = await response.json();
        const updatedEmployee = data.results.rows;

        const newEmployeeList = employees.map(
            (employee) =>
                updatedEmployee.find((updated) => updated.id === employee.id) ||
                employee
        );

        setEmployees(newEmployeeList);
        setModalState("None");
    } catch (err) {
        console.log(err);
    }
}

export async function deleteEmployeeHandler(id, employees, setEmployees) {
    const employeeId = id;

    if (window.confirm(`Are you sure you want to delete employee?`)) {
        try {
            const url = `/api/employees/${employeeId}`;
            await fetch(url, {
                method: "DELETE",
            });

            const newEmployeeList = employees.filter((employee) => {
                return employee.id !== employeeId;
            });

            setEmployees(newEmployeeList);
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("Delete Aborted");
    }
}
