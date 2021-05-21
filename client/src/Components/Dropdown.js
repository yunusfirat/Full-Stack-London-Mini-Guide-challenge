import React from "react";
import { useGlobalContext } from "./Context";

const Dropdown = () => {
    const { setChangeParam } = useGlobalContext();

    const selectHandler = (e) => {
        setChangeParam(e.target.value);
    };

    return (
        <div className="dropdown">
            <hr/>
            <span>choose a city: </span>
            <select onChange={selectHandler}>
                <option>select a city</option>
                <option value="harrow">Harrow</option>
                <option value="stratford">Stratford</option>
                <option value="heathrow">heathrow</option>
            </select>
            <hr />
            </div>
    );
};

export default Dropdown;