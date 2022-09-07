import React, { useContext } from "react";
import { IconButton, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { employeesContext } from "../../Providers/EmployeesProvider";
import EditModal from "../Modal/EditModal";

const EmployeeListItem = () => {
    const { employees, setEmployees } = useContext(employeesContext);

    const employeeList = employees?.map((employee) => {
        const salaryFormat = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        async function handleDeleteEvent(id) {
            const employeeId = id;
            // console.log("ID: ", id);

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
            <Tr key={employee.id}>
                <Td>{employee.first_name}</Td>
                <Td>{employee.last_name}</Td>
                <Td>{salaryFormat.format(employee.salary)}</Td>
                <Td>
                    <EditModal id={employee.id} />
                </Td>
                <Td>
                    <IconButton
                        colorScheme="red"
                        size="sm"
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteEvent(employee.id)}
                    />
                </Td>
            </Tr>
        );
    });

    return <>{employeeList}</>;
};

export default EmployeeListItem;
