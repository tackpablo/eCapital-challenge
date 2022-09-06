import * as React from "react";
import {
    Container,
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from "@chakra-ui/react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    const employeesColumn = [
        "First Name",
        "Last Name",
        "Salary",
        "Edit",
        "Delete",
    ];

    const employeesHeader = employeesColumn.map((column, index) => {
        return <Th key={index}>{column}</Th>;
    });

    return (
        <Container centerContent>
            <TableContainer borderWidth="1px" borderRadius="lg" maxW="8xl">
                <Table variant="simple" size="md">
                    <Thead>
                        <Tr>{employeesHeader}</Tr>
                    </Thead>
                    <Tbody>
                        <EmployeeListItem
                            employees={employees}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default EmployeeList;
