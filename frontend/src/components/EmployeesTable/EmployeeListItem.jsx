import React, { useContext } from "react";
import { IconButton, Td, Tr, Tbody } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { employeesContext } from "../../Providers/EmployeesProvider";
import EditModal from "../Modal/EditModal";
import { deleteEmployeeHandler } from "../../helpers/helpers";

const EmployeeListItem = ({ headers }) => {
    const { employees, setEmployees } = useContext(employeesContext);

    const data = employees?.map((datum) => {
        const salaryFormat = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        return (
            <Tr key={datum.id}>
                {headers.map((header, index) => {
                    if (header === "salary") {
                        return (
                            <Td key={index}>
                                {salaryFormat.format(datum["salary"])}
                            </Td>
                        );
                    }
                    return <Td key={index}>{datum[header]}</Td>;
                })}
                <Td>
                    <EditModal id={datum.id} />
                </Td>
                <Td>
                    <IconButton
                        colorScheme="red"
                        size="sm"
                        icon={<DeleteIcon />}
                        onClick={() =>
                            deleteEmployeeHandler(
                                datum.id,
                                employees,
                                setEmployees
                            )
                        }
                    />
                </Td>
            </Tr>
        );
    });

    return <Tbody>{data}</Tbody>;
};

export default EmployeeListItem;
