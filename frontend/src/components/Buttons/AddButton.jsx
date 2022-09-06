import * as React from "react";
import { Button } from "@chakra-ui/react";

const AddButton = ({ id, employees, setEmployees }) => {
    return (
        <>
            <Button colorScheme="teal" size="sm">
                New
            </Button>
        </>
    );
};

export default AddButton;
