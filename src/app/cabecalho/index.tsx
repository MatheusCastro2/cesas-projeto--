

'use client'

import Link from 'next/link';
import './styles.css';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import DropdownCoursesMenu from './DropdownCoursesMenu';
import DropdownRegisterMenu from './DropdownRegisterMenu';
import DropdownFaqMenu from './DropdownFaqMenu';
const API_HOST = process.env.API_HOST || 'http://localhost:3000'

export default function Cabecalho() {
    const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
    const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);
    const [faqDropdownOpen, setFaqDropdownOpen] = useState(false);

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-menu">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                    src={'/assets/Logo_Cesas2.jpeg'}
                    alt="Logo CESAS"
                    className="cesas-logo"
                    style={{ width: '200px' }}
                />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link" aria-current="page" href={`${API_HOST}/admin/login`}> Área Administrativa </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="https://moodle.com/pt-br/"> Área do Aluno</a>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cursos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/cursos/eja">EJA</a></li>
                                <li><a className="dropdown-item" href="/cursos/profissionalizante">Profissionalizante</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Perguntas e Respostas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/perguntas_respostas/eja">EJA</a></li>
                                <li><a className="dropdown-item" href="/perguntas_respostas/profissionalizante">Profissionalizante</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle nav-item-custom" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Matricular-se
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/cadastro/eja">EJA</a></li>
                                <li><a className="dropdown-item" href="/cadastro/profissionalizante">Profissionalizante</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</>
    )
}
