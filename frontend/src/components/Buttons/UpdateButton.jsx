import * as React from "react";
import { Button } from "@chakra-ui/react";

const UpdateButton = ({ id, employees, setEmployees }) => {
    async function onUpdateHandler(id) {
        const employeeId = id;
        console.log("ID: ", id);

        if (window.confirm(`Are you sure you want to delete employee?`)) {
            try {
                const url = `/api/employees/${employeeId}`;
                const response = await fetch(url, {
                    method: "PUT",
                });
                // const data = await response.json();
                // console.log("DELETED", data);

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

    return (
        <>
            <Button
                colorScheme="teal"
                size="sm"
                onClick={() => onUpdateHandler(id)}
            >
                Update
            </Button>
        </>
    );
};

export default UpdateButton;
