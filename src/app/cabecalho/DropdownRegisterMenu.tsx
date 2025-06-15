
import Link from 'next/link';

interface Props {
    onClose: () => void;
}
export default function DropdownRegisterMenu({onClose} : Props) {
return(
    <div className="cesas-dropdown-menu">
        <ul>
            <li>
                <Link href="/cadastro/eja" onClick={onClose}>EJA </Link>
            </li>
            <li>
                <Link href="/cadastro/profissionalizante" onClick={onClose}> Profissionalizante </Link>
            </li>
        </ul>
    </div>
)
}

