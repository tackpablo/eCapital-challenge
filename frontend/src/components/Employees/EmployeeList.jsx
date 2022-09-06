import * as React from "react";
import {
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Center,
} from "@chakra-ui/react";
import EmployeeListItem from "./EmployeeListItem";
import AddButton from "../Buttons/AddButton";

const EmployeeList = ({
    employees,
    setEmployees,
    isOpen,
    onOpen,
    onClose,
    modalState,
    setModalState,
}) => {
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
                <AddButton
                    justify="right"
                    employees={employees}
                    setEmployees={setEmployees}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    modalState={modalState}
                    setModalState={setModalState}
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
                                modalState={modalState}
                                setModalState={setModalState}
                            />
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </Center>
    );
};

export default EmployeeList;
