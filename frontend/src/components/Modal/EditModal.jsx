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
import UpdateButton from "../Buttons/UpdateButton";
import { employeesContext } from "../../Providers/EmployeesProvider";

const EditModal = ({
    id,

    isOpen,
    onClose,
    setModalState,
}) => {
    const { employees, setEmployees } = useContext(employeesContext);

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const employeeInfo = employees.filter((employee) => {
        return employee.id === id;
    });
    console.log("EMPLOYEE INFO: ", employeeInfo);

    const defaultEmployeeObj = {
        firstName: employeeInfo[0].first_name,
        lastName: employeeInfo[0].last_name,
        salary: employeeInfo[0].salary / 1000000,
    };

    console.log("DEFAULT EMPLOYEE OBJ: ", defaultEmployeeObj);
    const [editFormValues, setEditFormValues] =
        React.useState(defaultEmployeeObj);

    function handleFirstNameChange(event) {
        setEditFormValues({ ...editFormValues, firstName: event.target.value });
    }

    function handleLastNameChange(event) {
        setEditFormValues({ ...editFormValues, lastName: event.target.value });
    }

    function handleSalaryChange(event) {
        setEditFormValues({ ...editFormValues, salary: event.target.value });
    }

    function onCloseHandler() {
        setEditFormValues(null);
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
                                placeholder="Last Name"
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
                            <p>Yearly Salary:</p>
                            <Editable
                                width="70%"
                                display="flex"
                                alignItems="left"
                                placeholder="Salary"
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
                            setModalState={setModalState}
                        />
                        <Button onClick={onCloseHandler}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditModal;
