import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const DeleteButton = ({ onDelete }) => {
    return (
        <>
            <IconButton
                colorScheme="red"
                size="sm"
                icon={<DeleteIcon />}
                onClick={onDelete}
            />
        </>
    );
};

export default DeleteButton;
