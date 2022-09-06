import * as React from "react";
import EditModal from "../Modal/EditModal";
// import EditModal from "../Modal/EditModal";
import { Button } from "@chakra-ui/react";

const EditButton = ({ employees, setEmployees, isOpen, onOpen, onClose }) => {
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [modalState, setModalState] = React.useState(false);

    function onClickHandler() {
        onOpen();
        setModalState(true);
    }

    return (
        <>
            <Button colorScheme="teal" size="sm" onClick={onClickHandler}>
                Edit
            </Button>

            {modalState === true && (
                <EditModal
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
