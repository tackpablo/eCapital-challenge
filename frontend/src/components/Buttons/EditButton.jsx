import * as React from "react";
import EditModal from "../Modal/EditModal";
import { Button } from "@chakra-ui/react";

const EditButton = ({
    id,
    employees,
    setEmployees,
    isOpen,
    onOpen,
    onClose,
    modalState,
    setModalState,
}) => {
    const [selectedEmployee, setSelectedEmployee] = React.useState(null);

    function editHandler(id) {
        const employeeId = id;
        onOpen();
        setModalState("Edit");
        setSelectedEmployee(employeeId);
    }

    return (
        <>
            <Button
                colorScheme="teal"
                size="sm"
                onClick={() => editHandler(id)}
            >
                Edit
            </Button>

            {modalState === "Edit" && (
                <EditModal
                    id={id}
                    selectedEmployee={selectedEmployee}
                    employees={employees}
                    setEmployees={setEmployees}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                />
            )}
        </>
    );
};

export default EditButton;
