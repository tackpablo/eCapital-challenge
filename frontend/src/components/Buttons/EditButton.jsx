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
