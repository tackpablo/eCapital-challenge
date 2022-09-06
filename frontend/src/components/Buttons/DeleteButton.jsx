import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const DeleteButton = () => {
    return (
        <>
            <IconButton icon={<DeleteIcon />} />
        </>
    );
};

export default DeleteButton;
