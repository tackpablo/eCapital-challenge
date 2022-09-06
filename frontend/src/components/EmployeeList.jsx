import * as React from "react";
import {
    Center,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from "@chakra-ui/react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ employees }) => {
    const employeesColumn = ["First Name", "Last Name", "Salary"];

    const employeesHeader = employeesColumn.map((column, index) => {
        return <Th key={index}>{column}</Th>;
    });

    return (
        <Center>
            <TableContainer borderWidth="1px" borderRadius="lg" maxW="8xl">
                <Table variant="simple" size="md">
                    <Thead>
                        <Tr>{employeesHeader}</Tr>
                    </Thead>
                    <Tbody>
                        <EmployeeListItem employees={employees} />
                    </Tbody>
                </Table>
            </TableContainer>
        </Center>
    );
};

export default EmployeeList;
