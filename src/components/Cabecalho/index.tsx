import Logo from './assets/Logo_Cesas.svg';

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
                        <a href="area_aluno">Área do Aluno</a>
                    </li>
                    <li>
                        <a href="cursos">Cursos</a>
                    </li>
                    <li>
                        <a href="perguntas_respostas">Perguntas e Respostas</a>
                    </li>
                    <li>
                        <button className='botao-acessar'>Acessar</button>
                    </li>
                    <li>
                        <button className='botao-registrar'>Registrar</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}