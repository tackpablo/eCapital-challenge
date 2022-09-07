export async function onSaveHandler(
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

export async function onUpdateHandler(
    id,
    editFormValues,
    employees,
    setModalState,
    setEmployees
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
