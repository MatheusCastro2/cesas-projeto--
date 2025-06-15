
import Link from 'next/link';

interface Props {
    onClose: () => void;
}
export default function DropdownCoursesMenu({onClose} : Props) {
return(
    <div className="cesas-dropdown-menu">
        <ul>
            <li>
                <Link href="/cursos/eja" onClick={onClose}>EJA </Link>
            </li>
            <li>
                <Link href="/cursos/profissionalizante" onClick={onClose}> Profissionalizante </Link>
            </li>
        </ul>
    </div>
)
}

