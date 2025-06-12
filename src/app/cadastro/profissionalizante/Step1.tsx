// import React from 'react';
// import { StudentData } from '.';

import { useEffect, useState } from "react";


interface Props {

    nextPage: () => void;
}

export default function Step1({ nextPage }: Props) {
    const [formTitle, setFormTitle] = useState<string>("");

    useEffect(() => {
        async function fetchFormTitle() {
            try {
                const response = await fetch('http://srv762003.hstgr.cloud:3000/profisSubmitFormTitle');  // método GET
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
                    <h1> {formTitle} </h1>
                    <br></br>
                    <p className='attention'>ATENÇÃO!</p>
                    <br></br>
                    <p>Para a matrícula no Profissionalizante, Você deve ter no minímo 18 anos completos</p>
                    <br></br>
                    <p>Caso você garanta a vaga, a secretaria entrará em contato</p>
                </div>
                <br></br>
                <div className="button-container">
                    <button type="button" className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
                </div>
                <div className="register-footer">
                    <a href="../perguntas_respostas/profissionalizante" className="signup-link">Saiba Mais Sobre a Matrícula no Profissionalizante</a>
                </div>
            </div>
        </div>
    );
}
