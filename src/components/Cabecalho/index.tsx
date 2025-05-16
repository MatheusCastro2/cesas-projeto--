import Logo from './assets/Logo_Cesas.jpeg';
import { Link } from 'react-router-dom';
import DropdownCoursesMenu from './DropdownRegisterMenu';
import DropdownRegisterMenu from './DropdownRegisterMenu';
import './styles.css';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'

export default function Cabecalho() {
    const [coursesDropdownOpen,setCoursesDropdownOpen] = useState(false);
    const [registerDropdownOpen,setRegisterDropdownOpen] = useState(false);
    return (
        <header className='cabecalho'>
            <Link to="/" onClick={() => setCoursesDropdownOpen(false)}>
                <img src={Logo} alt="Logo CESAS" style={{ width: '200px' }} />
            </Link>
            <nav>
                <ul className='lista-cabecalho'>

                    <li>
                        <Link to="/login" onClick={() => setCoursesDropdownOpen(false)}>Área do Aluno</Link>
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
                        <Link to="/perguntas_respostas" onClick={() => setCoursesDropdownOpen(false)} > Perguntas e Respostas </Link>
                    </li>
                    <li className='dropdown-container'>
                        {/* <Link to="/cadastro" onClick={() => setDropdownOpen(false)}>
                            <button className='botao-registrar'>Matricular-se</button>
                        </Link> */}
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