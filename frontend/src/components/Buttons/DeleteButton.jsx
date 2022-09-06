import React, { useContext } from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { employeesContext } from "../../Providers/EmployeesProvider";

const DeleteButton = ({ id }) => {
    const { employees, setEmployees } = useContext(employeesContext);

    async function handleDeleteEvent(id) {
        const employeeId = id;
        console.log("ID: ", id);

        if (window.confirm(`Are you sure you want to delete employee?`)) {
            try {
                const url = `/api/employees/${employeeId}`;
                const response = await fetch(url, {
                    method: "DELETE",
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
            <IconButton
                colorScheme="red"
                size="sm"
                icon={<DeleteIcon />}
                onClick={() => handleDeleteEvent(id)}
            />
        </>
    );
};

export default DeleteButton;
