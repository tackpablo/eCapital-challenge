import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import AddModal from "../Modal/AddModal";
import { employeesContext } from "../../Providers/EmployeesProvider";
import { modalContext } from "../../Providers/ModalProvider";

const AddButton = ({ isOpen, onOpen, onClose }) => {
    const { employees, setEmployees } = useContext(employeesContext);
    const { modalState, setModalState } = useContext(modalContext);

    function onClickHandler() {
        onOpen();
        setModalState("Add");
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
