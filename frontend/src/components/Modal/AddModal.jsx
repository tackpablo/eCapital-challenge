import React, { useContext } from "react";
import {
    Button,
    Editable,
    EditableInput,
    EditablePreview,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { employeesContext } from "../../Providers/EmployeesProvider";
import { onSaveHandler } from "../../helpers/helpers";

const AddModal = ({ isOpen, onClose }) => {
    const { employees, setEmployees } = useContext(employeesContext);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const defaultEmployeeObj = {
        firstName: "",
        lastName: "",
        salary: "",
    };

    const [newFormValues, setNewFormValues] =
        React.useState(defaultEmployeeObj);

    function handleFirstNameChange(event) {
        setNewFormValues({ ...newFormValues, firstName: event.target.value });
    }

    function handleLastNameChange(event) {
        setNewFormValues({ ...newFormValues, lastName: event.target.value });
    }

    function handleSalaryChange(event) {
        setNewFormValues({ ...newFormValues, salary: event.target.value });
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay backgroundColor="white" />
                <ModalContent>
                    <ModalHeader>Add Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <HStack mt="1em">
                            <p>First Name:</p>
                            <Editable
                                width="70%"
                                display="flex"
                                alignItems="left"
                                placeholder="First Name"
                                value={newFormValues.firstName}
                            >
                                <EditablePreview display="flex" width="full" />
                                <EditableInput
                                    display="flex"
                                    onChange={(e) => handleFirstNameChange(e)}
                                />
                            </Editable>
                        </HStack>

                        <HStack mt="1em">
                            <p>Last Name:</p>
                            <Editable
                                width="70%"
                                display="flex"
                                alignItems="left"
                                placeholder="Last Name"
                                value={newFormValues.lastName}
                            >
                                <EditablePreview display="flex" width="full" />
                                <EditableInput
                                    display="flex"
                                    onChange={(e) => handleLastNameChange(e)}
                                />
                            </Editable>
                        </HStack>

                        <HStack mt="1em">
                            <p>Yearly Salary:</p>
                            <Editable
                                width="70%"
                                display="flex"
                                alignItems="left"
                                placeholder="Salary"
                                value={newFormValues.salary}
                            >
                                <EditablePreview display="flex" width="full" />
                                <EditableInput
                                    display="flex"
                                    onChange={(e) => handleSalaryChange(e)}
                                />
                            </Editable>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            size="md"
                            onClick={() => {
                                onSaveHandler(
                                    setEmployees,
                                    employees,
                                    setNewFormValues,
                                    newFormValues,
                                    defaultEmployeeObj
                                );
                                onClose();
                            }}
                        >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddModal;
