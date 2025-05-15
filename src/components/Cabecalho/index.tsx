import Logo from './assets/Logo_Cesas.jpeg';
import { Link } from 'react-router-dom';
import DropdownCoursesMenu from './DropdownCoursesMenu';
import './styles.css';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'

export default function Cabecalho() {
    const [dropdownOpen,setDropdownOpen] = useState(false);
    return (
        <header className='cabecalho'>
            <Link to="/">
                <img src={Logo} alt="Logo CESAS" style={{ width: '200px' }} />
            </Link>
            <nav>
                <ul className='lista-cabecalho'>

                    <li>
                        <Link to="/login">Área do Aluno</Link>
                    </li>
                    <li className='dropdown-container'>
                        <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>Cursos
                            <FiChevronDown />
                        </button>
                        {dropdownOpen && (
                            <DropdownCoursesMenu onClose={() => setDropdownOpen(false)}/>
                        )}
                    </li>
                    <li>
                        <a href="perguntas_respostas">Perguntas e Respostas</a>
                    </li>
                    <li>
                        <Link to="/cadastro">
                            <button className='botao-registrar'>Matricular-se</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}