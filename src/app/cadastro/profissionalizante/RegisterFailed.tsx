import React from 'react';
import Link from 'next/link';

export default function RegisterFailed() {
    return (<div className="register-container">
        <div className="register-card">
            <div className="register-header">
                <h1> Matrícula Online no Profissionalizante</h1>
                <br></br>
                <p className='attention'>ERRO!</p>
                <br></br>
                <p>Ocorreu um erro ao enviar o formulário </p>
                <br></br>
                <p>Por favor, tente novamente mais tarde </p>
            </div>
            <div className="button-container">
                <Link href='/'>
                    <button type="button" className="pagination-button">Voltar para a página inicial</button>
                </Link>
            </div>
        </div>
    </div>
    );
}
