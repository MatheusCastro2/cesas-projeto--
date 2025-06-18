'use client'

import { useEffect, useState } from 'react';
import Cabecalho from '../cabecalho';
import Rodape from '../rodape';
import './styles.css';

interface Pessoa {
    id: number;
    member: string;
    createdAt: string;
    updatedAt: string;
}

interface Equipe {
    director: string,
    vicedirector: string,
    secretary: string
    supervision: Pessoa[],
    coordinators: Pessoa[],
    teaching_staff: Pessoa[]
}

// interface Supervisao {
//     supervisao: string[],
// }

// interface Coordenadores {
//     coordenadores: string[],
// }

// interface EquipeDocente {
//     equipe_docente: string[]
// }

export default function Equipe_Pagina() {
    const [equipe, setEquipe] = useState<Equipe>();

    useEffect(() => {
        async function fetchEquipe() {
            try {
                const response = await fetch("http://localhost:3000/getEquipe"); // rota certa aqui
                const data = await response.json();
                const equipeFormatada: Equipe = {
                    director: data.staff[0]?.director || "",
                    vicedirector: data.staff[0]?.vicedirector || "",
                    secretary: data.staff[0]?.secretary || "",
                    supervision: data.supervision || [],
                    coordinators: data.coordinators || [],
                    teaching_staff: data.teaching_staff || [],
                };
                setEquipe(equipeFormatada);
            } catch (error) {
                console.error("Erro ao buscar cursos:", error);
            }
        }

        fetchEquipe();
    }, []);

    return (
        <> <Cabecalho />
            <article className="equipe-pagina">
                <div>
                    <section className="principais">
                        <h2>Diretor: {equipe?.director}</h2>
                        <br></br>
                        <br></br>
                        <h2>Vice Diretor: {equipe?.vicedirector}</h2>
                        <br></br>
                        <br></br>
                        <h2>Secretário: {equipe?.secretary}</h2>
                        <br></br>
                        <br></br>
                        <h2>Supervisão:</h2>
                        <ul>
                            {equipe?.supervision.map((person, index) => (
                                <li key={index}>{person.member}</li>
                            ))}
                        </ul>
                    </section>
                    <br></br>
                    <br></br>
                    <section className="coordenadores">
                        <h2>Coordenadores</h2>
                        <ul>
                            {equipe?.coordinators.map((person, index) => (
                                <li key={index}>{person.member}</li>
                            ))}
                        </ul>
                    </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <section className="equipe-docente">
                        <h2>Equipe Docente</h2>
                        <ul>
                            {equipe?.teaching_staff.map((person, index) => (
                                <li key={index}>{person.member}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </article>
            <Rodape />
        </>
    );
}

