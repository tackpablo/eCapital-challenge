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
import { useDisclosure } from "@chakra-ui/react";
import { employeesContext } from "../../Providers/EmployeesProvider";
import { modalContext } from "../../Providers/ModalProvider";

const EditModal = ({ id }) => {
    const { employees, setEmployees } = useContext(employeesContext);
    const { setModalState } = useContext(modalContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const employeeInfo = employees.find((employee) => {
        return employee.id === id;
    });

    const [editFormValues, setEditFormValues] = React.useState(employeeInfo);
    function handleFirstNameChange(event) {
        console.log(event.target.value);
        setEditFormValues({
            ...editFormValues,
            first_name: event.target.value,
        });
    }

    function handleLastNameChange(event) {
        setEditFormValues({ ...editFormValues, last_name: event.target.value });
    }

    function handleSalaryChange(event) {
        const salary = Number(event.target.value);
        setEditFormValues({
            ...editFormValues,
            salary,
        });
    }

    async function onUpdateHandler(id) {
        const employeeId = id;
        const employeeData = editFormValues;

        try {
            const url = `/api/employees/${employeeId}`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(employeeData),
            });
            const data = await response.json();
            const updatedEmployee = data.results.rows;
            // console.log("UPDATED", updatedEmployee);

            const newEmployeeList = employees.map(
                (employee) =>
                    updatedEmployee.find(
                        (updated) => updated.id === employee.id
                    ) || employee
            );

            setEmployees(newEmployeeList);
            setModalState("None");
            onClose();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme="teal" size="sm">
                Edit
            </Button>
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
                                value={editFormValues.first_name}
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
                                value={editFormValues.last_name}
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
                        <Button
                            colorScheme="teal"
                            size="md"
                            onClick={() => onUpdateHandler(editFormValues.id)}
                        >
                            Update
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditModal;
