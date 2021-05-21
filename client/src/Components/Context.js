import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [changeParam, setChangeParam] = useState("");
    const [buttonParam, setButtonParam] = useState("");
    return (
        <AppContext.Provider
        value={{ changeParam, buttonParam, setButtonParam, setChangeParam }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };