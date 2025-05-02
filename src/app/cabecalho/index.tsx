import Link from 'next/link';
import './styles.css';

export default function Cabecalho() {
    return (
        <header className='cabecalho'>
            <img src='/assets/Logo_Cesas.svg' alt="Logo CESAS" className='logo' />
            <nav>
                <ul className='lista-cabecalho'>
                    
                    <li>
                        <Link href="/login">Área do Aluno</Link>
                    </li>
                    <li>
                        <a href="cursos">Cursos</a>
                    </li>
                    <li>
                        <a href="perguntas_respostas">Perguntas e Respostas</a>
                    </li>
                    <li>
                        <Link href="/login">
                            <button className='botao-acessar'>Acessar</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cadastro">
                            <button className='botao-registrar'>Registrar</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}