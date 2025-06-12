'use client'

import Link from 'next/link';
import './styles.css';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import DropdownCoursesMenu from './DropdownCoursesMenu';
import DropdownRegisterMenu from './DropdownRegisterMenu';
import DropdownFaqMenu from './DropdownFaqMenu';

export default function Cabecalho() {
    const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
    const [faqDropdownOpen, setFaqDropdownOpen] = useState(false);
    return (
        <header className='cabecalho'>
            <Link href="/" onClick={() => setCoursesDropdownOpen(false)}>
                <img src={'/assets/Logo_Cesas2.jpeg'} alt="Logo CESAS" style={{ width: '200px' }} />
            </Link>
            <nav>
                <ul className='lista-cabecalho'>

                    <li>
                        <a href="http://srv762003.hstgr.cloud:3000/admin/login">
                            Área Administrativa
                        </a>
                    </li>
                    <li>
                        <a href="https://moodle.com/pt-br/">
                            Área do Aluno
                        </a>
                    </li>
                    <li className='dropdown-container'>
                        <button className="dropdown-toggle" onClick={() => {setCoursesDropdownOpen(!coursesDropdownOpen)
                            setFaqDropdownOpen(false);
                            setRegisterDropdownOpen(false);
                        }}>Cursos
                            <FiChevronDown />
                        </button>
                        {coursesDropdownOpen && (
                            <DropdownCoursesMenu onClose={() => setCoursesDropdownOpen(false)} />
                        )}
                    </li>
                    <li className='dropdown-container'>
                        <button className="dropdown-toggle" onClick={() => {setFaqDropdownOpen(!faqDropdownOpen)
                            setCoursesDropdownOpen(false);
                            setRegisterDropdownOpen(false);
                        }}>Perguntas e Respostas
                            <FiChevronDown />
                        </button>
                        {faqDropdownOpen && (
                            <DropdownFaqMenu onClose={() => setFaqDropdownOpen(false)} />
                        )}
                    </li>
                    <li className='dropdown-container'>
                        <button className="botao-registrar" onClick={() => {setRegisterDropdownOpen(!registerDropdownOpen)
                            setCoursesDropdownOpen(false);
                            setFaqDropdownOpen(false);
                        }}>Matricular-se
                            <FiChevronDown />
                        </button>
                        {registerDropdownOpen && (
                            <DropdownRegisterMenu onClose={() => setRegisterDropdownOpen(false)} />
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}