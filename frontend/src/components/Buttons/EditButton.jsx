import React, { useContext } from "react";
import EditModal from "../Modal/EditModal";
import { Button } from "@chakra-ui/react";
import { modalContext } from "../../Providers/ModalProvider";

const EditButton = ({ id }) => {
    const { modalState, setModalState } = useContext(modalContext);

    function onClickHandler(id) {
        // onOpen();
        console.log("EDIT BUTTON ID: ", id);
        setModalState("Edit");
    }

    function editModal() {
        return <EditModal id={id} />;
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

            {/* {modalState && modalState === "Edit" && editModal()} */}
        </>
    );
};

export default EditButton;
