import * as React from "react";
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
import UpdateButton from "../Buttons/UpdateButton";

const EditModal = ({
    id,
    employees,
    setEmployees,
    isOpen,
    onClose,
    selectedEmployee,
}) => {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const employeeId = selectedEmployee;
    const employeeInfo = employees.filter((employee) => {
        return employee.id === employeeId;
    });

    const defaultEmployeeObj = {
        firstName: employeeInfo[0].first_name,
        lastName: employeeInfo[0].last_name,
        salary: employeeInfo[0].salary / 1000000,
    };

    // console.log(defaultEmployeeObj);
    const [editFormValues, setEditFormValues] =
        React.useState(defaultEmployeeObj);

    function handleFirstNameChange(event) {
        console.log(event.target.value);
        setEditFormValues({ ...editFormValues, firstName: event.target.value });
    }

    function handleLastNameChange(event) {
        setEditFormValues({ ...editFormValues, lastName: event.target.value });
    }

    function handleSalaryChange(event) {
        setEditFormValues({ ...editFormValues, salary: event.target.value });
    }

    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Employee</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <HStack mt="1em">
                            <p>First Name:</p>
                            <Editable
                                width="70%"
                                display="flex"
                                alignItems="left"
                                placeholder="Employee First Name"
                                value={editFormValues.firstName}
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
                                placeholder="Employee First Name"
                                value={editFormValues.lastName}
                            >
                                <EditablePreview display="flex" width="full" />
                                <EditableInput
                                    display="flex"
                                    onChange={(e) => handleLastNameChange(e)}
                                />
                            </Editable>
                        </HStack>

                        <HStack mt="1em">
                            <p>Salary:</p>
                            <Editable
                                width="70%"
                                display="flex"
                                alignItems="left"
                                placeholder="Employee First Name"
                                value={editFormValues.salary}
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
                        <UpdateButton
                            id={id}
                            onClose={onClose}
                            employees={employees}
                            editFormValues={editFormValues}
                            setEmployees={setEmployees}
                        />
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditModal;
