import React, { useContext } from "react";
import { IconButton, Td, Tr } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { employeesContext } from "../../Providers/EmployeesProvider";
import EditModal from "../Modal/EditModal";
import { deleteEmployeeHandler } from "../../helpers/helpers";

const EmployeeListItem = () => {
    const { employees, setEmployees } = useContext(employeesContext);

    const employeeList = employees?.map((employee) => {
        const salaryFormat = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

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
                        onClick={() =>
                            deleteEmployeeHandler(
                                employee.id,
                                employees,
                                setEmployees
                            )
                        }
                    />
                </Td>
            </Tr>
        );
    });

    return <>{employeeList}</>;
};

export default EmployeeListItem;
