'use client'

import { useState } from "react";
import '../style.css';
import Link from 'next/link';
import Cabecalho from "@/app/cabecalho";
import Rodape from "@/app/rodape";

export default function CursoProfissionalizante() {

    const [termoPesquisa, setTermoPesquisa] = useState('');
    const [cursos] = useState([
        { id: 1, nome: 'Cozinheiro-Vespertino', descricao: 'Descrição do Curso ', imagem: '/assets/culinaria.png' },
        { id: 2, nome: 'Operador de Computador', descricao: 'Descrição do Curso ', imagem: '/assets/computador.png' },
        { id: 3, nome: 'Assistente Administrativo', descricao: 'Descrição do Curso ', imagem: '/assets/assistente.png' },
    ])

    const cursosFiltrados = cursos.filter(curso =>
        curso.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        curso.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
    );

    return (
<> <Cabecalho/>
        <div>


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
                            <Link href={"/cadastro/profissionalizante"}>
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