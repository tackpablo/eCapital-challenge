import React, { useContext } from "react";
import EditModal from "../Modal/EditModal";
import { Button } from "@chakra-ui/react";
import { employeesContext } from "../../Providers/EmployeesProvider";

const EditButton = ({
    id,
    isOpen,
    onOpen,
    onClose,
    modalState,
    setModalState,
}) => {
    const { employees, setEmployees } = useContext(employeesContext);

    function onClickHandler() {
        onOpen();
        setModalState("Edit");
    }

    return (
        <>
            <Button
                colorScheme="teal"
                size="sm"
                onClick={() => onClickHandler()}
            >
                Edit
            </Button>

            {modalState && modalState === "Edit" && (
                <EditModal
                    id={id}
                    employees={employees}
                    setEmployees={setEmployees}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    setModalState={setModalState}
                />
            )}
        </>
    );
};

export default EditButton;
