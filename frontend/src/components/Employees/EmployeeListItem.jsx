import React, { useContext } from "react";
import { Td, Tr } from "@chakra-ui/react";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { employeesContext } from "../../Providers/EmployeesProvider";
import EditModal from "../Modal/EditModal";

const EmployeeListItem = () => {
    const { employees } = useContext(employeesContext);

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
                    <EditModal id={employee.id} />
                </Td>
                <Td>
                    <DeleteButton id={employee.id} />
                </Td>
            </Tr>
        );
    });

    return <>{employeeList}</>;
};

export default EmployeeListItem;
