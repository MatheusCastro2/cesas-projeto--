// import React from 'react';
// import { StudentData } from '.';

interface Props {

    nextPage: () => void;
}

export default function Step1({ nextPage }: Props) {
    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1> Matrícula Online no EJA</h1>
                    <br></br>
                    <p className='attention'>ATENÇÃO!</p>
                    <br></br>
                    <p>Para a matrícula na 1ª Etapa ou 2ª Etapa do EJA, Você deve ter no minímo 15 anos completos</p>
                    <br></br>
                    <p>Para a matrícula na 3ª Etapa do EJA, Você deve ter no minímo 18 anos completos</p>
                </div>
                <br></br>
                <div className="button-container">
                    <button type="button" className="pagination-button" onClick={() => nextPage()}>Prosseguir</button>
                </div>
                <div className="register-footer">
                     <a href="/perguntas_respostas" className="signup-link">Saiba Mais Sobre a Matrícula no EJA</a>
                </div>
            </div>
        </div>
    );
}
