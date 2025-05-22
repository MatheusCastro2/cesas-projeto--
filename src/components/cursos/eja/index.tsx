import { useState } from "react";
import Etapa1 from '../assets/etapa1.png';
import Etapa2 from '../assets/etapa2.jpg';
import Etapa3 from '../assets/etapa3.jpg';
import '../style.css';
import { Link } from "react-router-dom";

export default function CursoEja() {

    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [cursos] = useState([
        { id: 1, nome: '1a Etapa', descricao: 'Descrição do Curso ', imagem: Etapa1 },
        { id: 2, nome: '2a Etapa', descricao: 'Descrição do Curso ', imagem: Etapa2 },
        { id: 3, nome: '3a Etapa', descricao: 'Descrição do Curso ', imagem: Etapa3 },
    ])

    const cursosFiltrados = cursos.filter(curso =>
        curso.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        curso.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    return (

        <div className="pagina-cursos">


            {/* Barra de Pesquisa */}
            <input className="barra-pesquisa"
                type="text"
                placeholder="Pesquisar cursos..."
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
            />

            <h1 className="texto-de-cursos">Cursos Disponiveis</h1>

            <ul className="lista-cursos">
                {cursosFiltrados.map(curso => (
                    <li key={curso.id}>
                        <img src={curso.imagem} alt="" />
                        <div className="curso-info">
                            <h2>{curso.nome}</h2>
                            <p>{curso.descricao}</p>
                            <Link to={"/cadastro/eja"}>
                                <button className="botao-inscrever">Inscreva-se</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )

}