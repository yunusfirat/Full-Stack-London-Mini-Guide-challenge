import React from "react";
import { useGlobalContext } from "./Context";

const Buttons = () => {
    const { setButtonParam } = useGlobalContext();

    const clickHandler = (e) => {
        setButtonParam(e.target.value);
    };
    return (
         <div>
             <ul className="nav nav-pills nav-fill">
                 <li className="nav-item"><button onClick={clickHandler} className="nav-link" value="pharmacies">Pharmacies</button></li>
                 <li className="nav-item"><button onClick={clickHandler} className="nav-link" value="colleges"> schools & colleges</button></li>
                 <li className="nav-item"><button onClick={clickHandler} className="nav-link" value="hospitals">Hospitals</button></li>
                 <li className="nav-item"><button onClick={clickHandler} className="nav-link" value="doctors">Doctors</button></li>
             </ul>
         </div>
    );
};

export default Buttons;