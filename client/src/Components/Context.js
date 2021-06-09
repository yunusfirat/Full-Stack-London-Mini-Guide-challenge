import React, { useContext, useState, useCallback, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [changeParam, setChangeParam] = useState("");
    const [buttonParam, setButtonParam] = useState("");
    const [category, setCategory] = useState([]);
const fetchData = useCallback( async () => {
    if(changeParam && buttonParam){
        const url = `/${changeParam}/${buttonParam}`;
        try {
            fetch(url)
            .then((response) => response.json())
            .then((data) => setCategory(data));
        } catch (error) {
            console.log(error);
        }
    }

},[changeParam,buttonParam]);

useEffect(()=> {
    fetchData();
},[changeParam,buttonParam,fetchData]);

    return (
        <AppContext.Provider
        value={{ setButtonParam, setChangeParam, category }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };