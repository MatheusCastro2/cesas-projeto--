import Logo from './assets/Logo_Cesas.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Cabecalho() {
    return (
        <header className='cabecalho'>
            <img src={Logo} alt="Logo CESAS" className='logo' />
            <nav>
                <ul className='lista-cabecalho'>
                    <li>
                        <a href="institucional">Institucional</a>
                    </li>
                    <li>
                        <Link to="/login">Área do Aluno</Link>
                    </li>
                    <li>
                        <a href="cursos">Cursos</a>
                    </li>
                    <li>
                        <a href="perguntas_respostas">Perguntas e Respostas</a>
                    </li>
                    <li>
                        <Link to="/login">
                            <button className='botao-acessar'>Acessar</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cadastro">
                            <button className='botao-registrar'>Registrar</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}