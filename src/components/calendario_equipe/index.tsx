import Equipe from './assets/icon_equipe.svg';
import Calendario from './assets/icon_agenda.svg';

import './styles.css'



export default function CalendarioEquipe() {
    return(
        <nav>
            <div>
                <ul className='calendario-equipe'>
                    <li>
                        <button>
                            <img src={Calendario} alt="Calendario" />
                            Calendario
                        </button>
                    </li>
                    <li>
                        <button>
                            <img src={Equipe} alt="Equipe" />
                            Equipe
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}