import './styles.css'
import Link from 'next/link';

export default function CalendarioEquipe() {
    return(
        <nav>
            <div>
                <ul className='calendario-equipe'>
                    <li>
                        <Link className='equipe-sobrenos-link' href={"./sobre_nos"}>
                            <img src='/assets/icon_equipe.svg' alt="Equipe" />
                                Sobre Nós
                        </Link>
                    </li>
                    <li>
                        <Link className='equipe-sobrenos-link' href={"./equipe_pagina"}>
                            <img src='/assets/icon_equipe.svg' alt="Equipe" />
                                Equipe
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}