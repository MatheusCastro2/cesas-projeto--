import './styles.css'
import Link from 'next/link';

export default function CalendarioEquipe() {
    return(
        <nav>
            <div>
                <ul className='calendario-equipe'>
                    <li>
                        <button>
                            <img src='/assets/icon_agenda.svg' alt="Calendario" />
                            Calendario
                            
                        </button>
                    </li>
                    <li>
                        <Link href="/equipe_pagina">
                        <button>
                            <img src='/assets/icon_equipe.svg' alt="Equipe" />
                                Equipe
                        </button>

                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}