// import React from 'react';
// import { StudentData } from '.';

import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface Props {

    nextPage: () => void;
}



export default function Step1({ nextPage }: Props) {
    const [formTitle, setFormTitle] = useState<string>("");

    useEffect(() => {
        async function fetchFormTitle() {
            try {
                const response = await fetch('http://localhost:3000/ejaSubmitFormTitle');  // método GET
                const data = await response.json();

                if (data && data.name) {
                    setFormTitle(data.name);
                } else {
                    setFormTitle("Título padrão");
                }
            } catch (error) {
                console.error("Erro ao buscar título do formulário:", error);
                setFormTitle("Erro ao carregar título");
            }
        }

        fetchFormTitle();
    }, []);

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    {/* <h1> quero por o formTitle aqui</h1> */}
                    <h1>{formTitle}</h1> {/* Aqui renderiza a variável */}
                    <br></br>
                    <p className='attention'>ATENÇÃO!</p>
                    <br></br>
                    <p>Para a matrícula na 1ª Etapa ou 2ª Etapa do EJA, Você deve ter no minímo 15 anos completos</p>
                    <br></br>
                    <p>Para a matrícula na 3ª Etapa do EJA, Você deve ter no minímo 18 anos completos</p>
                    {/* <br></br> */}
                    {/* <p>A entrega dos documentos não é obrigatória agora, mas deve ser feita presencialmente no início das aulas</p> */}
                </div>
                {/* <br></br> */}
                <div className="button-container">
                    <button type="button" className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
                </div>
                <div className="register-footer">
                    <a href="../perguntas_respostas/eja" className="signup-link">Saiba Mais Sobre a Matrícula no EJA</a>
                </div>
            </div>
        </div>
    );
}
