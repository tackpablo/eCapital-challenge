import * as React from "react";
import { Button } from "@chakra-ui/react";

const EditButton = ({ onEdit }) => {
    return (
        <>
            <Button colorScheme="teal" size="sm" onClick={onEdit}>
                Edit
            </Button>
        </>
    );
};

export default EditButton;
