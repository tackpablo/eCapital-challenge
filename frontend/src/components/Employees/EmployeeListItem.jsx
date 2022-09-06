import * as React from "react";
import { Td, Tr } from "@chakra-ui/react";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

const EmployeeListItem = ({ employees, onDelete, onEdit }) => {
    const employeeList = employees?.map((employee) => {
        const salaryFormat = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        return (
            <Tr key={employee.id}>
                <Td>{employee.first_name}</Td>
                <Td>{employee.last_name}</Td>
                <Td>{salaryFormat.format(employee.salary / 1000000)}</Td>
                <Td>
                    <EditButton onEdit={onEdit(employee.id)} />
                </Td>
                <Td>
                    <DeleteButton onDelete={onDelete(employee.id)} />
                </Td>
            </Tr>
        );
    });

    return <>{employeeList}</>;
};

export default EmployeeListItem;
