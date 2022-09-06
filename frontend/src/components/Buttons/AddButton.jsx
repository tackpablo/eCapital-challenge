import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import AddModal from "../Modal/AddModal";
import { employeesContext } from "../../Providers/EmployeesProvider";

const AddButton = ({ isOpen, onOpen, onClose, modalState, setModalState }) => {
    const { employees, setEmployees } = useContext(employeesContext);

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
