import * as React from "react";
import { Button } from "@chakra-ui/react";
import AddModal from "../Modal/AddModal";

const AddButton = ({
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
        setModalState("Add");

        console.log("MODAL STATE: ", modalState);
    }

    return (
        <>
            <Button
                colorScheme="blue"
                size="md"
                marginBottom="0.5em"
                alignSelf="end"
                onClick={() => onClickHandler()}
            >
                New
            </Button>

            {modalState && modalState === "Add" && (
                <AddModal
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

export default AddButton;
