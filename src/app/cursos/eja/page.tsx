'use client'
import { useEffect, useState } from "react";
import '../style.css';
import Link from 'next/link';
import Cabecalho from "@/app/cabecalho";
import Rodape from "@/app/rodape";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3000'

interface Curso {
    id: number;
    name: string;
    description: string;
    image: string;
}

export default function CursoEja() {

    const [cursos, setCursos] = useState<Curso[]>([]);
    
        useEffect(() => {
            async function fetchCursos() {
                try {
                    const response = await fetch(`${API_HOST}/getEJACursos`); // rota certa aqui
                    const data = await response.json();
                    setCursos(data);
                } catch (error) {
                    console.error("Erro ao buscar cursos:", error);
                }
            }
    
            fetchCursos();
        }, []);

    // const [termoPesquisa, setTermoPesquisa] = useState('');
    // const [cursos] = useState([
    //     { id: 1, nome: '1ª Etapa', descricao: 'Na Primeira Etapa da EJA, oferecemos a base essencial da educação, com foco na alfabetização, letramento e desenvolvimento das competências fundamentais em leitura, escrita e matemática, proporcionando autonomia e inclusão social. ', imagem: '/assets/etapa11.png' },
    //     { id: 2, nome: '2ª Etapa', descricao: 'A Segunda Etapa amplia os conhecimentos adquiridos, aprofundando conteúdos das disciplinas básicas e preparando os estudantes para o ingresso no Ensino Médio, com uma proposta pedagógica adaptada à realidade dos jovens e adultos. ', imagem: '/assets/etapa22.jpg' },
    //     { id: 3, nome: '3ª Etapa', descricao: 'Na Terceira Etapa, os estudantes consolidam conhecimentos em diversas áreas, como Linguagens, Ciências da Natureza, Matemática e Ciências Humanas, habilitando-se para a continuidade dos estudos no ensino superior ou ingresso qualificado no mercado de trabalho.', imagem: '/assets/etapa33.jpg' },
    // ])

    return (
        <> <Cabecalho />
            <div className="pagina-cursos">
                <br></br>
                <br></br>
                <h1 className="texto-de-cursos">Cursos Ofertados</h1>
                <br></br>
                <br></br>
                <ul className="lista-cursos">
                    {cursos.map(curso => (
                        <li key={curso.id}>
                            <div className="curso-card">
                                <img src={`${API_HOST}${curso.image}`} alt={curso.name} />
                                <div className="curso-info">
                                    <h2>{curso.name}</h2>
                                    <br></br>
                                    <p>{curso.description}</p>
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