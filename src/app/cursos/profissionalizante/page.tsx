'use client'

import { useEffect, useState } from "react";
import '../style.css';
import Link from 'next/link';
import Cabecalho from "@/app/cabecalho";
import Rodape from "@/app/rodape";

interface Curso {
    id: number;
    name: string;
    description: string;
    image: string;
    start_date: string;
    end_date: string;
}

export default function CursoProfissionalizante() {

    const [cursos, setCursos] = useState<Curso[]>([]);

    useEffect(() => {
        async function fetchCursos() {
            try {
                const response = await fetch("http://localhost:3000/getProfisCursos"); // rota certa aqui
                const data = await response.json();
                setCursos(data);
            } catch (error) {
                console.error("Erro ao buscar cursos:", error);
            }
        }

        fetchCursos();
    }, []);

    // }
    // const [cursos] = useState([
    //     { id: 1, nome: 'Cozinheiro', descricao: 'O curso de Cozinheiro desenvolve competências técnicas e práticas na preparação de alimentos, técnicas de cozinha e segurança alimentar, formando profissionais aptos a atuar em restaurantes, escolas, hospitais e diversos segmentos do setor gastronômico. ', imagem: '/assets/culinaria.png' },
    //     { id: 2, nome: 'Operador de Computador', descricao: 'O curso de Operador de Computador capacita os alunos em habilidades essenciais de informática, abrangendo desde o uso de sistemas operacionais e editores de texto até a navegação segura na internet, promovendo competências indispensáveis para o mercado de trabalho. ', imagem: '/assets/computador.png' },
    //     { id: 3, nome: 'Assistente Administrativo', descricao: 'O curso de Assistente Administrativo qualifica os alunos para desempenhar funções de apoio em setores administrativos, com foco em organização de documentos, atendimento ao público, rotinas de escritório e utilização de ferramentas de gestão. ', imagem: '/assets/assistente.png' },
    // ])

    return (
        <> <Cabecalho />
            <div>
                <br></br>
                <br></br>

                <h1 className="texto-de-cursos">Cursos Ofertados</h1>
                <br></br>
                <br></br>
                <ul className="lista-cursos">
                    {cursos.map(curso => (
                        <li key={curso.id}>
                            <div className="curso-card">
                                <img src={`http://localhost:3000${curso.image}`} alt={curso.name} />
                                <div className="curso-info">
                                    <h2>{curso.name}</h2>
                                    <p>{curso.description}</p>
                                    <br></br>
                                    <p>Data de início: {curso.start_date}</p>
                                    <p>Data de encerramento: {curso.end_date}</p>
                                    <br></br>
                                    <Link href={"/cadastro/profissionalizante"}>
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