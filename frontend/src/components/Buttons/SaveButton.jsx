import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { employeesContext } from "../../Providers/EmployeesProvider";

const SaveButton = ({
    newFormValues,
    onClose,
    defaultEmployeeObj,
    setNewFormValues,
}) => {
    const { employees, setEmployees } = useContext(employeesContext);

    async function onSaveHandler() {
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
            onClose();
            setNewFormValues(defaultEmployeeObj);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Button
                colorScheme="teal"
                size="md"
                onClick={() => onSaveHandler()}
            >
                Save
            </Button>
        </>
    );
};

export default SaveButton;
