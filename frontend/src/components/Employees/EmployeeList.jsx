import * as React from "react";
import {
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from "@chakra-ui/react";
import EmployeeListItem from "./EmployeeListItem";
import AddButton from "../Buttons/AddButton";

const EmployeeList = ({ employees, setEmployees, isOpen, onOpen, onClose }) => {
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
        <>
            <Container centerContent>
                <TableContainer borderWidth="1px" borderRadius="lg" maxW="8xl">
                    <AddButton />
                    <Table variant="simple" size="md">
                        <Thead>
                            <Tr>{employeesHeader}</Tr>
                        </Thead>
                        <Tbody>
                            <EmployeeListItem
                                employees={employees}
                                setEmployees={setEmployees}
                                isOpen={isOpen}
                                onOpen={onOpen}
                                onClose={onClose}
                            />
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default EmployeeList;
