import React, { useContext } from "react";
import {
    Button,
    Container,
    Table,
    Thead,
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
        "first_name",
        "last_name",
        "salary",
        "Edit",
        "Delete",
    ];

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
                            <Tr>
                                {employeesColumn.map((column, index) => {
                                    return <Th key={index}>{column}</Th>;
                                })}
                            </Tr>
                        </Thead>

                        <EmployeeListItem
                            headers={employeesColumn.slice(
                                0,
                                employeesColumn.length - 2
                            )}
                        />
                    </Table>
                </TableContainer>
            </Container>
        </Center>
    );
};

export default EmployeeList;
