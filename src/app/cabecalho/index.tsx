import Link from 'next/link';
import './styles.css';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import Logo from '../../../public/assets/Logo_Cesas.jpeg'
import DropdownCoursesMenu from './DropdownCoursesMenu';
import DropdownRegisterMenu from './DropdownCoursesMenu';

export default function Cabecalho() {
    const [coursesDropdownOpen,setCoursesDropdownOpen] = useState(false);
    const [registerDropdownOpen,setRegisterDropdownOpen] = useState(false);
    return (
        <header className='cabecalho'>
            <Link href="/" onClick={() => setCoursesDropdownOpen(false)}>
                <img src={Logo.src} alt="Logo CESAS" style={{ width: '200px' }} />
            </Link>
            <nav>
                <ul className='lista-cabecalho'>

                    <li>
                        <Link href="/login" onClick={() => setCoursesDropdownOpen(false)}>Área do Aluno</Link>
                    </li>
                    <li className='dropdown-container'>
                        <button className="dropdown-toggle" onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}>Cursos
                            <FiChevronDown />
                        </button>
                        {coursesDropdownOpen && (
                            <DropdownCoursesMenu onClose={() => setCoursesDropdownOpen(false)}/>
                        )}
                    </li>
                    <li>
                        <Link href="/perguntas_respostas" onClick={() => setCoursesDropdownOpen(false)} > Perguntas e Respostas </Link>
                    </li>
                    <li className='dropdown-container'>
                        <button className="botao-registrar" onClick={() => setRegisterDropdownOpen(!registerDropdownOpen)}>Matricular-se
                            <FiChevronDown />
                        </button>
                        {registerDropdownOpen && (
                            <DropdownRegisterMenu onClose={() => setRegisterDropdownOpen(false)}/>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}