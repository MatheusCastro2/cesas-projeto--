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
                <Link to="/cursos/eja" onClick={onClose}>EJA </Link>
            </li>
            <li>
                <Link to="/cursos/profissionalizante" onClick={onClose}> Profissionalizante </Link>
            </li>
        </ul>
    </div>
)
}

