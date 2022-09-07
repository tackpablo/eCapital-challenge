import React, { useContext } from "react";
import {
    Button,
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
import AddModal from "../Modal/AddModal";
import { useDisclosure } from "@chakra-ui/react";
import { modalContext } from "../../Providers/ModalProvider";

const EmployeeList = () => {
    const { modalState, setModalState } = useContext(modalContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    function onAddHandler() {
        onOpen();
        setModalState("Add");
    }

    return (
        <Center h="100vh" w="100vw">
            <Container centerContent>
                <Heading marginRight="1em">Employee List</Heading>
                <Button
                    colorScheme="blue"
                    size="md"
                    marginBottom="0.5em"
                    alignSelf="end"
                    onClick={() => onAddHandler()}
                >
                    New
                </Button>
                {modalState && modalState === "Add" && (
                    <AddModal isOpen={isOpen} onClose={onClose} />
                )}
                <TableContainer borderWidth="1px" borderRadius="lg" maxW="8xl">
                    <Table variant="simple" size="lg">
                        <Thead>
                            <Tr>{employeesHeader}</Tr>
                        </Thead>
                        <Tbody>
                            <EmployeeListItem />
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </Center>
    );
};

export default EmployeeList;
