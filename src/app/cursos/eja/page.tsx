'use client'
import { useState } from "react";
import '../style.css';
import Link from 'next/link';
import Cabecalho from "@/app/cabecalho";
import Rodape from "@/app/rodape";

export default function CursoEja() {

    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [cursos] = useState([
        { id: 1, nome: '1a Etapa', descricao: 'Descrição do Curso ', imagem: '/assets/etapa11.png' },
        { id: 2, nome: '2a Etapa', descricao: 'Descrição do Curso ', imagem: '/assets/etapa22.jpg' },
        { id: 3, nome: '3a Etapa', descricao: 'Descrição do Curso ', imagem: '/assets/etapa33.jpg' },
    ])

    const cursosFiltrados = cursos.filter(curso =>
        curso.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        curso.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    return (
<> <Cabecalho />
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
                            <Link href={"/cadastro/eja"}>
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
        <Rodape/>
</>
    )

}