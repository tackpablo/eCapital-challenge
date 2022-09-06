import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import EmployeesProvider from "./Providers/EmployeesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <EmployeesProvider>
            <App />
        </EmployeesProvider>
    </ChakraProvider>
);
