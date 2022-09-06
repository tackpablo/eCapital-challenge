import * as React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    Container,
    Center,
    Td,
} from "@chakra-ui/react";

const EmployeeList = ({ employees }) => {
    const employeesColumn = ["First Name", "Last Name", "Salary"];

    const employeesHeader = employeesColumn.map((column, index) => {
        return <Th key={index}>{column}</Th>;
    });

    // const employeeList = employees.map((employeeItem) => {
    //     return (
    //         <Tr key={employeeItem.id}>
    //             <Td>{employeeItem.first_name}</Td>
    //             <Td>{employeeItem.last_name}</Td>
    //             <Td>{employeeItem.salary}</Td>
    //         </Tr>
    //     );
    // });

    return (
        <div>
            <Center>
                <Container
                    borderWidth="1px"
                    borderRadius="lg"
                    maxW="8xl"
                    style={{
                        backgroundColor: "transparent",
                        border: "solid white 2px",
                    }}
                >
                    <TableContainer>
                        <Table
                            size="lg"
                            style={{
                                marginBottom: "1em",
                            }}
                        >
                            <Thead>
                                <Tr>{employeesHeader}</Tr>
                            </Thead>
                            {/* <Tbody>{employeeList}</Tbody> */}
                        </Table>
                    </TableContainer>
                </Container>
            </Center>
        </div>
    );
};

export default EmployeeList;
