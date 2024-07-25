import { createContext } from "react";

const ContextAPI = createContext();

const APIProvider = ({ children }) => {
    const API = 'http://localhost:9000'

    return <ContextAPI.Provider value={{ API }}>
        {children}
    </ContextAPI.Provider>
}

export { APIProvider, ContextAPI }