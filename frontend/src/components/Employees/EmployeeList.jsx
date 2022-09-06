import React, { useContext } from "react";
import {
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Center,
    Heading,
} from "@chakra-ui/react";
import EmployeeListItem from "./EmployeeListItem";
import AddButton from "../Buttons/AddButton";
import { employeesContext } from "../../Providers/EmployeesProvider";

const EmployeeList = ({ isOpen, onOpen, onClose }) => {
    const { employees, setEmployees } = useContext(employeesContext);

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
        <Center h="100vh" w="100vw">
            <Container centerContent>
                <Heading marginRight="1em">Employee List</Heading>
                <AddButton
                    employees={employees}
                    setEmployees={setEmployees}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                />
                <TableContainer borderWidth="1px" borderRadius="lg" maxW="8xl">
                    <Table variant="simple" size="lg">
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
        </Center>
    );
};

export default EmployeeList;
