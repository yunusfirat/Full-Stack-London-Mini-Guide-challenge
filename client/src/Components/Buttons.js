import React from "react";


const Buttons = () => {
    return (
         <div>
             <ul className="nav nav-pills nav-fill">
                 <li className="nav-item"><button className="nav-link active" value="pharmacies">Pharmacies</button></li>
                 <li className="nav-item"><button className="nav-link" value="colleges"> schools & colleges</button></li>
                 <li className="nav-item"><button className="nav-link" value="hospitals">Hospitals</button></li>
                 <li className="nav-item"><button className="nav-link" value="doctors">Doctors</button></li>
             </ul>
         </div>
    );
};

export default Buttons;