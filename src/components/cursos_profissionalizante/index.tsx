import { useState } from "react";
import Culiaria from './assets/culinaria.png';
import Computador from './assets/computador.png';
import Assistente from './assets/assistente.png';
import './style.css';

export default function CursoProfissionalizante() {

    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [cursos] = useState([
        { id: 1, nome: 'Cozinheiro-Vespertino', descricao: 'Descrição do Curso ', imagem: Culiaria },
        { id: 2, nome: 'Operador de Computador', descricao: 'Descrição do Curso ', imagem: Computador },
        { id: 3, nome: 'Assistente Administrativo', descricao: 'Descrição do Curso ', imagem: Assistente },
    ])

    const cursosFiltrados = cursos.filter(curso =>
        curso.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        curso.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    return(

        <div>
            

            {/* Barra de Pesquisa */}
            <input className="barra-pesquisa" 
            type = "text"
            placeholder = "Pesquisar cursos..."
            value = {termoPesquisa}
            onChange = {(e) => setTermoPesquisa(e.target.value)}
            />

            <h1 className="texto-de-cursos">Cursos Disponiveis</h1>

            <ul className="lista-cursos">
                {cursosFiltrados.map(curso => (
                    <li key={curso.id}>
                        <img src={curso.imagem} alt="" />
                        <div className="curso-info">
                            <h2>{curso.nome}</h2>
                            <p>{curso.descricao}</p>
                            <button className="botao-inscrever">Inscreva-se</button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>

    )

}