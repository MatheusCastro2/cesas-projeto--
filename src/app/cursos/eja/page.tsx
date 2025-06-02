'use client'
import { useState } from "react";
import '../style.css';
import Link from 'next/link';
import Cabecalho from "@/app/cabecalho";
import Rodape from "@/app/rodape";

export default function CursoEja() {

    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [cursos] = useState([
        { id: 1, nome: '1a Etapa', descricao: 'Na Primeira Etapa da EJA, oferecemos a base essencial da educação, com foco na alfabetização, letramento e desenvolvimento das competências fundamentais em leitura, escrita e matemática, proporcionando autonomia e inclusão social. ', imagem: '/assets/etapa11.png' },
        { id: 2, nome: '2a Etapa', descricao: 'A Segunda Etapa amplia os conhecimentos adquiridos, aprofundando conteúdos das disciplinas básicas e preparando os estudantes para o ingresso no Ensino Médio, com uma proposta pedagógica adaptada à realidade dos jovens e adultos. ', imagem: '/assets/etapa22.jpg' },
        { id: 3, nome: '3a Etapa', descricao: 'Na Terceira Etapa, os estudantes consolidam conhecimentos em diversas áreas, como Linguagens, Ciências da Natureza, Matemática e Ciências Humanas, habilitando-se para a continuidade dos estudos no ensino superior ou ingresso qualificado no mercado de trabalho.', imagem: '/assets/etapa33.jpg' },
    ])

    return (
        <> <Cabecalho />
            <div className="pagina-cursos">




                <br></br>
                <br></br>
                <h1 className="texto-de-cursos">Cursos Disponiveis</h1>
                <br></br>
                <br></br>
                <ul className="lista-cursos">
                    {cursos.map(curso => (
                        <li key={curso.id}>
                            <div className="curso-card">
                                <img src={curso.imagem} alt={curso.nome} />
                                <div className="curso-info">
                                    <h2>{curso.nome}</h2>
                                    <p>{curso.descricao}</p>
                                    <br></br>
                                    <Link href={"/cadastro/eja"}>
                                        <button className="botao-inscrever">Inscreva-se</button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Rodape />
        </>
    )

}