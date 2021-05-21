import React from "react";


const Dropdown = () => {
    return (
        <div className="dropdown">
            <hr/>
            <span>choose a city: </span>
            <select>
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