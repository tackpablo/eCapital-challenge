import * as React from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = () => {
    const [employees, setEmployees] = useState();

    return (
        <div>
            <EmployeeListItem />
        </div>
    );
};

export default EmployeeList;
