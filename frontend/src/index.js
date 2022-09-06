import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import EmployeesProvider from "./Providers/EmployeesProvider";
import ModalProvider from "./Providers/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <EmployeesProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </EmployeesProvider>
    </ChakraProvider>
);
