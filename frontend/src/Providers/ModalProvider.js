import { createContext, useState } from "react";

export const modalContext = createContext();

export default function ModalProvider(props) {
    const [modalState, setModalState] = useState("None");

    const modalData = { modalState, setModalState };

    return (
        <modalContext.Provider value={modalData}>
            {props.children}
        </modalContext.Provider>
    );
}
