import * as React from "react";
import { Td, Tr } from "@chakra-ui/react";

const EmployeeListItem = ({ employees }) => {
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
            </Tr>
        );
    });

    return <>{employeeList}</>;
};

export default EmployeeListItem;
