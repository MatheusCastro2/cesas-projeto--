import './styles.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SobrenosEquipe() {
    return (
        <nav>
            <ul className="grid-botoes">
                <li>
                    <Link className="equipe-sobrenos-link" href="/sobre_nos">
                        <img src="/assets/icon_questionmark.svg" alt="Sobre Nós" />
                        Sobre Nós
                    </Link>
                </li>
                <li>
                    <Link className="equipe-sobrenos-link" href="/equipe_pagina">
                        <img src="/assets/icon_equipe.svg" alt="Equipe" />
                        Equipe
                    </Link>
                </li>
            </ul>
        </nav>

    )
}