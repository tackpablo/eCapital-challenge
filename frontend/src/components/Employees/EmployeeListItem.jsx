import React, { useContext } from "react";
import { Td, Tr } from "@chakra-ui/react";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { employeesContext } from "../../Providers/EmployeesProvider";

const EmployeeListItem = ({
    isOpen,
    onOpen,
    onClose,
    modalState,
    setModalState,
}) => {
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
                <Td>{salaryFormat.format(employee.salary / 1000000)}</Td>
                <Td>
                    <EditButton
                        id={employee.id}
                        employees={employees}
                        setEmployees={setEmployees}
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        modalState={modalState}
                        setModalState={setModalState}
                    />
                </Td>
                <Td>
                    <DeleteButton
                        id={employee.id}
                        employees={employees}
                        setEmployees={setEmployees}
                    />
                </Td>
            </Tr>
        );
    });

    return <>{employeeList}</>;
};

export default EmployeeListItem;
