import * as React from "react";
import { Button } from "@chakra-ui/react";

const UpdateButton = ({
    id,
    editFormValues,
    employees,
    setEmployees,
    onClose,
    setModalState,
}) => {
    async function onUpdateHandler(id) {
        const employeeId = id;
        const employeeData = editFormValues;
        // console.log("ID: ", id);
        // console.log(employeeData);

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
            // console.log("UPDATED", updatedEmployee);

            const newEmployeeList = employees.map(
                (employee) =>
                    updatedEmployee.find(
                        (updated) => updated.id === employee.id
                    ) || employee
            );

            setEmployees(newEmployeeList);
            setModalState("None");
            onClose();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Button
                colorScheme="teal"
                size="md"
                onClick={() => onUpdateHandler(id)}
            >
                Update
            </Button>
        </>
    );
};

export default UpdateButton;
