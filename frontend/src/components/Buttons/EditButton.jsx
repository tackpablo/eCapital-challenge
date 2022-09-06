import * as React from "react";
import EditModal from "../Modal/EditModal";
// import EditModal from "../Modal/EditModal";
import { Button } from "@chakra-ui/react";

const EditButton = ({
    id,
    employees,
    setEmployees,
    isOpen,
    onOpen,
    onClose,
}) => {
    const [modalState, setModalState] = React.useState(false);
    const [selectedEmployee, setSelectedEmployee] = React.useState("");

    function onClickHandler(id) {
        const employeeId = id;
        // console.log("ID: ", employeeId);

        onOpen();
        setSelectedEmployee(employeeId);
        setModalState(true);
    }

    return (
        <>
            <Button
                colorScheme="teal"
                size="sm"
                onClick={() => onClickHandler(id)}
            >
                Edit
            </Button>

            {modalState === true && (
                <EditModal
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
