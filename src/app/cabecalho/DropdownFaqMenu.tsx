
import Link from 'next/link';

interface Props {
    onClose: () => void;
}
export default function DropdownFaqMenu({onClose} : Props) {
return(
    <div className="dropdown-menu">
        <ul>
            <li>
                <Link href="/perguntas_respostas/eja" onClick={onClose}>EJA </Link>
            </li>
            <li>
                <Link href="/perguntas_respostas/profissionalizante" onClick={onClose}> Profissionalizante </Link>
            </li>
        </ul>
    </div>
)
}

