// import React from "react";
import { Link } from "react-router-dom";

interface Props {
    onClose: () => void;
}
export default function DropdownCoursesMenu({onClose} : Props) {
return(
    <div className="dropdown-menu">
        <ul>
            <li>
                <Link to="/cadastro/eja" onClick={onClose}>EJA </Link>
            </li>
            <li>
                <Link to="/cadastro/profissionalizante" onClick={onClose}> Profissionalizante </Link>
            </li>
        </ul>
    </div>
)
}

